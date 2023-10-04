

// import React from 'react';
// import '../header/Header.css';
// import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// import Logo_resize from '../../assets/Logo_resize.png';
// import Australia from '../../assets/Australia.png';
// import USA from '../../assets/USA.png';
// import Canada from '../../assets/Canada.png';



// const Header = () => {

//     const navigate = useNavigate();
//     const headerClickHandler = e => {
//         e.preventDefault()
//         // navigate(-1);
//         navigate("/")
//     };
//     const location = useLocation();


//     return (
//         <>
//             <div className="sticky__top">
//                 <nav className="navbar navbar-expand-lg header__navbar">
//                     <div className="container container-fluid">
//                         <Link to="/" className="navbar-brand active" aria-current="page" >
//                             <img src={Logo_resize} className="img-fluid" style={{ width: '85px', height: 'auto' }}  alt="Logo_resize" border="0" />
//                         </Link>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse  navbar__area" id="navbarNav">
//                             <span onClick={headerClickHandler}></span>

//                             <ul className="navbar-nav" id="nav_bar_nav">
//                                 <li className="nav-item mx-1">
//                                     <Link to='/' className={`nav-link  active ${location.pathname === "/" && "active-nav"}`} aria-current="page">HOME</Link>
//                                 </li>
//                                 {/* <li className="nav-item mx-1">
//                                     <Link to='about' className={`nav-link ${location.pathname === "/about" && "active-nav"}`}>ABOUT US</Link>
//                                 </li> */}
//                                 <li className="nav-item dropdown mx-1" id="drop_down">
//                                     <Link to='#' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "/about" && "active-nav"}`} id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">ABOUT</Link>
//                                     <ul className="dropdown-menu dropdown-menu-services" aria-labelledby="navbarDropdown1">
//                                         <li className="nav-item">
//                                             <Link to="about" className={`dropdown-item nav-link  ${location.pathname === "/about" && "active-nav"}`}>
//                                                 <ul className="list-unstyled d-flex justify-content-between">
//                                                     <li>
//                                                         <span>ABOUT US</span>
//                                                     </li>
//                                                 </ul>
//                                             </Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="our-management-team" className={`dropdown-item nav-link  ${location.pathname === "/our-management-team" && "active-nav"}`}>
//                                                 <ul className="list-unstyled d-flex justify-content-between">
//                                                     <li>
//                                                         <span>MANAGEMENT TEAM</span>
//                                                     </li>
//                                                 </ul>
//                                             </Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="career" className={`dropdown-item nav-link  ${location.pathname === "/career" && "active-nav"}`}>
//                                                 <ul className="list-unstyled d-flex justify-content-between">
//                                                     <li>
//                                                         <span>CAREER</span>
//                                                     </li>
//                                                 </ul>
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li className="nav-item dropdown mx-1" id="drop_down">
//                                     <Link to='services' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "/usa-services" && "active-nav"}`} id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">SERVICES</Link>

//                                     <ul className="dropdown-menu dropdown-menu-services" aria-labelledby="navbarDropdown2">

//                                         <li className="nav-item">
//                                             <Link to="usa-services" className={`dropdown-item nav-link  ${location.pathname === "/usa-services" && "active-nav"}`}>
//                                                 <ul className="list-unstyled d-flex justify-content-between">
//                                                     <li>
//                                                         <span>USA SERVICES</span>
//                                                     </li>
//                                                 </ul>
//                                             </Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="australian-services" className={`dropdown-item nav-link ${location.pathname === "/australian-services" && "active-nav"}`}>
//                                                 <ul className="list-unstyled d-flex justify-content-between">
//                                                     <li>
//                                                         <span>AUSTRALIAN SERVICES </span>
//                                                     </li>
//                                                 </ul>
//                                             </Link>
//                                         </li>

//                                         <li className="nav-item">
//                                             <Link to="canadian-services" className={`dropdown-item nav-link ${location.pathname === "/canadian-services" && "active-nav"}`}>
//                                                 <ul className="list-unstyled d-flex justify-content-between">
//                                                     <li>
//                                                         <span>CANADIAN SERVICES</span>
//                                                     </li>
//                                                 </ul>
//                                             </Link>
//                                         </li>

//                                     </ul>
//                                 </li>

//                                 {/* <li className="nav-item dropdown mx-1">
//                                     <Link to='#' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "" && "active-nav"}`} id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">WHY US</Link>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>

//                                     </ul>
//                                 </li> */}
//                                 {/* <li className="nav-item dropdown mx-1">
//                                     <Link to='#' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "" && "active-nav"}`} id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">TESTIMONIAL</Link>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to='#' className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                     </ul>
//                                 </li> */}
//                                 <li className="nav-item mx-1">
//                                     <Link to='why-us' className={`nav-link ${location.pathname === "/why-us" && "active-nav"}`}>WHY US</Link>
//                                 </li>
//                                 <li className="nav-item mx-1">
//                                     <Link to='testimonial' className={`nav-link ${location.pathname === "/testimonial" && "active-nav"}`}>TESTIMONIAL</Link>
//                                 </li>
//                                 <li className="nav-item mx-1">
//                                     <Link to='reviews' className={`nav-link ${location.pathname === "/reviews" && "active-nav"}`}>REVIEWS</Link>
//                                 </li>
//                                 {/* <li className="nav-item dropdown mx-1">
//                                     <Link to='#' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "" && "active-nav"}`} id="navbarDropdown5" role="button" data-bs-toggle="dropdown" aria-expanded="false">REVIEWS</Link>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown5">
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                     </ul>
//                                 </li> */}
//                                 <li className="nav-item mx-1">
//                                     <Link to='faqs' className={`nav-link  ${location.pathname === "/faqs" && "active-nav"}`}>FAQS</Link>
//                                 </li>
//                                 <li className="nav-item mx-1">
//                                     <Link to='resources' className={`nav-link  ${location.pathname === "/resources" && "active-nav"}`}>RESOURCES</Link>
//                                 </li>
//                                 {/* <li className="nav-item dropdown mx-1">
//                                     <Link to='#' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "" && "active-nav"}`} id="navbarDropdown6" role="button" data-bs-toggle="dropdown" aria-expanded="false">RESOURCES</Link>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown6">
//                                         <li className="nav-item">
//                                             <Link to='#' className="nav-link">Link</Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to='#' className="nav-link" >Link</Link>
//                                         </li>
//                                     </ul>
//                                 </li> */}

//                                 <li className="nav-item mx-1">
//                                     <Link to='appointment' className={`nav-link ${location.pathname === "/appointment" && "active-nav"}`}>APPOINTMENT</Link>
//                                 </li>
//                                 <li className="nav-item mx-1">
//                                     <Link to='tech-partners' className={`nav-link ${location.pathname === "/tech-partners" && "active-nav"}`}>PARTNERS</Link>
//                                 </li>
//                                 <li className="nav-item mx-1">
//                                     <Link to='payment' className={`nav-link ${location.pathname === "/payment" && "active-nav"}`}>PAYMENT</Link>
//                                 </li>


//                             </ul>
//                         </div>
//                         <div className="mx-1">
//                             <ul className="list-unstyled">
//                                 <li className="mb-1">
//                                     <Link to="#" >
//                                         <img src={Australia} alt="image"  />
//                                     </Link>
//                                 </li>
//                                 <li className="mb-1">
//                                     <Link to="#" >
//                                         <img src={USA} alt="image"  />
//                                     </Link>
//                                 </li>
//                                 <li className="">
//                                     <Link to="#" >
//                                         <img src={Canada} alt="image"  />
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                     </div>
//                 </nav>
//             </div>
//         </>
//     );
// };

// export default Header;



// import React from 'react';
// import '../header/Header.css';
// import { Link, useLocation } from "react-router-dom";
// import Logo_resize from '../../assets/Logo_resize.png';
// import Australia from '../../assets/Australia.png';
// import USA from '../../assets/USA.png';
// import Canada from '../../assets/Canada.png';

// const Header = () => {
//   const location = useLocation();

//   return (
//     <>
//       <div className="sticky__top">
//         <nav className="navbar navbar-expand-lg header__navbar">
//           <div className="container container-fluid">
//             <Link to="/" className="navbar-brand active" aria-current="page">
//               <img
//                 src={Logo_resize}
//                 className="img-fluid"
//                 style={{ width: '85px', height: 'auto' }}
//                 
//                 alt="Logo_resize"
//                 border="0"
//               />
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse  navbar__area" id="navbarNav">
//               <ul className="navbar-nav" id="nav_bar_nav">
//                 <li className="nav-item mx-1">
//                   <Link
//                     to="/"
//                     className={`nav-link  active ${location.pathname === '/' && 'active-nav'}`}
//                     aria-current="page"
//                   >
//                     HOME
//                   </Link>
//                 </li>
//                 <li className="nav-item dropdown mx-1" id="drop_down">
//                   <Link
//                     to="services"
//                     className={`dropdown-toggle nav-link select__arrow active ${
//                       location.pathname === '/usa-services' && 'active-nav'
//                     }`}
//                     id="navbarDropdown2"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     SERVICES
//                   </Link>
//                   <ul className="dropdown-menu dropdown-menu-services" aria-labelledby="navbarDropdown2">
//                     <li className="nav-item">
//                       <Link
//                         to="usa-services"
//                         className={`dropdown-item nav-link ${location.pathname === '/usa-services' && 'active-nav'}`}
//                       >
//                         USA SERVICES
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link
//                         to="australian-services"
//                         className={`dropdown-item nav-link ${
//                           location.pathname === '/australian-services' && 'active-nav'
//                         }`}
//                       >
//                         AUSTRALIAN SERVICES
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link
//                         to="canadian-services"
//                         className={`dropdown-item nav-link ${location.pathname === '/canadian-services' && 'active-nav'}`}
//                       >
//                         CANADIAN SERVICES
//                       </Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="nav-item mx-1">
//                   <Link
//                     to="tech-partners"
//                     className={`nav-link ${location.pathname === '/tech-partners' && 'active-nav'}`}
//                   >
//                     PARTNERS
//                   </Link>
//                 </li>
//                 <li className="nav-item mx-1">
//                   <Link to="payment" className={`nav-link ${location.pathname === '/payment' && 'active-nav'}`}>
//                     PAYMENT
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="mx-1">
//               <ul className="list-unstyled">
//                 <li className="mb-1">
//                   <Link to="#">
//                     <img src={Australia} alt="image"  />
//                   </Link>
//                 </li>
//                 <li className="mb-1">
//                   <Link to="#">
//                     <img src={USA} alt="image"  />
//                   </Link>
//                 </li>
//                 <li className="">
//                   <Link to="#">
//                     <img src={Canada} alt="image"  />
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;



// import React from 'react';
// import '../header/Header.css';
// import { Link, useLocation } from 'react-router-dom';
// import Logo_resize from '../../assets/Logo_resize.png';
// import Australia from '../../assets/Australia.png';
// import USA from '../../assets/USA.png';
// import Canada from '../../assets/Canada.png';

// const Header = () => {
//   const location = useLocation();

//   return (
//     <>
//       <div className="sticky__top">
//         <nav className="navbar navbar-expand-lg header__navbar">
//           <div className="container container-fluid">
//             <Link to="/" className="navbar-brand active" aria-current="page">
//               <img
//                 src={Logo_resize}
//                 className="img-fluid"
//                 style={{ width: '85px', height: 'auto' }}
//                 
//                 alt="Logo_resize"
//                 border="0"
//               />
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse navbar__area" id="navbarNav">
//               <ul className="navbar-nav" id="nav_bar_nav">
//                 <li className="nav-item mx-1">
//                   <Link
//                     to="/"
//                     className={`nav-link active ${location.pathname === '/' && 'active-nav'}`}
//                     aria-current="page"
//                   >
//                     HOME
//                   </Link>
//                 </li>
//                 <li className="nav-item dropdown mx-1">
//                   <Link
//                     to="services"
//                     className={`dropdown-toggle nav-link select__arrow active ${
//                       location.pathname === '/usa-services' && 'active-nav'
//                     }`}
//                     id="navbarDropdown2"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     SERVICES
//                   </Link>
//                   <ul className="dropdown-menu dropdown-menu-right dropdown-menu-services" aria-labelledby="navbarDropdown2">
//                     <li className="nav-item">
//                       <Link
//                         to="usa-services"
//                         className={`dropdown-item nav-link ${location.pathname === '/usa-services' && 'active-nav'}`}
//                       >
//                         USA SERVICES
//                       </Link>
//                       <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
//                         <li className="nav-item">
//                           <Link
//                             to="sub-menu1"
//                             className={`dropdown-item nav-link ${location.pathname === '/usa-services/sub-menu1' &&
//                               'active-nav'}`}
//                           >
//                             Sub-Menu 1
//                           </Link>
//                         </li>
//                         <li className="nav-item">
//                           <Link
//                             to="sub-menu2"
//                             className={`dropdown-item nav-link ${location.pathname === '/usa-services/sub-menu2' &&
//                               'active-nav'}`}
//                           >
//                             Sub-Menu 2
//                           </Link>
//                         </li>
//                         {/* Add more sub-menu items as needed */}
//                       </ul>
//                     </li>
//                     <li className="nav-item">
//                       <Link
//                         to="australian-services"
//                         className={`dropdown-item nav-link ${location.pathname === '/australian-services' &&
//                           'active-nav'}`}
//                       >
//                         AUSTRALIAN SERVICES
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link
//                         to="canadian-services"
//                         className={`dropdown-item nav-link ${location.pathname === '/canadian-services' &&
//                           'active-nav'}`}
//                       >
//                         CANADIAN SERVICES
//                       </Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="nav-item mx-1">
//                   <Link to="tech-partners" className={`nav-link ${location.pathname === '/tech-partners' && 'active-nav'}`}>
//                     PARTNERS
//                   </Link>
//                 </li>
//                 <li className="nav-item mx-1">
//                   <Link to="payment" className={`nav-link ${location.pathname === '/payment' && 'active-nav'}`}>
//                     PAYMENT
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="mx-1">
//               <ul className="list-unstyled">
//                 <li className="mb-1">
//                   <Link to="#">
//                     <img src={Australia} alt="image"  />
//                   </Link>
//                 </li>
//                 <li className="mb-1">
//                   <Link to="#">
//                     <img src={USA} alt="image"  />
//                   </Link>
//                 </li>
//                 <li className="">
//                   <Link to="#">
//                     <img src={Canada} alt="image"  />
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;



// import React from 'react';
// import '../header/Header.css';
// import { Link, useLocation } from 'react-router-dom';
// import Logo_resize from '../../assets/Logo_resize.png';
// import Australia from '../../assets/Australia.png';
// import USA from '../../assets/USA.png';
// import Canada from '../../assets/Canada.png';

// const Header = () => {
//   const location = useLocation();

//   return (
//     <>
//       <div className="sticky__top">
//         <nav className="navbar navbar-expand-lg header__navbar">
//           <div className="container container-fluid">
//             <Link to="/" className="navbar-brand active" aria-current="page">
//               <img
//                 src={Logo_resize}
//                 className="img-fluid"
//                 style={{ width: '85px', height: 'auto' }}
//                 
//                 alt="Logo_resize"
//                 border="0"
//               />
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse navbar__area" id="navbarNav">
//               <ul className="navbar-nav" id="nav_bar_nav">
//                 <li className="nav-item mx-1">
//                   <Link
//                     to="/"
//                     className={`nav-link active ${location.pathname === '/' && 'active-nav'}`}
//                     aria-current="page"
//                   >
//                     HOME
//                   </Link>
//                 </li>
//                 <li className="nav-item dropdown mx-1">
//                   <Link
//                     to="services"
//                     className={`dropdown-toggle nav-link select__arrow active ${location.pathname === '/usa-services' && 'active-nav'
//                       }`}
//                     id="navbarDropdown2"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     SERVICES
//                   </Link>
//                   <ul className="dropdown-menu dropdown-menu-right dropdown-menu-services" aria-labelledby="navbarDropdown2">
                    
//                     <li className="nav-item dropdown">
//                       <Link
//                         to="usa-services"
//                         className={`dropdown-item nav-link ${location.pathname === '/usa-services' && 'active-nav'}`}
//                       >
//                         USA SERVICES
//                       </Link>
//                       <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                     
//                         <li className="nav-item dropdown">
//                           <Link
//                             to="sub-menu1"
//                             className={`dropdown-item nav-link ${location.pathname === '/usa-services/sub-menu1' &&
//                               'active-nav'}`}
//                           >
//                             Sub-Menu 1
//                           </Link>
//                         </li>
//                         <li className="nav-item dropdown">
//                           <Link
//                             to="sub-menu2"
//                             className={`dropdown-item nav-link ${location.pathname === '/usa-services/sub-menu2' &&
//                               'active-nav'}`}
//                           >
//                             Sub-Menu 2
//                           </Link>
//                         </li>
                   
//                       </ul>
//                     </li>
//                     <li className="nav-item">
//                       <Link
//                         to="australian-services"
//                         className={`dropdown-item nav-link ${location.pathname === '/australian-services' &&
//                           'active-nav'}`}
//                       >
//                         AUSTRALIAN SERVICES
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link
//                         to="canadian-services"
//                         className={`dropdown-item nav-link ${location.pathname === '/canadian-services' &&
//                           'active-nav'}`}
//                       >
//                         CANADIAN SERVICES
//                       </Link>
//                     </li>
//                   </ul>
//                 </li>

//                 <li className="nav-item mx-1">
//                   <Link to="tech-partners" className={`nav-link ${location.pathname === '/tech-partners' && 'active-nav'}`}>
//                     PARTNERS
//                   </Link>
//                 </li>
//                 <li className="nav-item mx-1">
//                   <Link to="payment" className={`nav-link ${location.pathname === '/payment' && 'active-nav'}`}>
//                     PAYMENT
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="mx-1">
//               <ul className="list-unstyled">
//                 <li className="mb-1">
//                   <Link to="#">
//                     <img src={Australia} alt="image"  />
//                   </Link>
//                 </li>
//                 <li className="mb-1">
//                   <Link to="#">
//                     <img src={USA} alt="image"  />
//                   </Link>
//                 </li>
//                 <li className="">
//                   <Link to="#">
//                     <img src={Canada} alt="image"  />
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;

// import React from 'react';
// import '../header/Header.css';
// import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// import Logo_resize from '../../assets/Logo_resize.png';
// import Australia from '../../assets/Australia.png';
// import USA from '../../assets/USA.png';
// import Canada from '../../assets/Canada.png';



// const Header = () => {

//     const navigate = useNavigate();
//     const headerClickHandler = e => {
//         e.preventDefault()
//         // navigate(-1);
//         navigate("/")
//     };
//     const location = useLocation();


//     return (
//         <>
//             <div className="sticky__top">
//                 <nav className="navbar navbar-expand-lg header__navbar">
//                     <div className="container container-fluid">
//                         <Link to="/" className="navbar-brand active" aria-current="page" >
//                             <img src={Logo_resize} className="img-fluid" style={{ width: '85px', height: 'auto' }}  alt="Logo_resize" border="0" />
//                         </Link>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse  navbar__area" id="navbarNav">
//                             <span onClick={headerClickHandler}></span>

//                             <ul className="navbar-nav" id="nav_bar_nav">
//                                 <li className="nav-item mx-1">
//                                     <Link to='/' className={`nav-link  active ${location.pathname === "/" && "active-nav"}`} aria-current="page">HOME</Link>
//                                 </li>
//                                 {/* <li className="nav-item mx-1">
//                                     <Link to='about' className={`nav-link ${location.pathname === "/about" && "active-nav"}`}>ABOUT US</Link>
//                                 </li> */}
//                                 <li className="nav-item dropdown mx-1" id="drop_down">
//                                     <Link to='#' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "/about" && "active-nav"}`} id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">ABOUT</Link>
//                                     <ul className="dropdown-menu dropdown-menu-services" aria-labelledby="navbarDropdown1">
//                                         <li className="nav-item">
//                                             <Link to="about" className={`dropdown-item nav-link  ${location.pathname === "/about" && "active-nav"}`}>
//                                                 <ul className="list-unstyled d-flex justify-content-between">
//                                                     <li>
//                                                         <span>ABOUT US</span>
//                                                     </li>
//                                                 </ul>
//                                             </Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="our-management-team" className={`dropdown-item nav-link  ${location.pathname === "/our-management-team" && "active-nav"}`}>
//                                                 <ul className="list-unstyled d-flex justify-content-between">
//                                                     <li>
//                                                         <span>MANAGEMENT TEAM</span>
//                                                     </li>
//                                                 </ul>
//                                             </Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="career" className={`dropdown-item nav-link  ${location.pathname === "/career" && "active-nav"}`}>
//                                                 <ul className="list-unstyled d-flex justify-content-between">
//                                                     <li>
//                                                         <span>CAREER</span>
//                                                     </li>
//                                                 </ul>
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li className="nav-item dropdown mx-1" id="drop_down">
//                                     <Link to='services' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "/usa-services" && "active-nav"}`} id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">SERVICES</Link>

//                                     <ul className="dropdown-menu dropdown-menu-services" aria-labelledby="navbarDropdown2">
//                                         <li className="nav-item">
//                                             <Link to="usa-services" className={`dropdown-item nav-link  ${location.pathname === "/usa-services" && "active-nav"}`}>
//                                                 <ul className="list-unstyled d-flex justify-content-between">
//                                                     <li>
//                                                         <span>USA SERVICES</span>
//                                                     </li>
//                                                 </ul>
//                                             </Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="australian-services" className={`dropdown-item nav-link ${location.pathname === "/australian-services" && "active-nav"}`}>
//                                                 <ul className="list-unstyled d-flex justify-content-between">
//                                                     <li>
//                                                         <span>AUSTRALIAN SERVICES </span>
//                                                     </li>
//                                                 </ul>
//                                             </Link>
//                                         </li>

//                                         <li className="nav-item">
//                                             <Link to="canadian-services" className={`dropdown-item nav-link ${location.pathname === "/canadian-services" && "active-nav"}`}>
//                                                 <ul className="list-unstyled d-flex justify-content-between">
//                                                     <li>
//                                                         <span>CANADIAN SERVICES</span>
//                                                     </li>
//                                                 </ul>
//                                             </Link>
//                                         </li>

//                                     </ul>
//                                 </li>

//                                 {/* <li className="nav-item dropdown mx-1">
//                                     <Link to='#' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "" && "active-nav"}`} id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">WHY US</Link>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>

//                                     </ul>
//                                 </li> */}
//                                 {/* <li className="nav-item dropdown mx-1">
//                                     <Link to='#' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "" && "active-nav"}`} id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">TESTIMONIAL</Link>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to='#' className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                     </ul>
//                                 </li> */}
//                                 <li className="nav-item mx-1">
//                                     <Link to='why-us' className={`nav-link ${location.pathname === "/why-us" && "active-nav"}`}>WHY US</Link>
//                                 </li>
//                                 <li className="nav-item mx-1">
//                                     <Link to='testimonial' className={`nav-link ${location.pathname === "/testimonial" && "active-nav"}`}>TESTIMONIAL</Link>
//                                 </li>
//                                 <li className="nav-item mx-1">
//                                     <Link to='reviews' className={`nav-link ${location.pathname === "/reviews" && "active-nav"}`}>REVIEWS</Link>
//                                 </li>
//                                 {/* <li className="nav-item dropdown mx-1">
//                                     <Link to='#' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "" && "active-nav"}`} id="navbarDropdown5" role="button" data-bs-toggle="dropdown" aria-expanded="false">REVIEWS</Link>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown5">
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to="#" className="dropdown-item nav-link">Link</Link>
//                                         </li>
//                                     </ul>
//                                 </li> */}
//                                 <li className="nav-item mx-1">
//                                     <Link to='faqs' className={`nav-link  ${location.pathname === "/faqs" && "active-nav"}`}>FAQS</Link>
//                                 </li>
//                                 <li className="nav-item mx-1">
//                                     <Link to='resources' className={`nav-link  ${location.pathname === "/resources" && "active-nav"}`}>RESOURCES</Link>
//                                 </li>
//                                 {/* <li className="nav-item dropdown mx-1">
//                                     <Link to='#' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "" && "active-nav"}`} id="navbarDropdown6" role="button" data-bs-toggle="dropdown" aria-expanded="false">RESOURCES</Link>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown6">
//                                         <li className="nav-item">
//                                             <Link to='#' className="nav-link">Link</Link>
//                                         </li>
//                                         <li className="nav-item">
//                                             <Link to='#' className="nav-link" >Link</Link>
//                                         </li>
//                                     </ul>
//                                 </li> */}

//                                 <li className="nav-item mx-1">
//                                     <Link to='appointment' className={`nav-link ${location.pathname === "/appointment" && "active-nav"}`}>APPOINTMENT</Link>
//                                 </li>
//                                 <li className="nav-item mx-1">
//                                     <Link to='tech-partners' className={`nav-link ${location.pathname === "/tech-partners" && "active-nav"}`}>PARTNERS</Link>
//                                 </li>
//                                 <li className="nav-item mx-1">
//                                     <Link to='payment' className={`nav-link ${location.pathname === "/payment" && "active-nav"}`}>PAYMENT</Link>
//                                 </li>


//                             </ul>
//                         </div>
//                         <div className="mx-1">
//                             <ul className="list-unstyled">
//                                 <li className="mb-1">
//                                     <Link to="#" >
//                                         <img src={Australia} alt="image"  />
//                                     </Link>
//                                 </li>
//                                 <li className="mb-1">
//                                     <Link to="#" >
//                                         <img src={USA} alt="image"  />
//                                     </Link>
//                                 </li>
//                                 <li className="">
//                                     <Link to="#" >
//                                         <img src={Canada} alt="image"  />
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>

//                     </div>
//                 </nav>
//             </div>
//         </>
//     );
// };

// export default Header;



import React from 'react';
import '../header/Header.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo_resize from '../../assets/Logo_resize.png';
import Australia from '../../assets/Australia.png';
import USA from '../../assets/USA.png';
import Canada from '../../assets/Canada.png';

const Header = () => {
    const navigate = useNavigate();
    const headerClickHandler = (e) => {
        e.preventDefault();
        navigate("/");
    };

    const location = useLocation();

    return (
        <>
            <div className="sticky__top">
                <nav className="navbar navbar-expand-lg header__navbar">
                    <div className="container container-fluid">
                        <Link to="/" className="navbar-brand active" aria-current="page">
                            <img src={Logo_resize} className="img-fluid" style={{ width: '85px', height: 'auto' }}  alt="Logo_resize" border="0" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse navbar__area" id="navbarNav">
                            <span onClick={headerClickHandler}></span>
                            <ul className="navbar-nav" id="nav_bar_nav">
                                <li className="nav-item mx-1">
                                    <Link to='/' className={`nav-link  active ${location.pathname === "/" && "active-nav"}`} aria-current="page">HOME</Link>
                                </li>
                                <li className="nav-item dropdown mx-1" id="drop_down">
                                    <Link to='#' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "/about" && "active-nav"}`} id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">ABOUT</Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                        <li className="nav-item">
                                            <Link to="about" className={`nav-link  ${location.pathname === "/about" && "active-nav"}`}>
                                                <span>ABOUT US</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="our-management-team" className={`nav-link  ${location.pathname === "/our-management-team" && "active-nav"}`}>
                                                <span>MANAGEMENT TEAM</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="career" className={`nav-link  ${location.pathname === "/career" && "active-nav"}`}>
                                                <span>CAREER</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown mx-1" id="drop_down">
                                    <Link to='services' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "/usa-services" && "active-nav"}`} id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">SERVICES</Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                        {/* <li className="nav-item" >
                                            <Link to='usa-services' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "/usa-services" && "active-nav"}`} id="navbarDropdownChild" role="button" data-bs-toggle="dropdown" aria-expanded="false">USA SERVICES</Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownChild">
                                                <li className="nav-item">
                                                    <Link to="#" className="dropdown-item">Grandchild Menu 1</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="#" className="dropdown-item">Grandchild Menu 2</Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link to="usa-services" className={`nav-link ${location.pathname === "/usa-services" && "active-nav"}`}>
                                                <span>USA SERVICES </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="australian-services" className={`nav-link ${location.pathname === "/australian-services" && "active-nav"}`}>
                                                <span>AUSTRALIAN SERVICES </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="canadian-services" className={`nav-link ${location.pathname === "/canadian-services" && "active-nav"}`}>
                                                <span>CANADIAN SERVICES</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                               

                                <li className="nav-item dropdown mx-1" id="drop_down">
                                    <Link to='why-us' className={`dropdown-toggle nav-link select__arrow active ${location.pathname === "/why-us" && "active-nav"}`} id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">WHY</Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                        <li className="nav-item">
                                            <Link to="why-us" className={`nav-link  ${location.pathname === "/why-us" && "active-nav"}`}>
                                                <span>WHY US</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="privacy-policy" className={`nav-link  ${location.pathname === "/privacy-policy" && "active-nav"}`}>
                                                <span>PRIVACY POLICY</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="tech-partners" className={`nav-link  ${location.pathname === "/tech-partners" && "active-nav"}`}>
                                                <span>TECH PARTNERS</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link to='testimonial' className={`nav-link ${location.pathname === "/testimonial" && "active-nav"}`}>TESTIMONIAL</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link to='reviews' className={`nav-link ${location.pathname === "/reviews" && "active-nav"}`}>REVIEWS</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link to='faqs' className={`nav-link  ${location.pathname === "/faqs" && "active-nav"}`}>FAQS</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link to='resources' className={`nav-link  ${location.pathname === "/resources" && "active-nav"}`}>RESOURCES</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link to='appointment' className={`nav-link ${location.pathname === "/appointment" && "active-nav"}`}>APPOINTMENT</Link>
                                </li>
                                <li className="nav-item mx-1">
                                    <Link to='payment' className={`nav-link ${location.pathname === "/payment" && "active-nav"}`}>PAYMENT</Link>
                                </li>


                            </ul>
                        </div>
                        <div className="mx-1">
                            <ul className="list-unstyled">
                                <li className="mb-1">
                                    <Link to="#" >
                                        <img src={Australia} alt="image"  />
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link to="#" >
                                        <img src={USA} alt="image"  />
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="#" >
                                        <img src={Canada} alt="image"  />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;