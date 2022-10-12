import { useState } from 'react'; 
// on importe le hooks useState
 
//Ici nous avons donc la fonction useInput avec ces différentes variables et valeur par défaut
const useInput = (validateValue) => { 

  const [enteredValue, setEnteredValue] = useState(''); 

  const [isTouched, setIsTouched] = useState(false); 

  // variable de quand cela fonctionne

  const valueIsValid = validateValue(enteredValue); 

  // variable d'erreur

  const hasError = !valueIsValid && isTouched; 


  //Ici on défini notre input par la valeur entrée. Permet de garder la valeur lors de la validation du formulaire
  const valueChangeHandler = (event) => { 

    setEnteredValue(event.target.value); 

  }; 
// Ici la fonction traite l'evenement et detecte si le input est entrain d'etre complété
  const inputBlurHandler = (event) => { 

    setIsTouched(true); 
    console.log(isTouched)
  }; 
//Ici on a une fonction qui efface le champs input 
  const reset = () => { 

    setEnteredValue(''); 

    setIsTouched(false); 

  }; 

 
 
// ici on retourne un objet avec les valeur des fonctions
  return { 

    value: enteredValue, 

    isValid: valueIsValid, 

    hasError, 

    valueChangeHandler, 

    inputBlurHandler, 

    reset 

  }; 

}; 

 
 
//On exporte la fonction useInput
export default useInput; 

 
 

 