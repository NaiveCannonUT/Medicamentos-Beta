import { createBrowserRouter } from "react-router-dom";
import Cuadro from '../Page/Cuadro'
import RegistroUsuario from '../Page/RegistroUsuario'
import Tabla from "../Page/Tabla";

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Cuadro />
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