import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>내 첫 Next 프로젝트</h1>
      <Link href="/posts">포스트 목록 페이지로 이동하기</Link>
    </main>
  );
}
