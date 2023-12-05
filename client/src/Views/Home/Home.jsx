// Importación de módulos y componentes necesarios
import React, { useEffect, useState } from "react";
import style from './HomePage.module.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allPokemons, allTypes } from "../../Redux/Actions/Actions"
import Cards from "../../Components/Cards/Cards";
import NavBar from "../../Components/NavBar/NavBar";

const Home = () => {
  // Uso de 'useSelector' para obtener datos del estado global de Redux
  const pokemons = useSelector((state) => state.Pokemons);
  const name = useSelector((state) => state.PokemonName);
  const attack = useSelector((state) => state.OrderAttack);
  const orderName = useSelector((state) => state.OrderName);
  const orderOrigin = useSelector((state) => state.OrderOrigin);
  const orderTypes = useSelector((state) => state.OrderTypes);
  const Error= useSelector((state)=> state.Failure);
  // Estado local para almacenar los datos actuales a mostrar en la página
  const [currentData, setCurrentData] = useState([]);
  const [error, setError] = useState('');
  // Uso de 'useDispatch' para acceder al despachador de Redux
  const dispatch = useDispatch();

  // Efecto de carga inicial para obtener datos de la API usando Redux
  useEffect(() => {
    dispatch(allPokemons());
    dispatch(allTypes());
  }, [dispatch]);

  // Efecto para actualizar 'currentData' cuando cambian los datos de 'pokemons'
  useEffect(() => {
    setCurrentData(pokemons);
  }, [pokemons]);

  // Efectos similares para actualizar 'currentData' basado en diferentes criterios
  useEffect(() => {
    setCurrentData(name);
  }, [name]);

  useEffect(() => {
    setCurrentData(attack);
  }, [attack]);

  useEffect(() => {
    setCurrentData(orderName);
  }, [orderName]);

  useEffect(() => {
    setCurrentData(orderOrigin);
  }, [orderOrigin]);

  useEffect(() => {
    setCurrentData(orderTypes);
  }, [orderTypes]);

  useEffect(() => {
    setError(Error);
  }, [Error]);

   
  // Configuración para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const cardsToShow = currentData.slice(indexOfFirstCard, indexOfLastCard);

  // Función para cambiar la página actual
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Math.ceil(currentData.length / cardsPerPage);

  // Generación de números de página como botones
  const renderPageNumbers = Array.from({ length: pageNumbers }, (_, index) => (
    <button key={index} onClick={() => paginate(index + 1)}>
      {index + 1}
    </button>
  ));

  return (
    <div className={style.HomePage}>
      <div>
        <Link to="/">
          <button className={style.botonLeave}>LEAVE</button>
        </Link>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokemon Title"
            className={style.ImagenTitle}
          />
        </div>
        <Link to="/Form">
          <button className={style.BotonCrear}>CREATE POKEMON</button>
        </Link>
      </div>
      <NavBar />
      <Cards currentData={cardsToShow} Error={error} />
      <div className={style.Pagination}>
        {renderPageNumbers}
      </div>
    </div>
  );
};

export default Home;