import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomaPage from "./pages/HomaPage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/photo-website" element={<HomaPage />}  />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    
      <Footer />
    </div>
  );
}

export default App;
