/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IContact } from "@/types/types";
import useCompanyLogo from "@/hooks/useCompanyLogo";
import "./ContactTableRow.scss";

interface ContactTableRowProps {
  contact: IContact;
  onClick: (contact: IContact) => void;
}

const ContactTableRow: React.FC<ContactTableRowProps> = ({
  contact,
  onClick,
}) => {
  const { getCompanyLogo } = useCompanyLogo();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTableRowElement>) => {
    if (event.key === "Enter") {
      onClick(contact);
    }
  };

  return (
    <tr
      onClick={() => onClick(contact)}
      onKeyDown={handleKeyDown}
      className="contact-table-row"
      role="button"
      tabIndex={0}
    >
      <td className="contact-table-row__cell contact-table-row__cell--outer-left">
        <img
          src={`https://api.dicebear.com/8.x/miniavs/svg?seed=${contact.firstName}`}
          alt={`${contact.firstName} ${contact.lastName}`}
          className="contact-table-row__avatar"
        />
        <span className="contact-table-row__name-text">{`${contact.firstName} ${contact.lastName}`}</span>
      </td>
      <td className="contact-table-row__cell contact-table-row__cell--center">
        {contact.company ? (
          <>
            <img
              src={getCompanyLogo(contact.company)}
              alt={""}
              className="w-6 h-6 mr-2 inline"
            />
            {contact.company}
          </>
        ) : (
          <div className="flex">
            <img
              src="/images/company-logos/briefcase.png"
              alt={""}
              className="w-6 h-6 mr-2 inline"
            />
            {"No Company Data"}
          </div>
        )}
      </td>
      <td className="contact-table-row__cell contact-table-row__cell--center">
        {contact.jobTitle ? contact.jobTitle : "No Job Title"}
      </td>
      <td className="contact-table-row__cell contact-table-row__cell--center">
        {contact.location ? contact.location : "No Location"}
      </td>
      <td className="contact-table-row__cell contact-table-row__cell--center">
        {contact.lastTouchpoint ? contact.lastTouchpoint : "No Last Touchpoint"}
      </td>
      <td className="contact-table-row__cell contact-table-row__cell--outer-right">
        {contact.latestActivity ? contact.latestActivity : "No recent Activity"}
      </td>
    </tr>
  );
};

export default ContactTableRow;
