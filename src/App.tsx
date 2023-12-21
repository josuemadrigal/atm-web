import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import "./Scroll.css";
import Home from "./pages/Home";

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
        </Routes>
        <Footer data={footerData} />
      </div>
    </Router>
  );
}

export default App;
