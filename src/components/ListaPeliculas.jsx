import React from "react";
import PeliculaCard from "./PeliculaCard";

function ListaPeliculas({ peliculas }) {
  return (
    <div>
      {peliculas.map((pelicula) => (
        <PeliculaCard
          key={pelicula.id} // Usar el id como key
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

export default ListaPeliculas;