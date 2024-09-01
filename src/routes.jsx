import { createBrowserRouter } from "react-router-dom";


import {Home} from './components/pages/Home'
import {Contactos} from './components/pages/contactos'
import {SobreNos} from './components/pages/Sobre-nos'
import {ErrorPage} from './components/pages/error-Page'


export const route = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>,
    },
  {
        path: "/contactos",
        element: <Contactos/>,
    },
    {
        path: "/sobre-nos",
        element: <SobreNos/>,
    }
])