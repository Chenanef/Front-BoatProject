import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (

    //maquette de base 
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src="../logoTBP.png" width={150} height={60} />
        </div>
        <nav>
          <div className="Text">
            <Link href="/">Home </Link>
            <Link href="/about">About </Link>
            <Link href="/course">Journal de Bord </Link>
            {/* <Link href="/chat">Messagerie </Link> */}
            <Link href="/carte">Carte</Link>
            {/* <Link href="/carte">Carte</Link> */}
          </div>
        </nav>
      </div >
      <div className="Body">
      <Component {...pageProps} />
      </div>
      <div className="footer">
      <h1>Footer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit </p>
      </div>
    </div>
  );
}
