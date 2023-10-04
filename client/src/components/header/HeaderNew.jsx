

import React, { useState } from 'react';
import '../header/NavigationMenu.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import NavigationMenu from './NavigationMenu';


const HeaderNew = () => {

    const navigate = useNavigate();
    const headerClickHandler = e => {
        e.preventDefault()
        // navigate(-1);
        navigate("/")
    };
    const [isNavExpanded, setIsNavExpanded ] = useState(false);

    return (
    <div className={`${isNavExpanded ? "sticky" : "  sticky-md-top "}`}>
            <div className="hd__navbar">
                <NavigationMenu  isNavExpanded={isNavExpanded}   setIsNavExpanded = {setIsNavExpanded}/>
            </div>
        </div>
    );
};

export default HeaderNew;

