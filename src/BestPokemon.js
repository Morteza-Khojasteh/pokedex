import React from "react";

const BestPokemon = (props) => {
    // const abilities  = ["Anticipation", "Adaptability", "Run-Away"];
    return(
      <div>
        <p>My favorite Pokemon is Red</p>
        <div>
          <ul>
          {props.abilities.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
          </ul>
        </div>
      </div>
    );
};

export default BestPokemon;