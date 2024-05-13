import contacts from "../../../data/contacts.json";
import React from "react";
import ContactTable from "@/components/contact-table/ContactTable";
import { joinClassNames } from "@/utils/join-class-names";
import "./contacts-page.scss";
import { IContact } from "@/types/types";

interface IContactListPageProps {
  className?: string;
  contacts: IContact[];
}
// async function fetchContacts() {
//   const response = await fetch("API_ENDPOINT", {
//     cache: "force-cache",
//     next: { revalidate: 3600 },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch contacts");
//   }

//   return await response.json();
// }

export default async function ContactListPage({
  className = "",
}: IContactListPageProps) {
  // const contacts = await fetchContacts();

  return (
    <div className={joinClassNames("contacts-page", className)}>
      <ContactTable contactsData={contacts} />
    </div>
  );
}
