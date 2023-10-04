import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import backgroundVideo from '../../assets/HomePageVideoHD.mp4';
import Australia_card_img from "../../assets/Australia_card_img.png";
import USA_card_img from "../../assets/USA_card_img.png";
import Canada_card_img from "../../assets/Canada_card_img.png";
import why_us_img from "../../assets/why_us_img.png";
import privacy_img from "../../assets/privacy_img.png";
import funder_img from "../../assets/funder_img.png";
import director_img from "../../assets/director_img.png";
import AboutPIcture_img from "../../assets/AboutPIcture_img.png";
import HorizontalNonLinearStepper from './HorizontalNonLinearStepper';
import { isAndroid, isIOS, } from 'react-device-detect';

const MainHomePage = () => {

    const [activeButton, setActiveButton] = useState(2);

    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };
    const [activeButtonPayment, setActiveButtonPayment] = useState(1);

    const handlePaymentButtonClick = (btnNo) => {
        setActiveButtonPayment(btnNo);
    };


    const [aboutUsData, setAboutUsData] = useState([
        { id: 1, image: Australia_card_img, title: "Australia", link: "australian-services", desc: "Shelley Global Pty Ltd provides domestic and cross-border taxation, financial accounting, local entity formation, and international expansion services in Australia. With a team of experienced professionals, the company offers tailored solutions to help businesses establish and grow their presence in Australia and beyond. The company's expertise in Australian market entry is particularly valuable for foreign companies looking to expand into the country." },
        { id: 2, image: USA_card_img, title: "UNITED STATES", link: "usa-services", desc: "Shelley Global Inc offers a wide range of tax and financial services in the United States to individuals, businesses, and trusts. These services include the preparation of federal and state tax returns for individuals, partnerships, corporations, and estates and trusts. In addition, the company provides international tax preparation services for both individuals and businesses, as well as assistance with entity setup for both US residents and foreigners." },
        { id: 3, image: Canada_card_img, title: "CANADA", link: "canadian-services", desc: "Shelley Global LLP offers services in Canada, including local tax services for individuals and businesses, as well as cross-border tax services to help clients navigate the complexities of international tax regulations. The company  provides accounting and bookkeeping services to help clients manage their finances and ensure compliance with local regulations. In addition, Shelley Global LLP offers entity services to help clients establish and manage their businesses in Canada." },
    ]);
    const [whyUsData, setWhyUsData] = useState([
        { id: 1, image: why_us_img, link: "why-us", hd_title: "WHY US", desc: "Behind every successful business, there is a great Accountant, a great Financial Advisor. We would love to be a part of your success. Why you should love Shelley Global? What’s the uniqueness of Shelley Global? Well, Shelley Global has several unique features that set it apart from other international tax advisory and accounting firms. Shelley Global’ s global presence, international expertise, client-focused approach, technological innovation, and experienced team make it a unique and highly valuable partner for businesses looking to navigate the complex world of international tax and accounting." },
        { id: 2, image: privacy_img, link: "privacy-policy", hd_title: "PRIVACY POLICY", desc: "At Shelley Global, we understand that financial matters are a confidential matter for everyone. We take the confidentiality of our clients' personal and business information very seriously and establish trust with our clients. We view our clients as partners and are committed to ensuring the privacy and security of their personal and business information. We also take great care to ensure the confidentiality of identification numbers, registration information, personal health and insurance information, financial information including income, expenses, superannuation, investment details, and others." },
    ]);
    const [messageFromData, setMessageFromData] = useState([
        {
            id: 1, image: funder_img, title: "Selina Shelley", position_rank: "Founder", inc: "Shelley Global Inc (United States)", pty: "Shelley Global Pty Ltd (Australia)", llp: "Shelley Global LLP (Canada)", hd_title: "MESSAGE FROM THE FOUNDER",
            desc1: "Hi, I'm Selina Shelley, the founder and a tax practitioner based in the USA, Australia, and Canada. With expertise in international taxation between these countries, I specialize in helping ex-pats with their tax needs, and assisting residents and non-residents in meeting their tax obligations as per the relevant international tax treaty. I can also handle the formation and tax affairs of new entities, branches, or subsidiaries for residency or non-residency in these countries.",
            desc2: "I have extensive experience in handling modern e-commerce businesses that sell globally and can advise on how to meet tax obligations with IRS, ATO and CRA. Additionally, we have partnerships with experienced accountants in Auckland and London to take care of business operations in the UK and New Zealand.",
            desc3: "My team of experts and I offer a range of professional accounting, taxation, and consulting services. We have reinvented our service model to provide superior technology and efficiencies, helping clients build a strong accounting foundation. With over 15 years of experience serving thousands of clients, we pride ourselves on our work ethics and commitment to personal attention, and prompt response.",
        },

        {
            id: 2, image: director_img, title: "Tal Al", position_rank: "Director", inc: "Shelley Global Inc (United States)", pty: "Shelley Global Pty Ltd (Australia)", llp: "Shelley Global LLP (Canada)", hd_title: "MESSAGE FROM THE DIRECTOR",
            desc1: "Hello, I'm Tal Al, Director of Shelley Global, an international tax advisory and accounting firm. Our passion is to help clients achieve their business and financial goals, no matter where in the world they operate. We believe that effective international tax planning and compliance are essential for success in today's global economy.",
            desc2: "At Shelley Global, we take a proactive approach to international taxation, providing customized solutions that address the unique challenges and opportunities facing each client. Our team of seasoned professionals has extensive experience in all areas of international tax, from structuring cross-border transactions to mitigating tax risk, and we're committed to staying up-to-date with the latest regulatory developments.",
            desc3: "We understand that effective communication, transparency, and integrity are critical to building lasting relationships with our clients. That's why we work closely with you to understand your needs and objectives, providing clear and concise advice every step of the way. Shelley Global can help you whether you're expanding your business overseas, managing global tax obligations, or seeking to optimize your international tax position.",
        },

    ]);

    const video = `<video autoPlay muted width="100%" height="100%" loop playsInline >
        <source src="${backgroundVideo}" type="video/mp4" />
    </video>`


    return (
        <>
            <section>
                <div className="d-none d-md-block container">
                    <div className="bg__home__banner">
                        <video className="banner__video" autoPlay muted loop>
                            <source src={backgroundVideo} type="video/mp4" />
                        </video>
                        <div className="home__banner__content">
                            <div className="">
                                <h2 className="banner__title">WELCOME TO SHELLEY GLOBAL</h2>
                                <p className="banner__desc pt-2">
                                    WE ARE AN INTERNATIONAL TAX ADVISORY AND ACCOUNTING FIRM BASED IN
                                    LOS ANGELES, CHICAGO, DALLAS, SYDNEY, AND TORONTO
                                </p>
                            </div>
                            <div className="pt-2 d-flex justify-content-center">
                                <div className="services__row">
                                    <Link to="australian-services" className="text-decoration-none text-white">
                                        <button
                                            className={`ban__btn__service ${activeButton === 1 ? 'active' : ''}`}
                                            onClick={() => handleButtonClick(1)}
                                        >AUSTRALIA</button>
                                    </Link>
                                    <Link to="usa-services" className="text-decoration-none text-white">
                                        <button
                                            className={`ban__btn__service2 ${activeButton === 2 ? 'active' : ''}`}
                                            onClick={() => handleButtonClick(2)}
                                        >UNITED STATES</button>
                                    </Link>
                                    <Link to="canadian-services" className="text-decoration-none text-white">
                                        <button
                                            className={`ban__btn__service3 ${activeButton === 3 ? 'active' : ''}`}
                                            onClick={() => handleButtonClick(3)}
                                        >CANADA</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="pt-2">
                                <p className="banner__desc mt-2">
                                    WE ALSO HAVE PARTNERSHIPS WITH EXPERIENCED ACCOUNTANT IN AUCKLAND AND LONDON TO TAKE CARE OF
                                    BUSINESS OPERATIONS IN UNITED KINGDOM OR NEW ZEALAND
                                </p>
                            </div>

                            <div className="pt-2 d-flex justify-content-center">
                                <div className="payment__row">
                                    <Link to="appointment" className="text-decoration-none text-white w-100">
                                        <button
                                            className={`ban__btn__payment ${activeButtonPayment === 1 ? 'active' : ''}`}
                                            onClick={() => handlePaymentButtonClick(1)}
                                        >
                                            APPOINTMENT
                                        </button>
                                    </Link>
                                    <Link to="payment" className="text-decoration-none text-white w-100">
                                        <button
                                            className={`ban__btn__payment2 ${activeButtonPayment === 2 ? 'active' : ''}`}
                                            onClick={() => handlePaymentButtonClick(2)}
                                        >
                                            PAYMENT
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-block d-md-none">
                    <div className="bg__home__banner">
                        {
                            isAndroid &&
                            <>
                                <video className="banner__video" autoPlay muted loop >
                                    <source src={backgroundVideo} type="video/mp4" />
                                </video>
                                <div className="home__banner__content">
                                    <h2 className="banner__title">WELCOME TO SHELLEY GLOBAL</h2>
                                    <p className="banner__desc pt-2">
                                        WE ARE AN INTERNATIONAL TAX ADVISORY AND ACCOUNTING FIRM BASED IN
                                        LOS ANGELES, CHICAGO, DALLAS, SYDNEY, AND TORONTO
                                    </p>
                                    <div className="pt-2 d-flex justify-content-center">
                                        <div className="services__row">
                                            <Link to="australian-services" className="text-decoration-none text-white">
                                                <button
                                                    className={`ban__btn__service ${activeButton === 1 ? 'active' : ''}`}
                                                    onClick={() => handleButtonClick(1)}
                                                >AUSTRALIA</button>
                                            </Link>
                                            <Link to="usa-services" className="text-decoration-none text-white">
                                                <button
                                                    className={`ban__btn__service2 ${activeButton === 2 ? 'active' : ''}`}
                                                    onClick={() => handleButtonClick(2)}
                                                >UNITED STATES</button>
                                            </Link>
                                            <Link to="canadian-services" className="text-decoration-none text-white">
                                                <button
                                                    className={`ban__btn__service3 ${activeButton === 3 ? 'active' : ''}`}
                                                    onClick={() => handleButtonClick(3)}
                                                >CANADA</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <p className="banner__desc mt-2">
                                            WE ALSO HAVE PARTNERSHIPS WITH EXPERIENCED ACCOUNTANT IN AUCKLAND AND LONDON TO TAKE CARE OF
                                            BUSINESS OPERATIONS IN UNITED KINGDOM OR NEW ZEALAND
                                        </p>
                                    </div>

                                    <div className="pt-2 d-flex justify-content-center">
                                        <div className="payment__row">
                                            <Link to="appointment" className="text-decoration-none text-white w-100">
                                                <button
                                                    className={`ban__btn__payment ${activeButtonPayment === 1 ? 'active' : ''}`}
                                                    onClick={() => handlePaymentButtonClick(1)}
                                                >
                                                    APPOINTMENT
                                                </button>
                                            </Link>
                                            <Link to="payment" className="text-decoration-none text-white w-100">
                                                <button
                                                    className={`ban__btn__payment2 ${activeButtonPayment === 2 ? 'active' : ''}`}
                                                    onClick={() => handlePaymentButtonClick(2)}
                                                >
                                                    PAYMENT
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        {
                            isIOS &&
                            <> <div
                                className="banner__video__ios"
                                dangerouslySetInnerHTML={{ __html: video }}
                            />
                                <div className="home__banner__content">
                                    <h2 className="banner__title">WELCOME TO SHELLEY GLOBAL</h2>
                                    <p className="banner__desc pt-1">
                                        WE ARE AN INTERNATIONAL TAX ADVISORY AND ACCOUNTING FIRM BASED IN
                                        LOS ANGELES, CHICAGO, DALLAS, SYDNEY, AND TORONTO
                                    </p>
                                    <div className="pt-1 d-flex justify-content-center">
                                        <div className="services__row">
                                            <Link to="australian-services" className="text-decoration-none text-white">
                                                <button
                                                    className={`ban__btn__service ${activeButton === 1 ? 'active' : ''}`}
                                                    onClick={() => handleButtonClick(1)}
                                                >AUSTRALIA</button>
                                            </Link>
                                            <Link to="usa-services" className="text-decoration-none text-white">
                                                <button
                                                    className={`ban__btn__service2 ${activeButton === 2 ? 'active' : ''}`}
                                                    onClick={() => handleButtonClick(2)}
                                                >UNITED STATES</button>
                                            </Link>
                                            <Link to="canadian-services" className="text-decoration-none text-white">
                                                <button
                                                    className={`ban__btn__service3 ${activeButton === 3 ? 'active' : ''}`}
                                                    onClick={() => handleButtonClick(3)}
                                                >CANADA</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="pt-2 mt-2 d-flex justify-content-center">
                                        <div className="payment__row">
                                            <Link to="appointment" className="text-decoration-none text-white w-100">
                                                <button
                                                    className={`ban__btn__payment ${activeButtonPayment === 1 ? 'active' : ''}`}
                                                    onClick={() => handlePaymentButtonClick(1)}
                                                >
                                                    APPOINTMENT
                                                </button>
                                            </Link>
                                            <Link to="payment" className="text-decoration-none text-white w-100">
                                                <button
                                                    className={`ban__btn__payment2 ${activeButtonPayment === 2 ? 'active' : ''}`}
                                                    onClick={() => handlePaymentButtonClick(2)}
                                                >
                                                    PAYMENT
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>

                        }
                    </div>
                </div>
            </section>


            <section className="about__bg">
                <div className="container pb-4 ">
                    <div className="about__container ab__top">
                        <div className="row g-3 pb-3">
                            <div className="col-md-6 pe-md-5">
                                <h3 className="txt__title text-center text-md-start">ABOUT US</h3>
                                <p className="txt__desc">
                                    We are a team of highly devoted and experienced tax professionals who are passionate about TAX and related
                                    services. We offer a comprehensive range of domestic accounting and taxation services for the American,
                                    Australian, and Canadian markets, as well as international tax disclosures for foreign entities.
                                    The company also specializes in setting up entities in America, Australia and Canada, catering to
                                    both residents and non-residents.
                                </p>
                                <div className="learn__btn__div pt-4">
                                    <Link to="about" className="btn__learn__more">Learn More</Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about__img">
                                    <img src={AboutPIcture_img} className="img-fluid" alt="image" border="0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-5">
                <div className="container pt-5">
                    <div className="home__container">
                        <h3 className="txt__title text-center">SERVICES</h3>
                        <div className="row g-3 pt-3">
                            {
                                aboutUsData !== undefined && aboutUsData.map((about) => {
                                    return (
                                        <div key={about.id} className="col-md-4">
                                            <div className="service__card">
                                                <div className="card">
                                                    <div className="card__img">
                                                        <img src={about.image} className="img-fluid" alt="image" border="0" />
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card__title">{about.title}</h5>
                                                        <p className="card__text pt-3">{about.desc}</p>
                                                        {/* <div className="pt-3">
                                                        <Link to={`${about.link}`} className="btn__learn__more">Learn More</Link>
                                                    </div> */}
                                                    </div>
                                                    <div className="card-footer text-center">
                                                        <Link to={`${about.link}`} className="btn__learn__more">Learn More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className="why__us__bg pb-4">
                <div className="container pt-4">
                    <div className="home__container">
                        <div className="row g-3 gx-md-5">
                            {
                                whyUsData !== undefined && whyUsData.map((why_us) => {
                                    return (
                                        <div key={why_us.id} className="col-md-6">
                                            <div className="why__us__card">
                                                <h3 className="card__title pt-2">{why_us.hd_title}</h3>
                                                <div className="card__img">
                                                    <img src={why_us.image} className="img-fluid" alt="image" border="0" />
                                                </div>
                                                <div className="card-body">
                                                    <p className="card__text pt-2">{why_us.desc}</p>
                                                    <div className="learn__btn__div pt-3">
                                                        <Link to={`${why_us.link}`} className="btn__learn__more">Learn More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className="message__from__bg pb-4">
                <div className="container pt-5">
                    <div className="home__container">
                        <div className="row g-3 gx-md-5 pt-3">
                            {
                                messageFromData !== undefined && messageFromData.map((message) => {
                                    return (
                                        <div key={message.id} className="col-md-6">
                                            <div className="message__from__card mt-3">
                                                <h3 className="card__title mb-2">{message.hd_title}</h3>
                                                <div className="card__img">
                                                    <img src={message.image} className="img-fluid" alt="image" border="0" />
                                                </div>
                                                <div className="pt-2">
                                                    <p className="card__text pt-1">{message.desc1}</p>
                                                    <p className="card__text pt-1">{message.desc2}</p>
                                                    <p className="card__text pt-1">{message.desc3}</p>
                                                </div>
                                                <div className="pt-3">
                                                    <h5 className="card__subtitle">{message.title} | {message.position_rank}</h5>
                                                    <p className="card__txt__inc">{message.inc}</p>
                                                    <p className="card__txt__inc">{message.pty}</p>
                                                    <p className="card__txt__inc">{message.llp}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>


            <section className="pb-4">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-12">
                            <HorizontalNonLinearStepper />
                        </div>
                    </div>
                    {/* <VideoPlayer /> */}
                </div>
            </section>

        </>
    );
};

export default MainHomePage;