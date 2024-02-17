import { createBrowserRouter } from "react-router-dom";

import Home from "../Views/Home";
import EnrolamientoTalent from "../Views/EnrolamientoTalent";
import InicioDeSesion from "../Views/InicioDeSesion";
import VistaDeEmpresas from "../Views/VistaDeEmpresas";
import IngresoUsuario from "../Views/IngresoUsuario";
import AcercaDe from "../Views/AcercaDe";
import EnrolamientoEmpresa from "../Views/EnrolamientoEmpresa";



const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: "/enrolamientoTalent", element: <EnrolamientoTalent />},
  { path: "/inicioDeSesion", element: <InicioDeSesion />},
  {path: "/ingresoUsuario", element: <IngresoUsuario />},
  {path: "/VistaDeEmpresas", element: <VistaDeEmpresas/>},
  {path: "/AcercaDe", element: <AcercaDe />},
  { path: "/EnrolamientoEmpresa", element: <EnrolamientoEmpresa />},
]);

export default router;