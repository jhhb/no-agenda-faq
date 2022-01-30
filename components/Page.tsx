import Footer from "@components/Footer";
import { Nav } from "@components/Nav";
import Head from "next/head";

interface PageProps {
  title: string;
  children: JSX.Element;
}

export function Page(props: PageProps) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
}
