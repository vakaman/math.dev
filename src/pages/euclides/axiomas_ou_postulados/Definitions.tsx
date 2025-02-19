import { Link } from "react-router-dom"
import routes from "../../../routes"

function Definitions() {
    return (
        <>
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h1>Axiomas ou Postulados</h1>
                <p>Na lógica tradicional, um axioma ou postulado é uma sentença ou
                    proposição que não é provada ou demonstrada e é considerada
                    como óbvia ou como um consenso inicial necessário para a
                    construção ou aceitação de uma teoria.
                    Por essa razão, é aceito como verdade e serve como ponto
                    inicial para dedução de
                    outras verdades (dependentes de teoria).</p>
                <p>https://pt.wikipedia.org/wiki/Axioma</p>
            </div>

            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                <h1>📖 Elementos de Euclides</h1>
                <p>Uma introdução aos princípios fundamentais da geometria euclidiana.</p>
                <ul>
                    <li>
                        <Link to={routes.equalThings}>As coisas iguais à mesma coisa são também iguais entre si.</Link>
                    </li>
                    <li>
                        <Link to={routes.straightLineBetweenTwoPoints}>Traçar uma linha reta entre dois pontos.</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Definitions