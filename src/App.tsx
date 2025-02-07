import { Routes, Route, Link } from "react-router-dom";
import Postulado1 from "./pages/Postulado1_dois_pontos";
import HomePage from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/postulado/1" element={<Postulado1 />} />
    </Routes>
  );
}

export default App;
