import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const DynamicMyTestComponent = dynamic(() => import('@/components/myUniver'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

export default function Home() {
  return <DynamicMyTestComponent />;
}
