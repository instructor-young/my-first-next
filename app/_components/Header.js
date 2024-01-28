import Link from "next/link";

function Header() {
  return (
    <header className="border-b h-14 flex items-center px-5 gap-x-8">
      <span className="font-bold text-lg">
        <Link href="/">나의 첫 Next 프로젝트</Link>
      </span>
      <nav>
        <ul className="flex gap-x-4 text-sm font-medium">
          <li>
            <Link href="/posts">포스트 목록</Link>
          </li>
          <li>
            <Link href="/translator">번역기</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
