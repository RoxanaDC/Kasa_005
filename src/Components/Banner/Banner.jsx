import React from "react";
import "./Banner.scss";

const Banner = ({ page, txt }) => (
  <div className={`banner banner--mobile banner--${page}`}>
    <div>
      <span className="banner__text">{txt}</span>
    </div>
  </div>
);

export default Banner;
