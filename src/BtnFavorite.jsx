import React from 'react';
import { handleFavoriteAction } from './handleFavoriteAction';
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

const BtnFavorite = ({ addToFavorites }) => {
  const arrParamFavorites = [
    addToFavorites[0], 
    addToFavorites[1][0], 
    addToFavorites[1][1], 
    addToFavorites[2]
  ];

  return (
    <div onClick={() => handleFavoriteAction(arrParamFavorites)}>
    { addToFavorites[1][0].find((item) => item.id === addToFavorites[0].id) ?
      <MdOutlineFavorite /> :
      <MdFavoriteBorder />
    }
  </div>
  )
}

export default BtnFavorite;