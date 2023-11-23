import { createBrowserRouter } from "react-router-dom";
import Login from '../Page/Login'
import RegistroUsuario from '../Page/RegistroUsuario'

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path:"/Registro",
        element:<RegistroUsuario/>
    }

])