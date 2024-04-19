import "./Body.css";
import Button from "./Button";

function ButtonChild() {
  return <div>버튼</div>;
}

export default function Body() {
  const btnProps = {
    text: "1번 버튼",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <div className="body">
      <h1>body</h1>
      <Button {...btnProps}>
        {/* 전개 연산자를 활용한 프롭스 객체 전달 */}
        <ButtonChild></ButtonChild>
        {/* children 전달 */}
      </Button>
      <Button text={"2번 버튼"} color={"green"} />
      <Button text={"3번 버튼"} color={"blue"} />
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
