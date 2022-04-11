import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src="" alt="" />
      <div className="title">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <div className="button">
          <a href={props.url}>Live URL</a>
          <a href={props.repo}>Repository</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
