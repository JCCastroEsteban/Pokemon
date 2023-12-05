import Validate from "./Validate";
import{Link} from 'react-router-dom'
import axios from "axios";
import { useState} from "react"
import { useSelector, useDispatch } from "react-redux";
import { allTypes } from "../../Redux/Actions/Actions";
import { useEffect } from "react";
import style from './Forms.module.css';

const Forms = () => {
   
  const Types = useSelector((state) => state.Types);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    height: "",
    types: [],
  });

  useEffect(() => {
    dispatch(allTypes());
  }, []);

  const [errors, setErrors] = useState({});
  

// Efecto para validar el formulario cuando cambian sus valores
  useEffect(() => {
    const validationErrors = Validate(form);
    setErrors(validationErrors);
  }, [form]);

  // Deshabilitar el botón de envío si hay errores de validación
  const disabledButton = Object.keys(errors).length > 0;

  // Manejar cambios en los campos de entrada del formulario
  const handleInputChange = (event) => {
    const updatedForm = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(updatedForm);
  };

  // Manejar la selección de tipos de Pokémon
  const handleSelect = (e) => {
    const updatedForm = {
      ...form,
      types: [...form.types, e.target.value],
    };
    setForm(updatedForm);
  };

  // Enviar el formulario al servidor
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/pokemon", form)
      .then((res) => {
        window.alert('Successfully created Pokémon.');
        setForm({
          name: '',
          image: '',
          hp: '',
          attack: '',
          defense: '',
          // height: '',
          // weight: '',
          // speed: '',
          types: []
        });
      })
      .catch((err) => {
        window.alert('You already created a pokemon with that name');
      });
  };

    return (
    <div className={style.Forms}>
      <h2 className={style.Title}>FORM PAGE</h2>
      <form onSubmit={handleSubmit} className={style.FormContainer}>
        <label className={style.FormLabel}>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleInputChange} />
          {errors.name? <p  className={style.Error}>{errors.name}</p>:<p></p>}
        </label>

        <label className={style.FormLabel}>
            Image (image link):
            <input type="text" name="image" value={form.image} onChange={handleInputChange}/>
            {errors.image? <p  className={style.Error}>{errors.image}</p>:<p></p>}
        </label>
           
        <label className={style.FormLabel}>
            Hp:
            <input type="text" name="hp" value={form.hp} onChange={handleInputChange}/>
            {errors.hp? <p  className={style.Error}>{errors.hp}</p>:<p></p>}
        </label>
        
        <label className={style.FormLabel}>
           Attack:
            <input type="text" name="attack" value={form.attack} onChange={handleInputChange}/>
            {errors.attack? <p  className={style.Error}> {errors.attack}</p>:<p></p>}
        </label> 

        <label className={style.FormLabel}>
            Defense:
            <input type="text" name="defense" value={form.defense} onChange={handleInputChange}/>
            {errors.defense? <p  className={style.Error}>{errors.defense}</p>:<p></p>}
        </label>

        <label className={style.FormLabel}>
         Height:
            <input type="text" name="height" value={form.height} onChange={handleInputChange}/>
            {errors.height? <p  className={style.Error}>{errors.height}</p>:<p></p>}
        </label>
        
        <label className={style.FormLabel}>
            Weight:
            <input type="text" name="weight" value={form.weight} onChange={handleInputChange}/>
            {errors.weight? <p  className={style.Error} >{errors.weight}</p>:<p></p>}
        </label>
        
        <label className={style.FormLabel}>
            Speed:
            <input type="text" name="speed" value={form.speed} onChange={handleInputChange}/>
            {errors.speed? <p className={style.Error} >{errors.speed}</p>:<p></p>}
        </label>

         <label className={style.FormLabel}>Types:</label>
              <select
               className={style.FormSelect}
                onChange={(e) => handleSelect(e)}>
                {Types.map((t, index) => (
                  <option key={index} value={t.name}>
                    {t.name}
                  </option>
                ))}
              </select>
              <div className={style.Buttons}>
        <button
          type="submit"
          className={style.SubmitButton}
          disabled={disabledButton}
        >
          Create Pokémon
        </button>
        <Link to={'/Home'} className={style.LinkButton}>
          <button className={style.DoneButton}>Done</button>
          <button>BACK</button>
        </Link>
      </div>
      </form>
    </div>
  );
}

export default Forms