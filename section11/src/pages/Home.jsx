import { useEffect, useState } from "react";
import { fetchCountries } from "../api.js";
import CountryList from "../components/CountryList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import style from "./Home.module.css";
export default function Home() {
  const [countries, setCountries] = useState([]);
  const setInitData = async () => {
    const data = await fetchCountries();
    setCountries(data);
  };
  useEffect(() => {
    setInitData();
  }, []);
  return (
    <div className={style.container}>
      <SearchBar />
      <CountryList countries={countries} />
    </div>
  );
}
