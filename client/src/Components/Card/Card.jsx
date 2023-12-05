import React from "react";
import { Link } from "react-router-dom";
import style from './Card.module.css';

const Card = ({ name, image, id, types }) => {
  return (
    <div className={style.Card}>
    <div>
      <h1 className={style.CardName}>{name}</h1>
      <Link to={`/Detail/${id}`}>
      <img src={image} alt="" className={style.CardImage} />
    </Link>
      <h1 className={style.CardType}>{types.join(", ")}</h1>
    </div>
    </div>
  );
};

export default Card; 