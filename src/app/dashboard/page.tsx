import React from "react";
import "./dashboard.scss";
import { bemElement } from "../../utils/bem-class-names";
import { joinClassNames } from "../../utils/join-class-names";
import {
  IconChevronRight,
  IconChevronDown,
  IconShare,
} from "@tabler/icons-react";
import { simulateDelay } from "@/utils/simulate-delay";

interface IDashboardPageProps {
  className?: string;
}

const baseClassName = "dashboard";
const bem = bemElement(baseClassName);

async function DashboardPage({ className = "" }: IDashboardPageProps) {
  await simulateDelay(3000);
  return (
    <div className={joinClassNames(baseClassName, className)}>
      <div>
        <p className={bem("menu-header")}> Groups</p>
        <h1 className={bem("menu-link")}>
          <IconChevronRight /> Teams
        </h1>
        <h1 className={bem("menu-link")}>
          <IconChevronDown /> Private
        </h1>
      </div>
      <div className={bem("share-button")}>
        <IconShare size="42" className="relative right-0.5" />
      </div>
    </div>
  );
}

export default DashboardPage;
