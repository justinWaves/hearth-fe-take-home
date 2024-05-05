import React from 'react';

interface IGaugeProps {
  percentage: number;
}

const Gauge: React.FC<IGaugeProps> = ({ percentage }) => {
  // Calculate the angle for the indicator arc based on the percentage
  const angle = (percentage / 100) * 180;

  // Calculate the coordinates of the endpoint of the arc
  const endX = 50 + 40 * Math.cos(((angle - 90) * Math.PI) / 180);
  const endY = 50 + 40 * Math.sin(((angle - 90) * Math.PI) / 180);

  return (
    <svg className="gauge" width="300" height="300" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
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

      {/* Indicator line */}
      <line
        x1="50"
        y1="50"
        x2={endX}
        y2={endY}
        stroke="rgba(0, 0, 0, 0.5)"
        strokeWidth="2"
        strokeLinecap="round"
      />

    </svg>
  );
};

export default Gauge;
