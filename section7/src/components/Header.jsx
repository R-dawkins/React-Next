import "./Header.css";
import { memo } from "react";
function Header() {
  return (
    <div className="Header">
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

const OptimizedHeaderComponent = memo(Header);
// memo : 인수로 컴포넌트를 받아 최적화 하여 새로운 컴포넌트로 반환
// 최적화의 기준? 제공받는 프롭스가 변경되지 않으면  부모가 리렌더되더라도 자기 자신은 리렌더링 되지 않는다.
export default OptimizedHeaderComponent;

// export default memo(Header)
// 이와 같이 변수에 담을 필요 없이 단축하여 사용 가능
