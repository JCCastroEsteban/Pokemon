import { Link } from "react-router-dom"
import style from './Landing.module.css'
const Landing = () => {
    return ( 
        <div className={style.fondoLanding}>
          <Link to={'/Home'}>
          <button className={style.botonInicio}>ENTER</button>
          </Link>
          <h1 className={style.h1Inicio}>MAS DE 100 POKEMON</h1>
        </div>
    )
}

export default Landing