import { useState } from 'react'
import PokemonCard from "./components/PokemonCard"

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)
  const handleNextClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  }

  const handlePrevClick = () => {
    setPokemonIndex(pokemonIndex - 1);
  }

  return (<div>
    
 
  <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
     {pokemonIndex > 0 && (
      <button onClick={handlePrevClick}>Precedent</button>)}
     
    

    {pokemonIndex < pokemonList.length - 1 && (
      <button onClick={handleNextClick}>Suivant</button>)}
    
    
    
  </div>);



  // const pokemon = pokemonList[0] 
  
  

}





export default App
