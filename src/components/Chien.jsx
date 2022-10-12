import React from "react";
import Navbar from './Navbar';
import style from "./Chien.module.css";
import getRandomBreed from "./Api";




function Chien() {
    return (
      <form>
        <title className={style.titre}>Créer un chien</title>
        <label className={style.race}>Race du chien
          <input type="text" />
        </label>
        <p className={style.Age}>Age du chien
          <input type="text" />
        </p>
        <p className={style.Prix}>Prix du chien
          <input type="text" />
        </p>
      </form>
    )
  }




export default Chien;

   