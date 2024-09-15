import { HomePage } from "@/components/views/home";

import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>LG Therma V</title>
        <link
          rel="shortcut icon"
          href="/images/webLogo.png"
          type="image/x-icon"
        />
      </Head>
      <HomePage />
    </main>
  );
}
