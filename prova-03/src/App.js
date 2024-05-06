import {BrowserRouter as Routes, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './componentes/home';
import Senai from './componentes/senai';
import Footer from './componentes/footer';
import QuemSomos from './componentes/QuemSomos';
import React from 'react'; 
import './App.css';

function App() {
  return (
      <div className="App">
          <Navbar />
          <Senai />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quemsomos" element={<QuemSomos />} />
          </Routes>
        </BrowserRouter>
          <Footer />
      </div>
  );
}

export default App;
