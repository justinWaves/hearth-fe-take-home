import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>DashboardLayout</h1>
      {children}
    </>
  );
}

export default DashboardLayout;
