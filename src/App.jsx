import React, { useState } from "react";
import { peliculas } from "./data/peliculas";
import ListaPeliculas from "./components/ListaPeliculas";
import FiltroClasificacion from "./components/FiltroClasificacion";

function App() {
  const [filtroClasificacion, setFiltroClasificacion] = useState("Todas");
  const [filtroTitulo, setFiltroTitulo] = useState("");

  // Filtrar las películas según la clasificación y el título
  const peliculasFiltradas = peliculas.filter((pelicula) => {
    const coincideClasificacion =
      filtroClasificacion === "Todas" || pelicula.clasificacion === filtroClasificacion;
    const coincideTitulo = pelicula.titulo.toLowerCase().includes(filtroTitulo.toLowerCase());
    return coincideClasificacion && coincideTitulo;
  });

  return (
    <div>
      <h1>Lista de Películas</h1>
      <FiltroClasificacion
        filtroClasificacion={filtroClasificacion}
        setFiltroClasificacion={setFiltroClasificacion}
        filtroTitulo={filtroTitulo}
        setFiltroTitulo={setFiltroTitulo}
      />
      {peliculasFiltradas.length > 0 ? (
        <ListaPeliculas peliculas={peliculasFiltradas} />
      ) : (
        <p>No hay películas que coincidan</p>
      )}
    </div>
  );
}

export default App;