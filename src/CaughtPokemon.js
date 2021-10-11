import React from "react";
import { useState } from "react";

const CaughtPokemon = () => {
  const [caught, setCaught] = useState([]);

  const catchPokemon = () => {
    const newPokemon = ["Spearow", "Pikachu", "Ditto"];
    const randomPokemon = Math.floor(Math.random() * newPokemon.length);
    setCaught(caught.concat(newPokemon[randomPokemon]));
  };
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <button onClick={catchPokemon}>Click Me!</button>
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
