
import React from 'react';

interface BlackCircleProps {
  size?: number; // размер в пикселях
}

const BlackCircle: React.FC<BlackCircleProps> = ({ size = 200 }) => {
  return (
    <div 
      className="bg-black rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
    />
  );
};

export default BlackCircle;
