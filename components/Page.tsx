import Footer from "@components/Footer";
import { Nav } from "@components/Nav";
import Head from "next/head";
import styles from "./Page.module.css";

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
      <div className={styles["page-wrapper"]}>{props.children}</div>
      <Footer />
    </div>
  );
}
