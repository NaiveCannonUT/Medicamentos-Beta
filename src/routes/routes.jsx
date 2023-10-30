import { createBrowserRouter } from "react-router-dom";
import Login from '../Page/Login'
import Cuadro from '../Page/Cuadro'
import Registro from "../Page/Registro";

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/Cuadro",
        element: <Cuadro />
    },
    {
        path: "/Registro",
        element: <Registro/>
    }
])