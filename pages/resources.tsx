import { Callout } from "@blueprintjs/core";
import Footer from "@components/Footer";
import { Nav } from "@components/Nav";
import Head from "next/head";

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
    <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
      <Callout intent={"primary"} title={undefined}>
        <p>
          Do you ever find yourself listening to a No Agenda episode, hearing
          about a cool website or business a producer created, and then
          wondering how to find it again?
        </p>
        <p>
          Here's a catalog of No Agenda community resources that producers have
          created and shared with the No Agenda community. These are resources
          that either directly relate to No Agenda, or give donations back to
          the show.
        </p>
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
