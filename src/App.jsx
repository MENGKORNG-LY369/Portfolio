import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

export default function App() {
  const routes = [
    {id: 1,  path: "/", component: <Home />},
    {id: 3, path: "/About", component: <About />},
    {id: 4, path: "/Contact", component: <Contact />},
    {id: 5, path: "/Work", component: <Work />},
  ]
  return (
    <div className="">
      <Navbar />
      <Routes>
        {routes.map(route => (
          <Route key={route.id} path={`${route.path}`} element={route.component} />
        ))}
      </Routes>
    </div>
  )
}