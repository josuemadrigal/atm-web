import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Scroll.css";
import Home from "../pages/Home";

function App() {
  return (
    <Router>
      <div>
        <div className="fixed top-0 w-full z-10">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
