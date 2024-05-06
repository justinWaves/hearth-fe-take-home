/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { IContact } from "@/types";
import "./ContactListItem.scss";
import { bemElement } from "../../utils/bem-class-names";
import { joinClassNames } from "../../utils/join-class-names";

interface IContactListItemProps {
  className?: string;
  contact: IContact;
  onClick: (contact: IContact) => void;
}

const ContactListItem: React.FC<IContactListItemProps> = ({
  className = "",
  contact,
  onClick,
}) => {
  const baseClassName = "contact-list-item";
  const bem = bemElement(baseClassName);

  return (
    <li
      onClick={() => onClick(contact)}
      className={joinClassNames(baseClassName, className)}
    >
      <div className={bem("label-container")}>
        <img
          src={`https://api.dicebear.com/8.x/miniavs/svg?seed=${contact.firstName}`}
          alt=""
          className={bem("avatar")}
        />
        <div className={bem("text-labels")}>
          <strong className={bem("first-name")}>{contact.firstName}</strong>{" "}
          {contact.lastName}
          <p className={bem("job-title")}>{contact.jobTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default ContactListItem;
