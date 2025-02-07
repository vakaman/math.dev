import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Postulado1() {
  const [showFirstPoint, setShowFirstPoint] = useState(false);
  const [showSecondPoint, setShowSecondPoint] = useState(false);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowFirstPoint(true), 500); // Mostra o primeiro ponto
    setTimeout(() => setShowSecondPoint(true), 1000); // Mostra o segundo ponto
    setTimeout(() => setShowLine(true), 1500); // Desenha a linha
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <h1>Postulado 1</h1>
      <p>É possível traçar uma linha reta de qualquer ponto a qualquer ponto.</p>

      <svg width="300" height="150">
        {/* Primeiro ponto */}
        {showFirstPoint && <circle cx="50" cy="75" r="5" fill="red" />}
        {/* Segundo ponto */}
        {showSecondPoint && <circle cx="250" cy="75" r="5" fill="blue" />}
        {/* Linha animada */}
        {showLine && (
          <line
            x1="50"
            y1="75"
            x2="250"
            y2="75"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="200"
            strokeDashoffset="200"
            style={{
              animation: "drawLine 1s linear forwards",
            }}
          />
        )}
      </svg>

      {/* Animação CSS */}
      <style>
        {`
          @keyframes drawLine {
            from {
              stroke-dashoffset: 200;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>

      <br />
      <Link to="/">⬅ Voltar para a lista</Link>
    </div>
  );
}

export default Postulado1;
