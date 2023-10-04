import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../footer/Footer.css';
import enr_agent from '../../assets/enr_agent.png';
import efile_provider from '../../assets/efile_provider.png';
import irs_itin from '../../assets/irs_itin.png';
import irs_register from '../../assets/irs_register.png';
import tax_pra from '../../assets/tax_pra.png';
import state_of_texas from '../../assets/state_of_texas.png';
import justice from '../../assets/justice.png';
import sme_specialist from '../../assets/sme_specialist.png';
import register_bsa from '../../assets/register_bsa.png';
import register_asic from '../../assets/register_asic.png';
import xero from '../../assets/xero.png';
import quickbook from '../../assets/quickbook.png';


const Footer = () => {
    const [companyLocation, setCompanyLocation] = useState([
        { id: 1, name: "6450 SUNSET BLVD #1067 LOS ANGELES, CALIFORNIA 90028 UNITED STATES", link: "/location", icon: "fa-solid fa-location-dot" },
        { id: 2, name: "8801 RODEO DR, VALLEY RANCH, DALLAS, TEXAS 75063 UNITED STATES", link: "#", icon: "fa-solid fa-location-dot" },
        { id: 3, name: "400-4 CATHERWOOD DRIVE WEST LAFAYETTE, INDIANA 47906 UNITED STATES", link: "#", icon: "fa-solid fa-location-dot" },
        { id: 4, name: "LEVEL 13 SUITE 1A, 465 VICTORIA AVE CHATSWOOD NSW 2067 AUSTRALIA", link: "#", icon: "fa-solid fa-location-dot" },
        { id: 5, name: " UNIT 7 19-21 ALEXANDER CRES MACQUARIE FIELDS NSW 2564 AUSTRALIA", link: "#", icon: "fa-solid fa-location-dot" },
        { id: 6, name: "1108-250 CONSUMERS ROAD #635 NORTH YORK, ON M2J 4V6 CANADA", link: "#", icon: "fa-solid fa-location-dot" },
    ]);

    const [companyShare, setCompanyShare] = useState([
        { id: 1, image: enr_agent, link: "#" },
        { id: 2, image: efile_provider, link: "#" },
        { id: 3, image: irs_itin, link: "#" },
        { id: 4, image: irs_register, link: "#" },
        { id: 5, image: tax_pra, link: "#" },
        { id: 6, image: state_of_texas, link: "#" },
        { id: 7, image: justice, link: "#" },
        { id: 8, image: sme_specialist, link: "#" },
        { id: 9, image: register_asic, link: "#" },
        { id: 10, image: register_bsa, link: "#" },
        { id: 11, image: xero, link: "#" },
        { id: 12, image: quickbook, link: "#" },
    ])
    const [useFullLinks, setUseFullLinks] = useState([
        { id: 1, name: "ABOUT US", link: "about" },
        { id: 2, name: "USA SERVICES", link: "usa-services" },
        { id: 3, name: "AUSTRALIA SERVICES", link: "australian-services" },
        { id: 4, name: "CANADIAN SERVICES", link: "canadian-services" },
        { id: 5, name: "WHY US", link: "why-us" },
        { id: 6, name: "TESTIMONIAL", link: "testimonial" },
        { id: 7, name: "REVIEWS", link: "reviews" },
        // { id: 8, name: "FAQS", link: "faqs" },
        // { id: 9, name: "RESOURCES", link: "resources" },
        { id: 10, name: "APPOINTMENT", link: "appointment" },
        { id: 11, name: "PAYMENT", link: "payment" },
    ])
    const [followUs, setFollowUs] = useState([
        { id: 1, name: "LINKED-IN", link: "https://www.linkedin.com/company/shelley-global/" },
        { id: 2, name: "INSTAGRAM", link: "https://www.instagram.com/shelleyglobal7/" },
        { id: 3, name: "FACEBOOK", link: "https://www.facebook.com/ShelleyGlobal" },
        { id: 4, name: "YOUTUBE", link: "https://www.youtube.com/@ShelleyGlobal" },
        { id: 5, name: "TIKTOK", link: "https://www.tiktok.com/@shelleyglobal" },
        { id: 6, name: "TWITTER", link: "https://twitter.com/shelley_global" },
        { id: 7, name: "SKYPE", link: "https://join.skype.com/invite/tG7rGDRDBrm6" },
        { id: 8, name: "WHATS-APP", link: "https://api.whatsapp.com/send/?phone=19405395182" },
        { id: 9, name: "FIVERR", link: "https://www.fiverr.com/smartaccounting" },
        // { id: 10, name: "FREELANCING.COM", link: "#" },
    ])
    
    



    return (
        <>
            <div className="ft__bg">
                <div className="pt-4">
                    <div className="container">
                        <div className="row g-3">
                            <div className="col-md-4">
                                <h6 className="ft__link__txt usefull__link__mt mb-2">COMPANY LOCATIONS</h6>
                                <div className="row g-1 company__location pt-2">
                                    {
                                        companyLocation !== undefined && companyLocation.map((item, id) => (
                                            <div key={id} className="col-md-6">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <Link to={`/${item.link}`} className="link__footer">
                                                            <span className="d-flex align-items-start ">
                                                                <i className={`p-1 ft__rt__arrow fa-solid ${item.icon}`}></i>
                                                                <p className="px-3 ft__txt">{item.name}</p>
                                                            </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="row g-3 d-flex justify-content-center">
                                    {
                                        companyShare !== undefined && companyShare.map((item, id) => (
                                            <div key={id} className="col-3 col-md-3">
                                                <div className="ft__img text-center">
                                                    <img src={item.image} className="img-fluid" alt="image" />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row usefull__link__mt">
                                    <div className="col-6 col-md-6">
                                        <h6 className="ft__link__txt text-center mb-2">USEFUL LINKS</h6>
                                        <ul className="list-unstyled">
                                            {
                                                useFullLinks !== undefined && useFullLinks.map((item, id) => (
                                                    <li key={id}>
                                                        <Link to={`/${item.link}`} className="link__footer">
                                                            <p className="ft__txt__usefull text-center">{item.name}</p>
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <h6 className="ft__link__txt text-center mb-2">FOLLOW US</h6>
                                        <ul className="list-unstyled ">
                                            {
                                                followUs !== undefined && followUs.map((item, id) => (
                                                    <li key={id}>
                                                        <a href={item.link} target="_blank" className="text-decoration-none link__footer">
                                                            <p className="ft__txt__usefull text-center">{item.name}</p>
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <p className="ft__copyright mb-0">Copyright © 2023 | <a href='#' target='_blank' style={{ color: 'red', background: 'inherit', textDecoration: "none" }}>  Shelley Global.</a></p>
            </div>

        </>
    );
};

export default Footer;