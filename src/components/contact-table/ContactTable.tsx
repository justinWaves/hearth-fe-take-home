/* eslint-disable @next/next/no-img-element */
// src/components/contact-table/ContactTable.tsx
"use client";

import React, { useState, FC } from "react";
import contactsData from "../../data/contacts.json";
import "./ContactTable.scss";
import { IContact } from "@/types";
import ContactDetailCard from "../contact-detail-card/ContactDetailCard";
import {
  IconUser,
  IconBriefcase,
  IconMapPin,
  IconClock,
  IconActivity,
} from "@tabler/icons-react";
import { joinClassNames } from "../../utils/join-class-names";
import { bemElement, bemModifier } from "../../utils/bem-class-names";
import Button from "@/elements/Button/Button";

// A mapping function to return the correct logo based on the company name
const getCompanyLogo = (companyName: string): string => {
  const logos: Record<string, string> = {
    Salesforce: "./images/company-logos/salesforce-logo-sm.png",
    LinkedIn: "./images/company-logos/linkedin-logo-sm.png",
    Intercom: "./images/company-logos/intercom-logo-sm.png",
    Slack: "./images/company-logos/slack-logo-sm.png",
    Google: "./images/company-logos/google-logo-sm.png",
    SendGrid: "./images/company-logos/sendgrid-logo-sm.png",
    Shopify: "./images/company-logos/shopify-logo-sm.png",
    Notion: "./images/company-logos/notion-logo-sm.png",
  };

  return logos[companyName] || "/images/default.png"; // Provide a fallback or default image
};

interface IContactTableProps {
  className?: string;
  searchQuery: string;
}

const searchLocation = "San Francisco";

const baseClassName = "contact-table";
const bem = bemElement(baseClassName);

const ContactTable: FC<IContactTableProps> = ({
  className = "",
  searchQuery,
}) => {
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);

  const handleContactClick = (contact: IContact) => {
    setSelectedContact(contact);
  };

  const handleCloseContact = () => {
    setSelectedContact(null);
  };

  // Filter and sort contacts based on the search query
  const filteredContacts = contactsData
    .filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.phone.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.firstName.localeCompare(b.firstName));

  return (
    <div className="w-full">
      {selectedContact && (
        <ContactDetailCard
          contact={selectedContact}
          onClose={handleCloseContact}
        />
      )}
      <div className={bem("heading-container")}>
        <div className="flex">
          <h1 className={bem("heading")}>{searchLocation} Engineers</h1>
          <Button className={bem("save-button")}>Save Group</Button>
        </div>
        <p className={bem("subheading")}>
          Here are your search results for Engineers in {searchLocation}
        </p>
      </div>
      <table className={joinClassNames(baseClassName, className)}>
        <thead>
          <tr>
            <th className={bemModifier(bem("t-header"), "outer-left")}>
              <IconUser size={18} className={bem("header-icon")} /> Name
            </th>
            <th className={bemModifier(bem("t-header"), "center")}>
              <img
                src="/images/company.png"
                alt=""
                className={bem("header-icon")}
              />{" "}
              Company
            </th>
            <th className={bemModifier(bem("t-header"), "center")}>
              <IconBriefcase size={18} className={bem("header-icon")} /> Title
            </th>
            <th className={bemModifier(bem("t-header"), "center")}>
              <IconMapPin size={18} className={bem("header-icon")} /> Location
            </th>
            <th className={bemModifier(bem("t-header"), "center")}>
              <IconClock size={18} className={bem("header-icon")} /> Last
              Touchpoint
            </th>
            <th className={bemModifier(bem("t-header"), "outer-right")}>
              <IconActivity size={18} className={bem("header-icon")} /> Latest
              Activity
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact) => (
            <tr
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              className={bem("row")}
            >
              <td className={bemModifier(bem("cell"), "outer-left")}>
                <img
                  src={`https://api.dicebear.com/8.x/miniavs/svg?seed=${contact.firstName}`}
                  alt=""
                  className={bem("avatar")}
                />
                <span
                  className={bem("name-text")}
                >{`${contact.firstName} ${contact.lastName}`}</span>
              </td>
              <td className={bemModifier(bem("cell"), "center")}>
                <img
                  src={getCompanyLogo(contact.company)}
                  alt={``}
                  className="w-6 h-6 mr-2 inline"
                />
                {contact.company}
              </td>
              <td className={bemModifier(bem("cell"), "center")}>
                {contact.jobTitle}
              </td>
              <td className={bemModifier(bem("cell"), "center")}>
                {contact.location}
              </td>
              <td className={bemModifier(bem("cell"), "center")}>
                {contact.lastTouchpoint}
              </td>
              <td className={bemModifier(bem("cell"), "outer-right")}>
                {contact.latestActivity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
