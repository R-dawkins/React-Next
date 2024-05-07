import { fetchSearchResults } from "@/api";
import CountryList from "@/components/CountryList";
import SearchBar from "@/components/SearchBar";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
export default function Search() {
  // query string은 SSG 방식으로 사용하기 쉽지 않기 때문에 SSG 방식을 사용하려면 서버에서 받는게 아니라 클라이언트에서 받게 한다.
  // 클라이언트 사이드에서 API 요청을 하여 받게 하여 CSR방식을 섞어 사용한다.
  const router = useRouter();
  const { q } = router.query;

  const [countries, setCountries] = useState([]);

  const setData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    if (q) {
      setData();
    }
  }, [q]);
  return (
    <>
      <Head>
        <title>NARAS 검색 결과</title>
        <meta property="og:image" content="/thumnail.png"></meta>
        <meta property="og:title" content="NARAS 검색 결과"></meta>
        <meta
          property="og:description"
          content="전 세계 국가들의 정보를 확인해 보세요"
        ></meta>
      </Head>
      <SearchBar q={q} />
      <CountryList countries={countries} />
    </>
  );
}

Search.Layout = SubLayout;
