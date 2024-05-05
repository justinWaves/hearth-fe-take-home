// src/components/TemperatureDisplay.tsx
import React from "react";
import "./TemperatureDisplay.scss";

interface TemperatureDisplayProps {
  value: number;
  className?: string;
}

const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({
  value,
  className,
}) => {
  const bgColor =
    value < 33 ? "bg-blue-200" : value < 66 ? "bg-purple-200" : "bg-red-200";

  let temperatureLabel = "";
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
    <div className={className}>
      <div className={"temperature-display"}>
        {/* Blurry Solid Background */}
        <div className={`temperature-display__bg-blur ${bgColor}`} />
        {/* Main Number Display */}
        <div className="temperature-display__output-display">
          <h1 className="temperature-display__number">{value}%</h1>
          <h1 className="temperature-display__text">{temperatureLabel}</h1>
        </div>
      </div>
    </div>
  );
};

export default TemperatureDisplay;
