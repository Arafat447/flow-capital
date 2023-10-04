
import React, { useState, useEffect } from 'react';
import "./HeaderTop.css";
import moment from 'moment';
// import "../../../node_modules/moment/locale/bn";
import 'moment/locale/bn'; // Import Bengali (Bangla) locale
import logo_icon from '../../assets/logo_icon.png';
import Phone_icon from '../../assets/Phone_icon.png';
import open_mail_icon from '../../assets/open_mail_icon.png';

const HeaderTop = () => {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 250) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, []);

    moment.locale('bn'); // Set locale to Bengali (Bangla)
    const currentTime = moment().format('dddd, MMM DD, YYYY'); // Format time in "LT" format


    const [topData, setTopData] = useState([
        { id: 1, image: logo_icon, title: "CROSS BORDER TAXATION", content_margin: "|", links: "#" },
        { id: 1, image: logo_icon, title: "LOCAL SOLUTION", content_margin: "|", links: "#" },
        { id: 1, image: logo_icon, title: "EXPAT TAX", content_margin: "|", links: "#" },
        { id: 1, image: logo_icon, title: "ACCOUNTING SERVICES", content_margin: "|", links: "#" },
        { id: 1, image: logo_icon, title: "TAX PLANNING", content_margin: "|", links: "#" },
        { id: 1, image: logo_icon, title: "BUSINESS EXPANSION", content_margin: "", links: "#" },
    ])



    return (
        <div className="ht__bg__color">
            <div className={`active1 ${show && 'hidden'}`}>
                <div className="container pt-2">
                    <div className="row pt-3 d-flex justify-content-center">
                        <div className="col-md-11">
                            <ul className="list-unstyled ht__list__ul__email ">
                                <li className="ht__list__email">
                                    <img src={Phone_icon} alt=""  className="img-fluid me-2" style={{ width: '22px', height: 'auto' }} />
                                    <p className="ht__txt__email">+1 888 415 2440 (USA, CAN), +61 2 804 662 30 (AUS)</p>
                                </li>
                                <li className="ht__list__email">
                                    <img src={open_mail_icon} alt=""  className="img-fluid me-2" style={{ width: '22px', height: 'auto' }} />
                                    <p className="ht__txt__email">INFO@SHELLEYGLOBAL.COM </p>
                                </li>
                                <li className="ht__list__email">
                                    <div className="ht-social">
                                        <a href="https://www.linkedin.com/company/shelley-global" target="_blank" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="https://twitter.com/shelley_global" target="_blank" className="twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="https://join.skype.com/invite/tG7rGDRDBrm6" target="_blank" className="skype"><i className="fab fa-skype"></i></a>
                                        {/* <a href="#" target="_blank" className="whatsapp"><i className="fab fa-whatsapp"></i></a> */}
                                        <a href="https://www.youtube.com/@ShelleyGlobal" target="_blank" className="youtube"><i className="fab fa-youtube"></i></a>
                                        <a href="https://www.instagram.com/shelleyglobal7" target="_blank" className="instagram"><i className="fab fa-instagram"></i></a>
                                        <a href="https://www.facebook.com/ShelleyGlobal" target="_blank" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                        {/* <a href="#" target="_blank" className="pinterest"><i className="fab fa-pinterest-p"></i></a> */}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row g-2 d-flex justify-content-center align-items-center mb-2">
                        <div className="col-md-12">
                            <ul className="list-unstyled ht__list__ul">
                                {
                                    topData !== undefined && topData.map((item, id) => {
                                        return (
                                            // <li key={id} className="ht__list">
                                            //     <img src={item.image} alt=""  className="img-fluid me-2" style={{ width: '22px', height: 'auto' }} />
                                            //     <p className="ht__txt">{item.title}</p>
                                            // </li>
                                            <li key={id} className="ht__list">
                                                <p className="ht__txt">{item.title}</p>
                                                <p className="ht__txt">{item.content_margin}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeaderTop;

