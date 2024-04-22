import { createContext } from "react";

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

// TodoContext.Provider : 어떤 컴포넌트에 데이터를 전달할지 결정하는 용도로 사용되는 컴포넌트
// context를 사용할 때 최적화 주의사항 : 변경되는 값 (State) 변경되지 않는 값(함수 Dispatch)를 구분하여야 한다.
