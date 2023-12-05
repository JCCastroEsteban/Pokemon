import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { orderName, orderOrigin, orderAttack, orderTypes } from "../../Redux/Actions/Actions";
import SearchBar from "../Searchbar/Searchbar";
import style from './NavBar.module.css';

const NavBar=()=>{
   const dispatch= useDispatch();
  const allTypes= useSelector((state) => state.Types);
 
  const NameHandler=(event)=>{dispatch(orderName(event.target.value))};
  const AttackHandler=(event)=>{dispatch(orderAttack(event.target.value)) };
  const OriginHandler=(event)=>{ dispatch(orderOrigin(event.target.value))};
  const TypeHandler=(event)=>{ dispatch(orderTypes(event.target.value))};
    return (
      <div>
        <div>
          <SearchBar/>
          </div>
      <div className={style.NavBar}>
          <select onClick={NameHandler} className={style.Alphabetical}>
           <option value='All'>ALL</option>
           <option value='Az'>A-Z</option>
           <option value='Za'>Z-A</option>
          </select>

          <select onClick={AttackHandler} className={style.Attack}>
          <option value='All'>ATTACK</option>
          <option value='Max'>MAX</option>
          <option value='Min'>MIN</option>
          </select>

          <select onClick={OriginHandler} className={style.Origin}>
            <option value='All'>ORIGIN</option>
            <option value='Api'>API</option>
            <option value='Created'>CREATED</option>
          </select>
          
          <select onClick={TypeHandler} className={style.Types}>
          <option value="All">TYPES</option>
          {allTypes?.map((e) => {
            return (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
        

        </div>
        </div>
    )

}

export default NavBar;