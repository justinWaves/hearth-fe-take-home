/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IContact } from "@/types/types";
import useCompanyLogo from "@/hooks/useCompanyLogo";
import "./ContactTableRow.scss";
import { joinClassNames } from "../../utils/join-class-names";
import { bemElement, bemModifier } from "../../utils/bem-class-names";
import Image from "next/image";

interface ContactTableRowProps {
  className?: string;
  contact: IContact;
  onClick: (contact: IContact) => void;
  style?: React.CSSProperties;
}

const baseClassName = "contact-table-row";
const bem = bemElement(baseClassName);

const ContactTableRow: React.FC<ContactTableRowProps> = ({
  className = "",
  contact,
  onClick,
  style,
}) => {
  const { getCompanyLogo } = useCompanyLogo();

  return (
    <tr
      onClick={() => onClick(contact)}
      style={style}
      className={joinClassNames(baseClassName, className)}
    >
      <td className={bemModifier(bem("cell"), "outer-left")}>
        <img
          src={`https://api.dicebear.com/8.x/miniavs/svg?seed=${contact.firstName}`}
          alt={`${contact.firstName} ${contact.lastName}`}
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
          className={bem("company-logo")}
        />
        {contact.company}
      </td>
      <td className={bemModifier(bem("cell"), "center")}>{contact.jobTitle}</td>
      <td className={bemModifier(bem("cell"), "center")}>{contact.location}</td>
      <td className={bemModifier(bem("cell"), "center")}>
        {contact.lastTouchpoint}
      </td>
      <td className={bemModifier(bem("cell"), "outer-right")}>
        {contact.latestActivity}
      </td>
    </tr>
  );
};

export default ContactTableRow;
