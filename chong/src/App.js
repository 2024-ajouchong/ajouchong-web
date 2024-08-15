// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer";
import Main from "./pages/Main";




function App() {
  return (
      // <div className="App">
      //     <Header/>
      //
      //       <Main/>
      //
      //
      //     <Footer/>
      // </div>

      <Router>
          <div className="App">
              <Header />
              <Routes>
                  <Route path="/" element={<Main />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
