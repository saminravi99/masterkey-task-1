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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `ad-format-btn-active button--pill mx-3`
              : `ad-format-btn button--pill mx-3`
          }
        >
          <button>POP-UNDER</button>
        </NavLink>
        <NavLink
          to="/banner-ad"
          className={({ isActive }) =>
            isActive
              ? `ad-format-btn-active button--pill mx-3`
              : `ad-format-btn button--pill mx-3`
          }
        >
          <button>BANNER AD</button>
        </NavLink>
        <NavLink
          to="/native"
          className={({ isActive }) =>
            isActive
              ? `ad-format-btn-active button--pill mx-3`
              : `ad-format-btn button--pill mx-3`
          }
        >
          <button>NATIVE</button>
        </NavLink>
        <NavLink
          to="/skim"
          className={({ isActive }) =>
            isActive
              ? `ad-format-btn-active button--pill mx-3`
              : `ad-format-btn button--pill mx-3`
          }
        >
          <button>SKIM</button>
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default AdFormats;
