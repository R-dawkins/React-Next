import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
// [code].js : Dynamic Routing 동적 라우팅
// [[code]].js : Optional Routing 선택적 라우팅
// [...code].js : Catch All Routing
// [[...code]].js : Optinal Catch All Routing
// 파일 명이 [[...code]].js 일때 대괄호 안에 대괄호가 있는 것은 안쪽 대괄호에 있는 것이 선택적으로 존재한다는 것을 뜻하고,
// ...code의 ...은 catch all router를 뜻하며 모든 경로를 대응한다는 뜻이다
export default function Country({ country }) {
  const router = useRouter();
  const { code } = router.query;
  // 서버를 거칠 필요가 없이 클라이언트 측에서 사용할 데이터면 react hooks를 사용하면 된다.
  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;

export const getServerSideProps = async (context) => {
  const { code } = context.params;
  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }
  return {
    props: { country },
  };
};
