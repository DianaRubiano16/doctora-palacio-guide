import React from "react";
import "./Portada.css";

function Portada() {
  return (
    <section className="portada-container">
      <img
        src="/img/portada.png"
        alt="Portada Dra. Ximena Palacio"
        className="portada-img"
      />
      <div className="portada-overlay">
        <button className="btn-continuar">Continuar</button>
      </div>
    </section>
  );
}

export default Portada;

