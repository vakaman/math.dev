import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Breadcrumb from "./components/Breadcrumb";
import routes from "./routes";
import Definitions from "./pages/euclides/axiomas_ou_postulados/Definitions";
import ThingsEqualToTheSameThingAreAlsoEqualToEachOther from "./pages/euclides/axiomas_ou_postulados/ThingsEqualToTheSameThingAreAlsoEqualToEachOther";
import StraightLineBetweenTwoPoints from "./pages/euclides/axiomas_ou_postulados/StraightLineBetweenTwoPoints";
import RuleOfThree from "./pages/razao_e_proporcao/RuleOfThree";

function App() {
  return (
    <div>
      <Breadcrumb />
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.axiomsOrPostulates} element={<Definitions />} />
        <Route path={routes.equalThings} element={<ThingsEqualToTheSameThingAreAlsoEqualToEachOther />} />
        <Route path={routes.straightLineBetweenTwoPoints} element={<StraightLineBetweenTwoPoints />} />
        <Route path={routes.ruleOfThree} element={<RuleOfThree />} />
      </Routes>
    </div>
  );
}

export default App;
