import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import style from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/pokemon/${id}`)
      .then(({ data }) => {
        if (data && data.length > 0) {
          setPokemon(data[0]); // Acceder al primer elemento del array para obtener el objeto pokémon
        }
      })
      .catch((error) => {
        console.log("Error al obtener el pokémon:", error);
      });
  }, [id]);

  console.log(pokemon);

  if (Object.keys(pokemon).length > 0) {
    return (
      <div className={style.Detail}>
        <div className={style.ImageContainer}>
        <img src={pokemon.image} alt="" className={style.Image}/>
        </div>
       <div className={style.text}> <p>Id: {pokemon.id}</p>
        <p>Name: {pokemon.name}</p>
        <p>Hp: {pokemon.hp}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        {pokemon.speed? <p>Speed: {pokemon.speed}</p>: <p>No speed stats</p>}
        {pokemon.height? <p>Height: {pokemon.height}</p>: <p>No height stats</p>}
        {pokemon.weight? <p>Weight: {pokemon.weight}</p>: <p>No weight stats</p>}
         <p>Types: {pokemon.types.join(", ")}</p>
         </div>
        <Link to="/Home">
          <button className={style.ButtonBack}>Back</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={style.loading}>
        <p>Loading...</p>
        <img
        src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
        alt="Loading"
        className={style.loadingImage}
    />
      </div>
    );
  }
};

export default Detail;