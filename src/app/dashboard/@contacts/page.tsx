// src/pages/ContactListPage.tsx
"use client";

import React, { useState } from "react";
import ContactTable from "@/components/contact-table/ContactTable";
import { joinClassNames } from "@/utils/join-class-names";
import { bemElement } from "@/utils/bem-class-names";
import "./contacts-page.scss";
import Button from "@/elements/Button/Button";

interface IContactListPageProps {
  className?: string;
}
const searchLocation = "San Francisco";

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
      <ContactTable searchQuery={searchQuery} />
    </div>
  );
};

export default ContactListPage;
