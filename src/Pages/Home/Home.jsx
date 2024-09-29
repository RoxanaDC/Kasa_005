import React from "react";
import Banner from "./../../Components/Banner/Banner";
import Card from "./../../Components/Card/Card";
import HomeData from "../../Data/dataLogement.json";

import "./Home.scss";

const Home = () => (
  <main className="home">
    <Banner txt="Chez vous, partout et ailleurs" page="home" />
    <section className="home__container">
      {HomeData.map(({ id, title, cover }) => (
        <Card className="card" key={id} id={id} title={title} cover={cover} />
      ))}
    </section>
  </main>
);

export default Home;
