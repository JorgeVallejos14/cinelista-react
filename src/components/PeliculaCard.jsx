import React from "react";

function PeliculaCard({ titulo, genero, duracion, clasificacion, sinopsis, horarios, funcionHoy }) {
  const styles = {
    card: {
      border: funcionHoy ? "2px solid green" : "1px solid #ccc", // Resaltar si es función de hoy
      borderRadius: "8px",
      padding: "16px",
      margin: "16px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    titulo: {
      fontSize: "1.5rem",
      marginBottom: "8px",
    },
    etiquetaHoy: {
      display: funcionHoy ? "inline-block" : "none",
      backgroundColor: "green",
      color: "white",
      padding: "4px 8px",
      borderRadius: "4px",
      marginLeft: "8px",
      fontSize: "0.9rem",
    },
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.titulo}>
        {titulo}
        <span style={styles.etiquetaHoy}>HOY</span>
      </h2>
      <p>Género: {genero}</p>
      <p>Duración: {duracion} minutos</p>
      <p>Clasificación: {clasificacion}</p>
      <p>Sinopsis: {sinopsis}</p>
      <div>
        <h4>Horarios:</h4>
        <ul>
          {horarios.map((horario, index) => (
            <li key={index}>{horario}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PeliculaCard;