import React from "react";
import { peliculas } from "./data/peliculas";
import PeliculaCard from "./components/PeliculaCard";

function App() {
  console.log("Películas cargadas:", peliculas);

  return (
    <div>
      <h1>Lista de Películas</h1>
      {peliculas.map((pelicula) => (
        <PeliculaCard
          key={pelicula.id}
          titulo={pelicula.titulo}
          genero={pelicula.genero}
          duracion={pelicula.duracion}
          clasificacion={pelicula.clasificacion}
          sinopsis={pelicula.sinopsis}
          horarios={pelicula.horarios}
        />
      ))}
    </div>
  );
}

export default App;