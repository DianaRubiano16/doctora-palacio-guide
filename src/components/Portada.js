import React from "react";
import "./Portada.css";
import portada from "../assets/portada.png"; // asegúrate de tenerla en /src/assets

function Portada() {
  return (
    <section className="portada-container">
      <img
        src={portada}
        alt="Portada Dra. Ximena Palacio"
        className="portada-img"
      />
      <button className="portada-btn">Continuar</button>
    </section>
  );
}

export default Portada;





