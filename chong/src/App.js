import React from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Breadcrumb from './components/Header/Breadcrumb';
import Footer from "./components/Footer";
import Main from "./pages/Main";
import About from './pages/About';
import Organization from "./pages/Organization";
import PromiseComponent from "./pages/Promise";
import Map from "./pages/Map";
import Announcement from "./pages/Announcement";
import Planning from "./pages/Planning";
import Sitemap from "./pages/Sitemap";






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
              {/*<Route path="/organizatoin" element={<Organization />} />*/}
              {/*    /!*<Route path="/promise" element={<Promise />} />*!/*/}
              {/*</Routes>*/}
              <Footer />
          </div>
      </Router>
  );
}

const Content = () => {
    const location = useLocation();

    const showBreadcrumb = location.pathname !== '/';

    return (
        <>
            {showBreadcrumb && <Breadcrumb />}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/introduction/about" element={<About />} />
                <Route path="/introduction/organization" element={<Organization />} />
                <Route path="/introduction/promise" element={<PromiseComponent />} />
                <Route path="/introduction/map" element={<Map />} />
                <Route path="/introduction" element={<Sitemap />} />
                <Route path="/news" element={<Sitemap />} />
                <Route path="/news/announcement" element={<Announcement />} />
                <Route path="/news/planning" element={<Planning />} />

            </Routes>
        </>
    );
};

export default App;
