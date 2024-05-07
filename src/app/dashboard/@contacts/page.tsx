// src/pages/ContactListPage.tsx
"use client";
import ContactTable from "@/components/contact-table/ContactTable";
import { joinClassNames } from "@/utils/join-class-names";
import "./contacts-page.scss";

interface IContactListPageProps {
  className?: string;
}

const baseClassName = "contacts-page";

const ContactListPage: React.FC<IContactListPageProps> = ({
  className = "",
}) => {
  return (
    <div className={joinClassNames(baseClassName, className)}>
      <ContactTable />
    </div>
  );
};

export default ContactListPage;
