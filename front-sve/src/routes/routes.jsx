import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import { PrivateRoute } from "./privateRoutes";
import { RelatorioP } from "../components/RelatorioPersonalizado";
import RelatorioA from "../components/RelatorioAnalitico";


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRoute />}>
          <Route path="relatorio-analitico" element={<RelatorioA />} />
          <Route path="relatorio-personalizado" element={<RelatorioP />} />
          
        </Route>

      </Routes>
    </Router>
  );
};