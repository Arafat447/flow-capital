import React from 'react';
import moment from "moment";
import '../footer/Footer.css';

const FooterBottom = () => {
    return (
        <div className="pt-3">
            <div className="container mb-3">
                <div className="row g-3">
                    <div className="col-md-8">
                        <div className="d-flex ">
                            <h6 className="fb__link__txt">অভিযোগ ও অনুসন্ধান</h6>
                            <h6 className="px-2"> | </h6>
                            <h6 className="fb__link__txt">সাইট ম্যাপ</h6>
                            <h6 className="px-2"> | </h6>
                            <h6 className="fb__link__txt">ওয়েব এডমিন</h6>
                            <h6 className="px-2"> | </h6>
                            <h6 className="fb__link__txt">ফিডব্যাক ফরম</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex">
                            <h6 className="fb__link__txt mb-2">সামাজিক যোগাযোগ</h6>
                            <div className="ht-social">
                                <a href="https://www.facebook.com/people/Tourism-Developers-Association-of-Bangladesh-TDAB/100066275122335/" target='_blank' className="facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://api.whatsapp.com/send?phone=+8801611-685570&text=test" target='_blank' className="whatsapp"><i className="fab fa-whatsapp"></i></a>
                               <a href='https://www.youtube.com/' target='_blank' className="youtube"><i className="fab fa-youtube"></i></a>
                                {/* <a href='#' className="twitter"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#" className="instagram"><i className="fab fa-instagram"></i></a> */}
                                {/* <a href="#" className="pinterest"><i className="fab fa-pinterest-p"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="ft__copyright mb-0">ডিজাইন & ডেভেলপড বাইঃ <a href='https://zaimahtech.com/' target='_blank' style={{ color: 'red', background: 'inherit', textDecoration: "none" }}>zaimahtech.com .</a></p>
        </div>
    );
};

export default FooterBottom;