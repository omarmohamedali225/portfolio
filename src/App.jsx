<<<<<<< HEAD
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Lauout from "./components/layout/Lauout"
import Home from "./pages/Home"
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {path:'',element:<Lauout/>,children:[
    {path:"",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>},
    {path:"*",element:<NotFound/>},
  ]}
])


export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}

=======
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Lauout from "./components/layout/Lauout"
import Home from "./pages/Home"
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {path:'',element:<Lauout/>,children:[
    {path:"",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>},
    {path:"*",element:<NotFound/>},
  ]}
])


export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}

>>>>>>> f229ba40a7ba7f225851aedb31877e072f9046bb
