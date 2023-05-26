import Head from "next/head";
import { Inter } from "next/font/google";
import Home from "@/components/organisms/Home/Home.component";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Homes() {
  return (
    <>
      <Head>
        <title>Spagnolo Carlos Andres</title>
        <meta name="author" content="Spagnolo Carlos Andres" />
        <meta
          name="description"
          content="Portfolio web of Spagnolo Carlos Andres"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-772BY1J49F');
        `}
      </Script>
      <main className={`${inter.className}`} style={{ overflowX: "hidden" }}>
        <Home />
      </main>
    </>
  );
}
