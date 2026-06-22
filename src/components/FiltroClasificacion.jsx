import React from "react";

function FiltroClasificacion({ filtroClasificacion, setFiltroClasificacion, filtroTitulo, setFiltroTitulo }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label>
        Clasificación:
        <select
          value={filtroClasificacion}
          onChange={(e) => setFiltroClasificacion(e.target.value)}
          style={{ marginLeft: "8px" }}
        >
          <option value="Todas">Todas</option>
          <option value="TE">TE</option>
          <option value="+14">+14</option>
          <option value="+18">+18</option>
        </select>
      </label>
      <label style={{ marginLeft: "16px" }}>
        Buscar por título:
        <input
          type="text"
          value={filtroTitulo}
          onChange={(e) => setFiltroTitulo(e.target.value)}
          placeholder="Escribe un título..."
          style={{ marginLeft: "8px" }}
        />
      </label>
    </div>
  );
}

export default FiltroClasificacion;