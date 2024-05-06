"use client";
import ContactList from "@/components/contact-list/ContactList";
import React from "react";
import "./contacts-page.scss";
import { joinClassNames } from "../../../utils/join-class-names";
import { bemElement } from "../../../utils/bem-class-names";
import SearchBar from "@/elements/search-bar/SeachBar";

interface IContactListPageProps {
  className?: string;
}

const baseClassName = "contacts-page";
const bem = bemElement(baseClassName);

const ContactListPage: React.FC = ({
  className = "",
}: IContactListPageProps) => {
  return (
    <div className={joinClassNames(baseClassName, className)}>
      <SearchBar onSearch={() => {}} className={bem("search-bar")} />
      <ContactList />
    </div>
  );
};

export default ContactListPage;
