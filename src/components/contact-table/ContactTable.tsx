/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useMemo } from "react";
import contactsData from "../../data/contacts.json";
import "./ContactTable.scss";
import { IContact } from "@/types/types";
import ContactDetailCard from "../contact-detail-card/ContactDetailCard";
import ContactTableRow from "../contact-table-row/ContactTableRow";
import {
  IconActivity,
  IconBriefcase,
  IconClock,
  IconMapPin,
  IconUser,
} from "@tabler/icons-react";
import { bemElement, bemModifier } from "../../utils/bem-class-names";
import { joinClassNames } from "../../utils/join-class-names";
import Button from "@/elements/Button/Button";

interface IContactTableProps {
  className?: string;
}

const searchLocation = "San Francisco";
const baseClassName = "contact-table";
const bem = bemElement(baseClassName);

const ContactTable: React.FC<IContactTableProps> = ({ className = "" }) => {
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);
  const [sortField, setSortField] = useState("firstName");
  const [sortDirection, setSortDirection] = useState("ascending");

  const sortedContacts = useMemo(() => {
    return [...contactsData].sort((a: IContact, b: IContact) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];
      if (fieldA < fieldB) {
        return sortDirection === "ascending" ? -1 : 1;
      }
      if (fieldA > fieldB) {
        return sortDirection === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }, [sortField, sortDirection]);

  const handleContactClick = (contact: IContact) => {
    setSelectedContact(contact);
  };

  const handleSortChange = (field: string) => {
    if (field === sortField) {
      setSortDirection(
        sortDirection === "ascending" ? "descending" : "ascending"
      );
    } else {
      setSortField(field);
      setSortDirection("ascending");
    }
  };

  return (
    <div className="w-full">
      {selectedContact && (
        <ContactDetailCard
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
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
            <th
              onClick={() => handleSortChange("firstName")}
              className={bemModifier(bem("t-header"), "outer-left")}
            >
              <IconUser size={18} className={bem("t-header__icon")} /> Name
            </th>
            <th
              onClick={() => handleSortChange("company")}
              className={bemModifier(bem("t-header"), "center")}
            >
              <IconBriefcase size={18} className={bem("t-header__icon")} />
              Company
            </th>
            <th
              onClick={() => handleSortChange("jobTitle")}
              className={bemModifier(bem("t-header"), "center")}
            >
              <IconBriefcase size={18} className={bem("t-header__icon")} />
              Title
            </th>
            <th
              onClick={() => handleSortChange("location")}
              className={bemModifier(bem("t-header"), "center")}
            >
              <IconMapPin size={18} className={bem("t-header__icon")} />
              Location
            </th>
            <th
              onClick={() => handleSortChange("lastTouchpoint")}
              className={bemModifier(bem("t-header"), "center")}
            >
              <IconClock size={18} className={bem("t-header__icon")} /> Last
              Touchpoint
            </th>
            <th
              onClick={() => handleSortChange("latestActivity")}
              className={bemModifier(bem("t-header"), "outer-right")}
            >
              <IconActivity size={18} className={bem("t-header__icon")} />
              Latest Activity
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedContacts.map((contact) => (
            <ContactTableRow
              key={contact.id}
              contact={contact}
              onClick={handleContactClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
