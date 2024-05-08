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
  } else if (value < 66) {
    bgColor = "bg-purple-200";
  } else {
    bgColor = "bg-red-200";
  }

  if (value >= 0 && value <= 10) {
    temperatureLabel = "Frigid";
  } else if (value >= 11 && value <= 20) {
    temperatureLabel = "Cold";
  } else if (value >= 21 && value <= 30) {
    temperatureLabel = "Cool";
  } else if (value >= 31 && value <= 40) {
    temperatureLabel = "Mild";
  } else if (value >= 41 && value <= 50) {
    temperatureLabel = "Warm";
  } else if (value >= 51 && value <= 60) {
    temperatureLabel = "Hot";
  } else if (value >= 61 && value <= 70) {
    temperatureLabel = "Very Hot";
  } else if (value >= 71 && value <= 80) {
    temperatureLabel = "Scorching";
  } else if (value >= 81 && value <= 90) {
    temperatureLabel = "Burning";
  } else if (value >= 91 && value <= 100) {
    temperatureLabel = "Inferno";
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
