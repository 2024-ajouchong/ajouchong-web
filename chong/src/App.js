import React, { useState, useEffect } from 'react';
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
import Announcement from "./pages/Announcement/index";
import AnnouncementDetail from './pages/Announcement/AnnouncementDetail';
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
import Campusmap from "./pages/Campusmap";
import Commu from "./pages/commu";
import WritePage from './pages/WritePage';
import QnaDetail from "./pages/Qna/QnaDetail";
import BylawsDetail from "./pages/Bylaws/BylawsDetail";
import PromotionDetail from "./pages/Promotion/promotionDetail";
import PersonalInfo from "./pages/Join/PersonalInfo";
import PostDetail from './pages/PostDetail'
import RequireWrite from "./pages/require/requireWrite";
import RequireDetail from "./pages/require/RequireDetail";
import GoogleOAuthHandler from './components/GoogleOAuthHandler';
import Termsofservice from "./pages/Policy/termsofservice";
import Policy from "./pages/Policy/policy";
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for login

    useEffect(() => {
        // Check login status, e.g., from localStorage or an API call
        const token = localStorage.getItem('authToken'); // Example: Storing token in localStorage
        setIsLoggedIn(!!token);
    }, []);

    return (
        <Router>
            <div className="App">
                <Header />
                <Content isLoggedIn={isLoggedIn} />
                <Footer />
            </div>
        </Router>
    );
}

const Content = ({ isLoggedIn }) => {
    const location = useLocation();
    const showBreadcrumb = location.pathname !== '/';

    return (
        <>
            {showBreadcrumb && <Breadcrumb />}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/auth/callback" element={<GoogleOAuthHandler />} />
                <Route path="/policy/termsofservice" element={<Termsofservice />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/introduction/about" element={<About />} />
                <Route path="/introduction/organization" element={<Organization />} />
                <Route path="/introduction/promise" element={<PromiseComponent />} />
                <Route path="/introduction/map" element={<Map />} />
                <Route path="/introduction/campusmap" element={<Campusmap />} />
                <Route path="/introduction" element={<Sitemap />} />
                <Route path="/news" element={<Sitemap />} />
                <Route path="/news/notice" element={<Announcement />} />
                <Route path="/notice/:id" element={<AnnouncementDetail />} />
                <Route path="/news/planning" element={<Planning />} />
                <Route path="/communication" element={<Sitemap />} />
                <Route
                    path="/communication/qna"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Qna />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/communication/qna/write"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <WritePage />
                        </ProtectedRoute>
                    }
                />
                <Route path="/communication/qna/:postId" element={<QnaDetail />} />
                {/*<Route path="/communication/qna/write" element={<WritePage />} />*/}
                <Route
                    path="/communication/require"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Require />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/communication/require/write"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <RequireWrite />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/communication/require/write/:id"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <RequireDetail />
                        </ProtectedRoute>
                    }
                />
                <Route path="/communication/commu" element={<Commu />} />
                {/*<Route path="/communication/require" element={<Require />} />*/}
                {/*<Route path="/communication/require/write" element={<RequireWrite />} />*/}
                {/*<Route path="/communication/require/:id" element={<RequireDetail />} />*/}
                <Route path="/resources" element={<Sitemap />} />
                {/*<Route path="/resources/bylaws" element={<Bylaws />} />*/}
                <Route
                    path="/resources/bylaws"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Bylaws />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/resources/bylaws/:id"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <BylawsDetail />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/resources/proceeding"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Proceeding />
                        </ProtectedRoute>
                    }
                />
                {/*<Route path="/resources/bylaws/:id" element={<BylawsDetail />} />*/}
                {/*<Route path="/resources/proceeding" element={<Proceeding />} />*/}
                <Route
                    path="/resources/audit"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Audit />
                        </ProtectedRoute>
                    }
                />
                {/*<Route path="/resources/audit" element={<Audit />} />*/}
                <Route path="/welfare" element={<Sitemap />} />
                <Route
                    path="/welfare/promotion"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Promotion />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/welfare/promotion/:postId"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <PromotionDetail />
                        </ProtectedRoute>
                    }
                />
                {/*<Route path="/welfare/promotion" element={<Promotion />} />*/}
                {/*<Route path="/welfare/promotion/:postId" element={<PromotionDetail />} />*/}
                <Route path="/welfare/rental" element={<Rental />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/join" element={<Join />} />
                <Route path="/password" element={<Password />} />
                <Route path="/pwchange" element={<Passwordchange />} />
                <Route path="/personal-info" element={<PersonalInfo />} />

            </Routes>
        </>
    );
};

export default App;
