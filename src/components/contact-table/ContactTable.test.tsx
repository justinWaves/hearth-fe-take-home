import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Extend jest-dom matchers
import ContactTable from "./ContactTable";

describe("ContactTable Component", () => {
  it("renders the table heading 'Name'", () => {
    render(<ContactTable className="" />);

    // Check for the "Name" table header
    expect(screen.getByText("Name")).toBeInTheDocument();
  });
});
