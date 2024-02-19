import { createBrowserRouter } from "react-router-dom";

import Home from "../Views/Home";
import EnrolamientoTalent from "../Views/enrolamientoTalent";
import InicioDeSesion from "../Views/InicioDeSesion";
import VistaDeEmpresas from "../Views/VistaDeEmpresas";
import IngresoUsuario from "../Views/IngresoUsuario";
import PerfilTalentos from "../Views/PerfilTalentos";


const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: "/enrolamientoTalent", element: <EnrolamientoTalent />},
  { path: "/inicioDeSesion", element: <InicioDeSesion />},
  {path: "/ingresoUsuario", element: <IngresoUsuario />},
  {path: "/VistaDeEmpresas", element: <VistaDeEmpresas/>},
  {path: "/PerfilTalentos", element: <PerfilTalentos />}
    
]);

export default router;