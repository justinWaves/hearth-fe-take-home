import React from "react";
import "./contacts-page.scss";
import { IconLoader2 } from "@tabler/icons-react";
import { bemElement } from "@/utils/bem-class-names";

const baseClassName = "contact-loading-page";
const bem = bemElement(baseClassName);

function LoadingContatcs() {
  return (
    <div className={baseClassName}>
      <IconLoader2 className={bem("loading-icon")} />
    </div>
  );
}

export default LoadingContatcs;
