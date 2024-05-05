/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IContact } from "@/types";
import "./ContactDetailCard.scss";

interface ContactDetailProps {
  contact: IContact;
  onClose: () => void;
}

const ContactDetailCard: React.FC<ContactDetailProps> = ({
  contact,
  onClose,
}) => {
  return (
    <div className="contact-detail-card">
      <div className="contact-detail-card__content">
        <button onClick={onClose}>Close</button>
        <img
          src={`https://api.dicebear.com/8.x/miniavs/svg?seed=${contact.firstName}`}
          alt=""
          className="contact-detail-card__avatar"
        />
        <h2>
          {contact.firstName} {contact.lastName}
        </h2>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>Job Title: {contact.jobTitle}</p>
        <p>Instagram: {contact.instagramHandle}</p>
        <p>Temperature Score: {contact.temperatureScore}</p>
      </div>
    </div>
  );
};

export default ContactDetailCard;
