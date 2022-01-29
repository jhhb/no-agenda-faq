import { H4 } from "@blueprintjs/core";
import { HOME_HEADING_ID } from "@components/Nav";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <H4>An FAQ for the best podcast in the universe.</H4>
      <H4>
        <a href={`#${HOME_HEADING_ID}`}>Return to Top</a>
      </H4>
      <H4>Contact: noagendafaq (AT) fastmail (DOT) com</H4>
    </footer>
  );
}
