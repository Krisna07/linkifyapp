import Image from "next/image";
import { Inter } from "next/font/google";
import Sidenav from "./components/sidenav";
import Dashboard from "./dashboard/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main><Dashboard/></main>;
}
