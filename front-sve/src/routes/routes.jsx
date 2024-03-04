import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import Register from "../pages/Registro"
import FetchData from "../pages/Home"
import { PrivateRoute } from "./privateRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />

        <Route path="/home" element={<PrivateRoute />}>
          <Route path="/home" element={<FetchData />} />
        </Route>
      </Routes>
    </Router>
  );
};