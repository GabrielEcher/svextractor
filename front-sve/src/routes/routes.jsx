import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import FetchData from "../pages/Home"
import { PrivateRoute } from "./privateRoutes";
import MainComp from "../components/MainComponent";


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<PrivateRoute />}>
          <Route path="/home" element={<MainComp />} />
        </Route>

      </Routes>
    </Router>
  );
};