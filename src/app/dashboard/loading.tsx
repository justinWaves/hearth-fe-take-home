import React from "react";
import "./dashboard-loading.scss";
import { IconLoader2 } from "@tabler/icons-react";
import { bemElement } from "@/utils/bem-class-names";

const baseClassName = "dashboard-loading";
const bem = bemElement(baseClassName);

function LoadingContatcs() {
  return (
    <div className={baseClassName}>
      <IconLoader2 size={50} className={bem("loading-icon")} />
    </div>
  );
}

export default LoadingContatcs;
