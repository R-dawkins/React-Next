import "./Body.css";
import { useRef, useState } from "react";

export default function Body() {
  const [state, setState] = useState({ name: "", gender: "", bio: "" });
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value }); // [e.target.name] : 계산된 프로퍼티라는 자바스크리트의 문법
  };
  const onSubmit = () => {
    console.log(state);
    if (state.name === "") {
      nameRef.current.focus();
      return;
    }
    alert(`${state.name}님 회원가입을 축하드립니다.`);
  };
  const nameRef = useRef();
  return (
    <div className="body">
      <div>
        <input
          type="text"
          ref={nameRef}
          onChange={onChange}
          value={state.name}
          name="name"
        />
      </div>
      <div>
        <select value={state.gender} onChange={onChange} name="gender">
          <option value="">밝히지 않음</option>
          <option value="female">여성</option>
          <option value="male">남성</option>
        </select>
      </div>
      <div>
        <textarea
          name="bio"
          value={state.bio}
          onChange={onChange}
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <button onClick={onSubmit}>회원가입</button>
      </div>
    </div>
  );
}

// export default function Body() {
// const number = 10;
// const user = {
//   name: "이정환",
//   isLogin: true,
// };

// 조건부 렌더링
// 방법 1 삼항연산자 : <>{user.isLogin ? <div>마이페이지 로그아웃</div> : <div>로그인</div>}</>
// 방법 2 if문
// if (user.isLogin) {
//   return <div>마이페이지, 로그아웃</div>;
// } else {
//   return <div>로그인</div>;
// }

// return (
// <>{user.isLogin ? <div>마이페이지 로그아웃</div> : <div>로그인</div>}</>
// );
// }
