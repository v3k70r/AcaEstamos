import { createBrowserRouter } from "react-router-dom";

import Home from "../Views/Home";


const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  
]);

export default router;