import { Callout, Tag } from "@blueprintjs/core";
import { Page } from "@components/Page";
import { LINKS_DATA } from "../public/data/links";
import styles from "./resources.module.css";

export default function Resources(_props: unknown) {
  return (
    <Page title="No Agenda FAQ - Community Resources">
      <ResourcesPage />
    </Page>
  );
}

function ResourcesPage() {
  return (
    <div className={styles["page-container"]}>
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
  source?: string;
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
      <li className={styles.link}>
        <a href={props.url}>{props.url}</a>{" "}
        {props.source ? <Tag intent={"primary"}>{props.source}</Tag> : null}
      </li>
      <ul>
        <li>{props.desc}</li>
      </ul>
    </>
  );
}
