import { useState } from 'react';
import Home from "../src/home/home.jsx";
import About from "../src/About/about.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from './projects/project.jsx';
import Footer from "../src/components/footer/footer.jsx";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='project' element={<Project />} />
        <Route path='footer' element={<Footer />} />
        {/* Default Route to handle 404 */}
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
