import { Routes, Route } from "react-router-dom";
import Postulado1 from "./pages/Postulado1_dois_pontos";
import HomePage from "./pages/Home";
import RuleOfThree from "./pages/razao_e_proporcao/RuleOfThree";
import Breadcrumb from "./components/Breadcrumb";

function App() {
  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/postulado/1" element={<Postulado1 />} />
        <Route path="/ratio_and_proportion/rule_of_three" element={<RuleOfThree />} />
      </Routes>
    </div>
  );
}

export default App;
