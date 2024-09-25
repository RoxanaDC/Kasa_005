import React from "react";
import "./Banner.scss";

function Banner({ page, txt }) {
  return (
    <section className={"banner banner--mobile banner--" + page}>
      <div>
        <span className="banner__txt">{txt}</span>
      </div>
    </section>
  );
}

export default Banner;
