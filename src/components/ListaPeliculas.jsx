import React from "react";
import PeliculaCard from "./PeliculaCard";

function ListaPeliculas({ peliculas }) {
  return (
    <div>
      {peliculas.map((pelicula) => (
        <PeliculaCard
          key={pelicula.id}
          titulo={pelicula.titulo}
          genero={pelicula.genero}
          duracion={pelicula.duracion}
          clasificacion={pelicula.clasificacion}
          sinopsis={pelicula.sinopsis}
          horarios={pelicula.horarios}
          funcionHoy={pelicula.funcionHoy} // Pasar la propiedad funcionHoy
        />
      ))}
    </div>
  );
}

export default ListaPeliculas;