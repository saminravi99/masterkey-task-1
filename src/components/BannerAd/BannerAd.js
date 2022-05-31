import React from "react";
import "./BannerAd.css";
import graph2 from "../../img/graph2.PNG";

const BannerAd = () => {
  return (
    <div className="container d-flex justify-content-around align-items-center mt-5">
      <div>
        <img className="graph1" src={graph2} alt="graph" />
      </div>
      <div className="pop-under-text">
        <h1 className="service-headline">Banner Ad</h1>
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

export default BannerAd;
