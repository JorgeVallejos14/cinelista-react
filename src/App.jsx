import React from "react";
import { peliculas } from "./data/peliculas";
import ListaPeliculas from "./components/ListaPeliculas";

function App() {
  console.log("Películas cargadas:", peliculas);

  return (
    <div>
      <h1>Lista de Películas</h1>
      <ListaPeliculas peliculas={peliculas} />
    </div>
  );
}

export default App;