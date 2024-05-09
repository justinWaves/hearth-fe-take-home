import NavBar from "@/components/nav-bar/NavBar";
import { ReactNode } from "react";
import "./dashboard.scss";

function DashboardLayout({
  children,
  contacts,
}: {
  children: ReactNode;
  contacts: ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="dashboard__layout">
        <div className="dashboard__menu-container">{children}</div>
        {contacts}
      </div>
    </>
  );
}

export default DashboardLayout;
