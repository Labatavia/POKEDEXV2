import React, { useState } from 'react';




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



  

export default PokemonCard;