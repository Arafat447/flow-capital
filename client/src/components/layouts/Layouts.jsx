import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../footer/Footer';
import Header from '../header/Header';
import HeaderTop from '../header/HeaderTop';
import WorldMapAndEmail from '../footer/WorldMapAndEmail';
import NavigationMenu from '../header/NavigationMenu';
import HeaderNew from '../header/HeaderNew';

const Layouts = ({ childdren }) => {
    return (
        <>
            <HeaderTop />
            {/* <Header /> */}
            {/* <NavigationMenu /> */}
            <HeaderNew />
            <div>{childdren}</div>
            <div className="content">
                <Outlet />
            </div>

            <WorldMapAndEmail />
            <Footer />
        </>
    );
};

export default Layouts;