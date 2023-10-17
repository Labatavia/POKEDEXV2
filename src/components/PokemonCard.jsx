import React, { useState } from 'react';
import PropTypes from "prop-types";



function PokemonCard({pokemon}) {


    return (



      pokemon.imgSrc ? (

    <figure>
    <img src = {pokemon.imgSrc} />
    {/* <figcaption>{pokemon.name}</figcaption> */}
    </figure>
  )
  :

<div>
    <p>???</p>
    {/* <figcaption>{pokemon.name}</figcaption> */}
</div>

    );
}



PokemonCard.protoTypes = {
  pokemon: PropTypes.shape ({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired
 
  }  

export default PokemonCard;