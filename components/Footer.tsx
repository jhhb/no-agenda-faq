import { H6 } from "@blueprintjs/core";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <H6>An FAQ for the best podcast in the universe.</H6>
      <H6>
        <a onClick={() => window.scrollTo(0, 0)}>Return to Top</a>
      </H6>
      <H6>Contact: noagendafaq (AT) fastmail (DOT) com</H6>
    </footer>
  );
}
