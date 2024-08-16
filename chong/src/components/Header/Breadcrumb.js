import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);


    const breadcrumbLabels = {
        introduction: '소개',
        about: '총학생회 소개',
        promise:'공약 소개',
        organization: '조직도',
        greeting:"인사말",
        map: "오시는 길"

    };

    return (
        <nav className="breadcrumb">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {pathnames.length > 0 && (
                    <li>
                        <Link to="/About">소개</Link>
                    </li>
                )}
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const label = breadcrumbLabels[value] || value;

                    return isLast ? (
                        <li key={to} className="breadcrumb-item">
                            {label}
                        </li>
                    ) : (
                        <li key={to} className="breadcrumb-item">
                            <Link to={to}>{label}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;