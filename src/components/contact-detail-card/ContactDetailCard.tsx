/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IContact } from "@/types/types";
import "./ContactDetailCard.scss";
import {
  IconMailFilled,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconX,
} from "@tabler/icons-react";
import Gauge from "../gauge/Gauge";
import TemperaturePercentage from "../temperature-percentage/TemperaturePercentage";
import SocialIconGroup from "../socail-icon-group/SocialIconGroup";
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

const socialIcons = [
  {
    name: "email",
    icon: (
      <IconMailFilled className="social-icon-group__icon--icon" size="20" />
    ),
  },
  {
    name: "linkedin",
    icon: (
      <IconBrandLinkedin className="social-icon-group__icon--icon" size="20" />
    ),
  },
  {
    name: "twitter",
    icon: (
      <IconBrandTwitterFilled
        className="social-icon-group__icon--icon"
        size="20"
      />
    ),
  },
];

const ContactDetailCard: React.FC<ContactDetailProps> = ({
  className = "",
  contact,
  onClose,
}) => {
  return (
    <div className={joinClassNames(baseClassName, className)}>
      <div className={bem("content")}>
        <button
          onClick={onClose}
          className={bem("exit-button")}
          aria-label="Close"
        >
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
          <SocialIconGroup
            icons={socialIcons}
            className={bem("social-icon-container")}
          />
        </div>
        <ScrollSection className={bem("scroll-section")} />
      </div>
    </div>
  );
};

export default ContactDetailCard;
