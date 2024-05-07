/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, FC } from "react";
import contactsData from "../../data/contacts.json";
import "./ContactTable.scss";
import { IContact } from "@/types/types";
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
import Button from "@/elements/button/Button";
import useCompanyLogo from "@/hooks/useCompanyLogo";

interface IContactTableProps {
  className?: string;
}

const searchLocation = "San Francisco";

const baseClassName = "contact-table";
const bem = bemElement(baseClassName);

const ContactTable: FC<IContactTableProps> = ({ className = "" }) => {
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);
  const { getCompanyLogo } = useCompanyLogo();

  const handleContactClick = (contact: IContact) => {
    setSelectedContact(contact);
  };

  const handleCloseContact = () => {
    setSelectedContact(null);
  };

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
        <Button className={bem("save-button-mobile")}>Save Group</Button>
      </div>
      <table className={joinClassNames(baseClassName, className)}>
        <thead>
          <tr>
            <th className={bemModifier(bem("t-header"), "outer-left")}>
              <IconUser size={18} className={bem("header-icon")} /> Name
            </th>
            <th className={bemModifier(bem("t-header"), "center")}>
              <IconBriefcase size={18} className={bem("header-icon")} />
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
          {contactsData.map((contact) => (
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
                  alt={`${contact.company} logo`}
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
