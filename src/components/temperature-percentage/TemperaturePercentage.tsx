// src/components/temperature-percentage/TemperaturePercentage.tsx
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./TemperaturePercentage.scss";
import { bemElement } from "../../utils/bem-class-names";
import { joinClassNames } from "../../utils/join-class-names";
import useTemperatureDetails from "../../hooks/useTemperatureDetails";

interface TemperaturePercentageProps {
  value: number;
  className?: string;
}

const baseClassName = "temperature-percentage";
const bem = bemElement(baseClassName);

const TemperaturePercentage: React.FC<TemperaturePercentageProps> = ({
  value,
  className = "",
}) => {
  const { bgColor, temperatureLabel } = useTemperatureDetails(value);

  const [targetValue, setTargetValue] = useState(0);
  const animatedValue = useSpring({
    from: { val: 0 },
    to: { val: targetValue },
  });

  useEffect(() => {
    setTargetValue(value);
  }, [value]);

  return (
    <div className={joinClassNames(baseClassName, className)}>
      {/* Blurry Background */}
      <div className={`${bem("background-blur")} ${bgColor}`} />
      {/* Main Text Display */}
      <div className={bem("output-display")}>
        <animated.h1 className={bem("number")}>
          {animatedValue.val.to((val) => `${Math.round(val)}%`)}
        </animated.h1>
        <h1 className={bem("text")}>{temperatureLabel}</h1>
      </div>
    </div>
  );
};

export default TemperaturePercentage;
