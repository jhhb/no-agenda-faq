import { Callout } from "@blueprintjs/core";
import Footer from "@components/Footer";
import { Nav } from "@components/Nav";
import Head from "next/head";
import { LINKS_DATA } from "../public/data/links";

export default function Resources(_props: unknown) {
  return (
    <div>
      <Head>
        <title>No Agenda FAQ - Community Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Page />
      <Footer />
    </div>
  );
}

function Page() {
  return (
    <div
      style={{
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingTop: "1%",
        paddingBottom: "1%",
      }}
    >
      <Callout
        intent={"primary"}
        title="Catalog of No Agenda Community resources"
      >
        <p>
          These are resources that are official resources, or: either directly
          relate to No Agenda, or were created by No Agenda community members
          for the NA community
        </p>
      </Callout>
      <LinksList elements={LINKS_DATA.elements} />
      <Callout
        intent={"warning"}
        title="If you'd like another website added to the list..."
      >
        <p>
          If you'd like your NA-related project, business, etc., listed here,
          you can contribute directly{" "}
          <a href="https://github.com/jhhb/no-agenda-faq">
            {" "}
            on Github by creating an issue.
          </a>{" "}
          or send an email to:
        </p>
        <pre>noagendafaq (AT) fastmail (DOT) com</pre>
      </Callout>
    </div>
  );
}

interface LinksListProps {
  elements: Array<LinkWithMeta>;
}

interface LinkWithMeta {
  url: string;
  desc: string;
}

function LinksList(props: LinksListProps) {
  return (
    <div>
      <ul>
        {props.elements.map((el) => (
          <LinkWithMeta {...el} key={el.url} />
        ))}
      </ul>
    </div>
  );
}

function LinkWithMeta(props: LinkWithMeta) {
  return (
    <>
      <li>
        <a href={props.url}>{props.url}</a>
      </li>
      <ul>
        <li>{props.desc}</li>
      </ul>
    </>
  );
}
