import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import style from "./[code].module.css";
import Image from "next/image";
import Head from "next/head";
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
  if (router.isFallback) {
    //현재 fallback 상태인지 아닌지를 True False로 반환한다.
    return (
      <>
        <Head>
          <title>NARAS</title>
          <meta property="og:image" content="/thumnail.png"></meta>
          <meta property="og:title" content="NARAS"></meta>
          <meta
            property="og:description"
            content="전 세계 국가들의 정보를 확인해 보세요"
          ></meta>
        </Head>
        <div>Loading...</div>
      </>
    );
  }
  if (!country) {
    return <div>존재하지 않는 국가입니다.</div>;
  }
  return (
    <>
      <Head>
        <title>{country.commonName} 국가 정보 조회 | NARAS</title>
        <meta property="og:image" content={country.flagImg}></meta>
        <meta
          property="og:title"
          content={`${country.commonName} 국가 정보 조회 | NARAS`}
        ></meta>
        <meta
          property="og:description"
          content={`${country.commonName} 국가의 자세한 정보입니다.`}
        ></meta>
      </Head>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.commonName}>
            {country.flagEmoji}&nbsp;{country.commonName}
          </div>
          <div className={style.officialName}>{country.officialName}</div>
        </div>
        <div className={style.flag_img}>
          <Image src={country.flagImg} fill alt="flag image" />
        </div>
        <div className={style.body}>
          <div>
            <b>코드 :</b>&nbsp;{country.code}
          </div>
          <div>
            <b>수도 :</b>&nbsp;{country.capital.join(", ")}
          </div>
          <div>
            <b>지역 :</b>&nbsp;{country.region}
          </div>
          <div>
            <b>지도 :</b>&nbsp;
            <a target="_black" href={country.googleMapURL}>
              {country.googleMapURL}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

Country.Layout = SubLayout;
export const getStaticPaths = () => {
  // 동적 경로인 정적 페이지 생성시 미리 생성해둘 경로를 설정하는 메서드
  // 빌드타임에 미리 html파일을 생성하여 넘겨주는 SSG 특성 상 미리 경로를 설정해두지 않으면 동적 경로를 사용할 수 없다
  return {
    paths: [{ params: { code: "ABW" } }, { params: { code: "KOR" } }],
    fallback: true,
    //fallback 옵션 : 지정된 경로가 아닐 시 대신 출력할 것들
    // 옵션 1) false : 404 오류 페이지 출력
    // 옵션 2) "blocking" : 요청 받자마자 생성하여 브라우저에 반환
    // 옵션 3) true : props가 없는 버전의 html 파일 생성 후 빠르게 props 계산하여 출력 (선 html 후 js연결과 비슷한 느낌)
  };
};
export const getStaticProps = async (context) => {
  const { code } = context.params;
  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }
  return {
    props: { country },
    revalidate: 3,
    // ISR 방식을 사용하기 위한 키워드, 3초마다 재생성한다.
    //ISR : ISR 방식이란 증분 정적 재생성을 뜻하며, SSG를 활용한 빌드시 html 생성과 SSR과 같이 빠른 업데이트 반영을 혼용하여 렌더링하는 방법이다.
    // 빌드시에 html 파일을 생성하고 revalidate : 시간(초)를 지정하여 지정한 시간 마다 파일이 최신 버전으로 재생성된다.
  };
};
