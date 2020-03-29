import React from "react";
import PropTypes from "prop-types";
import {
  dark,
  thickDark,
  light,
  thickLight,
} from "../../stylesheets/components/Footer/HorizontalRuler.module.sass";

const HorizontalRuler = ({ isDark, isThick, className }) => {
  return (
    <hr
      className={`${className} ${
        // eslint-disable-next-line no-nested-ternary
        isDark ? (isThick ? thickDark : dark) : isThick ? thickLight : light
      }`}
    />
  );
};

HorizontalRuler.propTypes = {
  isDark: PropTypes.bool,
  isThick: PropTypes.bool,
  className: PropTypes.string,
};

HorizontalRuler.defaultProps = {
  isDark: false,
  isThick: false,
  className: null,
};

export default HorizontalRuler;
