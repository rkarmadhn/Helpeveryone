import React from "react";
import CardText from "../../molecules/Card/CardText";
import CardImage from "../../molecules/Card/CardImage"
import clsx from "clsx";

export default function CardOurService(props) {
  return (
    <div {...props} className={clsx(props.className,"grid md:grid-cols-2 grid-cols-1 gap-4 my-4 md:my-8")}>
      <CardText title={props.title} body={props.body} className={clsx(props.classText,'md:px-2 md:text-start text-justify')}/>
      <CardImage image={props.image} className={clsx(props.classImage,'md:px-2')}/>
    </div>
  );
}
