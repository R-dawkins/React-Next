import { useReducer, useRef, useCallback, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { TodoStateContext, TodoDispatchContext } from "./TodoContext";
// useCallback : 원하는 함수를 useCallback(함수,[])와 같은 방법으로 넣어서 사용한다.
// 의존성 배열에 아무것도 넣지 않으면 함수가 첫 렌더링 이후에 재생성되지 않는다.
const mockData = [
  {
    id: 0,
    isDone: true,
    content: "리액트 배우기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "음악 연습하기",
    createdDate: new Date().getTime(),
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.data ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.data);
    }
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    dispatch({
      type: "CREATE",
      data: newTodo,
    });
    // setTodos([...todos, newTodo]);
  };
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );
  }, []);
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      data: targetId,
    });
    // setTodos(todos.filter((todo) => todo.id !== targetId));
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
