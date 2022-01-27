import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Callout } from "@blueprintjs/core";

export interface HomePageProps {}

export default function Home(props: HomePageProps) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      {Faq()}
      <Footer />
    </div>
  );
}

function Faq() {
  return <Callout title="SUp" />;
}
