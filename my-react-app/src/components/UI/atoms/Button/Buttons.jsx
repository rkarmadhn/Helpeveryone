import clsx from "clsx";
import React, { Children } from "react";

export default function Buttons(props) {
  return (
    <button {...props} className={clsx(props.className, "p-3")}>
      {props.text || props.children}
    </button>
  );
}
