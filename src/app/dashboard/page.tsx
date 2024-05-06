import React from "react";
import "./dashboard.scss";
import { bemElement } from "../../utils/bem-class-names";
import { joinClassNames } from "../../utils/join-class-names";

interface IDashboardPageProps {
  className?: string;
}

const baseClassName = "dashboard";
const bem = bemElement(baseClassName);

function DashboardPage({ className = "" }: IDashboardPageProps) {
  return (
    <div className={joinClassNames(baseClassName, className)}>
      <p className={bem("menu-header")}> Main</p>
      <h1 className={bem("menu-link")}> Contacts</h1>
      <h1 className={bem("menu-link")}> Inbox</h1>
      <h1 className={bem("menu-link")}> Settings</h1>
    </div>
  );
}

export default DashboardPage;
