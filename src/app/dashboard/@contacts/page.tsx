// src/pages/ContactListPage.tsx
"use client";
import { wait } from "lib/wait";

import React, { useState } from "react";
import ContactList from "@/components/contact-list/ContactList";
import SearchBar from "@/elements/search-bar/SeachBar";
import { joinClassNames } from "@/utils/join-class-names";
import { bemElement } from "@/utils/bem-class-names";
import "./contacts-page.scss";

interface IContactListPageProps {
  className?: string;
}

const baseClassName = "contacts-page";
const bem = bemElement(baseClassName);

const ContactListPage: React.FC<IContactListPageProps> = ({
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className={joinClassNames(baseClassName, className)}>
      <SearchBar
        searchQuery={searchQuery}
        onSearch={handleSearch}
        className={bem("search-bar")}
      />
      <ContactList searchQuery={searchQuery} />
    </div>
  );
};

export default ContactListPage;
