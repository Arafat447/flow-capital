
// working code
import React, { useState } from "react";
import "./HorizontalNonLinearStepper.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import testimonial_img from '../../assets/testimonial_img.png';
import DomDaines from '../../assets/DomDaines.png';
import Geoff from '../../assets/Geoff.png';
import Nicholas from '../../assets/Nicholas.jpg';
import Qiang from '../../assets/Qiang.jpg';
import Tomer from '../../assets/Tomer.jpg';
import Berlin from '../../assets/Berlin.jpg';
import Aymeric_Wise_Lab from '../../assets/Aymeric_Wise_Lab.jpg';
import Cameron from '../../assets/Cameron.png';
import Simon from '../../assets/Simon.png';
import Mehran from '../../assets/Mehran.png';
import Leo from '../../assets/Leo.png';
import Dima from '../../assets/Dima.png';
import Debby_img from '../../assets/Debby_img.png';
import DomDanies_img from '../../assets/DomDanies_img.png';
import Miguel_img from '../../assets/Miguel_img.png';
import Thais_MARQUES from '../../assets/Thais_MARQUES.jpg';
import Yoomin from '../../assets/Yoomin.jpg';
import Phillip from '../../assets/Phillip.jpg';
import Matthew_Manuko from '../../assets/Matthew_Manuko.jpg';
import Bruce_img from '../../assets/Bruce_img.jpg';


function TestimonialNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}

function TestimonialPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "white", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}


const HorizontalNonLinearStepper = () => {
    const [stepsData, setStepsData] = useState([
        {
            id: 2, image: Qiang,
            title_name: "Qiang Ding",
            digination: "CEO, VPMA Global (USA, AU & NZ)",
            services_type: "Corporate tax obligations management and business advisory",
            desc1: "I am delighted to recommend Shelley Global for its exceptional services in corporate tax obligations management and business advisory. Over the past couple of years, it has been an absolute pleasure working with their team. They have provided me with remarkable guidance for my IT company's global operations. Their team's expertise is exceptional. They work with the highest levels of professionalism and integrity. One of the aspects that I appreciate the most is their commitment to staying up to date with all the important due dates. Whether it's Payroll or Tax, they always ensure that everything is filed accurately and on time.",
            desc2: "I cannot thank them enough for their efforts. I highly recommend Shelley Global for any business looking to expand and grow globally. They have proven to be a reliable partner in every aspect, and I am confident that their expertise will help you achieve your business goals.",
        },
        {
            id: 1, image: Nicholas,
            title_name: "Nicholas Christopher Macey",
            digination: "Business Owner, Sole Trader",
            services_type: "Service Type: International Tax",
            desc1: "Hi, I'm Nicholas Christopher Macey and I want to express my gratitude to Shelley Global for their exceptional assistance in bringing all my overdue taxes up to date from 2013. Not only did they help me resolve my past tax obligations, but they also successfully navigated the complexities of cross-border taxation between the United Kingdom and Australia while I had to share my residence between London and Sydney. They also went above and beyond by handling my paper-based tax returns for 2013 and assisting me with backdated ABN openings through ABR.",
            desc2: "I wholeheartedly recommend Shelley Global to anyone seeking reliable and comprehensive tax services, especially in the realm of cross-border taxation. Their professionalism, knowledge, and dedication have made a significant difference in my financial life. Thank you, Shelley Global, for your outstanding work and continued partnership.",
        },
        
        {
            id: 3, image: Tomer,
            title_name: "Tomer Garzberg",
            digination: "Co-Founder and CEO, Ybot International, Inc",
            services_type: "Service Type: International Tax",
            desc1: "I recently started working with Tal at Shelley Global and I can confidently say that he's been fantastic. When I moved from Australia to the United States, he helped me with my tax residency matters and made sure that all my tax obligations were met. Tal is highly professional, and action-oriented, and gets the work done quickly and efficiently. I would definitely recommend him to anyone looking for tax services. Thanks, Tal, for all your help!",
            desc2: "",
        },
        {
            id: 4, image: Berlin,
            title_name: "Berlin Ciputra",
            digination: "Director, Leather Couch Pty Ltd",
            services_type: "Service Type: International Tax (USA-Australia)",
            desc1: "I've been utilizing Shelley Global's cross-border company tax filing services for my business operating between the USA and Australia. I can't express enough how invaluable their expertise has been in handling the complexities of international taxation. With their assistance, I've been able to meet all my tax obligations and stay compliant with the regulations of both countries. Shelley Global's professionalism and customized solutions have made them an indispensable partner for my cross-border business operations. I highly recommend their services to anyone seeking seamless tax filing and compliance support.",
            desc2: "",
        },
        // {
        //     id: 5, image: Debby_img,
        //     title_name: "Debby Hardjadinata",
        //     digination: "(Director), The DomDaines Anchor Pty Ltd",
        //     services_type: "Service Type: International Tax",
        //     desc1: "Hi, I'm Debby. I have been working with Shelley Global for quite some time now and I must say, their services have been truly exceptional. They have taken care of my company in the USA and Australia, handling everything from bookkeeping to tax compliance. Their team is highly professional, knowledgeable, and efficient, always providing prompt responses to my inquiries and addressing my concerns in a timely manner. Thanks to Shelley Global Inc, I can focus on running my business and expanding it to new markets, without worrying about compliance issues. I highly recommend their services to anyone looking for reliable and cost-effective solutions for their international business needs."
        // },
        {
            id: 6, image: DomDanies_img,
            title_name: "Dom Daines",
            digination: "Director, DGD Trading Pty Ltd",
            services_type: "Service Type: Bookkeeping, Reporting, Tax filing, Representation",
            desc1: "Hi, I'm Dom Daines, an e-commerce business owner. I've worked with Shelley Global for 4 years now for my bookkeeping, tax filing, dividend distribution, financial reports, legal communication, and more. Shelley Global has always been professional, knowledgeable, and efficient in handling my financial matters. They provide exceptional service and I've never had issues with managing deadlines.",
            desc2: "What sets Shelley Global apart is its attention to detail and personalized approach. They take the time to understand my unique financial situation and tailor their services accordingly. They're always available to answer my questions and concerns, and their prompt response time is greatly appreciated. I highly recommend Shelley Global to anyone seeking expert tax and financial services. Their experience and dedication to their clients make them a valuable asset to any business or individual globally.",
        },
        {
            id: 7, image: Geoff,
            title_name: "Geoff Evans",
            digination: "Business Owner, Sole Trader",
            services_type: "Service Type: Australian Domestic Tax Accounting",
            desc1: "I've been working with Shelley Global for more than a year now. High quality work, excellent communication and organization. They quickly earned my trust and confidence. Working with them is a pleasure and has been great for my business. Highly recommended.",
        },
        {
            id: 8, image: Aymeric_Wise_Lab,
            title_name: "Aymeric Gaurat-Apelli",
            digination: "Founder, Wise Labs Pty Ltd",
            services_type: "Service Type: Trust and company taxation, Bookkeeping, payroll",
            desc1: "Shelley Global has been our go-to partner for the past 7 years, and they've seriously saved us a ton of stress when it comes to accounting for both our business and personal finances. They don't just keep us in line with all the rules, but they've also been instrumental in navigating tricky situations like setting up new company structures and handling acquisitions. We can't thank them enough for their continued support. You guys rock!"
        },
        {
            id: 9, image: Cameron,
            title_name: "Cameron Bell",
            digination: "Director, Charvy Group Pty Ltd",
            services_type: "Service Type: Company formations, bookkeeping, tax filing, advisory",
            desc1: "I would like to share my experience working with Shelley Global for my company formations and their ongoing taxation services. They have played a crucial role in helping me navigate the complex process of forming a company. From choosing the right business structure to handling all the necessary filings, documentation, registrations and legal requirements saving me time and effort.  Additionally, Shelley Global's ongoing tax filing services have been exceptional. They handle all aspects of tax filing, from preparing accurate financial statements to submitting tax returns promptly. If you're looking to form a company, I highly recommend Shelley Global. With them, you can focus on building your business with peace of mind"
        },
        {
            id: 10, image: Simon,
            title_name: "Simon Harwood",
            digination: "Founder, Royal Zion Pty Ltd",
            services_type: "Service Type: Company tax and Bookkeeping",
            desc1: "I started a new e-commerce business and engaged the services of an accountant so I could focus on growing my business. However, I wasn’t satisfied with the accountant service I was receiving - they were not proactive and were not good at meeting deadlines. So, I changed accountant and contracted Selina. Within a week she implemented processes to ensure accounting work was completed accurately and on time. I am happy very and confident working with Selina and her team, and their support enables me to focus on growing my business."
        },
    ]);

    const [activeStep, setActiveStep] = useState(0);

    const handleStepClick = (step) => {
        setActiveStep(step);
    };


    const testimonialSlider = {
        className: "center",
        dots: false,
        // infinite: false,
        speed: 500,
        // centerMode: true,
        // centerPadding: "40px",
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        nextArrow: <TestimonialNextArrow />,
        prevArrow: <TestimonialPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // centerMode: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 4,
                    // centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    // centerMode: true,
                }
            }
        ]

    };
    return (
        <div className="step__bar__container">
            <h3 className="txt__title text-center">TESTIMONIALS</h3>
            <div className="step__content">
                <div className="step__desc__content">
                    <div className="px-2 pt-2">
                        <p className="step__desc">{stepsData[activeStep].desc1}</p>
                        <p className="step__desc">{stepsData[activeStep].desc2}</p>
                        <ul className="d-flex justify-content-center list-unstyled">
                            <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
                            <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" pt-3 ">
                <div className="step__bar">
                    <Slider {...testimonialSlider}>
                        {
                            stepsData.slice(0, 10).map((step, index) => {
                                return (
                                    <div
                                        key={step.id}
                                        className={`step me-4 ${activeStep === index ? "active" : ""}`}
                                        onClick={() => handleStepClick(index)}
                                    >
                                        <div className="step__icon"><img src={step.image} alt="icon"  /></div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
            {/* <ul className="step__bar">
                {
                    stepsData.slice(0, 7).map((step, index) => (
                        <li
                            key={step.id}
                            className={`step me-4 ${activeStep === index ? "active" : ""}`}
                            onClick={() => handleStepClick(index)}
                        >
                            <div className="step__icon"><img src={step.image} alt="icon"  /></div>
                            <div className="step__label">{step.label}</div>
                        </li>
                    ))
                }
            </ul> */}

            <div className="step__content">
                <div className="step__digination__content">
                    <h6 className="step__title">{stepsData[activeStep].title_name}</h6>
                    <p className="step__digination">{stepsData[activeStep].digination}</p>
                </div>
            </div>

            <div className="text-center pt-2 mb-5">
                <Link to="/testimonial" className="btn__learn__more text-uppercase">See More</Link>
            </div>
        </div>
    );
};

export default HorizontalNonLinearStepper;




// //not working code
// import React, { useState } from "react";
// import "./HorizontalNonLinearStepper.css";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import testimonial_img from '../../assets/testimonial_img.png';
// import DomDaines from '../../assets/DomDaines.png';
// import Geoff from '../../assets/Geoff.png';
// import Nicholas from '../../assets/Nicholas.jpg';
// import Qiang from '../../assets/Qiang.jpg';
// import Tomer from '../../assets/Tomer.jpg';
// import Berlin from '../../assets/Berlin.jpg';
// import Aymeric_Wise_Lab from '../../assets/Aymeric_Wise_Lab.jpg';
// import Cameron from '../../assets/Cameron.png';
// import Simon from '../../assets/Simon.png';
// import Mehran from '../../assets/Mehran.png';
// import Leo from '../../assets/Leo.png';
// import Dima from '../../assets/Dima.png';
// import Debby_img from '../../assets/Debby_img.png';
// import DomDanies_img from '../../assets/DomDanies_img.png';
// import Miguel_img from '../../assets/Miguel_img.png';
// import Thais_MARQUES from '../../assets/Thais_MARQUES.jpg';
// import Yoomin from '../../assets/Yoomin.jpg';
// import Phillip from '../../assets/Phillip.jpg';
// import Matthew_Manuko from '../../assets/Matthew_Manuko.jpg';
// import Bruce_img from '../../assets/Bruce_img.jpg';

// function TestimonialNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "white",
//         borderRadius: "100px"
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function TestimonialPrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "white",
//         borderRadius: "100px"
//       }}
//       onClick={onClick}
//     />
//   );
// }

// const HorizontalNonLinearStepper = () => {
//   const [stepsData, setStepsData] = useState([
//     {
//       id: 1,
//       image: Nicholas,
//       title_name: "Nicholas Christopher Macey",
//       digination: "(Business Owner), Sole Trader",
//       services_type: "Service Type: International Tax",
//       desc1:
//         "Hi, I'm Nicholas Christopher Macey and I want to express my gratitude to Shelley Global for their exceptional assistance in bringing all my overdue taxes up to date from 2013. Not only did they help me resolve my past tax obligations, but they also successfully navigated the complexities of cross-border taxation between the United Kingdom and Australia while I had to share my residence between London and Sydney. They also went above and beyond by handling my paper-based tax returns for 2013 and assisting me with backdated ABN openings through ABR.",
//       desc2:
//         "I wholeheartedly recommend Shelley Global to anyone seeking reliable and comprehensive tax services, especially in the realm of cross-border taxation. Their professionalism, knowledge, and dedication have made a significant difference in my financial life. Thank you, Shelley Global, for your outstanding work and continued partnership."
//     },
//     // Remaining data...
//   ]);

//   const [activeStep, setActiveStep] = useState(0);

//   const handleStepClick = (step) => {
//     setActiveStep(step);
//   };

//   const testimonialSlider = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500,
//     nextArrow: <TestimonialNextArrow />,
//     prevArrow: <TestimonialPrevArrow />,
//     initialSlide: activeStep // Update initialSlide with activeStep
//   };

//   const renderSteps = stepsData.map((step) => (
//     <div className="step" key={step.id} onClick={() => handleStepClick(step.id - 1)}>
//       <div className={activeStep === step.id - 1 ? "step-img active" : "step-img"}>
//         <img src={step.image} alt="Step" />
//       </div>
//       <div className="step-title">{step.title_name}</div>
//       <div className="step-digination">{step.digination}</div>
//     </div>
//   ));

//   return (
//     <div className="container">
//       <div className="step-wrapper">{renderSteps}</div>
//       <div className="testimonial-content">
//         <Slider {...testimonialSlider}>
//           {stepsData.map((step) => (
//             <div className="slide" key={step.id}>
//               <div className="testimonial-card">
//                 <div className="testimonial-header">
//                   <div className="testimonial-avatar">
//                     <img src={step.image} alt="Testimonial Avatar" />
//                   </div>
//                   <div className="testimonial-info">
//                     <div className="testimonial-title">{step.title_name}</div>
//                     <div className="testimonial-digination">{step.digination}</div>
//                     <div className="testimonial-services-type">{step.services_type}</div>
//                   </div>
//                 </div>
//                 <div className="testimonial-description">
//                   <p>{step.desc1}</p>
//                   <p>{step.desc2}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default HorizontalNonLinearStepper;












// // working code
// import React, { useState } from "react";
// import "./HorizontalNonLinearStepper.css";
// import { Link } from "react-router-dom";
// import testimonial_img from '../../assets/testimonial_img.png';
// import DomDaines from '../../assets/DomDaines.png';
// import Geoff from '../../assets/Geoff.png';
// import Nicholas from '../../assets/Nicholas.jpg';
// import Qiang from '../../assets/Qiang.jpg';
// import Tomer from '../../assets/Tomer.jpg';
// import Berlin from '../../assets/Berlin.jpg';
// import Aymeric_Wise_Lab from '../../assets/Aymeric_Wise_Lab.jpg';
// import Cameron from '../../assets/Cameron.png';
// import Simon from '../../assets/Simon.png';
// import Mehran from '../../assets/Mehran.png';
// import Leo from '../../assets/Leo.png';
// import Dima from '../../assets/Dima.png';
// import Debby_img from '../../assets/Debby_img.png';
// import DomDanies_img from '../../assets/DomDanies_img.png';
// import Miguel_img from '../../assets/Miguel_img.png';
// import Thais_MARQUES from '../../assets/Thais_MARQUES.jpg';
// import Yoomin from '../../assets/Yoomin.jpg';
// import Phillip from '../../assets/Phillip.jpg';
// import Matthew_Manuko from '../../assets/Matthew_Manuko.jpg';
// import Bruce_img from '../../assets/Bruce_img.jpg';


// const stepsData = [
//     {
//         id: 1, image: Nicholas,
//         title_name: "Nicholas Christopher Macey",
//         digination: "(Business Owner), Sole Trader",
//         services_type: "Service Type: International Tax",
//         desc1: "Hi, I'm Nicholas Christopher Macey and I want to express my gratitude to Shelley Global for their exceptional assistance in bringing all my overdue taxes up to date from 2013. Not only did they help me resolve my past tax obligations, but they also successfully navigated the complexities of cross-border taxation between the United Kingdom and Australia while I had to share my residence between London and Sydney. They also went above and beyond by handling my paper-based tax returns for 2013 and assisting me with backdated ABN openings through ABR.",
//         desc2: "I wholeheartedly recommend Shelley Global to anyone seeking reliable and comprehensive tax services, especially in the realm of cross-border taxation. Their professionalism, knowledge, and dedication have made a significant difference in my financial life. Thank you, Shelley Global, for your outstanding work and continued partnership.",
//     },
//     {
//         id: 2, image: Qiang,
//         title_name: "Qiang Ding",
//         digination: "(CEO), VPMA Global (USA, AU & NZ)",
//         services_type: "Corporate tax obligations management and business advisory",
//         desc1: "I am delighted to recommend Shelley Global for its exceptional services in corporate tax obligations management and business advisory. Over the past couple of years, it has been an absolute pleasure working with their team. They have provided me with remarkable guidance for my IT company's global operations. Their team's expertise is exceptional. They work with the highest levels of professionalism and integrity. One of the aspects that I appreciate the most is their commitment to staying up to date with all the important due dates. Whether it's Payroll or Tax, they always ensure that everything is filed accurately and on time.",
//         desc2: "I cannot thank them enough for their efforts. I highly recommend Shelley Global for any business looking to expand and grow globally. They have proven to be a reliable partner in every aspect, and I am confident that their expertise will help you achieve your business goals.",
//     },
//     {
//         id: 3, image: Tomer,
//         title_name: "Tomer Garzberg",
//         digination: "(Co-Founder and CEO), Ybot International, Inc",
//         services_type: "Service Type: International Tax",
//         desc1: "I recently started working with Tal at Shelley Global and I can confidently say that he's been fantastic. When I moved from Australia to the United States, he helped me with my tax residency matters and made sure that all my tax obligations were met. Tal is highly professional, and action-oriented, and gets the work done quickly and efficiently. I would definitely recommend him to anyone looking for tax services. Thanks, Tal, for all your help!",
//         desc2: "",
//     },
//     {
//         id: 4, image: Berlin,
//         title_name: "Berlin Ciputra",
//         digination: "(Director), Leather Couch Pty Ltd",
//         services_type: "Service Type: International Tax (USA-Australia)",
//         desc1: "I've been utilizing Shelley Global's cross-border company tax filing services for my business operating between the USA and Australia. I can't express enough how invaluable their expertise has been in handling the complexities of international taxation. With their assistance, I've been able to meet all my tax obligations and stay compliant with the regulations of both countries. Shelley Global's professionalism and customized solutions have made them an indispensable partner for my cross-border business operations. I highly recommend their services to anyone seeking seamless tax filing and compliance support.",
//         desc2: "",
//     },
//     {
//         id: 5, image: Debby_img,
//         title_name: "Debby Hardjadinata",
//         digination: "(Director), The DomDaines Anchor Pty Ltd",
//         services_type: "Service Type: International Tax",
//         desc1: "Hi, I'm Debby. I have been working with Shelley Global for quite some time now and I must say, their services have been truly exceptional. They have taken care of my company in the USA and Australia, handling everything from bookkeeping to tax compliance. Their team is highly professional, knowledgeable, and efficient, always providing prompt responses to my inquiries and addressing my concerns in a timely manner. Thanks to Shelley Global Inc, I can focus on running my business and expanding it to new markets, without worrying about compliance issues. I highly recommend their services to anyone looking for reliable and cost-effective solutions for their international business needs."
//     },
//     {
//         id: 6, image: DomDanies_img,
//         title_name: "Dom Daines",
//         digination: "(Director), DGD Trading Pty Ltd",
//         services_type: "Service Type: Bookkeeping, Reporting, Tax filing, Representation",
//         desc1: "Hi, I'm Dom Daines, an e-commerce business owner. I've worked with Shelley Global for 4 years now for my bookkeeping, tax filing, dividend distribution, financial reports, legal communication, and more. Shelley Global has always been professional, knowledgeable, and efficient in handling my financial matters. They provide exceptional service and I've never had issues with managing deadlines.",
//         desc2: "What sets Shelley Global apart is its attention to detail and personalized approach. They take the time to understand my unique financial situation and tailor their services accordingly. They're always available to answer my questions and concerns, and their prompt response time is greatly appreciated. I highly recommend Shelley Global to anyone seeking expert tax and financial services. Their experience and dedication to their clients make them a valuable asset to any business or individual globally.",
//     },
//     {
//         id: 7, image: Geoff,
//         title_name: "Geoff Evans",
//         digination: "(Business Owner), Sole Trader",
//         services_type: "Service Type: Australian Domestic Tax Accounting",
//         desc1: "I've been working with Shelley Global for more than a year now. High quality work, excellent communication and organization. They quickly earned my trust and confidence. Working with them is a pleasure and has been great for my business. Highly recommended.",
//     },
//     {
//         id: 8, image: Aymeric_Wise_Lab,
//         title_name: "Aymeric Gaurat-Apelli",
//         digination: "(Founder), Wise Labs Pty Ltd",
//         services_type: "Service Type: Trust and company taxation, Bookkeeping, payroll",
//         desc1: "Shelley Global has been our go-to partner for the past 7 years, and they've seriously saved us a ton of stress when it comes to accounting for both our business and personal finances. They don't just keep us in line with all the rules, but they've also been instrumental in navigating tricky situations like setting up new company structures and handling acquisitions. We can't thank them enough for their continued support. You guys rock!"
//     },
//     {
//         id: 9, image: Cameron,
//         title_name: "Cameron Bell",
//         digination: "(Director), Charvy Group Pty Ltd",
//         services_type: "Service Type: Company formations, bookkeeping, tax filing, advisory",
//         desc1: "I would like to share my experience working with Shelley Global for my company formations and their ongoing taxation services. They have played a crucial role in helping me navigate the complex process of forming a company. From choosing the right business structure to handling all the necessary filings, documentation, registrations and legal requirements saving me time and effort.  Additionally, Shelley Global's ongoing tax filing services have been exceptional. They handle all aspects of tax filing, from preparing accurate financial statements to submitting tax returns promptly. If you're looking to form a company, I highly recommend Shelley Global. With them, you can focus on building your business with peace of mind"
//     },
//     {
//         id: 10, image: Simon,
//         title_name: "Simon Harwood",
//         digination: "(Founder), Royal Zion Pty Ltd",
//         services_type: "Service Type: Company tax and Bookkeeping",
//         desc1: "I started a new e-commerce business and engaged the services of an accountant so I could focus on growing my business. However, I wasn’t satisfied with the accountant service I was receiving - they were not proactive and were not good at meeting deadlines. So, I changed accountant and contracted Selina. Within a week she implemented processes to ensure accounting work was completed accurately and on time. I am happy very and confident working with Selina and her team, and their support enables me to focus on growing my business."
//     },
// ];

// const HorizontalNonLinearStepper = () => {
//     const [activeStep, setActiveStep] = useState(3);

//     const handleStepClick = (step) => {
//         setActiveStep(step);
//     };

//     return (
//         <div className="step__bar__container">
//             <h3 className="txt__title text-center">TESTIMONIAL</h3>
//             <div className="step__content">
//                 <div className="step__desc__content">
//                     <div className="px-2 pt-2">
//                         <p className="step__desc">{stepsData[activeStep].desc1}</p>
//                         <p className="step__desc">{stepsData[activeStep].desc2}</p>
//                         <ul className="d-flex justify-content-center list-unstyled">
//                             <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
//                             <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
//                             <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
//                             <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
//                             <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <ul className="step__bar">
//                 {
//                     stepsData.slice(0, 7).map((step, index) => (
//                         <li
//                             key={step.id}
//                             className={`step me-4 ${activeStep === index ? "active" : ""}`}
//                             onClick={() => handleStepClick(index)}
//                         >
//                             <div className="step__icon"><img src={step.image} alt="icon"  /></div>
//                             {/* <div className="step__label">{step.label}</div> */}
//                         </li>
//                     ))
//                 }
//             </ul>

//             <div className="step__content">
//                 <div className="step__digination__content">
//                     <h6 className="step__title">{stepsData[activeStep].title_name}</h6>
//                     <p className="step__digination">{stepsData[activeStep].digination}</p>
//                 </div>
//             </div>

//             <div className="text-center pt-2 mb-5">
//                 <Link to="/testimonial" className="btn__learn__more text-uppercase">See More</Link>
//             </div>
//         </div>
//     );
// };

// export default HorizontalNonLinearStepper;

// // working code
// import React, { useState } from "react";
// import "./HorizontalNonLinearStepper.css";
// import { Link } from "react-router-dom";
// import funder_img from "../../assets/funder_img.png";
// import director_img from "../../assets/director_img.png";
// import Aymeric_Wise_Lab from "../../assets/Aymeric_Wise_Lab.jpg";
// import Cameron from "../../assets/Cameron.png";
// import Dima from "../../assets/Dima.png";
// import Geoff from "../../assets/Geoff.png";
// import Leo from "../../assets/Leo.png";
// import Matthew_Manuko from "../../assets/Matthew_Manuko.jpg";
// import Mehran from "../../assets/Mehran.jpg";
// import Phillip from "../../assets/Phillip.jpg";
// import Simon from "../../assets/Simon.png";
// import Tomer from "../../assets/Tomer.jpg";
// import Yoomin_img from "../../assets/Yoomin_img.jpg";


// const stepsData = [
//     {
//         id: 1,
//         image: funder_img,
//         label: "Step 1",
//         content: [
//             {
//                 title_name: "Step 1 Content",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             }
//         ],
//         content_info: [
//             {
//                 title_name: "SELINA SHELLEY",
//                 digination: "(CEO), Team Rubicon USA",
//             },
//         ],
//     },
//     {
//         id: 2,
//         image: director_img,
//         label: "Step 2",
//         content: [
//             {
//                 title_name: "Step 2 Content",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             }
//         ],
//         content_info: [
//             {
//                 title_name: "TAL AL",
//                 digination: "(CEO), Team Rubicon Canada ",
//             },
//         ],
//     },
//     {
//         id: 3,
//         image: Yoomin_img,
//         label: "Step 3",
//         content: [
//             {
//                 title_name: "Step 3 Content",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             }
//         ],
//         content_info: [
//             {
//                 title_name: "Yoomin",
//                 digination: "(CEO), Team Rubicon Australia",
//             },
//         ],
//     },
//     {
//         id: 4,
//         image: Tomer,
//         label: "Step 3",
//         content: [
//             {
//                 title_name: "Step 3 Content",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             }
//         ],
//         content_info: [
//             {
//                 title_name: "Tomer",
//                 digination: "(CEO), Team Rubicon Australia",
//             },
//         ],
//     },
//     {
//         id: 5,
//         image: Simon,
//         label: "Step 3",
//         content: [
//             {
//                 title_name: "Step 3 Content",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             }
//         ],
//         content_info: [
//             {
//                 title_name: "Simon",
//                 digination: "(CEO), Team Rubicon Australia",
//             },
//         ],
//     },
//     {
//         id: 6,
//         image: Phillip,
//         label: "Step 3",
//         content: [
//             {
//                 title_name: "Step 3 Content",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             }
//         ],
//         content_info: [
//             {
//                 title_name: "Phillip",
//                 digination: "(CEO), Team Rubicon Australia",
//             },
//         ],
//     },
//     {
//         id: 7,
//         image: Mehran,
//         label: "Step 3",
//         content: [
//             {
//                 title_name: "Step 3 Content",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             }
//         ],
//         content_info: [
//             {
//                 title_name: "Mehran",
//                 digination: "(CEO), Team Rubicon Australia",
//             },
//         ],
//     },
//     {
//         id: 8,
//         image: Matthew_Manuko,
//         label: "Step 3",
//         content: [
//             {
//                 title_name: "Step 3 Content",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             }
//         ],
//         content_info: [
//             {
//                 title_name: "Matthew Manuko",
//                 digination: "(CEO), Team Rubicon Australia",
//             },
//         ],
//     },
//     {
//         id: 9,
//         image: Leo,
//         label: "Step 3",
//         content: [
//             {
//                 title_name: "Step 3 Content",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             }
//         ],
//         content_info: [
//             {
//                 title_name: "Leo",
//                 digination: "(CEO), Team Rubicon Australia",
//             },
//         ],
//     },
//     {
//         id: 10,
//         image: Geoff,
//         label: "Step 3",
//         content: [
//             {
//                 title_name: "Step 3 Content",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             }
//         ],
//         content_info: [
//             {
//                 title_name: "Geoff",
//                 digination: "(CEO), Team Rubicon Australia",
//             },
//         ],
//     },
//     {
//         id: 11,
//         image: Dima,
//         label: "Step 3",
//         content: [
//             {
//                 title_name: "Step 3 Content",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             }
//         ],
//         content_info: [
//             {
//                 title_name: "Dima",
//                 digination: "(CEO), Team Rubicon Australia",
//             },
//         ],
//     },
//     {
//         id: 12,
//         image: Cameron,
//         label: "Step 3",
//         content: [
//             {
//                 title_name: "Step 3 Content",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             }
//         ],
//         content_info: [
//             {
//                 title_name: "Cameron",
//                 digination: "(CEO), Team Rubicon Australia",
//             },
//         ],
//     },
//     {
//         id: 13,
//         image: Aymeric_Wise_Lab,
//         label: "Step 3",
//         content: [
//             {
//                 title_name: "Step 3 Content",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//             }
//         ],
//         content_info: [
//             {
//                 title_name: "Aymeric Wise Lab",
//                 digination: "(CEO), Team Rubicon Australia",
//             },
//         ],
//     },
// ];

// const HorizontalNonLinearStepper = () => {
//     const [activeStep, setActiveStep] = useState(3);

//     const handleStepClick = (step) => {
//         setActiveStep(step);
//     };

//     return (
//         <div className="step__bar__container">
//             <h3 className="txt__title text-center">TESTIMONIAL</h3>
//             <div className="step__content">
//                 {
//                     stepsData[activeStep].content.map((step) => {
//                         return (
//                             <div key={step.index} className="step__desc__content">
//                                 <div className="pt-2">
//                                     <p className="step__desc">{step.desc}</p>
//                                     <ul className="d-flex justify-content-center list-unstyled">
//                                         <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
//                                         <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
//                                         <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
//                                         <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
//                                         <li><i className="fa-sharp fa-solid fa-star color__icon me-2"></i></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//             <ul className="step__bar">
//                 {
//                     stepsData.slice(0,7).map((step, index) => (
//                         <li
//                             key={step.id}
//                             className={`step me-4 ${activeStep === index ? "active" : ""}`}
//                             onClick={() => handleStepClick(index)}
//                         >
//                             <div className="step__icon"><img src={step.image} alt="icon" /></div>
//                             {/* <div className="step__label">{step.label}</div> */}
//                         </li>
//                     ))
//                 }
//             </ul>
//             <div className="step__content">
//                 {stepsData[activeStep].content_info.map((step) => {
//                     return (
//                         <div key={step.index} className="step__digination__content">
//                             <h6 className="step__title">{step.title_name}</h6>
//                             <p className="step__digination">{step.digination}</p>
//                         </div>
//                     )
//                 })}
//             </div>

//             <div className="text-center pt-2 mb-5">
//                 <Link to="/testimonial" className="btn__learn__more text-uppercase">See More</Link>
//             </div>
//         </div>
//     );
// };

// export default HorizontalNonLinearStepper;



// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepButton from "@mui/material/StepButton";
// import Typography from "@mui/material/Typography";
// import funder_img from "../../assets/funder_img.png";
// import director_img from "../../assets/director_img.png";


// const HorizontalNonLinearStepper = () => {
//     const [activeStep, setActiveStep] = useState(0);
//     const [completed, setCompleted] = useState({});
//     const [stepsData, setStepsData] = useState([
//         { id: 1, image: funder_img, title_name: "Header 1", desc: "Description Select campaign settings" },
//         { id: 1, image: director_img, title_name: "Header 2", desc: "Description Select campaign settings" },
//         { id: 1, image: funder_img, title_name: "Header 3", desc: "Description Select campaign settings" },
//         { id: 1, image: director_img, title_name: "Header 4", desc: "Description Select campaign settings" },
//     ]);

//     const totalSteps = () => {
//         return (
//             stepsData.length > 0 && stepsData.map((step) => <div>
//                 <h1>{step.desc}</h1>
//             </div>)
//         );
//     };

//     const completedSteps = () => {
//         return Array.keys(completed).length;
//     };

//     const allStepsCompleted = () => {
//         return completedSteps() === totalSteps();
//     };

//     const handleStep = (step) => () => {
//         setActiveStep(step);
//     };

//     return (
//         <div className="py-5">
//             <Box sx={{ width: "100%" }}>
//                 <div className="text-center">
//                     {allStepsCompleted() ? (
//                         ""
//                     ) : (
//                         <div>
//                             <p>{stepsData[activeStep].title_name}</p>
//                         </div>
//                     )}
//                 </div>
//                 <Stepper
//                     nonLinear
//                     alternativeLabel
//                     activeStep={activeStep}
//                     sx={{
//                         ".MuiStepConnector-root": {
//                             top: 0
//                         },
//                         ".MuiStepConnector-root span": {
//                             borderColor: "transparent"
//                         },
//                         ".MuiStepConnector-root span::before": {
//                             display: "flex",
//                             justifyContent: "center",
//                         },
//                         ".MuiSvgIcon-root": {
//                             borderRadius: "50%",
//                             border: "1px solid #1976d2"
//                         },
//                         ".MuiSvgIcon-root:not(.Mui-completed)": {
//                             color: "white"
//                         },
//                         ".MuiStepIcon-text": {
//                             fill: "#1976d2",
//                             fontWeight: 500
//                         },
//                         ".MuiSvgIcon-root.Mui-active": {
//                             color: "#1976d2",
//                             padding: "3px",
//                             borderRadius: "50%",
//                             border: "1px solid #1976d2",
//                             marginY: "-3px"
//                         },
//                         ".Mui-active .MuiStepIcon-text": {
//                             fill: "white"
//                         }
//                     }}
//                 >
//                     {stepsData.map((label, index) => (
//                         <Step key={label.id} >
//                             <StepButton color="inherit" onClick={handleStep(index)}>
//                                 {label.title_name}
//                             </StepButton>
//                         </Step>
//                     ))}
//                 </Stepper>
//             </Box>
//         </div>
//     );
// }

// export default HorizontalNonLinearStepper;


// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepButton from "@mui/material/StepButton";
// import { StepLabel, StepIcon } from "@mui/material";

// import funder_img from "../../assets/funder_img.png";
// import director_img from "../../assets/director_img.png";

// const HorizontalNonLinearStepper = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [completed, setCompleted] = useState({});
//   const stepsData = [
//     {
//       id: 1,
//       image: funder_img,
//       title_name: "Header 1",
//       desc: "Description Select campaign settings",
//     },
//     {
//       id: 2,
//       image: director_img,
//       title_name: "Header 2",
//       desc: "Description Select campaign settings",
//     },
//     {
//       id: 3,
//       image: funder_img,
//       title_name: "Header 3",
//       desc: "Description Select campaign settings",
//     },
//     {
//       id: 4,
//       image: director_img,
//       title_name: "Header 4",
//       desc: "Description Select campaign settings",
//     },
//   ];

//   const totalSteps = () => {
//     return stepsData.length;
//   };

//   const completedSteps = () => {
//     return Object.keys(completed).length;
//   };

//   const allStepsCompleted = () => {
//     return completedSteps() === totalSteps();
//   };

//   const handleStep = (step) => () => {
//     setActiveStep(step);
//   };

//   return (
//     <div className="py-5">
//       <Box sx={{ width: "100%" }}>
//         <div className="d-flex justify-content-center py-3">
//           {!allStepsCompleted() && (
//             <div className="w-100 border">
//               <div className="text-center py-2 ">
//                 <h3>{stepsData[activeStep].title_name}</h3>
//                 <p>{stepsData[activeStep].desc}</p>
//               </div>
//             </div>
//           )}
//         </div>
//         <Stepper
//           nonLinear
//           alternativeLabel
//           activeStep={activeStep}
//           sx={{
//             ".MuiStepConnector-root": {
//               top: 0,
//             },
//             ".MuiStepConnector-root span": {
//               borderColor: "transparent",
//             },
//             ".MuiStepConnector-root span::before": {
//               display: "flex",
//               justifyContent: "center",
//             },
//             ".MuiSvgIcon-root": {
//               borderRadius: "50%",
//               border: "1px solid #1976d2",
//               width: 40,
//               height: 40,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "#1976d2",
//               color: "white",
//               fontSize: "1.2rem",
//             },
//             ".MuiStepIcon-text": {
//               fill: "#1976d2",
//               fontWeight: 500,
//             },
//             ".MuiSvgIcon-root.Mui-active": {
//               color: "#1976d2",
//               padding: "3px",
//               borderRadius: "50%",
//               border: "1px solid #1976d2",
//               marginY: "-3px",
//             },
//             ".Mui-active .MuiStepIcon-text": {
//               fill: "white",
//             },
//           }}
//         >
//           {stepsData.map((label, index) => (
//             <Step key={label.id}>
//               <StepButton color="inherit" onClick={handleStep(index)}>
//                 <div className="py-2">
//                   <div className="border">
//                     <div className="text-center">
//                       <img src={label.image} alt={label.title_name} />
//                     </div>
//                   </div>
//                 </div>
//               </StepButton>
//             </Step>
//           ))}
//         </Stepper>
//       </Box>
//     </div>
//   );
// };

// export default HorizontalNonLinearStepper;


// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepButton from "@mui/material/StepButton";

// import funder_img from "../../assets/funder_img.png";
// import director_img from "../../assets/director_img.png";
// import { StepLabel } from "@mui/material";

// const HorizontalNonLinearStepper = () => {
//     const [activeStep, setActiveStep] = useState(0);
//     const [completed, setCompleted] = useState({});
//     const stepsData = [
//         {
//             id: 1,
//             image: funder_img,
//             title_name: "Header 1",
//             desc: "Description Select campaign settings",
//         },
//         {
//             id: 2,
//             image: director_img,
//             title_name: "Header 2",
//             desc: "Description Select campaign settings",
//         },
//         {
//             id: 3,
//             image: funder_img,
//             title_name: "Header 3",
//             desc: "Description Select campaign settings",
//         },
//         {
//             id: 4,
//             image: director_img,
//             title_name: "Header 4",
//             desc: "Description Select campaign settings",
//         },
//     ];

//     const totalSteps = () => {
//         return stepsData.length;
//     };

//     const completedSteps = () => {
//         return Object.keys(completed).length;
//     };

//     const allStepsCompleted = () => {
//         return completedSteps() === totalSteps();
//     };

//     const handleStep = (step) => () => {
//         setActiveStep(step);
//     };

//     return (
//         <div className="py-5">
//             <Box sx={{ width: "100%" }}>
//                 <div className="d-flex justify-content-center py-3">
//                     {!allStepsCompleted() && (
//                         <div className="w-100 border">
//                             <div className="text-center py-2 ">
//                                 <h3>{stepsData[activeStep].title_name}</h3>
//                                 <p>{stepsData[activeStep].desc}</p>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//                 <Stepper
//                     nonLinear
//                     alternativeLabel
//                     activeStep={activeStep}
//                     sx={{
//                         ".MuiStepConnector-root": {
//                             top: 0,
//                         },
//                         ".MuiStepConnector-root span": {
//                             borderColor: "transparent",
//                         },
//                         ".MuiStepConnector-root span::before": {
//                             display: "flex",
//                             justifyContent: "center",
//                         },
//                         ".MuiSvgIcon-root": {
//                             borderRadius: "50%",
//                             border: "1px solid #1976d2",
//                         },
//                         ".MuiSvgIcon-root:not(.Mui-completed)": {
//                             color: "white",
//                         },
//                         ".MuiStepIcon-text": {
//                             fill: "#1976d2",
//                             fontWeight: 500,
//                         },
//                         ".MuiSvgIcon-root.Mui-active": {
//                             color: "#1976d2",
//                             padding: "3px",
//                             borderRadius: "50%",
//                             border: "1px solid #1976d2",
//                             marginY: "-3px",
//                         },
//                         ".Mui-active .MuiStepIcon-text": {
//                             fill: "white",
//                         },
//                     }}
//                 >
//                     {stepsData.map((label, index) => (
//                         <Step key={label.id}>
//                             <StepButton
//                                 color="inherit"
//                                 onClick={handleStep(index)}
//                             >
//                                 <div className="py-2">
//                                     <div className="border">
//                                         <div className="text-center">
//                                             <h3>{label.title_name}</h3>
//                                             <p>{label.desc}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </StepButton>
//                         </Step>
//                     ))}
//                 </Stepper>
//             </Box>
//         </div>
//     );
// };

// export default HorizontalNonLinearStepper;




// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepButton from "@mui/material/StepButton";
// import Typography from "@mui/material/Typography";
// import funder_img from "../../assets/funder_img.png";
// import director_img from "../../assets/director_img.png";

// const HorizontalNonLinearStepper = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [completed, setCompleted] = useState({});
//   const [stepsData, setStepsData] = useState([
//     { id: 1, image: funder_img, title_name: "Header 1", digination: "Subbtitle 1",  desc: "Description Select campaign settings" },
//     { id: 1, image: director_img, title_name: "Header 2", digination: "Subbtitle 2",  desc: "Description Select campaign settings" },
//     { id: 1, image: funder_img, title_name: "Header 3", digination: "Subbtitle 3",  desc: "Description Select campaign settings" },
//     { id: 1, image: director_img, title_name: "Header 4", digination: "Subbtitle 4",  desc: "Description Select campaign settings" },
//   ]);

//   const totalSteps = () => {
//     return (
//       stepsData.length > 0 &&
//       stepsData.map((step) => (
//         <div>
//           <h1>{step.desc}</h1>
//         </div>
//       ))
//     );
//   };

//   const completedSteps = () => {
//     return Object.keys(completed).length;
//   };

//   const allStepsCompleted = () => {
//     return completedSteps() === totalSteps();
//   };

//   const handleStep = (step) => () => {
//     setActiveStep(step);
//   };

//   const CustomStepIcon = ({ active, completed, icon }) => (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         width: "32px",
//         height: "32px",
//         borderRadius: "50%",
//         backgroundColor: active ? "#1976d2" : completed ? "#1976d2" : "transparent",
//       }}
//     >
//       <img
//         src={icon}
//         alt="Step Icon"
//         style={{
//           width: "24px",
//           height: "24px",
//           borderRadius: "50%",
//           border: "1px solid white",
//         }}
//       />
//     </div>
//   );

//   return (
//     <div className="py-5">
//       <Box sx={{ width: "100%" }}>
//         <div className="text-center">
//           {allStepsCompleted() ? (
//             ""
//           ) : (
//             <div>
//               <p>{stepsData[activeStep].title_name}</p>
//             </div>
//           )}
//         </div>
//         <Stepper
//           nonLinear
//           alternativeLabel
//           activeStep={activeStep}
//           sx={{
//             ".MuiStepConnector-root": {
//               top: 0,
//             },
//             ".MuiStepConnector-root span": {
//               borderColor: "transparent",
//             },
//             ".MuiStepConnector-root span::before": {
//               display: "flex",
//               justifyContent: "center",
//             },
//             ".MuiSvgIcon-root": {
//               display: "none",
//             },
//             ".MuiStepIcon-root": {
//               display: "none",
//             },
//             ".MuiStepIcon-text": {
//               display: "none",
//             },
//             ".MuiStepButton-root": {
//               width: "32px",
//               height: "32px",
//             },
//             ".MuiStepButton-iconContainer": {
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               width: "32px",
//               height: "32px",
//             },
//             ".Mui-active .MuiStepButton-iconContainer": {
//               backgroundColor: "#1976d2",
//             },
//             ".Mui-completed .MuiStepButton-iconContainer": {
//               backgroundColor: "#1976d2",
//             },
//           }}
//         >
//           {stepsData.map((label, index) => (
//             <Step key={label.id} completed={completed[index]}>
//               <StepButton
//                 color="inherit"
//                 onClick={handleStep(index)}
//                 icon={
//                   <CustomStepIcon
//                     active={index === activeStep}
//                     completed={completed[index]}
//                     icon={label.image}
//                   />
//                 }
//               />
//             </Step>
//           ))}
//         </Stepper>
//       </Box>
//     </div>
//   );
// };

// export default HorizontalNonLinearStepper;


// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepButton from "@mui/material/StepButton";
// import Typography from "@mui/material/Typography";
// import funder_img from "../../assets/funder_img.png";
// import director_img from "../../assets/director_img.png";

// const HorizontalNonLinearStepper = () => {
//     const [activeStep, setActiveStep] = useState(0);
//     const [completed, setCompleted] = useState({});
//     const [stepsData, setStepsData] = useState([
//         { id: 1, image: funder_img, title_name: "Header 1", digination: "Subtitle 1", desc: "Description Select campaign settings" },
//         { id: 2, image: director_img, title_name: "Header 2", digination: "Subtitle 2", desc: "Description Select campaign settings" },
//         { id: 3, image: funder_img, title_name: "Header 3", digination: "Subtitle 3", desc: "Description Select campaign settings" },
//         { id: 4, image: director_img, title_name: "Header 4", digination: "Subtitle 4", desc: "Description Select campaign settings" },
//     ]);

//     const totalSteps = stepsData.length;

//     const completedSteps = () => {
//         return Object.keys(completed).length;
//     };

//     const allStepsCompleted = () => {
//         return completedSteps() === totalSteps;
//     };

//     const handleStep = (step) => () => {
//         setActiveStep(step);
//     };

//     const CustomStepIcon = ({ active, completed, icon }) => (
//         <div
//             style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "60px",
//                 height: "60px",
//                 borderRadius: "50%",
//                 backgroundColor: active ? "green" : completed ? "#fff" : "transparent",
//             }}
//         >
//             <img
//                 src={icon}
//                 alt="Step Icon"
//                 style={{
//                     width: "60px",
//                     height: "60px",
//                     borderRadius: "50%",
//                     border: "2px solid green",
//                     backgroundColor: "white",
//                     padding: "2px",

//                 }}
//             />
//         </div>
//     );

//     return (
//         <div className="py-5">
//             <Box sx={{ width: "100%" }}>
//                 {/* <Typography variant="body1" component="p" textAlign="center" mb={5}>
//                     {stepsData[activeStep].desc}
//                     </Typography> */}
//                 <div className="text-center py-5">
//                     <div className="border py-3">
//                         {stepsData[activeStep].desc}
//                     </div>
//                 </div>

//                 <Stepper
//                     nonLinear
//                     alternativeLabel
//                     activeStep={activeStep}
//                     sx={{
//                         ".MuiStepConnector-root": {
//                             top: 0,
//                         },
//                         ".MuiStepConnector-root span": {
//                             borderColor: "transparent",
//                         },
//                         ".MuiStepConnector-root span::before": {
//                             display: "flex",
//                             justifyContent: "center",
//                         },
//                         ".MuiSvgIcon-root": {
//                             display: "none",
//                         },
//                         ".MuiStepIcon-root": {
//                             display: "none",
//                         },
//                         ".MuiStepIcon-text": {
//                             display: "none",
//                         },
//                         ".MuiStepButton-root": {
//                             width: "32px",
//                             height: "32px",
//                         },
//                         ".MuiStepButton-iconContainer": {
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             width: "32px",
//                             height: "32px",
//                         },
//                         ".Mui-active .MuiStepButton-iconContainer": {
//                             backgroundColor: "#1976d2",
//                         },
//                         ".Mui-completed .MuiStepButton-iconContainer": {
//                             backgroundColor: "#1976d2",
//                         },
//                     }}
//                 >
//                     {stepsData.map((label, index) => (
//                         <Step key={label.id} completed={completed[index]}>
//                             <StepButton
//                                 color="inherit"
//                                 onClick={handleStep(index)}
//                                 icon={
//                                     <CustomStepIcon
//                                         active={index === activeStep}
//                                         completed={completed[index]}
//                                         icon={label.image}
//                                     />
//                                 }
//                             />
//                         </Step>
//                     ))}
//                 </Stepper>

//                 {!allStepsCompleted() && (
//                     // <Box mt={2}>
//                     //     <Typography variant="h4" component="h4">
//                     //         {stepsData[activeStep].title_name}
//                     //     </Typography>
//                     //     <Typography variant="digination1" component="p">
//                     //         {stepsData[activeStep].digination}
//                     //     </Typography>
//                     // </Box>
//                     <div className="py-4">
//                         <h4>{stepsData[activeStep].title_name}</h4>
//                         <h6>{stepsData[activeStep].digination}</h6>
//                     </div>
//                 )}
//             </Box>
//         </div>
//     );
// };

// export default HorizontalNonLinearStepper;

// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepButton from "@mui/material/StepButton";
// import Typography from "@mui/material/Typography";
// import funder_img from "../../assets/funder_img.png";
// import director_img from "../../assets/director_img.png";

// const HorizontalNonLinearStepper = () => {
//     const [activeStep, setActiveStep] = useState(0);
//     const [completed, setCompleted] = useState({});
//     const [stepsData, setStepsData] = useState([
//         { id: 1, image: funder_img, title_name: "Header 1", digination: "Subtitle 1", desc: "Description Select campaign settings" },
//         { id: 2, image: director_img, title_name: "Header 2", digination: "Subtitle 2", desc: "Description Select campaign settings" },
//         { id: 3, image: funder_img, title_name: "Header 3", digination: "Subtitle 3", desc: "Description Select campaign settings" },
//         { id: 4, image: director_img, title_name: "Header 4", digination: "Subtitle 4", desc: "Description Select campaign settings" },
//     ]);

//     const totalSteps = stepsData.length;

//     const completedSteps = () => {
//         return Object.keys(completed).length;
//     };

//     const allStepsCompleted = () => {
//         return completedSteps() === totalSteps;
//     };

//     const handleStep = (step) => () => {
//         setActiveStep(step);
//     };

//     const CustomStepIcon = ({ active, completed, icon }) => (
//         <div
//             style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 width: "60px",
//                 height: "60px",
//                 borderRadius: "50%",
//                 backgroundColor: active ? "green" : completed ? "#fff" : "transparent",
//             }}
//         >
//             <img
//                 src={icon}
//                 alt="Step Icon"
//                 style={{
//                     width: "60px",
//                     height: "60px",
//                     borderRadius: "50%",
//                     border: "2px solid green",
//                     backgroundColor: "white",
//                     padding: "2px",

//                 }}
//             />
//         </div>
//     );

//     return (
//         <div className="py-5">
//             <Box sx={{ width: "100%" }}>
//                 <div className="text-center py-5">
//                     <div className="border py-3">
//                         {stepsData[activeStep].desc}
//                     </div>
//                 </div>

//                 <Stepper
//                     nonLinear
//                     alternativeLabel
//                     activeStep={activeStep}
//                     sx={{
//                         ".MuiStepConnector-root": {
//                             top: 0,
//                         },
//                         ".MuiStepConnector-root span": {
//                             borderColor: "transparent",
//                         },
//                         ".MuiStepConnector-root span::before": {
//                             display: "flex",
//                             justifyContent: "center",
//                         },
//                         ".MuiSvgIcon-root": {
//                             display: "none",
//                         },
//                         ".MuiStepIcon-root": {
//                             display: "none",
//                         },
//                         ".MuiStepIcon-text": {
//                             display: "none",
//                         },
//                         ".MuiStepButton-root": {
//                             width: "32px",
//                             height: "32px",
//                         },
//                         ".MuiStepButton-iconContainer": {
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             width: "32px",
//                             height: "32px",
//                         },
//                         ".Mui-active .MuiStepButton-iconContainer": {
//                             backgroundColor: "#1976d2",
//                         },
//                         ".Mui-completed .MuiStepButton-iconContainer": {
//                             backgroundColor: "#1976d2",
//                         },
//                     }}
//                 >
//                     {stepsData.map((label, index) => (
//                         <Step key={label.id} completed={completed[index]}>
//                             <StepButton
//                                 color="inherit"
//                                 onClick={handleStep(index)}
//                                 icon={
//                                     <CustomStepIcon
//                                         active={index === activeStep}
//                                         completed={completed[index]}
//                                         icon={label.image}
//                                     />
//                                 }
//                             />
//                         </Step>
//                     ))}
//                 </Stepper>

//                 {!allStepsCompleted() && (
//                     <div className="py-4">
//                         <h4>{stepsData[activeStep].title_name}</h4>
//                         <h6>{stepsData[activeStep].digination}</h6>
//                     </div>
//                 )}
//             </Box>
//         </div>
//     );
// };

// export default HorizontalNonLinearStepper;
