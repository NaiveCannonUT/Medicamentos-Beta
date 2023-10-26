import { createBrowserRouter } from "react-router-dom";
import Cuadro from '../Page/Cuadro'

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Cuadro />
    }
])