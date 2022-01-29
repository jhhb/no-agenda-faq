import { JSX } from "@babel/types";
import { H3 } from "@blueprintjs/core";
import { TransformedFaqElement } from "@pages/index";
import styles from "./Sidebar.module.css";

import * as React from "react";
interface WithSidebarProps {
  sidebarContents: JSX.Element;
  otherContents: JSX.Element;
}

export function WithSidebar(props: WithSidebarProps) {
  return (
    <div className={styles.container}>
      <div className={styles["sidebar-content-container"]}>
        {props.sidebarContents}
      </div>
      <div className={styles["other-content-container"]}>
        {props.otherContents}
      </div>
    </div>
  );
}

interface SidebarProps {
  elements: Array<TransformedFaqElement>;
}

export function Sidebar(props: SidebarProps): JSX.Element {
  const links = props.elements.map((el) => {
    return (
      <a
        className={styles["sidebar-link"]}
        href={`#${el.domId}`}
        key={el.domId}
      >
        {el.heading}
      </a>
    );
  });
  return (
    <>
      <H3>FAQs</H3>
      {links}
    </>
  );
}
