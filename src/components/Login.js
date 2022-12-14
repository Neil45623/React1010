import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import Navbar from "./Navbar";


function Login() {

  // Statut
  const [errorMessages] = useState({});
  const [isSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    navigate("/Dashboard")
  };

  //   erreur message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="erreur">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
   <div className={style.loginform}>
    
      <form onSubmit={handleSubmit}>
        <div className={style.inputcontainer}>
          <label>Identifiant </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className={style.inputcontainer}>
          <label>Mot de passe </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className={style.button}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <><div className={style.Navbar2}><Navbar></Navbar></div><div className={style.form}>

      <div className={style.loginform}>
        <div className={style.title}>Connexion</div>
        {isSubmitted ? <div>Vous êtes bien connecté</div> : renderForm}
      </div>
    </div></>
  );


}


export default Login;