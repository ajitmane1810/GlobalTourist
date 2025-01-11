import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Services from './Pages/Services/Services.jsx';
import Packages from './Pages/Packages/Packages.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import TopBar from './components/TopBar.jsx'
import BackToTopButton from './components/BackToTopButton .jsx';

const App = () => {
  return (
    <Router>

      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tour-packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      {/* <Footer /> */}
      </div>
      <BackToTopButton /> 
    </Router>
  );
}

export default App;
