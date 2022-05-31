import React from "react";
import "./PopUnder.css";
import graph1 from "../../img/graph1.PNG";

const PopUnder = () => {
  return (
    <div className="container d-flex justify-content-around align-items-center mt-5">
      <div>
        <img className="graph1" src={graph1} alt="graph" />
      </div>
      <div className="pop-under-text">
        <h1 className="service-headline">Pop-Under</h1>
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

export default PopUnder;
