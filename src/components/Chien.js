import React, {useState} from 'react';
import Navbar from './Navbar';
import style from './Chien.module.css'

function Chien() {

  const [dogPic, setDogPic] = useState("");

  async function getPic(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    console.log(data.message);
    setDogPic(data.message); 
  }

  return (
    <><div className={style.Navbar2}><Navbar></Navbar></div><>

          <div className={style.img2}>
          <button className={style.button} onClick={getPic}>Prochaine image</button>
              <img src={dogPic} alt='' />
          </div>
      </></>
  );
}

export default Chien;