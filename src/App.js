import { useEffect, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Practice from './components/Practice';
import Contact from './components/Contact';
import ScrollTop from './components/ScrollTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import LiquidLoader from './components/LiquidLoader'; // if using loader
import './App.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3500); 

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <LiquidLoader onComplete={() => setLoading(false)} />;

  return (
    <Router>
      <ScrollTop />
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </Router>
  );
}

export default App;
