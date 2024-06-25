import Image from "next/image";
import { Inter } from "next/font/google";
import section1Background from '../images/photos/landscape.jpeg'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
        <div className="w-screen h-[36rem] bg-[url('../images/photos/landscape.jpeg')] bg-cover bg-center brightness-75 "/>
      
    </main>
  );
}
