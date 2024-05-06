import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const routes = [
    {id: 1,  path: "/", component: <Home />},
    {id: 3, path: "/About", component: <About />},
    {id: 4, path: "/Contact", component: <Contact />},
  ]
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Routes>
        {routes.map(route => (
          <Route key={route.id} path={`${route.path}`} element={route.component} />
        ))}
      </Routes>
    </div>
  )
}
