import { useNavigate } from "react-router-dom";
import style from "./Layout.module.css";
export default function Layout({ children }) {
  const nav = useNavigate();
  const onClickHeader = () => {
    nav("/");
  };
  return (
    <div>
      <header className={style.header}>
        <div onClick={onClickHeader}>🌏 NARAS</div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
