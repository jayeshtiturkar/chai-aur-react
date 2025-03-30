import {createBrowserRouter} from "react-router-dom";
import Home from "../Componants/Home";
import App from "../App";
import About from "../Componants/About";
import Contact from "../Componants/Contact";
import User from "../Componants/User";
import Github, { githubInfoLoader } from "../Componants/Github";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[{
            path: "",
            element:<Home />
        },
        {
            path:"/about",
            element: <About/>
        },
        {
            path:"/contact",
            element: <Contact/>
        },
        {
            path:"/user/:id",
            element: <User/>
        },
        {   
            loader : githubInfoLoader,
            path:"/github",
            element: <Github/>
        }
    ]
    }
]);

export default router