import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../api.js";
import SearchBar from "../components/SearchBar.jsx";
import CountryList from "../components/CountryList.jsx";
import style from "./Search.module.css";
export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const q = searchParams.get("q");
  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };
  useEffect(() => {
    setInitData();
  }, [q]);
  return (
    <div className={style.container}>
      <SearchBar q={q} />
      <div>
        <b>{q} 검색결과</b>
      </div>
      <CountryList countries={countries} />
    </div>
  );
}
