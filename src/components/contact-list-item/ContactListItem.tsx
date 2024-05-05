"use client";
import React from "react";
import { IContact } from "@/types";
import "./ContactListItem.scss";

interface IContactListItemProps {
  contact: IContact;
  onClick: (contact: IContact) => void;
}

const ContactListItem: React.FC<IContactListItemProps> = ({
  contact,
  onClick,
}) => {
  return (
    <li onClick={() => onClick(contact)} className="contact-list-item">
        <div className="contact-list-item__label-container">
        <img
          src={`https://api.dicebear.com/8.x/miniavs/svg?seed=${contact.firstName}`}
          alt=""
          className="contact-list-item__avatar"
        />
        <div className="contact-list-item__text-labels">
          <strong className="contact-list-item__first-name">
            {contact.firstName}
          </strong>{" "}
          {contact.lastName}
          <p className="contact-list-item__job-title">{contact.jobTitle}</p>
        </div>
        </div>
    </li>
  );
};

export default ContactListItem;
