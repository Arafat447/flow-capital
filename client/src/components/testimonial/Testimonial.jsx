import React, { useState } from 'react';
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
import testimonial_rating_img from '../../assets/testimonial_rating_img.png';


const Testimonial = () => {
    const [testimonialData, settestimonialData] = useState([
        {
            id: 1, image: Nicholas,
            title_name: "Nicholas Christopher Macey",
            digination: "Business Owner, Sole Trader",
            services_type: "Service Type: International Tax (UK-Australia)",
            desc1: "Hi, I'm Nicholas Christopher Macey and I want to express my gratitude to Shelley Global for their exceptional assistance in bringing all my overdue taxes up to date from 2013. Not only did they help me resolve my past tax obligations, but they also successfully navigated the complexities of cross-border taxation between the United Kingdom and Australia while I had to share my residence between London and Sydney. They also went above and beyond by handling my paper-based tax returns for 2013 and assisting me with backdated ABN openings through ABR.",
            desc2: "I wholeheartedly recommend Shelley Global to anyone seeking reliable and comprehensive tax services, especially in the realm of cross-border taxation. Their professionalism, knowledge, and dedication have made a significant difference in my financial life. Thank you, Shelley Global, for your outstanding work and continued partnership.",
        },
        {
            id: 2, image: Qiang,
            title_name: "Qiang Ding",
            digination: "CEO, VPMA Global (USA, AU & NZ)",
            services_type: "Service Type: Corporate tax obligations & advisory",
            desc1: "I am delighted to recommend Shelley Global for its exceptional services in corporate tax obligations management and business advisory. Over the past couple of years, it has been an absolute pleasure working with their team. They have provided me with remarkable guidance for my IT company's global operations. Their team's expertise is exceptional. They work with the highest levels of professionalism and integrity. One of the aspects that I appreciate the most is their commitment to staying up to date with all the important due dates. Whether it's Payroll or Tax, they always ensure that everything is filed accurately and on time.",
            desc2: "I cannot thank them enough for their efforts. I highly recommend Shelley Global for any business looking to expand and grow globally. They have proven to be a reliable partner in every aspect, and I am confident that their expertise will help you achieve your business goals.",
        },
        {
            id: 3, image: Tomer,
            title_name: "Tomer Garzberg",
            digination: "Co-Founder and CEO, Ybot International, Inc",
            services_type: "Service Type: International Tax (USA-Australia)",
            desc1: "I recently started working with Tal at Shelley Global and I can confidently say that he's been fantastic. When I moved from Australia to the United States, he helped me with my tax residency matters and made sure that all my tax obligations were met. Tal is highly professional, and action-oriented, and gets the work done quickly and efficiently. I would definitely recommend him to anyone looking for tax services. Thanks, Tal, for all your help!",
            desc2: "",
        },
        {
            id: 4, image: Berlin,
            title_name: "Berlin Ciputra",
            digination: "Director, Leather Couch Pty Ltd",
            services_type: "Service Type: International Tax (Australia-USA)",
            desc1: "I've been utilizing Shelley Global's cross-border company tax filing services for my business operating between the USA and Australia. I can't express enough how invaluable their expertise has been in handling the complexities of international taxation. With their assistance, I've been able to meet all my tax obligations and stay compliant with the regulations of both countries. Shelley Global's professionalism and customized solutions have made them an indispensable partner for my cross-border business operations. I highly recommend their services to anyone seeking seamless tax filing and compliance support.",
            desc2: "",
        },
        {
            id: 5, image: Debby_img,
            title_name: "Debby Hardjadinata",
            digination: "DIrector, The Original Anchor Pty Ltd",
            services_type: "Service Type: International Tax (Australia-USA)",
            desc1: "Hi, I'm Debby. I have been working with Shelley Global for quite some time now and I must say, their services have been truly exceptional. They have taken care of my company in the USA and Australia, handling everything from bookkeeping to tax compliance. Their team is highly professional, knowledgeable, and efficient, always providing prompt responses to my inquiries and addressing my concerns in a timely manner. Thanks to Shelley Global Inc, I can focus on running my business and expanding it to new markets, without worrying about compliance issues. I highly recommend their services to anyone looking for reliable and cost-effective solutions for their international business needs."
        },
        {
            id: 6, image: DomDanies_img,
            title_name: "Dom Daines",
            digination: "Director, DGD Trading Pty Ltd",
            services_type: "Service Type: International advisory (Australia-UAE), Bookkeeping & Tax",
            desc1: "Hi, I'm Dom Daines, an e-commerce business owner. I've worked with Shelley Global for 4 years now for my bookkeeping, tax filing, dividend distribution, financial reports, legal communication, and more. Shelley Global has always been professional, knowledgeable, and efficient in handling my financial matters. They provide exceptional service and I've never had issues with managing deadlines.",
            desc2: "What sets Shelley Global apart is its attention to detail and personalized approach. They take the time to understand my unique financial situation and tailor their services accordingly. They're always available to answer my questions and concerns, and their prompt response time is greatly appreciated. I highly recommend Shelley Global to anyone seeking expert tax and financial services. Their experience and dedication to their clients make them a valuable asset to any business or individual globally.",
        },
        {
            id: 7, image: Geoff,
            title_name: "Geoff Evans",
            digination: "CEO, Team Rubicon Australia",
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
        {
            id: 11, image: Mehran,
            title_name: "Mehran Amini",
            digination: "Director, MARS SMSF",
            services_type: "Service Type: SMSF, Auditing, Company tax, Bookkeeping",
            desc1: "I have been fortunate to work with Shelley Global for several years. They have been helpful in guiding me through the setup of my SMSF and ensuring compliance with legal requirements. Their services in managing my annual SMSF tax return and auditing have been valuable. Additionally, they handle the taxation needs of my other entities. I trust their abilities to handle all aspects of my financial obligations. The responsive and reliable team at Shelley Global has made our partnership smooth and successful. I highly recommend Shelley Global for expert assistance with SMSF and company tax matters, as their professionalism and dedication ensure your financial affairs are in capable hands."
        },
        {
            id: 12, image: Phillip,
            title_name: "Phillip Kingsley Buttriss",
            digination: "Partner, Buttriss PK & CA",
            services_type: "Service type: Partnership with two partner individual tax",
            desc1: "Hi, I'm Phillip Kingsley Buttriss and I want to share my experience working with Shelley Global for our partnership tax filing. They have been an invaluable asset in managing our partnership taxes, including the individual tax filing for both partners. Shelley Global's expertise and thorough understanding of partnership taxation have helped us navigate complex tax regulations and maximize our tax benefits. They have consistently provided accurate and timely filings, ensured compliance and minimized any potential issues. I highly recommend Shelley Global for their professional and comprehensive partnership tax services, as well as their seamless handling of individual tax filings for partners.",
            desc2: "",
        },
        {
            id: 13, image: Bruce_img,
            title_name: "Bruce Nunez",
            digination: "Director, Sol Revolver Group Pty Ltd",
            services_type: "Service type: Company tax, Bookkeeping",
            desc1: "I have had the pleasure of working with Shelley Global for a while now, and I have to say, their team has exceeded my expectations in handling my books and my tax returns. Their expertise and attention to detail have ensured accurate and timely financial records, while their knowledge of tax regulations has helped optimize my company's tax obligations. They have always been available to answer any questions and address any concerns I have had. I highly recommend Shelley Global for their reliable and professional services in bookkeeping and company tax filing.",
            desc2: "",
        },
        {
            id: 14, image: Thais_MARQUES,
            title_name: "Thais Marques",
            digination: "Director, OnTrack Outdoor Pty Ltd",
            services_type: "Service type: Company tax, Bookkeeping & BAS",
            desc1: "I've been working with Shelley Global for over a year now, and I couldn't be happier with their services for my bookkeeping and tax filing. From the very beginning, their team has been attentive to my needs. They have great knowledge and expertise in the industry and have helped me navigate some challenging situations. I appreciate their transparency, honesty, and willingness to work collaboratively. I highly recommend Shelley Global to anyone looking for a reliable and trustworthy business partner.",
            desc2: "",
        },
        {
            id: 15, image: Dima,
            title_name: "Dima Kritchevski",
            digination: "Director, DMK Marketing Pty Ltd",
            services_type: "Service type: Corporate Taxation, Bookkeeping",
            desc1: "My books were a complete mess when I found Shelley Global, years of trying to do them myself had left my Xero account in a sorry state, and as I'd later find out my 3 most BAS returns all had major errors in them too which my rather expensive accountant never noticed.",
            desc2: "Selina helped me clean up the mess, fix the errors, get everything up to date, and now she's taking care of all my bookkeeping too, freeing me up to spend more time helping my clients and growing my business. She's been a pleasure to work with and I'd highly recommend her to anyone looking for a competent bookkeeper.",
        },
        {
            id: 16, image: Yoomin,
            title_name: "Yoomin Choi",
            digination: "Director-Manager, Jaray Pty Ltd",
            services_type: "Service Type: Payroll & Bookkeeping",
            desc1: "Hi, I'm Yoomin Choi. I have had the pleasure of working with Shelley Global for the past 8 years, and I can confidently say that their payroll and bookkeeping services are outstanding. Their staff is friendly, professional, and always ensures that my needs are met in a timely manner. I appreciate their dedication to providing excellent service and making sure that I am well taken care of.",
            desc2: "If you haven't tried this company out, and you are looking for a trustworthy company, with services that are brilliant, then look no further.... Go to Shelley Global and have a peace of mind!",
        },
        {
            id: 17, image: Leo,
            title_name: "Leo Lee",
            digination: "Owner-Manager, Sapphire Palms Motel",
            services_type: "Service Type: Accounting, Payroll",
            desc1: "Excellent service, very professional firm. They Keep us updated and well informed about financial statements and deadlines. They provide expert knowledge and insight to achieve overall business accounting needs. I personally now trust them, and I would certainly recommend Shelley Global to anybody who needs accounting & financial services.",
            desc2: "",
        },
        {
            id: 18, image: Miguel_img,
            title_name: "Miguel Lorenzo",
            digination: "Founder of Filma",
            services_type: "Service Type: Company Setup, Business Expansion Advisory, Tax",
            desc1: "“I'm really happy with my experience working with Shelley Global. As I expanded my business into new markets, their team has been incredibly helpful in setting up my new company. They have extensive expertise that allowed them to guide me through complex regulations and compliance matters step by step. They're also managing my tax obligations as a sole trader. I genuinely appreciate their assistance and would recommend Shelley Global to anyone seeking support for their business endeavors - they're superstars!”.",
            desc2: "",
        },
        // {
        //     id: 19, image: Matthew_Manuko,
        //     title_name: "Matthew Hardie",
        //     digination: "Founder/Director, Manuko Pty Ltd",
        //     services_type: "Service type: Company Taxation",
        //     desc1: "Selina is helping me with my personal and company tax returns for the last few years. I am very happy with her service as she is always diligent, prompt, and thorough and is always willing to answer any questions I have and go above and beyond to help solve problems. It's been a pleasure to work with Selina to help with accounting matters, allowing more time to focus on my business. Thanks Selina and team for all your help.",
        //     desc2: "",
        // },
        // {
        //     id: 20, image: DomDaines,
        //     title_name: "Elena Dixon",
        //     digination: "Business Owner, Sole Trader",
        //     services_type: "Service type: Taxation and Bookkeeping",
        //     desc1: "Hi, I'm Ellie, and I want to share my amazing experience with Shelley Global for Xero bookkeeping and tax filing. They have transformed my financial management, providing accurate and up-to-date data recording in Xero with seamless integration. Their personalized approach, expertise in tax regulations, and the responsive team have made a significant impact on my business. I highly recommend Shelley Global for their exceptional service and commitment to client success.",
        //     desc2: "",
        // },

    ])
    return (
        <div className="container py-2 mb-5 testimonial__container">
            <h3 className="txt__title text-center mb-3">TESTIMONIALS</h3>
            <div className="testimonial__padding">
                <div className="row g-3 mb-4 pt-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-7 pe-md-5">
                        <h6 className="testimonial__txt__heading">
                            At Shelley Global, we pride ourselves on delivering exceptional tax advisory and accounting
                            services to individuals and businesses around the world. We value the feedback and testimonials
                            from our clients, as they reflect our commitment to excellence and client satisfaction. We invite
                            you to read what our clients say about their experiences working with us. We are grateful to all
                            our clients for their kind words and trust in our services. Their testimonials serve as a evidence
                            to our expertise, professionalism, and commitment to exceeding client expectations.
                        </h6>
                    </div>
                    <div className="col-md-5">
                        <div className="testimonial__img">
                            <img src={testimonial_rating_img} className="img-fluid"  alt="image" border="0" />
                        </div>
                    </div>
                </div>
                <div className="row g-3 gx-md-5 pt-5 gy-md-5 d-flex justify-content-start">
                    {
                        testimonialData !== undefined && testimonialData.map((data) => {
                            return (
                                <div key={data.id} className="col-md-6">
                                    <div className="testimonial__card__img">
                                        <img src={data.image} className="img-fluid"  alt="image" border="0" />
                                    </div>
                                    <div className="pt-3">
                                        <h5 className="test__title__txt">{data.title_name}</h5>
                                        <h6 className="test__digination__txt">{data.digination}</h6>
                                        <h6 className="test__services__type__txt">{data.services_type}</h6>
                                        <p className="test__desc__txt">{data.desc1}</p>
                                        <p className="test__desc__txt pt-2">{data.desc2}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;