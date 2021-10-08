// import logo from "./logo.svg";
import "./App.css";
import React from "react";

function Header() {
  return(
    <div>
      <h1>Break out room 5</h1>
    </div>
  );
}

function AttendeeList() {
  return(
    <ul>
      <li>Mya</li>
      <li>Bee</li>
      <li>Maha</li>
      <li>Oneil</li>
      <li>Erin</li>
    </ul>
  );
}

function App() {

  return(
    <div>
      <Header />
      <AttendeeList />
    </div>
  );


  // const h1 = React.createElement("h1", { children : "Hello North West Class!" } );

  // const h1 = <h1>Hello World!</h1>;
  // return h1;

  // return <h2>Hello World!</h2>;
}

export default App;
