import { memo } from "react";
import "./TodoItem.css";
function TodoItem({ id, isDone, content, createdDate, onUpdate, onDelete }) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(createdDate).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}

export default memo(TodoItem);
// TodoItem이 memo되지 않는 이유 ? : TodoItem이 props로 받고 있는 onDelete, onUpdate 함수는 참조 자료형이다
// 따라서 App컴포넌트가 리렌더링 될 때 마다 각 함수들은 새롭게 생성되며 새로운 참조 주소값을 가지게 되고 (원시 자료형은 새롭게 생성되지 않고 그대로)
// 그렇기 때문에 memo메서드는 onDelete와 onUpdate 함수가 바뀌었다고 인식하게 되어 각 TodoItem 컴포넌트들 또한 리렌더링 된다.
// useCallback으로 함수의 재생성을 방지할 수 있다.
