import {React, useState}from "react";
import { useDispatch } from "react-redux";
import { PokemonByName, allPokemons} from "../../Redux/Actions/Actions";
import style from './Searchbar.module.css'

const SearchBar=()=>{
  const dispatch= useDispatch();
  // Estado local para almacenar el valor de búsqueda
  const [searchValue, setSearchValue]=useState('')

  // Manejar el cambio en el campo de búsqueda
  const HandleChange=(event)=>{
    setSearchValue(event.target.value);
  }
   // Realizar una búsqueda y despachar una acción para obtener Pokémon por nombre
  const HandleSearch=()=>{
    dispatch(PokemonByName(searchValue))
    setSearchValue('')}

     // Restaurar la lista de todos los Pokémon
     const HandleQuit=()=>{
            dispatch(allPokemons())
           }

    return(
        <div className={style.searchBar}>
      <input type="search" onChange={HandleChange} value={searchValue}  className={style.searchInput} /> 
      <button onClick={HandleSearch} className={style.searchButton}>Search</button>
      <button onClick={HandleQuit} className={style.quitButton}>Quit</button>
    </div>
    )
}

export default SearchBar