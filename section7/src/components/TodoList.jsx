import { useState, useMemo } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
export default function TodoList({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterTodos = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter(
      (todo) => todo.content.toLowerCase().includes(search.toLowerCase())
      // toLowerCase로 대소문자 구별 없이 검색
    );
  };

  const getAnalyzedTodoData = () => {
    console.log("todo 분석 함수 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("todo 분석 함수 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // useMemo : 첫번째 인수로 콜백함수, 두번째 인수로 의존성 배열 사용
  //
  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <div>
        <div>전체 투두 : {totalCount}</div>
        <div>완료 투두 : {doneCount}</div>
        <div>미완 투두 : {notDoneCount}</div>
      </div>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filterTodos().map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
