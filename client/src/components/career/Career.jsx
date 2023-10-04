
import React, { useState } from 'react';
import Career_img from "../../assets/Career_img.jpg";

const WhyUs = () => {
  

    const [careerData, setCareerData] = useState([
        { id: 1, desc: "International exposure" },
        { id: 2, desc: "Flexible work arrangements" },
        { id: 3, desc: "In - house training sessions" },
        { id: 4, desc: "Online training." },
        { id: 5, desc: "Mentorship programs." },
        { id: 6, desc: "Professional development." },
        { id: 6, desc: "Networking opportunities." },
    ]);





    return (
        <div className="">
            {/* <div className="privacy__banner">
                <img src={Career_img} alt="image"  />
            </div> */}
            <div className="container pt-2 individula__container">
                <h3 className="txt__title text-center">CAREER</h3>
                <div className="row py-4">
                    <div className="col-md-12">
                        <img src={Career_img} className="img-fluid col-md-6 float-md-end mb-3 ms-md-3" alt="image"  />
                  
                        <p className="txt__desc">
                            At Shelley Global, we believe in providing our employees with the tools and resources they need to succeed.
                            We offer competitive salaries, comprehensive benefits packages, and opportunities for professional development
                            and advancement. We also prioritize work-life balance and strive to create a supportive and collaborative
                            work environment.
                        </p>
                        <p className="txt__desc">
                            But don't just take our word for it. Here's what some of our employees have to say about working at Shelley Global:
                        </p>
                        <p className="txt__desc">
                            "I've been with Shelley Global for three years, and I couldn't be happier. The team is incredibly supportive and
                            collaborative, and I feel like I'm constantly learning and growing in my role." - Sam, Bookkeeping Manager

                        </p>
                        <p className="txt__desc">
                            "I was drawn to Shelley Global because of the company's commitment to innovation and technology.
                            It's been amazing to be a part of a team that's constantly pushing the boundaries of what's possible
                            in international finance." - Rafi, Tax Manager
                        </p>
                        <p className="txt__desc">
                            If you’re looking for a career in Accounting and Taxation that offers international exposure,
                            professional development opportunities, and a supportive work environment, we’d love to hear
                            from you. At Shelley Global, we offer exciting career opportunities for talented and motivated
                            individuals who are passionate about accounting, taxation and finance.
                        </p>
                        <p className="txt__desc">
                            One of the most exciting aspects of Shelley Global’ s career opportunities is their internship
                            program. The program offers hands-on experience in real accounting, taxation, and finance
                            work for global clients. With offices in both the United States, Australia, and Canada, interns
                            gain valuable experience in different cultures and business environments.

                        </p>

                        <p className="txt__desc">
                            In addition to hands-on experience, Shelley Global offers:
                        </p>
                        
                        <ul className="career__ul_list">
                            {
                                careerData !== undefined && careerData.map((item, index) => {
                                    return (
                                        <li key={index} className="txt__desc">{item.desc}</li>
                                    )
                                })
                            }
                        </ul>
                        <p className="txt__desc">
                            Potential for full-time employment: At the end of the internship, top performers may be offered
                            full- time employment at the firm. Please email us to admin@shelleyglobal.com to learn more
                            about the program and how to apply.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyUs;


// import React, { useState } from 'react';
// import career_banner from "../../assets/career_banner.jpg";
// import Career_img from "../../assets/Career_img.jpg";

// const Career = () => {
//     const [whyUsData, setwhyUsData] = useState([
//         {
//             id: 1, title_name: "Global Presence",
//             desc: "With offices in Los Angeles, Dallas, Sydney, and Toronto, Shelley Global has a global presence that enables it to provide tax advisory and accounting services to clients across different jurisdictions and time zones.",
//         },
//         {
//             id: 2, title_name: "International Expertise",
//             desc: "Shelley Global specializes in international tax advisory and accounting services, which require a deep understanding of the tax laws, regulations, and compliance requirements of multiple countries.",
//         },
//         {
//             id: 3, title_name: "Client-Focused Approach",
//             desc: "Shelley Global places its clients at the center of everything it does, working closely with them to understand their unique needs and provide tailored solutions that help them achieve their business objectives.",
//         },
//         {
//             id: 4, title_name: "Technological Innovation",
//             desc: "Shelley Global leverages the latest technologies and tools to streamline its operations, enhance its service delivery, and provide its clients with real - time access to their financial data and performance metrics.",
//         },
//         {
//             id: 5, title_name: "Experienced Team",
//             desc: "Shelley Global has a team of experienced and highly qualified professionals who bring deep expertise and insights to every engagement, enabling it to deliver high- quality services that exceed client expectations.",
//         },
//         {
//             id: 6, title_name: "Off-Site Services",
//             desc: "We understand the importance of flexibility and convenience when it comes to accounting services.That's why we offer off-site services that allow us to work remotely with online or cloud software to provide seamless and efficient accounting solutions for businesses of all sizes and shapes, including E-commerce. Our team of expert consultants is based in USA, Australia and Canada, but we are capable of working with clients worldwide. ",
//         },
//         {
//             id: 7, title_name: "On-Site Services",
//             desc: "At Shelley Global offers businesses, the flexibility of having expert accounting services provided in all the major suburbs of Dallas, LA, Sydney and Toronto.Whether it's full-time or part-time, their team of experts can come to your location and provide accounting services that are tailored to your specific needs. Once the accounting process is established, Shelley Global’ s team can continue to work remotely to minimize costs and effort, ensuring maximum efficiency and accuracy. ",
//         },
//         {
//             id: 8, title_name: "Fit in all Sizes & Shapes",
//             desc: "We understand that every business has unique needs and requirements.That's why we are proud to offer our services to businesses of all sizes and shapes. We specialize in setting up new businesses, migrating businesses from one software to another, and managing ongoing businesses. Our team of experts is proficient in handling all accounting and financial aspects, ensuring that businesses can focus on their core operations and growth.",
//         },
//         {
//             id: 9, title_name: "Easy Contract & Cancellation Policy",
//             desc: "At Shelley Global, we understand the importance of flexibility for our clients, which is why we have an easy contract and cancellation policy.Our approach allows clients to scale up or down at any time, ensuring that our services fit their needs perfectly.Additionally, we offer the option to lock down a fixed price for the accounting function, which can help reduce costs and save money.Our goal is to make the accounting and financial management of businesses as stress- free as possible. ",
//         },
//         {
//             id: 10, title_name: "Take care of Legalities",
//             desc: "At Shelley Global, we understand that legal compliance is crucial for any business.That's why we offer a range of legal services, including acting as an IRS, ATO, ASIC, and CRA registered agent. As a Certified Acceptance Agent (CAA), BSAE-filer for FBAR, and US Federal Licensed Tax Advisors, we offer many additional services. We can also act as a Power of Attorney for any audit trail. Our team includes Notary Agents and Justices of the Peace to help with legal documentations. With our expertise in legal requirements, we can help our clients ensure compliance with regulations and minimize legal risks. ",
//         },
//         {
//             id: 11, title_name: "Client Education",
//             desc: "We offer training services on basic bookkeeping and payroll software and apps, as well as accounting tutorials to help our clients improve their financial literacy.We understand that taxation is a personal and confidential matter, and we take every precaution to maintain our clients' privacy. Our primary focus is on providing value to our clients and their businesses, and we work hard to ensure that they are fully informed and equipped to make the best financial decisions possible.",
//         },
//     ]);




//     return (
//         <div className="">
//             <div className="privacy__banner">
//                 <img src={Career_img} alt="image"  />
//             </div>
//             <div className="container py-3">
//                 <h3 className="txt__title text-center">Career</h3>
//                 <div className="row pt-2 d-flex justify-content-center">
//                     <div className="col-md-12">
//                         <p className="txt__desc">
//                             As a growing company, we are always looking for talented and dedicated professionals to join our team.
//                             We offer a range of job opportunities, including tax advisory roles, accounting, bookkeeping positions,
//                             and administrative support roles. We value diversity and welcome applicants from a variety of
//                             backgrounds and experiences.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="row pt-2 d-flex justify-content-center">
//                     <div className="col-md-12">
//                         {
//                             whyUsData !== undefined && whyUsData.map((item, index) => (
//                                 <>
//                                     <h6 key={index} className="why__us__subtitle">{item.title_name}</h6>
//                                     <p className="txt__desc">{item.desc}</p>
//                                 </>
//                             ))
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Career;