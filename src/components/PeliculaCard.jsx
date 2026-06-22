import React from "react";

function PeliculaCard({ titulo, genero, duracion, clasificacion, sinopsis, horarios }) {
  // Estilos generales
  const styles = {
    card: {
      border: "1px solid #ccc",
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
    genero: {
      margin: "4px 0",
    },
    duracion: {
      margin: "4px 0",
    },
    sinopsis: {
      margin: "4px 0",
    },
    horarios: {
      paddingLeft: "20px",
    },
  };

  // Estilos según la clasificación
  const clasificacionStyles = {
    TE: { color: "green", fontWeight: "bold" },
    "+14": { color: "orange", fontWeight: "bold" },
    "+18": { color: "red", fontWeight: "bold" },
    default: { color: "gray", fontWeight: "bold" },
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.titulo}>{titulo}</h2>
      <p style={styles.genero}>Género: {genero}</p>
      <p style={styles.duracion}>Duración: {duracion} minutos</p>
      <p style={clasificacionStyles[clasificacion] || clasificacionStyles.default}>
        Clasificación: {clasificacion}
      </p>
      <p style={styles.sinopsis}>Sinopsis: {sinopsis}</p>
      <div>
        <h4>Horarios:</h4>
        <ul style={styles.horarios}>
          {horarios.map((horario, index) => (
            <li key={index}>{horario}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PeliculaCard;