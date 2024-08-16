// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Breadcrumb from './components/Header/Breadcrumb';
import Footer from "./components/Footer";
import Main from "./pages/Main";
import About from './pages/About';




function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <Content />
              {/*<Routes>*/}
              {/*    <Route path="/" element={<Main />} />*/}
              {/*    <Route path="/about" element={<About />} />*/}
              {/*    <Route path="/introduction" element={<About />} />*/}
              {/*    /!*<Route path="/promise" element={<Promise />} />*!/*/}
              {/*</Routes>*/}
              <Footer />
          </div>
      </Router>
  );
}

const Content = () => {
    const location = useLocation();

    // Breadcrumb 컴포넌트를 표시할 페이지를 설정합니다.
    const showBreadcrumb = location.pathname !== '/';

    return (
        <>
            {showBreadcrumb && <Breadcrumb />}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/introduction" element={<Main />} />
                {/* Define other routes as needed */}
            </Routes>
        </>
    );
};

export default App;
