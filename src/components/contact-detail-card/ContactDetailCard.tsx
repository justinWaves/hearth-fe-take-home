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
  IconChevronLeft,
} from "@tabler/icons-react";
import Gauge from "../gauge/Gauge";
import TemperaturePercentage from "../temperature-percentage/TemperaturePercentage";
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
          <IconSquareX size="40" />
          <p className="text-xs">close</p>
        </button>
        <TemperaturePercentage
          value={contact.temperatureScore}
          className={bem("temp-display")}
        />
        <Gauge
          percentage={contact.temperatureScore}
          className={bem("temp-gauge")}
        />
        <img
          src={`https://api.dicebear.com/8.x/miniavs/svg?seed=${contact.firstName}`}
          alt=""
          className={bem("avatar")}
        />
        <div className={bem("heading")}>
          <h2 className={bem("full-name")}>
            {contact.firstName} {contact.lastName}
          </h2>
          <p className={bem("job-title")}>{contact.jobTitle}</p>
        </div>
        <div className={bem("contact-list")}>
          <div>
            <div className={bem("contact-item")}>
              <IconMail />
              <p className={bem("contact-item--text")}>{contact.email}</p>
            </div>
            <div className={bem("contact-item")}>
              <IconPhone />
              <p className={bem("contact-item--text")}>{contact.phone}</p>
            </div>
          </div>
          <div>
            <div className={bem("contact-item")}>
              <IconBrandInstagram />
              <p className={bem("contact-item--text")}>
                {contact.instagramHandle}
              </p>
            </div>
            <div className={bem("contact-item")}>
              <IconBrandLinkedin />
              <p className={bem("contact-item--text")}>
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
