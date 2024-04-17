import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login"
import { PrivateRoute } from "./privateRoutes";
import { RelatorioP } from "../components/RelatorioPersonalizado";
import RelatorioA from "../components/RelatorioAnalitico";
import { useEffect } from "react";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/NotFound";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="*" element={<Navigate to="/404"/>}/>
      <Route path="404" element={<NotFoundDynamicTitle/>} />
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<PrivateRoute />}>
              <Route path="" element={<Home/>}/>
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
const NotFoundDynamicTitle = () => {
  useEffect(() => {
    document.title = '404 - Página não encontrada';
  }, []); // Executar apenas uma vez ao montar o componente

  return <PageNotFound />;
};