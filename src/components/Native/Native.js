import React from "react";
import "./Native.css";
import graph3 from "../../img/graph3.PNG";

const Native = () => {
  return (
    <div className="container d-flex flex-lg-row flex-column  justify-content-around align-items-center mt-5">
      <div>
        <img className="graph1" src={graph3} alt="graph" />
      </div>
      <div className="pop-under-text mt-lg-0 mt-4">
        <h1 className="service-headline">Native</h1>
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
