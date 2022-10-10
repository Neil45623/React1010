import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./styles.css";

function App() {
  // hooks
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Information utilisateur
  const database = [
    {
      username: "utilisateur1",
      password: "motdepasse1"
    },
    {
      username: "utilisateur2",
      password: "motdepasse2"
    }
  ];

  const errors = {
    uname: "mauvais utilisateur",
    pass: "mot de passe invalide"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // on trouve les infos de connexion
    const userData = database.find((user) => user.username === uname.value);

    // Comparaison des informations
    if (userData) {
      if (userData.password !== pass.value) {
        // mot de passe mauvais
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Identifiant introuvable
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // message d'erreur
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // formulaire de connexion
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Identifiant </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Mot de passe </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="Login">
      <div className="login-form">
        <div className="title">Connexion</div>
        {isSubmitted ? <div>L'utilisateur est bien connecté</div> : renderForm}
      </div>
    </div>
  );
}

export default App;