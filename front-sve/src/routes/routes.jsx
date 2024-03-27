import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import { PrivateRoute } from "./privateRoutes";
import { RelatorioP } from "../components/RelatorioPersonalizado";
import RelatorioA from "../components/RelatorioAnalitico";
import { useEffect } from "react";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRoute />}>
          <Route path="relatorio-analitico" element={<RelatorioAWithDynamicTitle />} />

          <Route path="relatorio-personalizado" element={<RelatorioPWithDynamicTitle />} />

        </Route>

      </Routes>
    </Router>
  );
};

const RelatorioAWithDynamicTitle = () => {
  useEffect(() => {
    document.title = 'SVExtractor - Analítico';
  }, []); // Executar apenas uma vez ao montar o componente

  return <RelatorioA />;
};

const RelatorioPWithDynamicTitle = () => {
  useEffect(() => {
    document.title = 'SVExtractor - Personalizado';
  }, []); // Executar apenas uma vez ao montar o componente

  return <RelatorioP />;
};