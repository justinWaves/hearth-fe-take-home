// src/components/temperature-percentage/TemperaturePercentage.tsx
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./TemperaturePercentage.scss";
import { bemElement } from "../../utils/bem-class-names";
import { joinClassNames } from "../../utils/join-class-names";

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
  const [targetValue, setTargetValue] = useState(0);
  const animatedValue = useSpring({
    from: { val: 0 },
    to: { val: targetValue },
  });

  useEffect(() => {
    setTargetValue(value);
  }, [value]);

  let bgColor = "bg-blue-200";
  let temperatureLabel = "";

  if (value < 33) {
    bgColor = "bg-blue-200";
    temperatureLabel = "Frigid";
  } else if (value < 66) {
    bgColor = "bg-purple-200";
    temperatureLabel = "Cold";
  } else {
    bgColor = "bg-red-200";
    temperatureLabel = "Hot";
  }

  return (
    <div className={joinClassNames(baseClassName, className)}>
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
