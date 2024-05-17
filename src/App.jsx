import { Route, Routes } from "react-router-dom";
import Navbar from "./components/template/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Footer from "./components/template/Footer";

export default function App() {
  const routes = [
    {id: 1, path: "/", component: <About />},
    {id: 2, path: "/Contact", component: <Contact />},
    {id: 3, path: "/Work", component: <Work />},
  ]
  return (
    <>
      <Navbar />
      <div className="xl:px-20 lg:px-10 md:px-6 px-3">
        <Routes>
          {routes.map(route => (
            <Route key={route.id} path={`${route.path}`} element={route.component} />
          ))}
        </Routes>
      </div>
      <Footer />
    </>
  )
}