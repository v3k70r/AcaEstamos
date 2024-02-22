import { createBrowserRouter } from "react-router-dom";

import Home from "../Views/Home";
import EnrolamientoTalent from "../Views/enrolamientoTalent";
import InicioDeSesion from "../Views/InicioDeSesion";
import VistaDeEmpresas from "../Views/VistaDeEmpresas";
import IngresoUsuario from "../Views/IngresoUsuario";
import PerfilTalentos from "../Views/PerfilTalentos";
import AcercaDe from "../Views/AcercaDe";
import PerfilEmpresa from "../Views/PerfilEmpresa"
import EnrolamientoEmpresa from "../Views/EnrolamientoEmpresa";
import UnbuenCurriculum from "../Views/UnbuenCurriculum";
import TableroTalentos from "../Views/TableroTalentos";


const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: "/enrolamientoTalent", element: <EnrolamientoTalent />},
  { path: "/inicioDeSesion", element: <InicioDeSesion />},
  {path: "/ingresoUsuario", element: <IngresoUsuario />},
  {path: "/VistaDeEmpresas", element: <VistaDeEmpresas/>},
  {path: "/PerfilTalentos", element: <PerfilTalentos />},
  {path: "/AcercaDe", element: <AcercaDe />},
  { path: "/PerfilEmpresa", element: <PerfilEmpresa />},
  { path: "/EnrolamientoEmpresa", element: <EnrolamientoEmpresa />},
  {path: "/UnBuenCurriculum", element: <UnbuenCurriculum />},
  {path: "/TableroTalentos", element: <TableroTalentos />}
  ]);


export default router;