import React from "react";
import { useState } from "react";

const CaughtPokemon = () => {
  const [caught, setCaught] = useState([]);

  const [pokemonNameInput, setPokemonNameInput] = useState("");

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }
  function resetPokemenName() {
    setPokemonNameInput("");
  }

  const catchPokemon = () => {
    if (pokemonNameInput !== "") {
      // const newPokemon = ["Spearow", "Pikachu", "Ditto"];
      // const randomPokemon = Math.floor(Math.random() * newPokemon.length);
      setCaught(caught.concat(pokemonNameInput));
    }
  };
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Click Me!</button>
      <button onClick={resetPokemenName}>Reset</button>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
      {caught.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </div>
  );
};

export default CaughtPokemon;
