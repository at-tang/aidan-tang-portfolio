import "@/styles/globals.css";
import Header from "@/components/header";
import Head from "next/head";
import Logo from '../images/icons/aidan-tang-icon-bg.jpg'

export default function App({ Component, pageProps }) {
  return (
    
    <main className="dark:bg-black bg-white">

      <Header/>
      <Component {...pageProps} />

      <div className="z-50 w-screen h-screen bg-black bg-opacity-50 fixed top-0 left-0 invisible">
        
      </div>
    </main>
  )
  ;
}
