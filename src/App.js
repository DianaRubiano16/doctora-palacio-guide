import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <img 
        src="/img/portada.png" 
        alt="Portada Dra. Ximena Palacio" 
        className="portada-img"
      />
      <h1 className="titulo">Dra. Ximena Palacio</h1>
      <button className="btn-continuar">Continuar</button>
    </div>
  );
}

export default App;