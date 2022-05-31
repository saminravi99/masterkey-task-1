import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center container">
        <Navbar.Brand href="#home" className="m-4">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/com.analyzen.website/website/assets/images/logo.svg"
            alt="logo"
          />
        </Navbar.Brand>
        <div className="m-4">
          <NavLink
            className={({ isActive }) =>
              isActive ? `lang-btn active-lang-btn` : `lang-btn`
            }
            to="/bn"
          >
            BN
          </NavLink>{" "}
          <span>/</span>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive ? `lang-btn active-lang-btn` : `lang-btn`
            }
            to="/"
          >
            EN
          </NavLink>
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg">
        <div className="container">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `nav-fonts active-link mx-3 mt-lg-0 mt-3`
                    : `inactive-link mx-3 nav-fonts mt-lg-0 mt-3`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/advertiders"
                className={({ isActive }) =>
                  isActive
                    ? `nav-fonts active-link mx-3 mt-lg-0 mt-3`
                    : `inactive-link nav-fonts mx-3 mt-lg-0 mt-3 `
                }
              >
                Advertisers
              </NavLink>
              <NavLink
                to="/publishers"
                className={({ isActive }) =>
                  isActive
                    ? `nav-fonts active-link mx-3 mt-lg-0 mt-3`
                    : `inactive-link nav-fonts mx-3 mt-lg-0 mt-3`
                }
              >
                Publishers
              </NavLink>
              <NavLink
                to="/influencers"
                className={({ isActive }) =>
                  isActive
                    ? `nav-fonts active-link mx-3 mt-lg-0 mt-3`
                    : `inactive-link nav-fonts mx-3 mt-lg-0 mt-3`
                }
              >
                Influencers
              </NavLink>
              <NavLink
                to="/ad-formats"
                className={({ isActive }) =>
                  isActive
                    ? `nav-fonts active-link mx-3 mt-lg-0 mt-3`
                    : `inactive-link nav-fonts mx-3 mt-lg-0 mt-3`
                }
              >
                Ad Formats
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? `nav-fonts active-link mx-3 mt-lg-0 mt-3`
                    : `inactive-link nav-fonts mx-3 mt-lg-0 mt-3`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? `nav-fonts active-link mx-3 mt-lg-0 mt-3`
                    : `inactive-link nav-fonts mx-3 mt-lg-0 mt-3`
                }
              >
                Contact Us
              </NavLink>
            </Nav>
            <Nav>
              <div className="button button--pill d-flex justify-content-around align-items-center mt-lg-0 mt-3">
                <NavLink eventKey={2} to="/login" className="nav-fonts">
                  <button class="login-btn">Login</button>
                </NavLink>
                <NavLink eventKey={2} to="/signup" className="nav-fonts">
                  <button class="sign-up-btn">Sign Up</button>
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
