
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import privacy_policy_banner from '../../assets/privacy-plicy.jpg';
import visa_card_img from '../../assets/visa_card_img.png';
import master_card_img from '../../assets/master_card_img.png';
import bank_transfer_img from '../../assets/bank_transfer_img.png';
import amex_img from '../../assets/amex_img.png';
import paypal_card_img from '../../assets/paypal_card_img.png';
import Stripe_img from '../../assets/Stripe_img.png';



const PrivacyPolicy = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [accordionData, setAccordionData] = useState([
        {
            title: 'CHOOSE A PAYMENT METHOD',
            content: [
                { id: 1, image: Stripe_img, selected: false },
                { id: 2, image: visa_card_img, selected: false },
                { id: 3, image: master_card_img, selected: false },
                { id: 4, image: bank_transfer_img, selected: false },
                { id: 5, image: amex_img, selected: false },
                { id: 5, image: paypal_card_img, selected: false },
            ],
        },
    ]);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const handleImageSelect = (index) => {
        const updatedData = [...accordionData];
        updatedData[activeIndex].content.forEach((item, subIndex) => {
            if (subIndex === index) {
                item.selected = true;
            } else {
                item.selected = false;
            }
        });
        setAccordionData(updatedData);
    };
    const [impPaymentInstraction, setimpPaymentInstraction] = useState([
        { id: 1, desc: " We collect and use only the information that is necessary to provide our services to our clients." },
        { id: 2, desc: "We do not share our clients' information with third parties unless it is necessary to provide our services or with the express consent of our clients." },
        { id: 3, desc: "We maintain strict physical, electronic, and procedural safeguards to protect our clients' information from unauthorized access." },
        { id: 4, desc: "We regularly review and update our policies and procedures to ensure that they comply with the latest laws and regulations regarding data privacy and security." },
        { id: 5, desc: "We require all of our employees to sign confidentiality agreements and to complete training on data privacy and security." },
        { id: 6, desc: "We provide our clients with access to their information and allow them to correct or update their information as needed." },
    ]);




    return (
        <div className="">
            {/* <div className="privacy__banner">
                <img src={privacy_policy_banner} alt="image"  />
            </div> */}
            <div className="container pt-3 individula__container">
                <h3 className="txt__title text-center">PRIVACY POLICY</h3>
                <div className="row py-4">
                    <div className="clearfix">
                        <img src={privacy_policy_banner} className="img-fluid col-md-6 float-md-end mb-3 ms-md-3" alt="image"  />
                        <h5 className="resouces__subtitle_txt">Welcome to our Privacy Policy Page!</h5>
                        <p className="txt__desc">
                            At Shelley Global, we understand that financial matters are a confidential matter for everyone.
                            We take the confidentiality of our clients' personal and business information very seriously and
                            establish trust with our clients. We view our clients as partners and are committed to ensuring the
                            privacy and security of their personal and business information. We also take great care to ensure the
                            confidentiality of identification numbers, registration information, personal health and insurance
                            information, financial information including income, expenses, superannuation, investment details, and others.
                        </p>
                        <p className="txt__desc pay__txt">
                            We are committed to maintaining the integrity of our clients' business data and ensuring compliance with all
                            applicable laws and regulations. All data is stored securely for a minimum of 10 years in case of audit trail
                            or compliance purposes. Regarding the disclosure of personal information and business data, Shelley Global and
                            Finance only provides information to authorized parties as specified by our business clients. We will never
                            disclose any personal or business information without express consent from our clients.
                        </p>

                        <p className="txt__desc">Our privacy policy outlines the following key principles:</p>
                        <ul className="">
                            {
                                impPaymentInstraction !== undefined && impPaymentInstraction.map((item, index) => {
                                    return (
                                        <li key={index} className="txt__desc mb-2">{item.desc}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                {/* <div className="row pt-2 d-flex justify-content-center">
                    <div className="col-md-10">
                        <h3 className="txt__title text-center">PRIVACY POLICY</h3>
                        <h5 className="resouces__subtitle_txt text-center">Welcome to our Privacy Policy Page!</h5>
                        <p className="txt__desc">
                            At Shelley Global, we understand that financial matters are a confidential matter for everyone.
                            We take the confidentiality of our clients' personal and business information very seriously and
                            establish trust with our clients. We view our clients as partners and are committed to ensuring the
                            privacy and security of their personal and business information. We also take great care to ensure the
                            confidentiality of identification numbers, registration information, personal health and insurance
                            information, financial information including income, expenses, superannuation, investment details, and others.
                        </p>
                        <p className="txt__desc pay__txt">
                            We are committed to maintaining the integrity of our clients' business data and ensuring compliance with all
                            applicable laws and regulations. All data is stored securely for a minimum of 10 years in case of audit trail
                            or compliance purposes. Regarding the disclosure of personal information and business data, Shelley Global and
                            Finance only provides information to authorized parties as specified by our business clients. We will never
                            disclose any personal or business information without express consent from our clients.
                        </p>
                    </div>
                </div>
                <div className="row pt-1 d-flex justify-content-center">
                    <div className="col-md-10">
                        <p className="txt__desc">Our privacy policy outlines the following key principles:</p>
                        <ul className="">
                            {
                                impPaymentInstraction !== undefined && impPaymentInstraction.map((item, index) => {
                                    return (
                                        <li key={index} className="txt__desc mb-2">{item.desc}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default PrivacyPolicy;
