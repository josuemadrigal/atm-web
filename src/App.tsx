import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import "./Scroll.css";
import Home from "./pages/Home";
import GestionLegislativa from "./pages/GestionLegislativa";
import GestionComunitaria from "./pages/GestionComunitaria";
import Biografia from "./pages/Biografia";
import Actividades from "./pages/Actividades";
import LegislativaOne from "./pages/LegislativaOne";
import LegislativaLeyOne from "./pages/LegislativaLeyOne";
import BienvenidaCompleta from "./pages/BienvenidaCompleta";
import ProgramaSalud from "./pages/comunitaria/ProgramaSalud";
import ProgramaTransporte from "./pages/comunitaria/ProgramaTransporte";
import ProgramaAgua from "./pages/comunitaria/ProgramaAgua";
import ProgramaAlimentos from "./pages/comunitaria/ProgramaAlimentos";
import Informes from "./pages/Informes";

function App() {
  const footerData = [
    {
      title: "Navegación",
      links: [
        { label: "Link 1", link: "/" },
        { label: "Link 2", link: "/" },
        { label: "Link 3", link: "/" },
      ],
    },
    {
      title: "Otros enlaces",
      links: [
        {
          label: "Link 4",
          link: "/",
        },
        {
          label: "Link 5",
          link: "/",
        },
        { label: "Link 6", link: "/" },
      ],
    },
  ];

  return (
    <Router>
      <div>
        <div className="fixed top-0 w-full z-10">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bienvendia" element={<BienvenidaCompleta />} />
          <Route path="/biografia" element={<Biografia />} />
          <Route path="/gestion-legislativa" element={<GestionLegislativa />} />
          <Route path="/gestion-comunitaria" element={<GestionComunitaria />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route
            path="/proyecto-de-resolucion/:link"
            element={<LegislativaOne />}
          />
          <Route
            path="/proyecto-de-ley/:link"
            element={<LegislativaLeyOne />}
          />

          <Route
            path="/gestion-comunitaria/programa-salud"
            element={<ProgramaSalud />}
          />
          <Route
            path="/gestion-comunitaria/programa-transporte"
            element={<ProgramaTransporte />}
          />
          <Route
            path="/gestion-comunitaria/programa-agua"
            element={<ProgramaAgua />}
          />
          <Route
            path="/gestion-comunitaria/programa-alimentos"
            element={<ProgramaAlimentos />}
          />
          <Route path="/informes" element={<Informes />} />
        </Routes>
        <Footer data={footerData} />
      </div>
    </Router>
  );
}

export default App;
