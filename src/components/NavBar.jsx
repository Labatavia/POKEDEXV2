import React from "react"

function NavBar({pokemonIndex, pokemonList, handlePrevClick, handleNextClick}) {
    return (
        <div>
{pokemonIndex > 0 && (
    <button onClick={handlePrevClick}>Precedent</button>)}
   
  

  {pokemonIndex < pokemonList.length - 1 && (
    <button onClick={handleNextClick}>Suivant</button>
    )}
</div>
    );
}

export default NavBar;