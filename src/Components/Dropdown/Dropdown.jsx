import React, { useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({ title, content, page }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prevOpen) => !prevOpen);

  return (
    <div className="dropdown">
      <div
        className={`dropdown__button dropdown__button--${page}`}
        onClick={toggleDropdown}
      >
        {title}
        <img
          className={`dropdown__button__arrow dropdown__button__arrow--${page} dropdown__button__arrow--${
            open ? "open" : "close"
          }`}
          src="/arrow_down.png"
          alt="Dropdown icon"
        />
      </div>
      <ul
        className={`dropdown__list dropdown__list--${open ? "open" : "close"}`}
      >
        {Array.isArray(content) ? (
          content.map((item, index) => (
            <li
              className={`dropdown__list__item dropdown__list__item--${page}`}
              key={index}
            >
              {item}
            </li>
          ))
        ) : (
          <li className={`dropdown__list__item dropdown__list__item--${page}`}>
            {content}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
