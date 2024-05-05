import { fetchSearchResults } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
    console.log(q);
    if (q) {
      setData();
    }
  }, [q]);
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

Search.Layout = SubLayout;
