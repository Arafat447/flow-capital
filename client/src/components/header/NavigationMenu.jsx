import React, { useState } from 'react';
import '../header/NavigationMenu.css';
import { Link } from 'react-router-dom';
import Logo_resize from '../../assets/Logo_resize.png';
import Australia from '../../assets/Australia.png';
import USA from '../../assets/USA.png';
import Canada from '../../assets/Canada.png';
import SidebarItem from './SidebarItem';
import { MenuItems } from './MenuItems';



const NavigationMenu = ({ isNavExpanded, setIsNavExpanded }) => {
    const [items, setitems] = useState(MenuItems);
   

    const renderSubMenu = (subMenu) => {
        if (!subMenu) return null;

        return (
            <ul className="nav__menu__ul">
                {subMenu.map((item) => (
                    <li key={item.name}>
                        <Link to={`/${item.link}`} className="nav__link">{item.name}</Link>
                        {renderSubMenu(item.subMenu)}
                    </li>
                ))}
            </ul>
        );
    };
    const [isClicked, setIsClicked] = useState(false);
    const expand = () => {
        setIsNavExpanded(!isNavExpanded)
        setTimeout(() => {
            setIsNavExpanded(false)
        }, 7000);
    }

    return (
        <div className="ht__nav">
            <nav className="container container-fluid">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-auto">
                        <Link to="/" className="navbar-brand active" aria-current="page">
                            <img src={Logo_resize} className="img-fluid" style={{ width: '85px', height: 'auto' }} alt="Logo_resize" border="0" />
                        </Link>
                    </div>
                    <div className="col-auto">
                        <div className="nav__menu">
                            <ul className="nav__menu__ul">
                                {items.map((item) => (
                                    item.mega_menu ? <>
                                        <div key={item.name} className="nav__mega__menu">
                                            <Link to={item.link} className="nav__link">{item.name}</Link>
                                            <div className="dropdown-content">
                                                <div className="container">
                                                    <div className="row py-3 d-flex justify-content-center">
                                                        {item.subMenu.map((item) => (
                                                            <div className="col-md-4" key={item.name}>
                                                                <Link to={item.link} className="nav__link__services">{item.name}</Link>
                                                                <div className="pt-1">
                                                                    {item.subMenu.map((itemmenu) => {
                                                                        return (
                                                                            <p key={itemmenu.name} className="mega__menu__link__p">
                                                                                <Link to={itemmenu.link} className="mega__menu__link">{itemmenu.name}</Link>
                                                                            </p>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </> :
                                        <li key={item.name}>
                                            <Link to={item.link} className="nav__link">{item.name}</Link>
                                            {renderSubMenu(item.subMenu)}
                                        </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mobile responsive menu */}
                        <div className="nav__menu__bar">
                           
                                <button className={`${isNavExpanded ? 'menu__btn__active' : 'menu__btn'}`}
                                    onClick={expand}
                                >
                                    {isNavExpanded ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                                </button>
                            

                            {/* <div className={`wrapper ${isNavExpanded == true ? 'active' : ''}`}>
                               
                                <div className="sidebar">
                                    {items.map((item, i) => <SidebarItem key={item.i} menuItems={item} props={{ isNavExpanded, setIsNavExpanded }} />)}
                                </div>
                            </div> */}
                        </div>

                    </div>

                    <div className="col-auto  mx-1 hd__flag">
                        <ul className="list-unstyled">
                            <li className="mb-1">
                                <Link to="australian-services" >
                                    <img src={Australia} alt="image" />
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link to="usa-services" >
                                    <img src={USA} alt="image" />
                                </Link>
                            </li>
                            <li className="">
                                <Link to="canadian-services" >
                                    <img src={Canada} alt="image" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            {
                isNavExpanded &&
                <div className="nav__menu__bar">
                    <div className={`wrapper ${isNavExpanded == true ? 'active' : ''}`}>

                        <div className="sidebar">
                            {items.map((item) => <SidebarItem key={item.i} menuItems={item} props={{ isNavExpanded, setIsNavExpanded , isClicked,setIsClicked}} />)}
                        </div>
                    </div>
                </div>

            }

        </div >
    );
};

export default NavigationMenu;
