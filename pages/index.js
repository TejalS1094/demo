import Image from "next/image";
import { Nunito } from "next/font/google";
import SimpleHeader from "@/components/header";
import Layout1 from "@/Layouts/layout-one";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return <Layout1></Layout1>;
}
