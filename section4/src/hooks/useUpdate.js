import { useEffect,useRef } from 'react';
export default function useUpdate (cb) {
  const isMountRef = useRef(false);
  useEffect(() => {
    // LifeCycle "업데이트"시
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    cb();
  });
}