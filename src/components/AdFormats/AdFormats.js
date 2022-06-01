import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./AdFormats.css";

const AdFormats = () => {
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <div className="break-line"></div>
        <h1 className="service-headline mx-3">Versatile Ad Format</h1>
        <div className="break-line"></div>
      </div>
      <div className="container mt-5">
        <div className="d-flex text-center flex-lg-row flex-column">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `ad-format-btn-active button--pill mx-lg-3 mx-auto  d-block mt-lg-0 mt-5`
                : `ad-format-btn button--pill mx-lg-3 mx-auto  d-block mt-lg-0 mt-5`
            }
          >
            <button>POP-UNDER</button>
          </NavLink>
          <NavLink
            to="/banner-ad"
            className={({ isActive }) =>
              isActive
                ? `ad-format-btn-active button--pill mx-lg-3 mx-auto  d-block mt-lg-0 mt-5`
                : `ad-format-btn button--pill mx-lg-3 mx-auto  d-block mt-lg-0 mt-5`
            }
          >
            <button>BANNER AD</button>
          </NavLink>
          <NavLink
            to="/native"
            className={({ isActive }) =>
              isActive
                ? `ad-format-btn-active button--pill mx-lg-3 mx-auto  d-block mt-lg-0 mt-5`
                : `ad-format-btn button--pill mx-lg-3 mx-auto d-block mt-lg-0 mt-5`
            }
          >
            <button>NATIVE</button>
          </NavLink>
          <NavLink
            to="/skim"
            className={({ isActive }) =>
              isActive
                ? `ad-format-btn-active button--pill mx-lg-3 mx-auto  d-block mt-lg-0 mt-5`
                : `ad-format-btn button--pill mx-lg-3 mx-auto  d-block mt-lg-0 mt-5`
            }
          >
            <button>SKIM</button>
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default AdFormats;
