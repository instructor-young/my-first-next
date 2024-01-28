import Header from "./_components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="px-5 py-6">{children}</main>
      </body>
    </html>
  );
}
