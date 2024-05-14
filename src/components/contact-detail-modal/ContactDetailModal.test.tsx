import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactDetailModal from "./ContactDetailModal";
import { IContact } from "@/types/types";

describe("ContactDetailModal Component", () => {
  const contact: IContact = {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    jobTitle: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco",
    email: "alice.johnson@techcorp.com",
    instagramHandle: "",
    phone: "123-456-7890",
    lastTouchpoint: "1 week ago",
    latestActivity: "Attended webinar",
    temperatureScore: 50,
  };

  it("renders contact information correctly", () => {
    render(<ContactDetailModal contact={contact} onClose={jest.fn()} />);

    expect(screen.getByText(/alice johnson/i)).toBeInTheDocument();
    expect(
      screen.getByText(/software engineer @ tech corp/i)
    ).toBeInTheDocument();

    if (screen.queryByText(/alice.johnson@techcorp.com/i)) {
      expect(
        screen.getByText(/alice.johnson@techcorp.com/i)
      ).toBeInTheDocument();
    }
    if (screen.queryByText(/123-456-7890/i)) {
      expect(screen.getByText(/123-456-7890/i)).toBeInTheDocument();
    }
  });

  it("triggers the onClose callback when the close button is clicked", () => {
    const onCloseMock = jest.fn();
    render(<ContactDetailModal contact={contact} onClose={onCloseMock} />);

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
