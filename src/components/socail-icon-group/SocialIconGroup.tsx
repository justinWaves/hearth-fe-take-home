import React from "react";
import { bemElement } from "../../utils/bem-class-names";
import { joinClassNames } from "../../utils/join-class-names";
import "./SocialIconGroup.scss";

const baseClassName = "social-icon-group";
const bem = bemElement(baseClassName);

interface Icon {
  name: string;
  icon: JSX.Element;
}

interface SocialIconGroupProps {
  icons: Icon[];
  className?: string;
}

const SocialIconGroup: React.FC<SocialIconGroupProps> = ({
  icons,
  className = "",
}) => {
  return (
    <div className={joinClassNames(baseClassName, className)}>
      {icons.map((icon) => (
        <div key={icon.name} className={bem("icon")}>
          {icon.icon}
        </div>
      ))}
    </div>
  );
};

export default SocialIconGroup;
