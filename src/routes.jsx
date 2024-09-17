import { createBrowserRouter } from "react-router-dom";


import {Home} from './components/pages/Home'
import {Contactos} from './components/pages/curriculo'
import {ErrorPage} from './components/pages/error-Page'
import { MeusProjectos} from "./components/pages/projectos";



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