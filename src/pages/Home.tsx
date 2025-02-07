import { Link } from "react-router-dom";

function WhatIsPostulate() {
  return (
    <section style={{
      backgroundColor: "#f8f9fa",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "20px",
      boxShadow: "0px 2px 4px rgba(0,0,0,0.1)"
    }}>
      <h2>O que é um postulado?</h2>
      <p>
        Um <strong>postulado</strong> é uma afirmação aceita como verdadeira sem necessidade de prova.
        Na matemática, os postulados servem como fundamentos para deduções lógicas e teoremas.
        Os postulados de Euclides formam a base da geometria euclidiana, sendo verdades intuitivas sobre pontos, retas e planos.
      </p>
    </section>
  );
}

function HomePage() {
  return (
    <><div>
      <WhatIsPostulate />
    </div>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>📖 Elementos de Euclides</h1>
        <p>Uma introdução aos princípios fundamentais da geometria euclidiana.</p>
        <ul>
          <li><Link to="/postulado/1">Postulado 1: Traçar uma linha reta entre dois pontos.</Link></li>
        </ul>
      </div></>
  );
}

export default HomePage;
