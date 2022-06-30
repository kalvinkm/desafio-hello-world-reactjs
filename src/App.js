import React from "react";
import './App.css'




/* Componentes */ 

import HelloWorldOne from "./components/HelloWorldOne";
import HelloWorldTwo from "./components/HelloWorldTwo";
import HelloWorldThree from "./components/HelloWorldThree";
import HelloWorldFour from "./components/HelloWorldFour";
import HelloWorldSix from "./components/HelloWorldSix";

function App() {
  return (
    <div className="App">
        <HelloWorldOne />
        <HelloWorldTwo />
        <HelloWorldThree title="Ola Mundo" subtitle="Props"/>
        <HelloWorldFour title="Ola Mundo">
            <p>Componente usando Props Children</p>
        </HelloWorldFour>
        <HelloWorldSix />
    </div>
  );
}

export default App;
