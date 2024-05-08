import React, { useState } from "react";
import "./ScrollSection.scss";
import { IconMail, IconCalendarEvent } from "@tabler/icons-react";
import { bemElement, bemModifier } from "../../utils/bem-class-names";
import { joinClassNames } from "../../utils/join-class-names";

interface IScrollSectionProps {
  className: string;
}

const baseClassName = "scroll-section";
const bem = bemElement(baseClassName);
const bemMod = bemModifier;

const sections = ["Touchpoints", "Briefing", "Edit Sources"];

const ScrollSection = ({ className = "" }: IScrollSectionProps) => {
  const [selectedSection, setSelectedSection] = useState("Touchpoints");

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div className={joinClassNames(baseClassName, className)}>
      <div className={bem("labels")}>
        {sections.map((section) => (
          <button
            key={section}
            className={bemMod(bem("label"), {
              active: section === selectedSection,
            })}
            onClick={() => handleSectionClick(section)}
          >
            {section}
          </button>
        ))}
        <div className={bem("divider")} />
      </div>

      <div className={bem("content")}>
        {selectedSection === "Touchpoints" && (
          <div className={bem("timeline")}>
            <div className={bem("timeline-event")}>
              <IconMail className={bem("timeline-icon")} />
              <div className={bem("timeline-content")}>
                <p className="font-semibold text-headingText">Last Week</p>
                <p className="text-extraLightText text-xs">
                  You emailed Justin RE: Thank you + Request to connect
                </p>
              </div>
            </div>
            <div className={bem("timeline-event")}>
              <IconCalendarEvent className={bem("timeline-icon")} />
              <div className={bem("timeline-content")}>
                <p className="font-semibold text-headingText">10/2</p>
                <p className="text-extraLightText text-xs">
                  You met with Ashe Intro call &lt;&gt; LinkedIn
                </p>
              </div>
            </div>
          </div>
        )}
        {selectedSection === "Briefing" && (
          <div className={bem("section-content")}>
            <p className="font-semibold text-headingText">
              Thank You For Viewing! 🎊
            </p>
            <p className="text-extraLightText text-xs">
              I appreciate your time and wish you a wonderful day.
            </p>
          </div>
        )}
        {selectedSection === "Edit Sources" && (
          <div className={bem("section-content")}>
            <p className="font-semibold text-headingText">
              Seriously I mean it...📸
            </p>
            <p className="text-extraLightText text-xs">
              You are a rockstar, keep on going!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollSection;
