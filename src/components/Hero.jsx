import React from "react";
import PropTypes from "prop-types";

import {
  intro,
  introMargin,
  introHeadingStyle,
  introLeadInStyle,
  box
} from "../stylesheets/components/Hero.module.sass";

const Hero = ({ introHeading, introLeadIn, resumeButtonText, resumeLink }) => {
  return (
    <header>
      <div className={`${introMargin}`}>
        <div className={`${introHeadingStyle} ${intro}`}>{introHeading}</div>
        <div className={`${introLeadInStyle} ${intro}`}>{introLeadIn}</div>
        <a href={resumeLink} className={box}>
          {resumeButtonText}
        </a>
      </div>
    </header>
  );
};

Hero.propTypes = {
  introHeading: PropTypes.string.isRequired,
  introLeadIn: PropTypes.string.isRequired,
  resumeButtonText: PropTypes.string.isRequired,
  resumeLink: PropTypes.string.isRequired
};

export default Hero;
