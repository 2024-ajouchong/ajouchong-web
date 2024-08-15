// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer";
import Main from "./pages/Main";
import About from './pages/About';




function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/about" element={<About />} />
                  {/*<Route path="/promise" element={<Promise />} />*/}
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
