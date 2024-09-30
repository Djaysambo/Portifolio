import { createBrowserRouter } from "react-router-dom";


import {Home} from './pages/Home'
import {Contactos} from './pages/curriculo'
import {ErrorPage} from './pages/error-Page'
import { MeusProjectos} from "./pages/projectos";



export const route = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>,
    },
  {
        path: "/curriculo",
        element: <Contactos/>,
    },
    {
        path: "/projectos",
        element: <MeusProjectos/>,
    }
])