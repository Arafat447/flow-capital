import React, { useState } from 'react';
import banner_about from "../../assets/banner_about.png";
import Logo1 from "../../assets/Logo1.png";

const AboutUs = () => {
    const [aboutData, setaboutData] = useState([
        {
            id: 1, image: Logo1,
            desc: "We are a team of highly devoted and experienced tax professionals who are passionate about TAX and related services. We offer a comprehensive range of domestic accounting and taxation services for the American, Australian, and Canadian markets, as well as international tax disclosures for foreign entities. The company also specializes in setting up entities in the counties catering to both residents and non-residents. We have extensive experience working with businesses of all sizes, from small startups to large multinational corporations."
        },
        {
            id: 2, image: Logo1,
            desc: "Shelley Global’ s primary goal is to help clients meet their tax obligations while maximizing benefits and minimizing liabilities in a lawful way. We provide expert guidance to help clients achieve their business goals and focus on their core operations. We leverage modern technology including tax, accounting, and payroll software and apps to ensure the highest levels of accuracy and efficiency, reducing processing times, reducing the administrative burden and minimizing errors, leading to cost savings for our clients."
        },
        {
            id: 3, image: Logo1,
            desc: "Shelley Global offers a local tax and accounting services, including individual tax preparation, partnership tax returns, corporate tax returns, international tax services, entity setup, bookkeeping and payroll, reporting, advisory services, representation services, and more for United States, Australia and Canada. Also offers a range of international tax services, including tax structuring, cross-border transactions, transfer pricing, and tax compliance for businesses with international operations and more."
        },
        {
            id: 4, image: Logo1,
            desc: "At Shelley Global, confidentiality and privacy are our top priorities. The company understands that sensitive financial information must be handled with the utmost care and discretion. As such, they have implemented strict protocols and procedures to ensure that all client information is kept confidential and secure."
        },
        {
            id: 5, image: Logo1,
            desc: "Shelley Global is a team of highly skilled tax professionals who stays up-to-date with the latest tax laws, regulations, and compliance requirements to provide accurate and relevant advice to clients. We understand that navigating the complex world of tax and accounting can be challenging, especially for businesses operating in multiple jurisdictions. That's why we work closely with our clients, providing guidance and support at every step to ensure their success."
        },
    ])
    return (
        <>
            {/* <section className="pb-4">
                <div className="banner__about">
                    <img src={banner_about} className="img-fluid"  alt="image" border="0" />
                </div>
            </section> */}

            <section>
                <div className="container about__us__div">
                    <div className="banner__about">
                        <img src={banner_about} className="img-fluid"  alt="image" border="0" />
                    </div>
                    <h3 className="txt__title text-center pt-4">ABOUT US</h3>
                    <div className="row pt-2">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="">
                                <ul className="list-unstyled">
                                    {
                                        aboutData !== undefined && aboutData.map((about) => {
                                            return (
                                                <li key={about.id} className="d-flex align-items-start">
                                                    <img src={about.image} className="img-fluid me-3 pt-1" style={{ width: "25px", height: "25px" }}  alt="image" border="0" />
                                                    <p className="txt__desc txt_justify">{about.desc}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;