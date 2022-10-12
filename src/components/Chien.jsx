import React from "react";
import Navbar from './Navbar';
import style from "./Chien.module.css";
import getRandomBreed from "./Api";


function Chien() {
    return (
        <><div className={style.Navbar2}><Navbar></Navbar></div><form>
            <title className={style.titre}>Le chien</title>
            <label className={style.race}>Race du chien
            </label>
            <p className={style.Age}>Age du chien
            </p>
            <p className={style.Prix}>Prix du chien
            </p>
        </form></>
    )
  }




export default Chien;

   