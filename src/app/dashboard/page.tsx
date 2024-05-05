import React from "react";
import "./dashboard.scss";

function DashboardPage() {
  return (
    <div className="dashboard__menu-items">
      <p className="dashboard__menu-header"> Main</p>
      <h1 className="dashboard__menu-link"> Contacts</h1>
      <h1 className="dashboard__menu-link"> Inbox</h1>
      <h1 className="dashboard__menu-link"> Settings</h1>
    </div>
  );
}

export default DashboardPage;
