import React from "react";
import { peliculas } from "./data/peliculas";

function App() {
  console.log("Películas cargadas:", peliculas);

  return (
    <div>
      <h1>Lista de Películas</h1>
    </div>
  );
}

export default App;