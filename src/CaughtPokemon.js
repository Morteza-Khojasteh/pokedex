import React from "react";

const CaughtPokemon = () => {
    const date = new Date().toLocaleDateString();
    return (
      <div>
        <p>Caught 0 Pokemon on {date}</p>
      </div>
    );
};

export default CaughtPokemon;