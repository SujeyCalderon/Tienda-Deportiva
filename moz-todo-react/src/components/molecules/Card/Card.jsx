import React from "react";
import Img from "../../atoms/Img/Img";
import H5 from "../../atoms/H5/H5";
import P from "../../atoms/P/P";
import Button from "../../atoms/Button/Button";

const Card = ({ imgSrc, imgAlt, title, text, buttonClass, buttonContent }) => {
  return (
    <div className="card">
      <Img src={imgSrc} className="card-img-top" alt={imgAlt} />
      <div className="card-body">
        <H5 className="card-title">{title}</H5>
        <P className="card-text">{text}</P>
        <Button className={buttonClass} contenido={buttonContent} />
      </div>
    </div>
  );
};

export default Card;
