import React from "react";
import Banner from "./../../Components/Banner/Banner";
import Dropdown from "./../../Components/Dropdown/Dropdown";
import AboutData from "../../Data/dataAbout.json";
import "./About.scss";

const About = () => (
  <main className="about">
    <Banner txt="" page="about" />
    {AboutData.map(({ title, description }) => (
      <Dropdown
        className="dropdown"
        key={title}
        title={title}
        content={description}
        page="about"
      />
    ))}
  </main>
);

export default About;
