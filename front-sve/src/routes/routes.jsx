import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import { PrivateRoute } from "./privateRoutes";

import RelatorioA from "../components/MainComponent";


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRoute />}>
          <Route path="relatorio-analitico" element={<RelatorioA />} />
          
          
        </Route>

      </Routes>
    </Router>
  );
};