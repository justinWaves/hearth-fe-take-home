"use client";
import React, { useState } from "react";
import ContactDetailModal from "../contact-detail-modal/ContactDetailModal";
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

  const handleKeyDown =
    (callback: () => void) =>
    (event: React.KeyboardEvent<HTMLTableHeaderCellElement>) => {
      if (event.key === "Enter") {
        callback();
      }
    };

  return (
    <div className="w-full">
      {selectedContact && (
        <ContactDetailModal
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
              onKeyDown={handleKeyDown(() => handleSortChange("firstName"))}
              className={bemModifier(bem("table-header"), "outer-left")}
              scope="col"
              role="button"
              tabIndex={0}
            >
              <IconUser
                size={18}
                className={bem("table-header__icon")}
                role="presentation"
              />
              Name
            </th>
            <th
              onClick={() => handleSortChange("company")}
              onKeyDown={handleKeyDown(() => handleSortChange("company"))}
              className={bemModifier(bem("table-header"), "center")}
              scope="col"
              role="button"
              tabIndex={0}
            >
              <IconBriefcase
                size={18}
                className={bem("table-header__icon")}
                role="presentation"
              />
              Company
            </th>
            <th
              onClick={() => handleSortChange("jobTitle")}
              onKeyDown={handleKeyDown(() => handleSortChange("jobTitle"))}
              className={bemModifier(bem("table-header"), "center")}
              scope="col"
              role="button"
              tabIndex={0}
            >
              <IconBriefcase
                size={18}
                className={bem("table-header__icon")}
                role="presentation"
              />
              Title
            </th>
            <th
              onClick={() => handleSortChange("location")}
              onKeyDown={handleKeyDown(() => handleSortChange("location"))}
              className={bemModifier(bem("table-header"), "center")}
              scope="col"
              role="button"
              tabIndex={0}
            >
              <IconMapPin
                size={18}
                className={bem("table-header__icon")}
                role="presentation"
              />
              Location
            </th>
            <th
              onClick={() => handleSortChange("lastTouchpoint")}
              onKeyDown={handleKeyDown(() =>
                handleSortChange("lastTouchpoint")
              )}
              className={bemModifier(bem("table-header"), "center")}
              scope="col"
              role="button"
              tabIndex={0}
            >
              <IconClock
                size={18}
                className={bem("table-header__icon")}
                role="presentation"
              />
              Last Touchpoint
            </th>
            <th
              onClick={() => handleSortChange("latestActivity")}
              onKeyDown={handleKeyDown(() =>
                handleSortChange("latestActivity")
              )}
              className={bemModifier(bem("table-header"), "outer-right")}
              scope="col"
              role="button"
              tabIndex={0}
            >
              <IconActivity
                size={18}
                className={bem("table-header__icon")}
                role="presentation"
              />
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
