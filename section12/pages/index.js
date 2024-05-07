import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList";
import SearchBar from "@/components/SearchBar";
import { useEffect } from "react";
import Head from "next/head";
export default function Home({ countries }) {
  //console.log("home"); // SSR을 위해 서버에서 HOME 컴포넌트가 한번 실행 되고 나서 브라우저에서 실행되기 때문에 2번 실행된다.
  // 마찬가지로 서버에서 한번 실행되기 때문에 window 객체와 같이 Node 환경에 존재하지 않는 객체들을 사용하려고 하면 오류가 발생한다.
  // window.location --> 오류 발생
  useEffect(() => {
    // 컴포넌트가 마운트 될 때만 일어나는 useEffect 같은 경우에는
    // 서버에서 실행되지 않고 실제 마운트가 될 때에만 일어난다.
  }, []);
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
      <SearchBar />
      <CountryList countries={countries} />
    </>
  );
}

export const getStaticProps = async () => {
  // SSR 방식으로 동작하게 하는 메소드
  // SSR을 위해 서버측에서 (여기서는 Home)컴포넌트에게 전달할 데이터(주로 props)를 설정하는 함수
  // 반드시 객체를 반환해야한다
  // 이 함수에서 실행되는 함수나 코드들은 브라우저에서 확인할 수 없다 왜냐하면 서버에서 실행되었기 때문이다
  //console.log("getServerSideProps Called"); // 서버 터미널에서만 확인 가능, 브라우저에서는 확인 불가능

  const countries = await fetchCountries();
  return {
    props: {
      countries,
    },
  };
};
