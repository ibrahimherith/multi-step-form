import React from "react";

const Step = ({ number, name, description }) => {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <div className="step-info">
        <span>{name}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Step;
