import React from "react";

export const loadRandomBreed = () => {
    return (dispatch) => {
      return fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(randomBreed => {
          dispatch(getRandomBreed(randomBreed.message))
        })
        .catch(error => console.log(error));
    };
  }
  //génère une image
  const getRandomBreed = randomBreed => {
    return {
      randomBreed
    }
  }