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
      <button className="portada-btn">Continuar</button>
    </section>
  );
}

export default Portada;




