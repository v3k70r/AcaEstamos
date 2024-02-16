import { createBrowserRouter } from "react-router-dom";

import Home from "../Views/Home";
import EnrolamientoTalent from "../Views/enrolamientoTalent";
import InicioDeSesion from "../Views/InicioDeSesion";
import VistaDeEmpresas from "../Views/VistaDeEmpresas";

const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: "/enrolamientoTalent", element: <EnrolamientoTalent/>},
  { path: "/inicioDeSesion", element: <InicioDeSesion/>},
  {path: "/VistaDeEmpresas", element: <VistaDeEmpresas/>}
]);

export default router;