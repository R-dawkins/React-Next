import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Home() {
  const code = "KOR"
  const router = useRouter()
  const onClickButton = ()=>{
    router.push("/search") // 페이지 이동
    // router.push({ 객체도 가능
    // pathname:"country/[code]",
    //  query:{code:code}
    // })
    // router.replace 뒤로가기 방지
    // router.back 뒤로가기
    // router.reload 새로고침
  }
  return (
<div>Home Page
  <div>
    <button onClick={onClickButton}>
      Search 페이지로 이동
    </button>
  </div>
  <div>
    <Link href={"/search"}>Search Page로 이동</Link>
  </div>
  <div>
    <Link href={`/country/${code}`}>{code}로 이동</Link> {/* 방법 1 */}
    <Link href={{ /* 방법 2 */
      pathname:"country/[code]",
      query:{code:code}
    }}>{code}로 이동</Link>
  </div>
</div>

  );
}
