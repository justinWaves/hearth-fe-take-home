"use client";
import React, { useState } from "react";
import ContactDetailCard from "../contact-detail-card/ContactDetailCard";
import ContactTableRow from "../contact-table-row/ContactTableRow";
import { IContact } from "@/types/types";
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
import "./ContactTable.scss";
import Pagination from "../pagination/Pagination";
import { usePagination } from "../../hooks/usePagination";
import { useSort } from "../../hooks/useSort";

interface IContactTableProps {
  className?: string;
  contactsData: IContact[];
}

const searchLocation = "San Francisco";
const baseClassName = "contact-table";
const bem = bemElement(baseClassName);

const ContactTable: React.FC<IContactTableProps> = ({
  className = "",
  contactsData,
}) => {
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);
  const itemsPerPage = 20;

  const { sortedData, handleSortChange } = useSort<IContact>({
    data: contactsData,
    defaultField: "firstName",
  });

  const { paginatedData, currentPage, setCurrentPage, totalPages } =
    usePagination({
      data: sortedData,
      itemsPerPage,
    });

  const handleContactClick = (contact: IContact) => {
    setSelectedContact(contact);
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
              className={bemModifier(bem("table-header"), "outer-left")}
            >
              <IconUser size={18} className={bem("table-header__icon")} /> Name
            </th>
            <th
              onClick={() => handleSortChange("company")}
              className={bemModifier(bem("table-header"), "center")}
            >
              <IconBriefcase size={18} className={bem("table-header__icon")} />
              Company
            </th>
            <th
              onClick={() => handleSortChange("jobTitle")}
              className={bemModifier(bem("table-header"), "center")}
            >
              <IconBriefcase size={18} className={bem("table-header__icon")} />
              Title
            </th>
            <th
              onClick={() => handleSortChange("location")}
              className={bemModifier(bem("table-header"), "center")}
            >
              <IconMapPin size={18} className={bem("table-header__icon")} />
              Location
            </th>
            <th
              onClick={() => handleSortChange("lastTouchpoint")}
              className={bemModifier(bem("table-header"), "center")}
            >
              <IconClock size={18} className={bem("table-header__icon")} /> Last
              Touchpoint
            </th>
            <th
              onClick={() => handleSortChange("latestActivity")}
              className={bemModifier(bem("table-header"), "outer-right")}
            >
              <IconActivity size={18} className={bem("table-header__icon")} />
              Latest Activity
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((contact: IContact) => (
            <ContactTableRow
              key={contact.id}
              contact={contact}
              onClick={handleContactClick}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        className={bem("pagination-controls")}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ContactTable;
