import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  const errorMessage = "Oups! La page que vous demandez n'existe pas.";
  const headingText = "404";
  const linkText = "Retourner sur la page d'accueil";

  return (
    <main className="error">
      <h1 className="error__heading">{headingText}</h1>
      <p className="error__paragraph">{errorMessage}</p>
      <Link className="error__link" to="/">
        {linkText}
      </Link>
    </main>
  );
};

export default Error;
