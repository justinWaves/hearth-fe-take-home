/* eslint-disable @next/next/no-img-element */
// src/components/contact-detail-card/ContactDetailCard.tsx
import React from "react";
import { IContact } from "@/types";
import "./ContactDetailCard.scss";
import {
  IconMailFilled,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconX,
} from "@tabler/icons-react";
import Gauge from "../gauge/Gauge";
import TemperaturePercentage from "../temperature-percentage/TemperaturePercentage";
import ScrollSection from "../scroll-section/ScrollSections";
import { bemElement } from "../../utils/bem-class-names";
import { joinClassNames } from "../../utils/join-class-names";

interface ContactDetailProps {
  className?: string;
  contact: IContact;
  onClose: () => void;
}

const baseClassName = "contact-detail-card";
const bem = bemElement(baseClassName);

const ContactDetailCard: React.FC<ContactDetailProps> = ({
  className = "",
  contact,
  onClose,
}) => {
  return (
    <div className={joinClassNames(baseClassName, className)}>
      <div className={bem("content")}>
        <button onClick={onClose} className={bem("exit-button")}>
          <IconX size="32" />
        </button>
        <div className={bem("temp-guage-container")}>
          <TemperaturePercentage
            value={contact.temperatureScore}
            className={bem("temp-display")}
          />
          <Gauge
            percentage={contact.temperatureScore}
            className={bem("temp-gauge")}
          />
        </div>
        <img
          src={`https://api.dicebear.com/8.x/miniavs/svg?seed=${contact.firstName}`}
          alt=""
          className={bem("avatar")}
        />
        <div className={bem("heading-container")}>
          <div className={bem("heading")}>
            <h2 className={bem("full-name")}>
              {contact.firstName} {contact.lastName}
            </h2>
            <p className={bem("job-title")}>
              {contact.jobTitle} @ {contact.company}
            </p>
          </div>
          <div className={bem("social-icon-container")}>
            <div className={bem("social-icon")}>
              <IconMailFilled className={bem("social-icon--icon")} size="20" />
            </div>
            <div className={bem("social-icon")}>
              <IconBrandTwitterFilled
                className={bem("social-icon--icon")}
                size="20"
              />
            </div>
            <div className={bem("social-icon")}>
              <IconBrandLinkedin
                className={bem("social-icon--icon")}
                size="20"
              />
            </div>
          </div>
        </div>
        <ScrollSection className={bem("scroll-section")} />
      </div>
    </div>
  );
};

export default ContactDetailCard;
