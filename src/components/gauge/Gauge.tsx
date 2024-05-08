import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { joinClassNames } from "../../utils/join-class-names";

interface IGaugeProps {
  percentage: number;
  className?: string;
}

const Gauge: React.FC<IGaugeProps> = ({ percentage, className = "" }) => {
  const [targetPercentage, setTargetPercentage] = useState(0);

  const animatedValue = useSpring({
    from: { angle: 0 },
    to: { angle: (targetPercentage / 100) * 180 },
    config: { tension: 180, friction: 12 },
  });

  useEffect(() => {
    setTargetPercentage(percentage);
  }, [percentage]);

  const calculateEndCoordinates = (angle: number) => {
    const radians = ((angle - 90) * Math.PI) / 180;
    return {
      x: 50 + 40 * Math.cos(radians),
      y: 50 + 40 * Math.sin(radians),
    };
  };

  const baseClassName = "gauge";

  return (
    <svg
      className={joinClassNames(baseClassName, className)}
      width="300"
      height="300"
      viewBox="0 0 100 100"
      style={{ transform: "rotate(-90deg)" }}
    >
      {/* Gauge track */}
      <path
        d="M 50 10 A 40 40 0 0 1 50 90"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="6"
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="blue" />
          <stop offset="100%" stopColor="red" />
        </linearGradient>
      </defs>

      {/* Center circle */}
      <circle cx="50" cy="50" r="5" fill="rgba(0, 0, 0, 0.2)" />

      {/* Animated Indicator line */}
      <animated.line
        x1="50"
        y1="50"
        x2={animatedValue.angle.to((angle) => calculateEndCoordinates(angle).x)}
        y2={animatedValue.angle.to((angle) => calculateEndCoordinates(angle).y)}
        stroke="rgba(0, 0, 0, 0.5)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Gauge;
