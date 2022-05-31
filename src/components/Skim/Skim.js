import React from "react";
import "./Skim.css";
import graph4 from "../../img/graph3.PNG";

const Native = () => {
  return (
    <div className="container d-flex justify-content-around align-items-center mt-5">
      <div>
        <img className="graph1" src={graph4} alt="graph" />
      </div>
      <div className="pop-under-text">
        <h1 className="service-headline">Skim</h1>
        <p>
          Pop-under is a type of advertisement that is displayed on the bottom
          of the page. It is a type of advertisement that is displayed on the
          bottom of the page. It is a type of advertisement that is displayed on
          the bottom of the page.
        </p>
      </div>
    </div>
  );
};

export default Native;
