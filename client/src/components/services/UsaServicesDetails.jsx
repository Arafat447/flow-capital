import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';


import inividual_tax_banner from "../../assets/inividual_tax_banner.png";
import individual_img from "../../assets/individual_img.png";
import Partnership_Tax_Return_banner from "../../assets/Partnership_Tax_Return_banner.jpg";
import CORPORATE_Tax_banner from "../../assets/CORPORATE_Tax_banner.png";
import ESTATE_TRUST_GIFT_TAX_banner from "../../assets/ESTATE_TRUST_GIFT_TAX_banner.png";
import international_indivual_tax_banner from "../../assets/international_indivual_tax_banner.jpg";
import International_Business_Tax_banner from "../../assets/International_Business_Tax_banner.jpg";
import Amendment_banner from "../../assets/Amendment_banner.jpg";
import BOOKKEEPING_PAYROLL_banner from "../../assets/BOOKKEEPING_PAYROLL_banner.jpg";
import Reporting_banner from "../../assets/Reporting_banner.jpg";
import USA_Entity_Setup_banner from "../../assets/USA_Entity_Setup_banner.jpg";
import Foreign_Entity_Setup_banner from "../../assets/Foreign_Entity_Setup_banner.jpg";
import Representation_banner from "../../assets/Representation_banner.jpg";
import ADVISORY_banner from "../../assets/ADVISORY_banner.jpg";

const UsaServicesDetails = () => {
    // const [servicesData, setServicesData] = useState([
    //     { id: 1, title: "INDIVIDUAL TAX FEDERAL & STATE", link: "", },
    //     { id: 2, title: "PARTNERSHIP TAX FEDERAL & STATE", link: "", },
    //     { id: 3, title: "CORPORATE TAX FEDERAL & STATE", link: "", },
    //     { id: 4, title: "ESTATE & TRUST FEDERAL & STATE", link: "", },
    //     { id: 5, title: "INTERNATIONAL INDIVIDUAL TAX", link: "", },
    //     { id: 6, title: "INTERNATIONAL BUSINESS TAX", link: "", },
    //     { id: 7, title: "AMENDED & LATE TAX RETURN", link: "", },
    //     { id: 8, title: "BOOKKEEPING & PAYROLL", link: "", },
    //     { id: 9, title: "REPORTING", link: "", },
    //     { id: 10, title: "ENTITY SETUP-USA", link: "", },
    //     { id: 11, title: "ENTITY SETUP-FOREIGNER", link: "", },
    //     { id: 12, title: "REPRESENTATION", link: "", },
    //     { id: 13, title: "ADVISORY", link: "", },
    // ]);
    const [servicesData, setServicesData] = useState([
        {
            id: 1,
            banner_imgs: individual_img,
            ht_title: "INDIVIDUAL TAX FEDERAL & STATE",
            ht_title_desc: "At Shelley Global Inc, we provide comprehensive individual tax return services for clients in the United States. Our team of experienced professionals is dedicated to helping you minimize your tax liability and maximize your tax savings.",
            subtitle: "Our individual tax return services include:",
            content: [
                {
                    id: 1,
                    desc1: "Federal tax return preparation: We can prepare and file your U.S. Individual Federal tax returns, including Forms 1040, 1040-SR, 1040-NR and necessary schedules. Our tax experts have experience working with a wide range of individual tax situations, including sole proprietorship, contractor, freelancer income, rental property, capital gain income, equity compensation, multi-state allocation, crypto currency, and foreign sources of income.",
                    desc2: "State tax return preparation: We can also prepare and file your state income tax returns. Most individual U.S. states collect a state income tax in addition to federal income tax, and we can help you navigate the complex state tax laws and regulations to ensure compliance.",
                    desc3: "Tax planning and consultation: We can provide tax planning and consultation services to help you minimize your tax liability and maximize your tax savings. Our team can provide guidance on tax credits, deductions, and other strategies to help you save money on your taxes.",
                    desc4: "Audit representation: We can represent you in the event of an IRS audit, providing guidance and support throughout the process to ensure the best possible outcome.",
                    desc5: "At Shelley Global Inc, we use the latest tax software and technology to ensure accuracy and efficiency in our individual tax return services. We are committed to providing personalized and attentive service to each of our clients.",
                    desc6: "Contact us today to learn more about our individual tax return services and how we can help you minimize your tax liability and maximize your tax savings.                    ",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
        {
            id: 2,
            banner_imgs: Partnership_Tax_Return_banner,
            ht_title: "PARTNERSHIP TAX FEDERAL & STATE",
            ht_title_desc: "At Shelley Global Inc, we offer comprehensive partnership tax services for businesses in the United States. Our team of experienced professionals is dedicated to helping you navigate the complex world of partnership taxation and ensure compliance with all applicable federal and state laws and regulations.",
            subtitle: "Our partnership tax services include:",
            content: [
                {
                    id: 1,
                    desc1: "Federal and state partnership tax return preparation: We can prepare and file your partnership tax returns, including federal Form 1065, Form 4562, Form 8825 and any applicable schedules like K, K-1, L,  M-1 and M-2. Our tax experts have experience working with a wide range of partnership tax situations, including domestic and foreign partnerships.",
                    desc2: "Tax planning and consultation: We can provide tax planning and consultation services to help you minimize your tax liability and maximize your tax savings. Our team can provide guidance on tax credits, deductions, and other strategies to help you save money on your taxes.",
                    desc3: "Partnership agreement review: We can review your partnership agreement to ensure it is structured in the most tax-efficient manner possible.",
                    desc4: "Audit representation: We can represent you in the event of an IRS or state audit, providing guidance and support throughout the process to ensure the best possible outcome.",
                    desc5: "At Shelley Global Inc, we use the latest tax software and technology to ensure accuracy and efficiency in our partnership tax services. We are committed to providing personalized and attentive service to each of our clients.",
                    desc6: "Contact us today to learn more about our partnership tax services and how we can help you navigate the complex world of partnership taxation and ensure compliance with all applicable federal and state laws and regulations. ",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
        {
            id: 3,
            banner_imgs: CORPORATE_Tax_banner,
            ht_title: "CORPORATE TAX FEDERAL & STATE",
            ht_title_desc: "At Shelley Global Inc, we offer comprehensive corporate tax services for businesses in the United States. Our team of experienced professionals is dedicated to helping you navigate the complex world of corporate taxation and ensure compliance with all applicable laws and regulations.",
            subtitle: "Our corporate tax services include:",
            content: [
                {
                    id: 1,
                    desc1: "Federal and state corporate tax return preparation: We can prepare and file your corporate tax returns, including federal Form 1120 or 1120S, Schedule K-1 and any applicable state schedules. Our tax experts have experience working with a wide range of corporate tax situations, including C-corporations and S-corporations.",
                    desc2: "Tax planning and consultation: We can provide tax planning and consultation services to help you minimize your tax liability and maximize your tax savings. Our team can provide guidance on tax credits, deductions, and other strategies to help you save money on your taxes.",
                    desc3: "Corporate restructuring: We can provide guidance and support for corporate restructuring to optimize your corporate tax structure and minimize your tax liability.                    ",
                    desc4: "Audit representation: We can represent you in the event of an IRS or state audit, providing guidance and support throughout the process to ensure the best possible outcome.",
                    desc5: "At Shelley Global Inc, we use the latest tax software and technology to ensure accuracy and efficiency in our corporate tax services. We are committed to providing personalized and attentive service to each of our clients.",
                    desc6: "Don't let corporate tax issues hold your business back. Contact Shelley Global today to learn how our expert tax services can help your business thrive.",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
        {
            id: 4,
            banner_imgs: ESTATE_TRUST_GIFT_TAX_banner,
            ht_title: "ESTATE & TRUST FEDERAL & STATE",
            ht_title_desc: "At Shelley Global Inc, we offer comprehensive estate, trust, and gift tax preparation services to help you navigate the complex tax laws and regulations.",
            subtitle: "Our estate, trust, and gift tax services include:",
            content: [
                {
                    id: 1,
                    desc1: "Estate tax preparation: We offer estate tax preparation services for estates of all sizes, including filing your federal estate tax return by using Form 706, Form 709 and Form 1041 and any necessary state estate tax returns. Our experienced tax professionals can help you navigate the complex rules surrounding estate taxes to minimize your tax liability.",
                    desc2: "Trust tax preparation: We also provide trust tax preparation services for all types of trusts, including revocable trusts, irrevocable trusts, and charitable trusts. We can help you prepare and file your federal and state trust tax returns, ensuring that you are in compliance with all tax laws and regulations.",
                    desc3: "Gift tax preparation: We offer gift tax preparation services for taxpayers who have given gifts that exceed the annual gift tax exclusion amount, helping you navigate the complex rules surrounding gift tax reporting and minimize your tax liability.",
                    desc4: "Tax planning and consulting: Our team can help you with tax planning and consulting to minimize your estate, trust, or gift tax liability and maximize your tax savings. We can work with you throughout the year to develop a tax strategy that aligns with your financial goals.",
                    desc5: "Estate, trust, and gift tax return review: We can review your estate, trust, or gift tax return to ensure that it is accurate and complete, and help you avoid potential penalties or audits.",
                    desc6: "Estate, trust, and gift audit assistance: If your estate, trust, or gift is selected for an IRS or state tax audit, we can assist you with the process and help ensure that your rights are protected.",
                    desc7: "Tax resolution: If your estate, trust, or gift is facing tax problems such as liens, levies, or wage garnishments, our team can help you find a resolution and alleviate the financial burden. We can work with the IRS or state tax authorities to negotiate a payment plan or settlement that is in your best interests.",
                    desc8: "At Shelley Global Inc, we understand that managing the tax affairs of an estate, trust, or gift can be overwhelming. That's why we are committed to providing personalized and attentive service to each of our clients. Contact us today to learn more about our estate, trust, and gift tax services and how we can help you achieve your financial goals.",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
        {
            id: 5,
            banner_imgs: international_indivual_tax_banner,
            ht_title: "INTERNATIONAL INDIVIDUAL TAX",
            ht_title_desc: "Shelley Global Inc provides comprehensive international individual tax services to help clients navigate the complexities of cross-border taxation. Our team of experienced tax professionals has extensive knowledge of international tax laws and regulations, and we can provide you with the guidance you need to make informed decisions and minimize your tax liability.",
            subtitle: "Our international individual tax services include:",
            content: [
                {
                    id: 1,
                    desc1: "Our international individual tax services include tax planning and preparation for individuals with international tax obligations. We can assist with compliance for U.S. citizens living abroad, foreign nationals working in the U.S., and nonresident aliens with U.S. source income. We can also help with foreign tax credit planning, treaty analysis, and reporting of foreign assets and income.",
                    desc2: "At Shelley Global, we understand that international tax planning can be complex and overwhelming. That's why we work closely with our clients to develop customized tax solutions that meet their unique needs and objectives. Our team of tax professionals is dedicated to providing exceptional service and support every step of the way.",
                    desc3: "We offer international individual tax advisory services to help clients navigate complex international tax issues such as expatriation, residency determination, and tax compliance for global employers. We have a deep understanding of the nuances of international tax laws and regulations, and we can provide you with the guidance you need to make informed decisions.",
                    desc4: "We also provide offshore voluntary disclosure services. We can help you come into compliance with U.S. tax laws and avoid potential penalties through the offshore voluntary disclosure program.",
                    desc5: "Don't let cross-border taxation issues derail your financial plans. Contact Shelley Global Inc today to learn more about our international individual tax services and how we can help you achieve your financial goals.",
                    desc6: "",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
        {
            id: 6,
            banner_imgs: International_Business_Tax_banner,
            ht_title: "INTERNATIONAL BUSINESS TAX",
            ht_title_desc: "At Shelley Global Inc, we offer comprehensive international business tax services for companies conducting business globally. Our team of experienced professionals is dedicated to helping you navigate the complex world of international taxation and ensure compliance with all applicable laws and regulations.",
            subtitle: "Our international business tax services include:",
            content: [
                {
                    id: 1,
                    desc1: "Cross-border tax planning and consultation: We can provide tax planning and consultation services to help you minimize your global tax liability and maximize your tax savings. Our team can provide guidance on tax treaties, transfer pricing, and other strategies to help you save money on your global taxes.",
                    desc2: "International tax compliance: We can help you navigate the complex web of international tax laws and regulations to ensure compliance with all applicable tax laws in the countries where you do business.",
                    desc3: "Foreign tax credit planning: We can help you take advantage of foreign tax credits to offset your U.S. tax liability on foreign income.",
                    desc4: "Tax equalization and protection: We can help you implement tax equalization and protection policies to ensure that your employees working abroad are not subject to double taxation.",
                    desc5: "Tax treaty planning and compliance: We can help you take advantage of tax treaties to minimize your global tax liability.",
                    desc6: "At Shelley Global Inc, we use the latest tax software and technology to ensure accuracy and efficiency in our international business tax services. We are committed to providing personalized and attentive service to each of our clients.",
                    desc7: "Contact us today to learn more about our international business tax services and how we can help you navigate the complex world of international taxation and ensure compliance with all applicable laws and regulations.                    ",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
        {
            id: 7,
            banner_imgs: Amendment_banner,
            ht_title: "AMENDED & LATE TAX RETURN",
            ht_title_desc: "At Shelley Global Inc, we understand that life can be unpredictable and sometimes, despite your best efforts, you may miss a tax deadline or make an error on your tax return. That's why we offer amended and late tax return services to help you get back on track.",
            subtitle: "Our amended and late tax return services include:",
            content: [
                {
                    id: 1,
                    desc1: "Amended tax returns: If you discover an error on a previously filed tax return, we can assist you with filing an amended return to correct the mistake. We can help you prepare and file amended federal, state, and local tax returns to ensure that you are in compliance with all tax laws and regulations. Late tax returns: If you missed a tax deadline and need to file a late tax return, we can help. We can assist you with preparing and filing your federal, state, and local tax returns, and help you avoid potential penalties or fines.",
                    desc2: "Tax resolution: If you have outstanding tax debts or other tax problems, our team can help you find a resolution and alleviate the financial burden. We can work with the IRS or state tax authorities to negotiate a payment plan or settlement that is in your best interests.",
                    desc3: "Tax audit assistance: If your tax return is selected for an IRS or state tax audit, we can assist you with the process and help ensure that your rights are protected.",
                    desc4: "At Shelley Global Inc, we understand that dealing with amended and late tax returns can be stressful. That's why we are committed to providing personalized and attentive service to each of our clients. Contact us today to learn more about our amended and late tax return services and how we can help you get back on track with your taxes.",
                    desc5: "",
                    desc6: "",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
        {
            id: 8,
            banner_imgs: BOOKKEEPING_PAYROLL_banner,
            ht_title: "BOOKKEEPING & PAYROLL",
            ht_title_desc: "At Shelley Global Inc, we understand that bookkeeping and payroll tasks can be time-consuming and take away from the important work of growing your business. That's why we offer comprehensive bookkeeping and payroll services for businesses in the United States to help you stay on top of your financial obligations and focus on what you do best.",
            subtitle: "Our bookkeeping services include:",
            content: [
                {
                    id: 1,
                    desc1: "General ledger maintenance: We can help you keep track of all financial transactions, including sales, expenses, and payments, to ensure accurate record-keeping.",
                    desc2: "Accounts payable and accounts receivable: We can manage your accounts payable and accounts receivable to help you stay on top of your cash flow.",
                    desc3: "Bank and credit card reconciliation: We can reconcile your bank and credit card accounts to ensure that your records are accurate and up to date.",
                    desc4: "Financial statements preparation: We can prepare accurate financial statements, including income statements, balance sheets, and cash flow statements, to help you make informed financial decisions.",
                    desc5: "",
                    desc6: "",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            subtitle2: "Our payroll services include:",
            content2: [
                {
                    id: 1,
                    desc1: "Payroll processing: We can process your payroll accurately and efficiently, including calculating employee wages, taxes, and deductions.",
                    desc2: "Direct deposit: We can set up direct deposit for your employees to ensure timely and secure payment.",
                    desc3: "Payroll tax filings: We can prepare and file your payroll tax returns to ensure that you are in compliance with all federal and state tax laws.",
                    desc4: "Employee benefits administration: We can assist you with administering employee benefits, including health insurance, retirement plans, and other benefits.",
                    desc5: "We use popular accounting and payroll software such as QuickBooks, Xero, ADP, and Gusto to ensure accurate and efficient bookkeeping and payroll management.",
                    desc6: "In addition to our bookkeeping and payroll services, we also offer tax planning and preparation services to help you minimize your tax liability and stay in compliance with all tax laws and regulations.",
                    desc7: "At Shelley Global Inc, we understand that bookkeeping and payroll tasks can be overwhelming. That's why we are committed to providing personalized and attentive service to each of our clients in the United States. Contact us today to learn more about our bookkeeping and payroll services and how we can help you streamline your financial operations.",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
        {
            id: 9,
            banner_imgs: Reporting_banner,
            ht_title: "REPORTING",
            ht_title_desc: "At Shelley Global Inc, we understand the importance of accurate and timely financial reporting to make informed business decisions. Our reporting services are designed to provide our clients with comprehensive and reliable financial information to help them stay on top of their financial obligations and make informed decisions.",
            subtitle: "Our reporting services include:",
            content: [
                {
                    id: 1,
                    desc1: "Financial statement preparation: We can prepare accurate financial statements, including income statements, balance sheets, and cash flow statements, to help you understand your business's financial performance.",
                    desc2: "Budgeting and forecasting: We can help you prepare budgets and forecasts to plan for future expenses and revenue streams.",
                    desc3: "Management reporting: We can provide customized reports to help you track key performance indicators and measure your business's success.",
                    desc4: "Variance analysis: We can help you analyze the differences between actual financial results and budgeted amounts to identify areas of improvement.",
                    desc5: "Customized reporting: We can create customized reports tailored to your business's unique needs and requirements.",
                    desc6: "At Shelley Global Inc, we use the latest technology and software to ensure accuracy and efficiency in our reporting services. Our team of experienced professionals is dedicated to providing personalized and attentive service to each of our clients.",
                    desc7: "Contact us today to learn more about our reporting services and how we can help you stay on top of your financial reporting obligations and make informed business decisions.",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
        {
            id: 10,
            banner_imgs: USA_Entity_Setup_banner,
            ht_title: "ENTITY SETUP-USA",
            ht_title_desc: "At Shelley Global Inc, we understand that setting up a business in the United States can be a complex and time-consuming process. That's why we offer comprehensive entity setup services to help you navigate the legal and tax requirements of starting a business in the United States.",
            subtitle: "Our entity setup services include:",
            content: [
                {
                    id: 1,
                    desc1: "Business entity selection: We can help you choose the right legal structure for your business, whether it's a sole proprietorship, partnership, limited liability company (LLC), S-corporation, or C-corporation. We can help you weigh the benefits and drawbacks of each structure and choose the one that is best for your unique situation.",
                    desc2: "Entity registration: We can assist you with registering your business with the appropriate federal, state, and local agencies. We can help you obtain an Employer Identification Number (EIN), register your business with the Secretary of State, and obtain any necessary licenses or permits.",
                    desc3: "Operating agreement: If you choose an LLC as your business structure, we can help you draft an operating agreement that outlines the rights and responsibilities of each member, management structure, and voting rights.",
                    desc4: "Tax planning and consulting: Our team can help you with tax planning and consulting to ensure that you are in compliance with all tax laws and regulations and to minimize your tax liability. We can work with you throughout the year to develop a tax strategy that aligns with your financial goals.",
                    desc5: "Ongoing compliance: We can assist you with ongoing compliance with federal, state, and local tax laws and regulations. We can help you prepare and file your annual tax returns, maintain accurate accounting records, and stay up to date on any changes to tax laws that may affect your business.",
                    desc6: "At Shelley Global Inc, we understand that setting up a new business in the United States can be overwhelming. That's why we are committed to providing personalized and attentive service to each of our clients. Contact us today to learn more about our entity setup services and how we can help you start your business on the right foot.",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
        {
            id: 11,
            banner_imgs: Foreign_Entity_Setup_banner,
            ht_title: "ENTITY SETUP-FOREIGNER",
            ht_title_desc: "At Shelley Global Inc, we understand that setting up a business in a foreign country can be a complex and daunting task. That's why we offer comprehensive entity setup services for foreigners to help you navigate the legal and tax requirements of starting a business in the United States.",
            subtitle: "Our entity setup services for foreigners include:",
            content: [
                {
                    id: 1,
                    desc1: "Business entity selection: We can help you choose the right legal structure for your business, whether it's a sole proprietorship, partnership, limited liability company (LLC), S-corporation, or C-corporation. We can help you weigh the benefits and drawbacks of each structure and choose the one that is best for your unique situation.",
                    desc2: "Entity registration: We can assist you with registering your business with the appropriate federal, state, and local agencies. We can help you obtain an Employer Identification Number (EIN), register your business with the Secretary of State, and obtain any necessary licenses or permits.",
                    desc3: "Registered Agent Services: A registered agent is a person or company designated to receive service of process, legal documents, and other important communications on behalf of your business. As a foreigner, it may be necessary to appoint a registered agent to meet the legal requirements of your business entity.",
                    desc4: "Tax planning and consulting: Our team can help you with tax planning and consulting to ensure that you are in compliance with all tax laws and regulations and to minimize your tax liability. We can work with you throughout the year to develop a tax strategy that aligns with your financial goals.",
                    desc5: "Ongoing compliance: We can assist you with ongoing compliance with federal, state, and local tax laws and regulations. We can help you prepare and file your annual tax returns, maintain accurate accounting records, and stay up to date on any changes to tax laws that may affect your business.",
                    desc6: "At Shelley Global Inc, we understand that setting up a new business as a foreigner can be overwhelming. That's why we are committed to providing personalized and attentive service to each of our clients. Contact us today to learn more about our entity setup services for foreigners and how we can help you start your business in the United States.",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
        {
            id: 12,
            banner_imgs: Representation_banner,
            ht_title: "REPRESENTATION",
            ht_title_desc: "At Shelley Global Inc, we understand that dealing with the IRS or state tax authorities can be intimidating and stressful. That's why we offer comprehensive representation services to help you resolve tax issues and disputes.",
            subtitle: "Our representation services include:",
            content: [
                {
                    id: 1,
                    desc1: "IRS and state tax authority representation: We can represent you in front of the IRS or state tax authority in a variety of tax matters, including audits, appeals, collections, and penalties. Our experienced tax professionals can help you navigate the complex tax system and work to achieve the best possible outcome for your situation.",
                    desc2: "Offer in compromise: If you owe back taxes to the IRS, an offer in compromise (OIC) may be an option to settle your tax debt for less than the full amount owed. We can help you evaluate your eligibility for an OIC and assist you with the application process.",
                    desc3: "Installment agreements: If you are unable to pay your tax debt in full, an installment agreement may be an option to pay your taxes over time. We can help you negotiate a payment plan with the IRS or state tax authority that is manageable for your budget.",
                    desc4: "Penalty abatement: If you have been assessed penalties by the IRS or state tax authority, we can help you request penalty abatement based on reasonable cause or other grounds.",
                    desc5: "Tax court representation: If you need to litigate a tax issue in court, our experienced tax attorneys can represent you in tax court proceedings.",
                    desc6: "At Shelley Global Inc, we understand that tax issues can be stressful and time-consuming. That's why we are committed to providing personalized and attentive representation services to each of our clients. Contact us today to learn more about our representation services and how we can help you resolve your tax issues.",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
        {
            id: 13,
            banner_imgs: ADVISORY_banner,
            ht_title: "ADVISORY",
            ht_title_desc: "At Shelley Global Inc, we offer comprehensive advisory services to help businesses in the United States make informed decisions and achieve their financial goals. Our team of experienced professionals provides customized advisory services tailored to each client's unique needs and requirements.",
            subtitle: "Our advisory services include:",
            content: [
                {
                    id: 1,
                    desc1: "Business advisory: We can help you develop and execute strategies to grow your business, improve profitability, and maximize your return on investment.",
                    desc2: "Financial advisory: We can assist you with financial planning, investment strategy, and risk management to help you achieve your financial goals.",
                    desc3: "Tax advisory: We can help you navigate the complex world of tax laws and regulations to minimize your tax liability and ensure compliance.",
                    desc4: "International advisory: We can provide guidance and support for businesses operating internationally, including cross-border taxation and compliance.",
                    desc5: "Mergers and acquisitions advisory: We can assist you with mergers, acquisitions, and other business transactions, including due diligence, valuation, and negotiation.",
                    desc6: "Closing entity advisory: We can provide guidance and support for closing your business entity, including winding up operations, distributing assets, and filing final tax returns.",
                    desc7: "At Shelley Global Inc, we understand that every business is unique, and we provide personalized and attentive service to each of our clients. We use the latest technology and software to ensure accuracy and efficiency in our advisory services.",
                    desc8: "Contact us today to learn more about our advisory services and how we can help you achieve your financial goals and make informed business decisions, including closing your business entity.",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
    ]);

    const param = useParams();
    // const servicesDetails = servicesData.find(item => item.id === param.id);
    const servicesDetails = servicesData.find(item => item.id === Number(param.id));
    // console.log( "servicesData", param.id,);
    console.log("servicesDetails", servicesDetails,);

    if (!servicesData) {
        return <div>Loading...</div>;
    }





    return (
        <>
            {/* <section className="">
                <div className="banner__about">
                    <img src={servicesDetails.banner_imgs} className="img-fluid"  alt="image" border="0" />
                </div>
            </section> */}

            <section>
                <div className="container pt-2 mb-4 individula__container">
                    <h3 className="txt__title text-center">{servicesDetails.ht_title}</h3>
                    <div className="row pt-3">
                        <div className="clearfix">
                            <img src={servicesDetails.banner_imgs} className="img-fluid  col-md-6 float-md-end mb-3 ms-md-3"  alt="image" border="0" />
                            <p className="txt__desc txt_justify">{servicesDetails.ht_title_desc}</p>
                            <h6 className="txt__idividual">{servicesDetails.subtitle}</h6>
                            {servicesDetails.content.map((item) => {
                                return (
                                    <div className="" key={item.id}>
                                        <p className="txt__desc txt_justify">{item.desc1}</p>
                                        <p className="txt__desc txt_justify">{item.desc2}</p>
                                        <p className="txt__desc txt_justify">{item.desc3}</p>
                                        <p className="txt__desc txt_justify">{item.desc4}</p>
                                        <p className="txt__desc txt_justify">{item.desc5}</p>
                                        <p className="txt__desc txt_justify">{item.desc6}</p>
                                        <p className="txt__desc txt_justify">{item.desc7}</p>
                                        <p className="txt__desc txt_justify">{item.desc8}</p>
                                        <p className="txt__desc txt_justify">{item.desc9}</p>
                                        <p className="txt__desc txt_justify">{item.desc10}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* <div className="row g-3 d-flex justify-content-center">
                        {servicesDetails.content.map((item) => {
                            return (
                                <div className="col-12" key={item.id}>
                                    <p className="txt__desc txt_justify">{item.desc1}</p>
                                    <p className="txt__desc txt_justify">{item.desc2}</p>
                                    <p className="txt__desc txt_justify">{item.desc3}</p>
                                    <p className="txt__desc txt_justify">{item.desc4}</p>
                                    <p className="txt__desc txt_justify">{item.desc5}</p>
                                    <p className="txt__desc txt_justify">{item.desc6}</p>
                                    <p className="txt__desc txt_justify">{item.desc7}</p>
                                    <p className="txt__desc txt_justify">{item.desc8}</p>
                                    <p className="txt__desc txt_justify">{item.desc9}</p>
                                    <p className="txt__desc txt_justify">{item.desc10}</p>
                                </div>
                            )
                        })}
                    </div> */}

                    <div className="row d-flex justify-content-center py-4">
                        <div className="col-12">
                            <div className="text-center">
                                <Link to="/appointment" className="btn__learn__more">GET STARTED</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default UsaServicesDetails;