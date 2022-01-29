import { Card, H5, Tag } from "@blueprintjs/core";
import { TransformedFaqElement } from "@pages/index";
import * as React from "react";
import styles from "./Faq.module.css";

interface FaqCardProps {
  heading: string;
  detail: string;
  id: string;
  tags: Array<string>;
}

interface FaqCardsProps {
  elements: Array<TransformedFaqElement>;
}
export function FaqCards(props: FaqCardsProps) {
  return (
    <div className={styles["container"]}>
      {props.elements.map((el) => (
        <FaqCard
          heading={el.heading}
          detail={el.detail}
          id={el.domId}
          key={el.domId}
          tags={el.tags}
        />
      ))}
    </div>
  );
}

export function FaqCard(props: FaqCardProps) {
  return (
    <Card className={styles.card} id={props.id}>
      <H5>{props.heading}</H5>
      <p>{props.detail}</p>
      <TagsContainer {...props} />
    </Card>
  );
}

function TagsContainer(props: FaqCardProps) {
  const tags = props.tags.map((tagText) => {
    return (
      <span style={{ padding: "4px" }}>
        <Tag key={props.id + tagText}>{tagText}</Tag>
      </span>
    );
  });

  return <>{tags}</>;
}
