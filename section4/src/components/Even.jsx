import { useEffect } from "react";

export default function Even() {
  useEffect(() => {
    return () => {
      console.log("Unmount");
      // 언마운트 시 실행
      // 콜백함수가 재 실행될 때 실행되지만 의존성 배열에 아무것도 넣지 않았기 때문에 콜백함수가 재실행되는 경우는 존재하지 않는다.
    };
  }, []);
  return <div>짝수입니다</div>;
}
