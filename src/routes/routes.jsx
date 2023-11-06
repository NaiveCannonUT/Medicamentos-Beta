import { createBrowserRouter } from "react-router-dom";
import Login from '../Page/Login'
import RegistroUsuario from '../Page/RegistroUsuario'
import Tabla from "../Page/Tabla";

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path:"/Registro",
        element:<RegistroUsuario/>
    },
    {
        path:"/Tabla",
        element:<Tabla/>
    }

])