import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-6 ${inter.className}`}
    >
      <div className={`flex flex-col w-full h-screen overflow-auto`}>
        Main page layout
        <Script type="module" src="/scripts/mytest.js" />
      </div>
    </main>
  );
}
