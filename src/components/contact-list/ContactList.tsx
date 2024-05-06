// src/components/contact-list/ContactList.tsx
"use client";

import React, { useState, FC } from "react";
import contactsData from "../../data/contacts.json";
import "./ContactList.scss";
import { IContact } from "@/types";
import ContactListItem from "../contact-list-item/ContactListItem";
import ContactDetailCard from "../contact-detail-card/ContactDetailCard";
import { joinClassNames } from "../../utils/join-class-names";

interface IContactListProps {
  className?: string;
  searchQuery: string;
}

const ContactList: FC<IContactListProps> = ({
  className = "",
  searchQuery,
}) => {
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);

  const handleContactClick = (contact: IContact) => {
    setSelectedContact(contact);
  };

  // Filter and sort contacts based on the search query
  const filteredContacts = contactsData
    .filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.phone.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.firstName.localeCompare(b.firstName));

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
        {filteredContacts.map((contact) => (
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
