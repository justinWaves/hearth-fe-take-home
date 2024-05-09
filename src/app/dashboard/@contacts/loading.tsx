import React from "react";
import "./contacts-loading.scss";
import { IconLoader2 } from "@tabler/icons-react";
import { bemElement } from "@/utils/bem-class-names";

const baseClassName = "contact-loading-page";
const bem = bemElement(baseClassName);

function LoadingContatcs() {
  return (
    <div className={baseClassName}>
      <IconLoader2 size={100} className={bem("loading-icon")} />
      <p className={bem("loading-text")}>Loading</p>
    </div>
  );
}

export default LoadingContatcs;
