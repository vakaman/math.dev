import { Link } from "react-router-dom";
import routes from "../routes";

function HomePage() {
  return (
    <>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>

        <h1>🧠 Axiomas ou Postulados</h1>
        <p>Regras da matemática</p>
        <ul>
          <li><Link to={routes.axiomsOrPostulates}>Definições</Link></li>
        </ul>

        <h1>📐 Razão e Proporção</h1>
        <p>
          A razão é uma comparação entre dois números. A proporção é a igualdade entre duas razões.
        </p>
        <ul>
          <li><Link to={routes.ruleOfThree}>
            Regra de três: Encontra um valor desconhecido entre duas proporções.
          </Link>
          </li>
        </ul>
        
      </div>
    </>
  );
}

export default HomePage;
