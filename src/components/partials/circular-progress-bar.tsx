import React from "react";

const CircularProgress = ({
  radius,
  progress,
}: {
  radius: number;
  progress: number;
}) => {
  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * radius;
  // Calculate the strokeDashoffset to represent the progress
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg width={radius * 2} height={radius * 2}>
      <circle
        className="progress-ring__circle"
        stroke="#ccc"
        fill="transparent"
        strokeWidth="10"
        strokeLinecap="round"
        cx={radius}
        cy={radius}
        r={radius - 5}
      />
      <circle
        className="progress-ring__circle"
        stroke="#00cc66" // Green color for progress
        fill="transparent"
        strokeWidth="10"
        strokeLinecap="round"
        cx={radius}
        cy={radius}
        r={radius - 5}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: strokeDashoffset,
          transform: `rotate(-90deg)`,
          transformOrigin: `${radius}px ${radius}px`,
        }}
      />
    </svg>
  );
};

export default CircularProgress;
