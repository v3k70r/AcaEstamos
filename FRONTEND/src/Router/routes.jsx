import { createBrowserRouter } from "react-router-dom";

import Home from "../Views/Home";
import EnrolamientoTalent from "../Views/enrolamientoTalent";
import InicioDeSesion from "../Views/InicioDeSesion";


const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: "/enrolamientoTalent", element: <EnrolamientoTalent/>},
  { path: "/inicioDeSesion", element: <InicioDeSesion/>}
  
]);

export default router;