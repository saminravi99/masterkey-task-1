import React from 'react';
import digitalHero from "../../img/digital-hero.png"
import "./Hero.css"

const Hero = () => {
    return (
      <div className="d-flex flex-lg-row flex-column-reverse  align-items-center container">
        <div className="hero-info mt-lg-0 mt-4 text-lg-start text-center">
          <h1>Digital Superheroes</h1>
          <p>
            In the last 12 years, Analyzen evolved from a local digital-first
            marketing company to offering an integrated mix of strategy,
            analytics, creativity, technology, media and experience to drive
            meaningful innovation in communication through multi-country
            presence.
          </p>
        </div>
        <div>
          <img
            src={digitalHero}
            className="hero-img"
            alt="hero"
          />
        </div>
      </div>
    );
};

export default Hero;