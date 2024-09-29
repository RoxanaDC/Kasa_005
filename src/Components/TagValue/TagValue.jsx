import React from "react";
import "./TagValue.scss";

const TagValue = ({ tags }) => (
  <div className="tagValue">
    <ul className="tagValue__container">
      {tags.map((tag, index) => (
        <li className="tag" key={index}>
          {tag}
        </li>
      ))}
    </ul>
  </div>
);

export default TagValue;
