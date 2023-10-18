import React from "react"

function NavBar({ pokemonIndex, pokemonList, setPokemonIndex }) {
    return (<div>
        {pokemonList.map((pokemon, index) => {
            return <button key={index} onClick={() => { setPokemonIndex(index) }}>
                {pokemon.name}
            </button>
        })}

    </div>);
}


{/* {pokemonIndex > 0 && (
    <button onClick={handlePrevClick}>Precedent</button>)}
   
  

  {pokemonIndex < pokemonList.length - 1 && (
    <button onClick={handleNextClick}>Suivant</button>
    )} */}



export default NavBar;