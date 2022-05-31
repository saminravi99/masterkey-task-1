import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faPaperPlane,
  faPodcast,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="container my-3 mx-auto">
      <div className="d-flex justify-content-center align-items-center">
        <div className="break-line"></div>
        <h1 className="service-headline mx-3">Available For Everyone</h1>
        <div className="break-line"></div>
      </div>
      <h4 className="text-center  mt-4">For One-Stop Solution Since 2008</h4>
      <div className="d-flex justify-content-around align-items-center mt-5">
        <div>
          <FontAwesomeIcon className="service-icons" icon={faBullhorn} />
          <h1 className="text-center mt-3 service-text">Advertisers</h1>
          <button className="d-block mx-auto mt-3  button--pill service-btn">
            <h4 className="text-center  mb-0">Learn More</h4>
          </button>
        </div>
        <div>
          <FontAwesomeIcon className="service-icons" icon={faPaperPlane} />
          <h1 className="text-center mt-3 service-text">Publishers</h1>
          <button className="d-block mx-auto mt-3  button--pill service-btn">
            <h4 className="text-center  mb-0">Learn More</h4>
          </button>
        </div>
        <div>
          <FontAwesomeIcon className="service-icons" icon={faPodcast} />
          <h1 className="text-center mt-3 service-text">Influencers</h1>
          <button className="d-block mx-auto mt-3  button--pill service-btn">
            <h4 className="text-center mb-0">Learn More</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
