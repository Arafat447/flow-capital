
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import FAQS_banner from "../../assets/FAQS_banner.jpg";

const askQuestiondata = [
  {
    id: 1,
    title: "Q: What services does Shelley Global offer?",
    content: "A: Shelley Global offers a wide range of accounting and taxation services for local clients of USA, Australia and Canada and their international tax affair between these counties including clients, including Tax Returns and Tax Planning, International Taxation, Entity Formation & Winding Up, Financial Accounting, Auditing, Payroll Tax & Others. Our goal is to provide comprehensive support to help our clients achieve their financial goals."
  },

  {
    id: 2,
    title: "Q: Are your services available in United States, Australia and the Canada?",
    content: "A: Yes, Shelley Global has offices United States, Australia and the Canada, and we are able to provide our bookkeeping services to clients in any countries. Our team has extensive experience working with clients in both markets, and we are well-equipped to handle the unique challenges and requirements of each location.",
  },
  {
    id: 3,
    title: "Q: What makes Shelley Global different from other accounting firms?",
    content: "A: There are plenty of reasons and uniqueness that you should love Shelley Global. We are experts in working remotely with online or cloud software. However, you are always welcome to visit onsite if you would like. Shelley Global is capable to manage all sizes and shapes of businesses including E-commerce. We can help reduce costs and save money by switching accounting functions as well. We use the latest technologies and processes including accounting software, accounting apps, and communication apps. ",
  },
  {
    id: 4,
    title: "Q: What is your process for working with new clients?",
    content: "A: When working with a new client, our first step is to understand their specific needs and goals. This may involve an initial consultation or a review of their financial records. From there, we work closely with the client to develop a customized solution that meets their needs. Our team is available to answer any questions and provide ongoing support throughout the engagement.",
  },
  {
    id: 5,
    title: "Q: How does Shelley Global ensure the security and confidentiality of my company's financial information?",
    content: "A: We take the security and confidentiality of our clients' financial information very seriously. We use the latest encryption and data security technologies to protect your data and limit access to authorized personnel only. Additionally, all of our staff are required to sign strict confidentiality agreements to ensure the protection of your information.",
  },
  {
    id: 6,
    title: "Q: How do I get started with Shelley Global?",
    content: "A: Getting started with Shelley Global is easy. Simply contact us to schedule a consultation or to request more information. Our team will work with you to understand your needs and goals, and to develop a customized solution that meets those needs.",
  },
  {
    id: 7,
    title: "Q: What is your pricing structure for services?",
    content: "A: Our pricing structure is based on the specific needs and goals of each client. We take the time to understand each client's unique requirements, and we develop a customized solution that meets those needs. Our goal is to provide value to our clients, and our pricing reflects that commitment.",
  },
  {
    id: 8,
    title: "Q: What happens if I need assistance outside of business hours?",
    content: "A: Our team is available to assist clients with any questions or concerns they may have, including outside of business hours. We understand that financial concerns don't always arise during regular business hours, and we are committed to providing our clients with the support they need, when they need it.",
  },
  {
    id: 9,
    title: "Q: Do you offer any training or professional development opportunities?",
    content: "A: Yes, Shelley Global is committed to providing our team members with opportunities for professional development and growth. This may include in-house training, conference attendance, and opportunities to work on diverse and challenging projects.",
  },
  {
    id: 10,
    title: "Q: Can you help with tax planning and preparation?",
    content: "A: Yes, Shelley Global offers tax planning and preparation services to clients in both Australia and the United States. Our team has extensive experience in tax compliance and planning, and we work closely with our clients to minimize their tax liability and ensure compliance with all applicable tax laws.",
  },
  {
    id: 11,
    title: "Q: Can you help with financial reporting?",
    content: "A: Yes, Shelley Global offers financial reporting services to clients in United States, Australia and the Canada. Our team has extensive experience in these areas, and we work closely with our clients to ensure that their financial records are accurate and up-to-date.",
  },
  {
    id: 12,
    title: "Q: Can you help with business planning and strategy?",
    content: "A: Yes, Shelley Global offers business planning and strategy services to clients in in United States, Australia and the Canada. Our team has extensive experience in these areas, and we work closely with our clients to help them achieve their financial goals and grow their businesses.",
  }
  ,
  {
    id: 13,
    title: "Q: What are some common tax issues faced by cross-border businesses?",
    content: "A: Some common tax issues faced by cross-border businesses include transfer pricing, double taxation, and navigating different tax laws and regulations in different countries. Shelley Global has extensive experience in addressing these issues, and we work closely with our clients to ensure that their tax affairs are in order.",
  },
  {
    id: 14,
    title: "Q: Can you help with tax planning for international expansion?",
    content: "A: Yes, Shelley Global can help with tax planning for international expansion. Our team has extensive experience in this area, and we work closely with our clients to understand their specific needs and goals. We develop customized tax planning strategies that help clients minimize their tax liability and ensure compliance with all applicable tax laws.",
  },
  {
    id: 15,
    title: "Q: What is your experience with international tax treaties?",
    content: "A: Shelley Global has extensive experience in working with international tax treaties, and we stay up-to-date on all relevant tax treaties and agreements. We work closely with our clients to help them navigate the complexities of international tax treaties, and to ensure that they are in compliance with all applicable tax laws.",
  },
  {
    id: 16,
    title: "Q: What services does Shelley Global offer for international tax planning?",
    content: "A: Shelley Global offers a wide range of international tax planning services, including tax compliance, transfer pricing, expatriate tax planning, cross-border transactions, and mergers and acquisitions. Our team of experts will work with you to create customized solutions that meet your specific needs and help you achieve your goals.",
  },
  {
    id: 17,
    title: "Q: How can Shelley Global help me with my company's international tax compliance?",
    content: "A: We can help ensure that your company is in compliance with all relevant international tax laws and regulations. We'll provide guidance on tax filings, tax payments, and reporting requirements to help you avoid penalties and minimize your tax liabilities.",
  },
  {
    id: 18,
    title: "Q: How can Shelley Global help me navigate the complex tax laws of multiple countries?",
    content: "A: Our team of experts has extensive experience working with clients in multiple countries, so we understand the nuances of each jurisdiction's tax laws and regulations. We'll provide guidance on the applicable tax laws and help you navigate compliance requirements in each country where you operate.",
  },
  {
    id: 19,
    title: "Q: Can Shelley Global assist me with expatriate tax planning for my employees?",
    content: "A: Yes, we offer comprehensive expatriate tax planning services to help ensure that your employees are compliant with all relevant tax laws and regulations. We'll work with you to develop a tax-efficient structure that minimizes tax liabilities and maximizes the benefits for your employees.",
  }
  ,
  {
    id: 20,
    title: "Q: How does Shelley Global keep up with changes to international tax laws and regulations?",
    content: "A: Our team of experts stays up to date with changes to international tax laws and regulations through ongoing training, professional development, and active involvement in industry associations. We also maintain strong relationships with tax authorities in multiple countries to stay informed of changes in regulations and compliance requirements.",
  },
  {
    id: 21,
    title: "Q: How does Shelley Global approach tax optimization strategies for global businesses?",
    content: "A: We take a comprehensive approach to tax optimization, analyzing your global tax position and identifying opportunities to reduce your tax exposure. We'll work with you to develop a customized tax optimization strategy that helps you achieve your business goals while minimizing your tax liabilities.",
  }
  ,
  {
    id: 22,
    title: "Q: What bookkeeping services does Shelley Global offer for small businesses?",
    content: "A: Shelley Global offers a range of bookkeeping services for small businesses, including accounts payable and receivable, bank and credit card reconciliations, financial statement preparation, and general ledger maintenance.",
  },
  {
    id: 23,
    title: "Q: Can Shelley Global assist me with implementing an automated bookkeeping system?",
    content: "A: Yes, we can help you implement an automated bookkeeping system that streamlines your financial operations and saves you time and money. We'll work with you to identify the best system for your business and provide training and ongoing support.",
  },
  {
    id: 24,
    title: "Q: What United States taxation services does Shelley Global offer for businesses and individuals?",
    content: "A: Shelley Global offers a wide range of taxation services for businesses and individuals, including tax planning, compliance, representation, and resolution. We can assist you with federal, state, and local tax matters.",
  },
  {
    id: 25,
    title: "Q: Can Shelley Global help me minimize my tax liabilities?",
    content: "A: Yes, we can help you identify opportunities to minimize your tax liabilities through effective tax planning strategies. Our team of experts will analyze your financial situation and develop a customized tax plan that meets your needs and helps you achieve your financial goals.",
  },
  {
    id: 26,
    title: "Q: Does Shelley Global offer representation services in the event of an IRS audit?",
    content: "A: Yes, we provide expert representation services to assist you in the event of an IRS audit or examination. We'll work with the IRS on your behalf to ensure that your rights are protected and help you navigate the audit process.",
  },
  {
    id: 27,
    title: "Q: What types of tax resolution services does Shelley Global offer?",
    content: "A: We offer a variety of tax resolution services, including installment agreements, offer in compromise, innocent spouse relief, and penalty abatement. We'll work with you to identify the best option for your situation and help you achieve a favorable resolution with the IRS.",
  },
  {
    id: 28,
    title: "Q: How does Shelley Global keep up with changes to United States tax laws and regulations?",
    content: "A: Our team of experts stays up to date with changes to United States tax laws and regulations through ongoing training, professional development, and active involvement in industry associations. We also maintain strong relationships with tax authorities to stay informed of changes in regulations and compliance requirements.",
  },
  {
    id: 29,
    title: "Q: What types of entities can Shelley Global help me set up in the United States?",
    content: "A: We can help you set up a variety of entities in the United States, including corporations, limited liability companies (LLCs), partnerships, and sole proprietorships. We'll work with you to determine the best entity type for your business needs and goals.",
  },
  {
    id: 30,
    title: "Q: Can Shelley Global assist me with obtaining the necessary permits and licenses for my new entity?",
    content: "A: Yes, we can assist you with obtaining the necessary permits and licenses for your new entity. We'll help you navigate the complex regulatory landscape and ensure that your business is in compliance with all applicable laws and regulations.",
  },
  {
    id: 31,
    title: "Q: How long does it typically take to set up a new entity in the United States?",
    content: "A: The timeline for setting up a new entity in the United States can vary depending on a variety of factors, including the type of entity and the state in which it is being formed. However, most entities can be set up within a few weeks.",
  },
  {
    id: 32,
    title: "Q: Does Shelley Global provide registered agent services for new entities?",
    content: "A: Yes, we provide registered agent services for new entities, which are required by law in most states. Our registered agent services ensure that you receive important legal and tax documents in a timely and secure manner.",
  },
  {
    id: 33,
    title: "Q: How can Shelley Global help me with ongoing compliance requirements for my new entity?",
    content: "A: We offer ongoing compliance services to ensure that your new entity remains in compliance with all applicable laws and regulations. We'll help you file annual reports, maintain corporate records, and fulfill other compliance requirements so that you can focus on growing your business.",
  },
  {
    id: 34,
    title: "Q: Can you help with entity set up in Australia?",
    content: "A: Yes, Shelley Global offers entity set up services in Australia. Our team has extensive experience in this area, and we work closely with our clients to understand their specific needs and goals. We provide guidance on the best type of entity to set up, help with the registration process, and assist with ongoing compliance requirements.",
  },
  {
    id: 35,
    title: "Q: What type of business entities can be set up in Australia?",
    content: "A: In Australia, you can set up a sole proprietorship, partnership, trust, company, or co-operative. Each type of entity has its own advantages and disadvantages, and the best choice for your business will depend on your specific needs and goals",
  },
  {
    id: 36,
    title: "Q: What support can Shelley Global offer to Australian companies looking to expand internationally?",
    content: "A: Shelley Global offers a range of support services to Australian companies looking to expand internationally, including: Market research and analysis to help you identify the best market for your business. Advice on local laws and regulations, including tax laws, intellectual property protection, and labor laws Assistance with setting up a local presence, including subsidiary or branch office formation. Accounting and tax compliance services to ensure that you are meeting all local requirements. Ongoing support and monitoring of your international operations to help you navigate the challenges of international business expansion.",
  },
  {
    id: 37,
    title: "Q: What support can Shelley Global offer to Australian companies looking to do business in the USA?",
    content: "A: Shelley Global offers a range of support services to Australian companies looking to do business in the USA, including:  Assistance with setting up a local presence, including registering a subsidiary or branch office. Advice on local laws and regulations, including tax laws, labor laws, and intellectual property protection. Accounting and tax compliance services, including preparing and filing financial statements and tax returns in accordance with local requirements. Support with currency exchange and banking arrangements, including opening a US-based bank account. Regular monitoring of your US operations to help you navigate any changes in local laws and regulations.",
  },
  {
    id: 38,
    title: "Q: How can Shelley Global help me navigate the complexities of US tax laws and regulations?",
    content: "A: Shelley Global can help you navigate the complexities of US tax laws and regulations by: Providing expert advice on local tax laws and regulations, including federal, state, and local taxes. Ensuring that you are meeting all filing and reporting requirements, including preparing and filing financial statements and tax returns in accordance with local requirements. Monitoring changes in local tax laws and regulations and providing updated guidance as needed. Representing you in tax audits and disputes, if required. Helping you optimize your tax position through effective tax planning and compliance.",
  },

]


const Faqs = () => {
  const [askQuestion, setAskQuestiondata] = useState(askQuestiondata);
  const [activePanel, setActivePanel] = useState(1);

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? 0 : panel);
  };

  return (
    <>
      <div className="appointment__bg">
        <div className="container faqs__container">
          <div className="apointment__banner">
            <img src={FAQS_banner} alt="image"  />
          </div>

          <h3 className="txt__title text-center pt-4">FAQS</h3>
          <div className="row py-3 d-flex justify-content-center">
            <div className="col-md-12">
              <div className="accordion question__ask__div" id="accordionExample">
                {askQuestion.map((panel, i) => (
                  <div key={i} className="card mb-2">
                    <div
                      className={`card-header card__border__color ${activePanel === panel.id ? 'active' : ''}`}
                      id={`heading${panel.id}`}
                      onClick={() => togglePanel(panel.id)}
                    >
                      <h2 className="question__ask mb-0">
                        <button
                          className="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target={`#collapse${panel.id}`}
                          aria-expanded={activePanel === panel.id}
                          aria-controls={`collapse${panel.id}`}
                        >
                          <div className="d-flex justify-content-between">
                            <p className="ask_qustion__txt">{panel.title}</p>
                            <p className="ask_qustion__icon">
                              <FontAwesomeIcon
                                icon={activePanel === panel.id ? faMinus : faPlus}
                                className="pull-right text-end me-2"
                              />
                            </p>
                          </div>
                        </button>
                      </h2>
                    </div>
                    <div
                      id={`collapse${panel.id}`}
                      className={`collapse ${activePanel === panel.id ? 'show' : ''}`}
                      aria-labelledby={`heading${panel.id}`}
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p className="txt__desc">{panel.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;

// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { Link } from 'react-router-dom';
// import FAQS_banner from "../../assets/FAQS_banner.jpg";

// const askQuestiondata = [
//     {
//         id: 1,
//         title: "Q: What services does Shelley Global offer?",
//         content: "A: Shelley Global offers a wide range of accounting and taxation services for local clints of USA, Australia and Canada and their international tax affair between these counties including clients, including Tax Returns and Tax Planning, International Taxation, Entity Formation & Winding Up, Financial Accounting, Auditing, Payroll Tax & Others. Our goal is to provide comprehensive support to help our clients achieve their financial goals."
//     },

//     {
//         id: 2,
//         title: "Q: Are your services available in United States, Australia and the Canada?",
//         content: "A: Yes, Smart Accounting has offices United States, Australia and the Canada, and we are able to provide our bookkeeping services to clients in any countries. Our team has extensive experience working with clients in both markets, and we are well-equipped to handle the unique challenges and requirements of each location.",
//     },
//     {
//         id: 3,
//         title: "Q: What makes Shelley Global different from other accounting firms?",
//         content: "A: There are plenty of reasons and uniqueness that you should love Shelley Global. We are experts in working remotely with online or cloud software. However, you are always welcome to visit onsite if you would like. Shelley Global is capable to manage all sizes and shapes of businesses including E-commerce. We can help reduce costs and save money by switching accounting functions as well. We use the latest technologies and processes including accounting software, accounting apps, and communication apps. ",
//     },
//     {
//         id: 4,
//         title: "Q: What is your process for working with new clients?",
//         content: "A: When working with a new client, our first step is to understand their specific needs and goals. This may involve an initial consultation or a review of their financial records. From there, we work closely with the client to develop a customized solution that meets their needs. Our team is available to answer any questions and provide ongoing support throughout the engagement.",
//     },
//     {
//         id: 5,
//         title: "Q: How does Shelley Global ensure the security and confidentiality of my company's financial information?",
//         content: "A: We take the security and confidentiality of our clients' financial information very seriously. We use the latest encryption and data security technologies to protect your data and limit access to authorized personnel only. Additionally, all of our staff are required to sign strict confidentiality agreements to ensure the protection of your information.",
//     },
//     {
//         id: 6,
//         title: "Q: How do I get started with Shelley Global?",
//         content: "A: Getting started with Shelley Global is easy. Simply contact us to schedule a consultation or to request more information. Our team will work with you to understand your needs and goals, and to develop a customized solution that meets those needs.",
//     },
//     {
//         id: 7,
//         title: "Q: What is your pricing structure for services?",
//         content: "A: Our pricing structure is based on the specific needs and goals of each client. We take the time to understand each client's unique requirements, and we develop a customized solution that meets those needs. Our goal is to provide value to our clients, and our pricing reflects that commitment.",
//     },
//     {
//         id: 8,
//         title: "Q: What happens if I need assistance outside of business hours?",
//         content: "A: Our team is available to assist clients with any questions or concerns they may have, including outside of business hours. We understand that financial concerns don't always arise during regular business hours, and we are committed to providing our clients with the support they need, when they need it.",
//     },
//     {
//         id: 9,
//         title: "Q: Do you offer any training or professional development opportunities?",
//         content: "A: Yes, Shelley Global is committed to providing our team members with opportunities for professional development and growth. This may include in-house training, conference attendance, and opportunities to work on diverse and challenging projects.",
//     },
//     {
//         id: 10,
//         title: "Q: Can you help with tax planning and preparation?",
//         content: "A: Yes, Shelley Global offers tax planning and preparation services to clients in both Australia and the United States. Our team has extensive experience in tax compliance and planning, and we work closely with our clients to minimize their tax liability and ensure compliance with all applicable tax laws.",
//     },
//     {
//         id: 11,
//         title: "Q: Can you help with financial reporting?",
//         content: "A: Yes, Shelley Global offers financial reporting services to clients in United States, Australia and the Canada. Our team has extensive experience in these areas, and we work closely with our clients to ensure that their financial records are accurate and up-to-date.",
//     },
//     {
//         id: 12,
//         title: "Q: Can you help with business planning and strategy?",
//         content: "A: Yes, Shelley Global offers business planning and strategy services to clients in in United States, Australia and the Canada. Our team has extensive experience in these areas, and we work closely with our clients to help them achieve their financial goals and grow their businesses.",
//     }
//     ,
//     {
//         id: 13,
//         title: "Q: What are some common tax issues faced by cross-border businesses?",
//         content: "A: Some common tax issues faced by cross-border businesses include transfer pricing, double taxation, and navigating different tax laws and regulations in different countries. Shelley Global has extensive experience in addressing these issues, and we work closely with our clients to ensure that their tax affairs are in order.",
//     },
//     {
//         id: 14,
//         title: "Q: Can you help with tax planning for international expansion?",
//         content: "A: Yes, Shelley Global can help with tax planning for international expansion. Our team has extensive experience in this area, and we work closely with our clients to understand their specific needs and goals. We develop customized tax planning strategies that help clients minimize their tax liability and ensure compliance with all applicable tax laws.",
//     },
//     {
//         id: 15,
//         title: "Q: What is your experience with international tax treaties?",
//         content: "A: Shelley Global has extensive experience in working with international tax treaties, and we stay up-to-date on all relevant tax treaties and agreements. We work closely with our clients to help them navigate the complexities of international tax treaties, and to ensure that they are in compliance with all applicable tax laws.",
//     },
//     {
//         id: 16,
//         title: "Q: What services does Shelley Global offer for international tax planning?",
//         content: "A: Shelley Global offers a wide range of international tax planning services, including tax compliance, transfer pricing, expatriate tax planning, cross-border transactions, and mergers and acquisitions. Our team of experts will work with you to create customized solutions that meet your specific needs and help you achieve your goals.",
//     },
//     {
//         id: 17,
//         title: "Q: How can Shelley Global help me with my company's international tax compliance?",
//         content: "A: We can help ensure that your company is in compliance with all relevant international tax laws and regulations. We'll provide guidance on tax filings, tax payments, and reporting requirements to help you avoid penalties and minimize your tax liabilities.",
//     },
//     {
//         id: 18,
//         title: "Q: How can Shelley Global help me navigate the complex tax laws of multiple countries?",
//         content: "A: Our team of experts has extensive experience working with clients in multiple countries, so we understand the nuances of each jurisdiction's tax laws and regulations. We'll provide guidance on the applicable tax laws and help you navigate compliance requirements in each country where you operate.",
//     },
//     {
//         id: 19,
//         title: "Q: Can Shelley Global assist me with expatriate tax planning for my employees?",
//         content: "A: Yes, we offer comprehensive expatriate tax planning services to help ensure that your employees are compliant with all relevant tax laws and regulations. We'll work with you to develop a tax-efficient structure that minimizes tax liabilities and maximizes the benefits for your employees.",
//     }
//     ,
//     {
//         id: 20,
//         title: "Q: How does Shelley Global keep up with changes to international tax laws and regulations?",
//         content: "A: Our team of experts stays up to date with changes to international tax laws and regulations through ongoing training, professional development, and active involvement in industry associations. We also maintain strong relationships with tax authorities in multiple countries to stay informed of changes in regulations and compliance requirements.",
//     },
//     {
//         id: 21,
//         title: "Q: How does Shelley Global approach tax optimization strategies for global businesses?",
//         content: "A: We take a comprehensive approach to tax optimization, analyzing your global tax position and identifying opportunities to reduce your tax exposure. We'll work with you to develop a customized tax optimization strategy that helps you achieve your business goals while minimizing your tax liabilities.",
//     }
//     ,
//     {
//         id: 22,
//         title: "Q: What bookkeeping services does Shelley Global offer for small businesses?",
//         content: "A: Shelley Global offers a range of bookkeeping services for small businesses, including accounts payable and receivable, bank and credit card reconciliations, financial statement preparation, and general ledger maintenance.",
//     },
//     {
//         id: 23,
//         title: "Q: Can Shelley Global assist me with implementing an automated bookkeeping system?",
//         content: "A: Yes, we can help you implement an automated bookkeeping system that streamlines your financial operations and saves you time and money. We'll work with you to identify the best system for your business and provide training and ongoing support.",
//     },
//     {
//         id: 24,
//         title: "Q: What United States taxation services does Shelley Global offer for businesses and individuals?",
//         content: "A: Shelley Global offers a wide range of taxation services for businesses and individuals, including tax planning, compliance, representation, and resolution. We can assist you with federal, state, and local tax matters.",
//     },
//     {
//         id: 25,
//         title: "Q: Can Shelley Global help me minimize my tax liabilities?",
//         content: "A: Yes, we can help you identify opportunities to minimize your tax liabilities through effective tax planning strategies. Our team of experts will analyze your financial situation and develop a customized tax plan that meets your needs and helps you achieve your financial goals.",
//     },
//     {
//         id: 26,
//         title: "Q: Does Shelley Global offer representation services in the event of an IRS audit?",
//         content: "A: Yes, we provide expert representation services to assist you in the event of an IRS audit or examination. We'll work with the IRS on your behalf to ensure that your rights are protected and help you navigate the audit process.",
//     },
//     {
//         id: 27,
//         title: "Q: What types of tax resolution services does Shelley Global offer?",
//         content: "A: We offer a variety of tax resolution services, including installment agreements, offer in compromise, innocent spouse relief, and penalty abatement. We'll work with you to identify the best option for your situation and help you achieve a favorable resolution with the IRS.",
//     },
//     {
//         id: 28,
//         title: "Q: How does Shelley Global keep up with changes to United States tax laws and regulations?",
//         content: "A: Our team of experts stays up to date with changes to United States tax laws and regulations through ongoing training, professional development, and active involvement in industry associations. We also maintain strong relationships with tax authorities to stay informed of changes in regulations and compliance requirements.",
//     },
//     {
//         id: 29,
//         title: "Q: What types of entities can Shelley Global help me set up in the United States?",
//         content: "A: We can help you set up a variety of entities in the United States, including corporations, limited liability companies (LLCs), partnerships, and sole proprietorships. We'll work with you to determine the best entity type for your business needs and goals.",
//     },
//     {
//         id: 30,
//         title: "Q: Can Shelley Global assist me with obtaining the necessary permits and licenses for my new entity?",
//         content: "A: Yes, we can assist you with obtaining the necessary permits and licenses for your new entity. We'll help you navigate the complex regulatory landscape and ensure that your business is in compliance with all applicable laws and regulations.",
//     },
//     {
//         id: 31,
//         title: "Q: How long does it typically take to set up a new entity in the United States?",
//         content: "A: The timeline for setting up a new entity in the United States can vary depending on a variety of factors, including the type of entity and the state in which it is being formed. However, most entities can be set up within a few weeks.",
//     },
//     {
//         id: 32,
//         title: "Q: Does Shelley Global provide registered agent services for new entities?",
//         content: "A: Yes, we provide registered agent services for new entities, which are required by law in most states. Our registered agent services ensure that you receive important legal and tax documents in a timely and secure manner.",
//     },
//     {
//         id: 33,
//         title: "Q: How can Shelley Global help me with ongoing compliance requirements for my new entity?",
//         content: "A: We offer ongoing compliance services to ensure that your new entity remains in compliance with all applicable laws and regulations. We'll help you file annual reports, maintain corporate records, and fulfill other compliance requirements so that you can focus on growing your business.",
//     },
//     {
//         id: 34,
//         title: "Q: Can you help with entity set up in Australia?",
//         content: "A: Yes, Shelley Global offers entity set up services in Australia. Our team has extensive experience in this area, and we work closely with our clients to understand their specific needs and goals. We provide guidance on the best type of entity to set up, help with the registration process, and assist with ongoing compliance requirements.",
//     },
//     {
//         id: 35,
//         title: "Q: What type of business entities can be set up in Australia?",
//         content: "A: In Australia, you can set up a sole proprietorship, partnership, trust, company, or co-operative. Each type of entity has its own advantages and disadvantages, and the best choice for your business will depend on your specific needs and goals",
//     },
//     {
//         id: 36,
//         title: "Q: What support can Shelley Global offer to Australian companies looking to expand internationally?",
//         content: "A: Shelley Global offers a range of support services to Australian companies looking to expand internationally, including: Market research and analysis to help you identify the best market for your business. Advice on local laws and regulations, including tax laws, intellectual property protection, and labor laws Assistance with setting up a local presence, including subsidiary or branch office formation. Accounting and tax compliance services to ensure that you are meeting all local requirements. Ongoing support and monitoring of your international operations to help you navigate the challenges of international business expansion.",
//     },
//     {
//         id: 37,
//         title: "Q: What support can Shelley Global offer to Australian companies looking to do business in the USA?",
//         content: "A: Shelley Global offers a range of support services to Australian companies looking to do business in the USA, including:  Assistance with setting up a local presence, including registering a subsidiary or branch office. Advice on local laws and regulations, including tax laws, labor laws, and intellectual property protection. Accounting and tax compliance services, including preparing and filing financial statements and tax returns in accordance with local requirements. Support with currency exchange and banking arrangements, including opening a US-based bank account. Regular monitoring of your US operations to help you navigate any changes in local laws and regulations.",
//     },
//     {
//         id: 38,
//         title: "Q: How can Shelley Global help me navigate the complexities of US tax laws and regulations?",
//         content: "A: Shelley Global can help you navigate the complexities of US tax laws and regulations by: Providing expert advice on local tax laws and regulations, including federal, state, and local taxes. Ensuring that you are meeting all filing and reporting requirements, including preparing and filing financial statements and tax returns in accordance with local requirements. Monitoring changes in local tax laws and regulations and providing updated guidance as needed. Representing you in tax audits and disputes, if required. Helping you optimize your tax position through effective tax planning and compliance.",
//     },

// ]


// const Faqs = () => {
//     const [askQuestion, setAskQuestiondata] = useState(askQuestiondata);
//     // console.log("askQuestion", askQuestion);

//     const [activePanel, setActivePanel] = useState(1);
//     const togglePanel = (panel) => {
//         setActivePanel(activePanel === panel ? 0 : panel);
//     };



//     return (
//         <>
//             <div className="appointment__bg">
//                 <div className="apointment__banner">
//                     <img src={FAQS_banner} alt="image"  />
//                 </div>

//                 <div className="container py-4">
//                     <h3 className="txt__title text-center">FAQS</h3>
//                     <div className="row pt-2 d-flex justify-content-center">
//                         <div className="col-md-12 ">
//                             <div className="accordion question__ask__div" id="accordionExample">
//                                 {
//                                     askQuestion.map((panel, i) => (
//                                         <div key={i} className="card mb-3">
//                                             <div
//                                                 className="card-header"
//                                                 id={`heading${panel.id}`}
//                                                 onClick={() => togglePanel(panel.id)}
//                                             >
//                                                 <h2 className="question__ask mb-0">
//                                                     <button
//                                                         className="btn btn-link"
//                                                         type="button"
//                                                         data-toggle="collapse"
//                                                         data-target={`#collapse${panel.id}`}
//                                                         aria-expanded={activePanel === panel.id}
//                                                         aria-controls={`collapse${panel.id}`}
//                                                     >
//                                                         <div className="d-flex justify-content-between">
//                                                             <p className="ask_qustion__txt">{panel.title}</p>
//                                                             <p className="ask_qustion__icon">
//                                                                 <FontAwesomeIcon
//                                                                     // icon={activePanel === panel.id ? faCaretUp : faCaretDown}
//                                                                     icon={activePanel === panel.id ? faMinus : faPlus}
//                                                                     className="pull-right text-end me-2"
//                                                                 />
//                                                             </p>
//                                                         </div>
//                                                     </button>
//                                                 </h2>
//                                             </div>

//                                             <div
//                                                 id={`collapse${panel.id}`}
//                                                 className={`collapse ${activePanel === panel.id ? "show" : ""}`}
//                                                 aria-labelledby={`heading${panel.id}`}
//                                                 data-parent="#accordionExample"
//                                             >
//                                                 <div className="card-body"><p className="txt__desc">{panel.content}</p></div>
//                                             </div>
//                                         </div>
//                                     ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Faqs;