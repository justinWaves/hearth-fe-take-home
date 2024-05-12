/* eslint-disable @next/next/no-img-element */
// src/components/ContactTableRow.tsx
import React from "react";
import { IContact } from "@/types/types";
import useCompanyLogo from "@/hooks/useCompanyLogo";
import "./ContactTableRow.scss"; // Import the new stylesheet

interface ContactTableRowProps {
  contact: IContact;
  onClick: (contact: IContact) => void;
}

const ContactTableRow: React.FC<ContactTableRowProps> = ({
  contact,
  onClick,
}) => {
  const { getCompanyLogo } = useCompanyLogo();

  return (
    <tr onClick={() => onClick(contact)} className="contact-table-row">
      <td className="contact-table-row__cell contact-table-row__cell--outer-left">
        <img
          src={`https://api.dicebear.com/8.x/miniavs/svg?seed=${contact.firstName}`}
          alt={`${contact.firstName} ${contact.lastName}`}
          className="contact-table-row__avatar"
        />
        <span className="contact-table-row__name-text">{`${contact.firstName} ${contact.lastName}`}</span>
      </td>
      <td className="contact-table-row__cell contact-table-row__cell--center">
        <img
          src={getCompanyLogo(contact.company)}
          alt={`${contact.company} logo`}
          className="w-6 h-6 mr-2 inline"
        />
        {contact.company}
      </td>
      <td className="contact-table-row__cell contact-table-row__cell--center">
        {contact.jobTitle}
      </td>
      <td className="contact-table-row__cell contact-table-row__cell--center">
        {contact.location}
      </td>
      <td className="contact-table-row__cell contact-table-row__cell--center">
        {contact.lastTouchpoint}
      </td>
      <td className="contact-table-row__cell contact-table-row__cell--outer-right">
        {contact.latestActivity}
      </td>
    </tr>
  );
};

export default ContactTableRow;
