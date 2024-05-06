"use client";
import React, { useState } from "react";
import contactsData from "../../data/contacts.json";
import "./ContactList.scss";
import { IContact } from "@/types";
import ContactListItem from "../contact-list-item/ContactListItem";
import ContactDetailCard from "../contact-detail-card/ContactDetailCard";
import { joinClassNames } from "../../utils/join-class-names";

interface IContactListProps {
  className?: string;
}

const ContactList: React.FC = ({ className = "" }: IContactListProps) => {
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);

  const handleContactClick = (contact: IContact) => {
    setSelectedContact(contact); // Set the selected contact to show in the popup
  };
  const contacts = contactsData.sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );

  const baseClassName = "contact-list";

  return (
    <>
      {selectedContact && (
        <ContactDetailCard
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
        />
      )}
      <ul className={joinClassNames(baseClassName, className)}>
        {contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onClick={handleContactClick}
          />
        ))}
      </ul>
    </>
  );
};
export default ContactList;
