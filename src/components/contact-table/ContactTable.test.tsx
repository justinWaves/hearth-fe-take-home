import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom matchers
import ContactTable from "./ContactTable";
import contactsData from "../../data/contacts.json";

describe("ContactTable Component", () => {
  it("renders table headings and rows correctly", () => {
    render(<ContactTable className="" />);

    // Check for table headers
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("Last Touchpoint")).toBeInTheDocument();
    expect(screen.getByText("Latest Activity")).toBeInTheDocument();

    // Check if rows are rendered based on the JSON data
    contactsData.forEach((contact) => {
      expect(screen.getByText(contact.firstName)).toBeInTheDocument();
      expect(screen.getByText(contact.company)).toBeInTheDocument();
    });
  });

  it("displays the contact detail card when a row is clicked", () => {
    render(<ContactTable className="" />);

    // Simulate clicking on the first contact row
    const firstContactRow = screen.getByText(contactsData[0].firstName);
    fireEvent.click(firstContactRow);

    // Check if the ContactDetailCard is displayed
    expect(screen.getByText(contactsData[0].jobTitle)).toBeInTheDocument();
  });
});
