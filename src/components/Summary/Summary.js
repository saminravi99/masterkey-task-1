import React from "react";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="mt-5 summary-section py-5">
      <h2 className="text-center mb-5 business-summary">Business Summary</h2>
      <div className=" d-flex justify-content-around align-items-center">
        <div className="stat stat-one d-flex align-items-center justify-content-center">
          <div>
            <h1>1 BN+</h1>
            <h3>Daily Impression</h3>
          </div>
        </div>
        <div className="stat stat-two d-flex align-items-center justify-content-center">
          <div>
            <h1>$500K+</h1>
            <h3>Paid</h3>
          </div>
        </div>
        <div className="stat stat-three d-flex align-items-center justify-content-center">
          <div>
            <h1>8k+</h1>
            <h3>Global Publishers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
