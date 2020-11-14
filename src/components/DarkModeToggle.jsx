import React from "react";
import PropTypes from "prop-types";
import storage from "local-storage-fallback";
import {
  sun,
  moon,
  darkModeToggle,
  crescent,
} from "../stylesheets/components/DarkModeToggle.module.sass";

const onClickWrapper = (onClickMethod, isDark, darkModeToggledEvent) => {
  onClickMethod(isDark);
  storage.setItem("theme", isDark.toString());
  dispatchEvent(darkModeToggledEvent);
};

const DarkModeToggle = ({ isDark, onClickMethod }) => {
  const darkModeToggledEvent = new CustomEvent("darkModeToggled", {detail: isDark});

  return (
    <button
      type="button"
      aria-label="Dark Mode Toggle"
      onClick={(_) => onClickWrapper(onClickMethod, !isDark, darkModeToggledEvent)}
      className={`${isDark ? moon : sun} ${darkModeToggle}`}
    >
      <div className={crescent} />
    </button>
  );
};

DarkModeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onClickMethod: PropTypes.func.isRequired,
};

export default DarkModeToggle;
