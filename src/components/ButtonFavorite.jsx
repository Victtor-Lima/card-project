import React from 'react';
import { handleFavoriteAction } from '../utilityFunctions/handleFavoriteAction';
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import './ButtonFavorite.css'

const ButtonFavorite = ({ addToFavorites }) => {
  const arrParamFavorites = [
    addToFavorites[0], 
    addToFavorites[1][0], 
    addToFavorites[1][1], 
    addToFavorites[2]
  ];

  return (
    <div onClick={() => handleFavoriteAction(arrParamFavorites)} className='button-favorite'>
    { addToFavorites[1][0].find((item) => item.id === addToFavorites[0].id) ?
      <MdOutlineFavorite color="red" size="1.1em"/> :
      <MdFavoriteBorder size="1.1em"/>
    }
  </div>
  )
}

export default ButtonFavorite;