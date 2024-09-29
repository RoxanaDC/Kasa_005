import React from "react";
import "./Host.scss";

const Host = ({ name, picture }) => {
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="host">
      <div>
        <p className="host__name host__name--firstName">{firstName}</p>
        <p className="host__name host__name--lastName">{lastName}</p>
      </div>
      <img src={picture} alt={name} className="host__picture" />
    </div>
  );
};

export default Host;
