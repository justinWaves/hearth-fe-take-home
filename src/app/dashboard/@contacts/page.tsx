import ContactList from "@/components/contact-list/ContactList";
import React from "react";
import "./contacts-page.scss";

const ContactListPage: React.FC = () => {
  return (
    <div className="contacts-page">
      <ContactList />
    </div>
  );
};

export default ContactListPage;
