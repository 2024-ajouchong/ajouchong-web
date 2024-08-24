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
import Qna from "./pages/Qna";
import Require from "./pages/require";
import Bylaws from "./pages/Bylaws";
import Proceeding from "./pages/Proceeding";
import Audit from "./pages/Audit";
import Promotion from "./pages/Promotion";
import Rental from "./pages/Rental";
import Signin from "./pages/Signin";
import Join from "./pages/Join";
import Password from "./pages/Password";
import Passwordchange from "./pages/Pwchange";


function App() {
  return (
      <Router>
          <div className="App">
              {/*<div className="wrapper">*/}
              <Header />
              <Content />
              <Footer />
              {/*</div>*/}
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
                <Route path="/communication" element={<Sitemap />} />
                <Route path="/communication/qna" element={<Qna />} />
                <Route path="/communication/require" element={<Require />} />
                <Route path="/resources" element={<Sitemap />} />
                <Route path="/resources/bylaws" element={<Bylaws />} />
                <Route path="/resources/proceeding" element={<Proceeding />} />
                <Route path="/resources/audit" element={<Audit />} />
                <Route path="/welfare" element={<Sitemap />} />
                <Route path="/welfare/promotion" element={<Promotion />} />
                <Route path="/welfare/rental" element={<Rental />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/join" element={<Join />} />
                <Route path="/password" element={<Password />} />
                <Route path="/pwchange" element={<Passwordchange />} />
            </Routes>
        </>
    );
};

export default App;
