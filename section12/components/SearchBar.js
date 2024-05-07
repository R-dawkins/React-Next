import { useRouter } from "next/router";
import style from "./SearchBar.module.css";
import { useEffect, useState } from "react";
export default function SearchBar({ q }) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  useEffect(() => {
    setSearch(q);
  }, [q]);
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const onClickSearch = () => {
    if (search !== "") {
      router.push(`/search?q=${search}`);
    }
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };
  return (
    <div className={style.container}>
      <input
        placeholder="검색어를 입력하세요..."
        type="text"
        value={search || ""}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
}
