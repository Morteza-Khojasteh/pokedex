// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];

function App() {
  function logWhenClicked() {
    console.log("Button was clicked");
  }
  return (
    <div>
      <Logo handleClick={logWhenClicked} appName="Pokedex" />
      {/* <Logo appName="Pokedex" /> */}
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />
    </div>
  );
}

export default App;
