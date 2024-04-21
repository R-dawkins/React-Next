import { useRef, useState } from "react";
import "./TodoEditor.css";
export default function TodoEditor({ onCreate }) {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onClick = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // onKeyDown 이벤트 핸들러는 키보드가 눌릴 때의 이벤트를 핸들링하는 메소드이다.
      // event 객체에 현재 누르고 있는 키보드의 키가 숫자형식으로 입력된다 여기서 13은 enter를 뜻한다.
      onClick();
    }
  };
  return (
    <div className="TodoEditor">
      <input
        type="text"
        ref={inputRef}
        placeholder="새로운 Todo ..."
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        value={content}
      />
      <button onClick={onClick}>추가</button>
    </div>
  );
}
