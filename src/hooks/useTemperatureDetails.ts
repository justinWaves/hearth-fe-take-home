// src/hooks/useTemperatureDetails.ts
import { useMemo } from "react";

function useTemperatureDetails(value: number) {
  const bgColor = useMemo(() => {
    if (value < 33) return "bg-blue-200";
    if (value < 66) return "bg-purple-200";
    return "bg-red-200";
  }, [value]);

  const temperatureLabel = useMemo(() => {
    if (value >= 0 && value <= 10) return "Frigid";
    if (value >= 11 && value <= 20) return "Cold";
    if (value >= 21 && value <= 30) return "Cool";
    if (value >= 31 && value <= 40) return "Mild";
    if (value >= 41 && value <= 50) return "Warm";
    if (value >= 51 && value <= 60) return "Hot";
    if (value >= 61 && value <= 70) return "Very Hot";
    if (value >= 71 && value <= 80) return "Scorching";
    if (value >= 81 && value <= 90) return "Burning";
    if (value >= 91 && value <= 100) return "Inferno";
    return "";
  }, [value]);

  return { bgColor, temperatureLabel };
}

export default useTemperatureDetails;
