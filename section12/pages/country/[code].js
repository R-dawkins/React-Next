import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
// [code].js : Dynamic Routing 동적 라우팅
// [[code]].js : Optional Routing 선택적 라우팅
// [...code].js : Catch All Routing
// [[...code]].js : Optinal Catch All Routing
// 파일 명이 [[...code]].js 일때 대괄호 안에 대괄호가 있는 것은 안쪽 대괄호에 있는 것이 선택적으로 존재한다는 것을 뜻하고,
// ...code의 ...은 catch all router를 뜻하며 모든 경로를 대응한다는 뜻이다
export default function Country() {
  const router = useRouter();
  const { code } = router.query;
  return <div>Country {code}</div>;
}

Country.Layout = SubLayout;
