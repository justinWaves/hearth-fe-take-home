import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactTable from "./ContactTable";
import contacts from "../../data/contacts.json";

describe("ContactTable Component", () => {
  it("renders the table heading 'Name'", () => {
    render(<ContactTable contactsData={contacts} className="" />);
    expect(screen.getByText("Name")).toBeInTheDocument();
  });
});
