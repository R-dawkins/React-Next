import { useState, useEffect } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useRef } from "react";
import Even from "./components/Even";
import useUpdate from "./hooks/useUpdate";
import useInput from "./hooks/useInput";

// component의 lifecycle
// 1. 마운트 (탄생)
// useEffect(()=>{},[])
// 2. 업데이트 (변화, 리렌더)
// useEffect(()=>{}) 의존성 배열 없이 코드 작성시 모든 리렌더링 상황 발생 시 내부 콜백 실행
// 최초 마운트시 useEffect 실행하지 않는 법 (업데이트 시에만 콜백 실행하는 방법)
/* const isMountRef = useRef(false);
  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    console.log("update");
  }); */
// 3. 언마운트 (죽음)
/* 
  useEffect(()=>{

  })
*/
// -------------------
function App() {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput();
  useUpdate(() => {
    console.log("App 컴포넌트 업데이트");
  });
  useEffect(() => {
    // LifeCycle "마운트"시
    console.log("Mount");
  }, []);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={text} onChange={onChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
