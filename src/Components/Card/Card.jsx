import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

//le composant a "title", "cover" et "id" en tant que "prop"-s
const Card = ({ title, cover, id }) => (
  <Link className="card" to={`/logement/${id}`}>
    <h3 className="card__title">{title}</h3>
    <img className="card__image" src={cover} alt={title} />
  </Link>
);

export default Card;
