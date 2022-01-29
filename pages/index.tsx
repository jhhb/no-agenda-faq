import { Sidebar, WithSidebar } from "@components/Sidebar";
import Head from "next/head";
import { Nav } from "@components/Nav";
import Footer from "@components/Footer";
import { FaqCards } from "@components/Faq";
import { FAQ_DATA } from "../public/data/faq";

export interface HomePageProps {}

interface RawFaqElement {
  heading: string;
  detail: string;
  tags: Array<string>;
}

interface RawFaqData {
  elements: Array<RawFaqElement>;
}

export interface TransformedFaqElement extends RawFaqElement {
  domId: string;
}

export default function Home(_props: HomePageProps) {
  const transformedData = transformFaqData(FAQ_DATA);
  return (
    <div>
      <Head>
        <title>No Agenda FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <WithSidebar
        sidebarContents={<Sidebar elements={transformedData} />}
        otherContents={<FaqCards elements={transformedData} />}
      />
      <Footer />
    </div>
  );
}

function transformFaqData(props: RawFaqData): Array<TransformedFaqElement> {
  return props.elements.map((faqElement) => {
    return {
      domId: generateDomId(faqElement.heading),
      ...faqElement,
    };
  });
}

function generateDomId(text: string): string {
  return `${text.split(" ").join("-")}`;
}
