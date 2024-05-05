/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IContact } from "@/types";
import "./ContactDetailCard.scss";

import {
  IconMail,
  IconPhone,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconSquareX,
} from "@tabler/icons-react";
import Gauge from "../gauge/Gauge";
import TemperatureDisplay from "../temperature-display/TemperatureDisplay";

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
        <button onClick={onClose} className="contact-detail-card__exit-button">
          <IconSquareX size="42" />
          Close
        </button>
        <TemperatureDisplay
          value={contact.temperatureScore}
          className="contact-detail-card__temp-display"
        />
        <Gauge
          percentage={contact.temperatureScore}
          className="contact-detail-card__temp-gauge"
        />
        <img
          src={`https://api.dicebear.com/8.x/miniavs/svg?seed=${contact.firstName}`}
          alt=""
          className="contact-detail-card__avatar"
        />
        <div className="contact-detail-card__heading">
          <h2 className="contact-detail-card__full-name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact-detail-card__job-title">{contact.jobTitle}</p>
        </div>
        <div className="contact-detail-card__contact-list">
          <div>
            <div className="contact-detail-card__contact-item">
              <IconMail />
              <p className="contact-detail-card__contact-item--text">
                {contact.email}
              </p>
            </div>
            <div className="contact-detail-card__contact-item">
              <IconPhone />
              <p className="contact-detail-card__contact-item--text">
                {contact.phone}
              </p>
            </div>
          </div>
          <div>
            <div className="contact-detail-card__contact-item">
              <IconBrandInstagram />
              <p className="contact-detail-card__contact-item--text">
                {contact.instagramHandle}
              </p>
            </div>
            <div className="contact-detail-card__contact-item">
              <IconBrandLinkedin />
              <p className="contact-detail-card__contact-item--text">
                {contact.instagramHandle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailCard;
