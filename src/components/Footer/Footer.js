import {
  faBell,
  faEnvelopeSquare,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer class="footer-section">
        <div class="container">
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-3 col-lg-3 mb-50">
                <div class="footer-widget">
                  <div class="footer-text text-lg-end text-center">
                    <h4>We Are Social</h4>
                  </div>
                  <div class="footer-social-icon text-lg-end text-center">
                    <span>Follow us</span>
                    <div className="icon-container">
                      <Link to="/">
                        <FontAwesomeIcon icon={faEnvelopeSquare} />
                      </Link>
                      <Link to="/">
                        <FontAwesomeIcon icon={faBell} />
                      </Link>
                      <Link to="/">
                        <FontAwesomeIcon icon={faLocationPin} />
                      </Link>
                    </div>
                  </div>
                  <div class="footer-logo mt-4">
                    <a href="/">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/com.analyzen.website/website/assets/images/logo.svg"
                        class="img-fluid"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/">Advertisers</Link>
                    </li>
                    <li>
                      <Link to="/">Publishers</Link>
                    </li>
                    <li>
                      <Link to="/">Influencers</Link>
                    </li>
                    <li>
                      <Link to="/">Ad Formats</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xl-3 col-lg-3 col-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Documentation</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Cancellation Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading mt-lg-0 mt-4">
                    <h3>Support</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/">Media Kit</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
