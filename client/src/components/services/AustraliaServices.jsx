import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Australia__banner from "../../assets/Australia__banner.jpg";
import Aus_Domestic_taxation_banner from "../../assets/Aus_Domestic_taxation_banner.jpg";
import International_Individual_Tax_banner from "../../assets/International_Individual_Tax_banner.jpg";
import Financial_Reorting_banner from "../../assets/Financial_Reorting_banner.jpg";
import Australian_Service_banner from "../../assets/Australian_Service_banner.png";
import INTERNATIONAL_EXPANSION_banner from "../../assets/INTERNATIONAL_EXPANSION_banner.png";
import Austrlian_Market_Entry_banner from "../../assets/Austrlian_Market_Entry_banner.jpg";
import AUDITING_PAYROLL_AND_OTHERS_banner from "../../assets/AUDITING_PAYROLL_AND_OTHERS_banner.png";
import BUSINESS_ADVISORY_banner from "../../assets/BUSINESS_ADVISORY_banner.jpg";

const AustraliaServices = () => {
    const [australiaServicesData, setAustraliaServicesData] = useState([
        {
            id: 1,
            banner_imgs: Aus_Domestic_taxation_banner,
            ht_title: "DOMESTIC TAXATION",
            ht_title_desc: "At Shelley Global Pty Ltd, we offer comprehensive tax return and tax planning services to individuals, businesses, and organizations across Australia. Our team of expert tax consultants and accountants is committed to helping our clients navigate Australia's complex tax system, ensuring they meet their compliance obligations while minimizing their tax liabilities. We assist with tax return preparation and lodgment, ensuring our clients comply with Australian tax laws and regulations.",
            subtitle: "",
            content1: [
                {
                    id: 1,
                    subtitle1: "Our tax planning services include:",
                    desc1: "Investment Strategies: We analyze various investment options and provide recommendations that align with our clients' financial goals and risk tolerance.",
                    desc2: "Deductions and Offsets: We identify all available deductions and offsets that clients may be eligible for and help them claim them on their tax returns by reviewing clients' financial statements, tax returns, and other documents.",
                    desc3: "Tax Compliance and Reporting: We help clients comply with tax laws and regulations and provide advice on tax planning strategies that optimize their tax position. We also assist with tax compliance and reporting requirements, ensuring our clients meet all filing deadlines and avoid penalties.",
                    desc4: "Business Structuring: We provide advice on business structuring strategies that help clients optimize their tax position. We analyze various entity structures and provide recommendations that align with our clients' business objectives.",
                    desc5: "Estate Planning: We assist clients with estate planning strategies that minimize their tax liabilities and ensure a smooth transfer of wealth to their beneficiaries. We provide advice on trusts, estate planning tools, and other tax-efficient strategies.",
                    desc6: "",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            content2: [
                {
                    id: 1,
                    subtitle2: "Our tax return services include:",
                    desc1: "Individual or Sole Traders with Shares, Capital gain, Rental, Foreign Income, etc.",
                    desc2: "Company Tax Returns including Consolidated Tax, Foreign Tax, EMDG, R&D, NFP etc.",
                    desc3: "Partnership Tax Return including Two Partner’s Individual Filing,",
                    desc4: "Trust Tax Return Including all Trustee’s, Beneficiary’s Tax Return,",
                    desc5: "Tax Return for SMSF and Superannuation Fund and",
                    desc6: "FBT, PSAR, CURNN Filing",
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
            banner_imgs: International_Individual_Tax_banner,
            ht_title: "CROSS-BORDER TAXATION",
            ht_title_desc: "At Shelley Global Pty Ltd, we have a team of experts in cross-border taxation who can provide advice and assistance to clients doing business overseas. Our cross-border taxation services are designed to help clients navigate the complexities of international tax laws and regulations and optimize their tax position including international tax planning, transfer pricing, foreign investment structuring, compliance with international tax laws.",
            subtitle: "",
            content1: [
                {
                    id: 1,
                    subtitle1: "Our cross-border taxation services we offer include:",
                    desc1: "Prepare Individual tax returns for Australians living overseas: If you are an Australian citizen or resident living overseas, you are still required to lodge a tax return in Australia. Our team can assist you in preparing and lodging your tax return, ensuring you comply with Australian tax laws and regulations.",
                    desc2: "Assist expats moving to Australia with their tax and financial affairs: If you are an expat moving to Australia, we can assist you with your tax and financial affairs. Our team can provide advice on tax residency, help you set up your tax file number, and provide advice on tax-efficient investment strategies.",
                    desc3: "Help Australians returning home with their tax and financial affairs: If you are an Australian citizen or resident returning home, we can assist you with your tax and financial affairs. Our team can provide advice on tax residency, help you lodge any outstanding tax returns, and provide advice on repatriating your assets.",
                    desc4: "Provide tax advice to Australians with overseas investments, assets, and trusts: If you are an Australian with overseas investments, assets, and trusts, we can provide advice on how to structure your affairs in a tax-efficient manner. Our team can help you navigate the complexities of international tax laws and regulations, ensuring you comply with Australian tax laws while optimizing your tax position.",
                    desc5: "Assist Australian sole traders who sell globally, have global family service, and employee share schemes: If you are an Australian sole trader who sells globally, has a global family service, or employee share schemes, we can assist you with your tax and financial affairs. Our team can provide advice on tax-efficient investment strategies, assist you in complying with tax laws and regulations, and help you optimize your tax position.",
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
            id: 3,
            banner_imgs: Financial_Reorting_banner,
            ht_title: "FINANCIAL ACCOUNTING",
            ht_title_desc: "At Shelley Global Pty Ltd, we offer a range of financial accounting services to individuals and businesses of all sizes. Our team of experienced accountants and consultants is dedicated to providing high-quality services that help our clients achieve their financial goals.",
            content12: [
                {
                    id: 1,
                    subtitle12: "Our financial accounting services include:",
                    ht_content1: "BOOKKEEPING",
                    desc1: "Ongoing bookkeeping for inventories based or services-based businesses.",
                    desc2: "Process Sales Invoicing & Receipt payments",
                    desc3: "Chase Account Receivable",
                    desc4: "Purchase invoice processing and bill paying",
                    desc5: "Inventory control and management",
                    desc6: "Bank, Credit Card, PayPal, Stripe or any type of payment reconciliations",
                    desc7: "Set up new businesses in various accounting software",
                    desc8: "Migrate businesses from one accounting software to another.",
                    desc9: "Ad-hoc and General Office Duties",
                    desc10: "",
                },
                {
                    id: 2,
                    ht_content1: "PAYROLL",
                    desc1: "Payroll set up for new employees including STP set up with ATO.",
                    desc2: "Ongoing basis payroll process for weekly, fortnightly, monthly, Quarterly",
                    desc3: "TFN declaration, PAYG tax withhold lodgment & IAS lodgment",
                    desc4: "Process time sheet, Pay slips, Super and PAYG Summary",
                    desc5: "Process Payroll Tax for all states in Australia",
                    desc6: "",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                },
                {
                    id: 3,
                    ht_content1: "REPORTING ",
                    desc1: "Monthly or quarterly or annually BAS/IAS/Notional Tax reporting for all type of business entities",
                    desc2: "Month or quarterly or annually reporting for management review",
                    desc3: "Budgeting and Forecasting",
                    desc4: "Management Accounting reports including cost accounting, variance analysis, and performance measurement",
                    desc5: "Business Valuation: We offer business valuation services, providing clients with an accurate estimate of their business's worth",
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
            id: 4,
            banner_imgs: Australian_Service_banner,
            ht_title: "LOCAL ENTITY FORMATION",
            ht_title_desc: "At Shelley Global Pty Ltd, we assist clients in forming local entities in Australia, including companies, trusts, SMSF and not-for-profit organizations. Our team of experienced consultants can provide advice on the most appropriate entity structure based on your business goals and objectives.",
            subtitle: "",
            content_local_ef: [
                {
                    id: 1,
                    subtitle1: "Our local entity formation services include:",
                    desc1: "Company Formation: We assist clients in registering companies with the Australian Securities and Investments Commission (ASIC). We provide advice on the most appropriate company structure and can assist with company name registration, ABN and TFN registration, and GST and PAYG registration.",
                    desc2: "Trust Formation: We assist clients in forming trusts, including discretionary trusts, unit trusts, and hybrid trusts. We provide advice on the most appropriate trust structure based on your business goals and objectives.",
                    desc3: "Trust Formation: We assist clients in forming trusts, including discretionary trusts, unit trusts, and hybrid trusts. We provide advice on the most appropriate trust structure based on your business goals and objectives.",
                    desc4: "Not-for-Profit (NFP) Formation: We have extensive experience working with NFP organizations and can assist clients in forming NFP entities, including companies limited by guarantee and incorporated associations. We provide advice on NFP governance and compliance.",
                    desc5: "SMSF Formation: We provide SMSF formation services to clients who want to take control of their superannuation and invest in a wider range of assets by ensuring they comply with all relevant legislation and regulations.",
                    desc6: "",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                },
                {
                    id: 2,
                    subtitle1: "Our local entity formation services also include the following:",
                    desc1: "Business Name Registration: We assist clients in registering business names with ASIC.",
                    desc2: "Annual ASIC Obligations: We assist clients in meeting their annual ASIC obligations, including updating company details and preparing annual financial statements.",
                    desc3: "Change Company Details: We assist clients in making changes to their company details, including shareholders and directors.",
                    desc4: "Company Closing and Deregistration: We assist clients in closing their companies and deregistering with ASIC.",
                    desc5: "Company Consolidation: We assist clients in consolidating multiple companies into a single entity, streamlining operations and reducing costs.",
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
            id: 5,
            banner_imgs: INTERNATIONAL_EXPANSION_banner,
            ht_title: "INTERNATIONAL EXPANSION",
            ht_title_desc: "At Shelley Global Pty Ltd, we understand that many Australian companies are looking to expand their operations overseas. Our team of experienced consultants can assist with all aspects of international expansion, from market research to regulatory compliance.",
            content_international_exp: [
                {
                    id: 1,
                    subtitle1: "Our international expansion services include:",
                    desc1: "We can help Australian companies expand into foreign countries, providing advice on local laws and regulations, cultural differences, and business practices. We can assist with entity formation and structuring, joint ventures, and partnerships, helping to ensure a smooth and successful expansion.",
                    desc2: "Australian companies are often required to make extensive disclosures regarding their foreign subsidiaries, overseas interests, and dealings with international related parties. Our team can help ensure that our clients comply with all relevant regulations and laws, including the Foreign Acquisitions and Takeovers Act.",
                    desc3: "We provide ongoing support for Australian companies exporting abroad, including assistance with supply chain optimization, logistics, and market research. Our team can help ensure that our clients remain competitive and profitable in the global marketplace.",
                    desc4: "Our company tax return services ensure that our clients remain compliant with Australian international tax laws. We provide advice on tax-efficient structures, transfer pricing, and foreign tax credits, helping to minimize our clients' tax liabilities.",
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
            id: 6,
            banner_imgs: Austrlian_Market_Entry_banner,
            ht_title: "AUSTRALIAN MARKET ENTRY",
            ht_title_desc1: "At Shelley Global Pty Ltd, we understand that entering the Australian market can be a complex process, especially when it comes to understanding the Australian tax system. Our team of experienced consultants can help international businesses understand the Australian tax system and comply with all relevant tax laws and regulations.",
            ht_title_desc2: "We can assist by advising the best way to structure the new Australian subsidiary or branch, incorporating the Australian company, and providing professional accounting services to meet your ongoing tax obligations. We provide advice on the most tax-efficient structures and can help ensure that your company remains compliant with all relevant tax laws and regulations.",
            ht_title_desc3: "We can also assist with employing local staff, advising on obligations related to withholding tax and superannuation payments. Our team can handle all the relevant registrations with the Australian Taxation Office, ensuring that your company is set up in full compliance with income tax and GST legislation.",
            content_australian_market: [
                {
                    id: 1,
                    subtitle1: "Our Australian tax system services include the following:",
                    desc1: "Tax Planning: We provide advice on tax planning for Australian operations, including transfer pricing, foreign tax credits, and tax treaties. We help clients optimize their tax position while ensuring compliance with all relevant tax laws and regulations.",
                    desc2: "Accounting Services: We provide professional accounting services to help our clients meet their ongoing tax obligations, including tax returns, financial statements, and compliance reporting.",
                    desc3: "Compliance: We assist our clients in complying with all relevant Australian tax laws and regulations, ensuring that they avoid penalties and fines.",
                    desc4: "",
                    desc5: "",
                    desc6: "",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            // ht_title21: "AUDINTING, PAYROLL TAX AND OTHERS",
            // subtitle21: "AUDITING SERVICES:",
            // subtitle_desc22: "At Shelley Global Pty Ltd, we provide specialized auditing services for self-managed super funds, not-for-profit organizations, and fraud investigations. Our experienced auditors can provide assurance on financial statements, internal controls, and compliance with laws and regulations.",
            // subtitle22: "AUDINTING, PAYROLL TAX AND OTHERS",
            // subtitle_desc22: "We offer payroll tax services to help our clients comply with all relevant payroll tax laws and regulations. We can assist with payroll tax registration, preparation of payroll tax returns, and compliance reporting for all states in Australia.",
            // subtitle23: "FINANCIAL LETTER ISSUES:",
            // subtitle_desc23: "We can issue financial letters for credit cards, mortgages, commercial loans, personal loans, and other financial instruments. Our financial letters are professionally prepared, ensuring that our clients' financial information is accurately represented.",
            // subtitle24: "JUSTICE OF THE PEACE SERVICES:",
            // subtitle_desc24: "We offer Justice of the Peace services for document attestation. Our experienced team can attest to the authenticity of documents and provide certification services to meet our clients' needs.",
            link: "",
        },
        {
            id: 7,
            banner_imgs: AUDITING_PAYROLL_AND_OTHERS_banner,
            ht_title: "AUDITING, PAYROLL TAX AND OTHERS",
            ht_title_desc: "",
            subtitle: "",
            content_auditing: [
                {
                    id: 1,
                    ht_content1: "AUDITING SERVICES:",
                    desc1: "At Shelley Global Pty Ltd, we provide specialized auditing services for self-managed super funds, not-for-profit organizations, and fraud investigations. Our experienced auditors can provide assurance on financial statements, internal controls, and compliance with laws and regulations.",
                },
                {
                    id: 2,
                    ht_content1: "PAYROLL TAX SERVICES:",
                    desc1: "We offer payroll tax services to help our clients comply with all relevant payroll tax laws and regulations. We can assist with payroll tax registration, preparation of payroll tax returns, and compliance reporting for all states in Australia.",
                },
                {
                    id: 3,
                    ht_content1: "FINANCIAL LETTER ISSUES:",
                    desc1: "We can issue financial letters for credit cards, mortgages, commercial loans, personal loans, and other financial instruments. Our financial letters are professionally prepared, ensuring that our clients' financial information is accurately represented.",
                },
                {
                    id: 4,
                    ht_content1: "JUSTICE OF THE PEACE SERVICES:",
                    desc1: "We offer Justice of the Peace services for document attestation. Our experienced team can attest to the authenticity of documents and provide certification services to meet our clients' needs.",
                }
            ],
            link: "",
        },
        {
            id: 8,
            banner_imgs: BUSINESS_ADVISORY_banner,
            ht_title: "BUSINESS ADVISORY",
            ht_title_desc: "Our team of experienced consultants can provide tax consultancy and business advisory services to help our clients optimize their tax positions, comply with all relevant tax laws and regulations, and achieve their business goals.",
            content1: [
                {
                    id: 1,
                    subtitle1: "Our tax consultancy and business advisory services include the following:",
                    desc1: "Tax Planning: We can assist our clients in tax planning for their businesses, including identifying tax-saving opportunities, tax-efficient structures, and compliance with relevant tax laws and regulations. We help our clients minimize their tax liabilities while ensuring compliance with all relevant tax laws and regulations.",
                    desc2: "Transfer Pricing: We can provide transfer pricing services to help our clients comply with transfer pricing regulations and minimize their tax liabilities. We help our clients develop and implement transfer pricing policies that are compliant with relevant regulations and optimize their tax positions.",
                    desc3: "International Taxation: We can assist our clients in international taxation, including advice on cross-border transactions, tax treaties, and foreign tax credits. We help our clients minimize their tax liabilities while ensuring compliance with all relevant tax laws and regulations.",
                    desc4: "GST and Indirect Taxes: We can provide advice on GST and other indirect taxes, including registration, compliance, and planning. We help our clients comply with all relevant GST and indirect tax laws and regulations, minimizing their tax liabilities.",
                    desc5: "Strategy Development: We can assist our clients in developing and implementing business strategies that are aligned with their goals and objectives. We help our clients identify growth opportunities, optimize their business models, and enhance their competitive advantage.",
                    desc6: "Financial Forecasting: We can provide financial forecasting services to help our clients plan and manage their finances. We use advanced tools and techniques to provide accurate financial projections, enabling our clients to make informed decisions.",
                    desc7: "Risk Management: We can assist our clients in identifying and managing risks, including strategic, operational, financial, and compliance risks. We help our clients develop risk management frameworks that are tailored to their business needs.",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
    ]);

    if (!australiaServicesData) {
        return <div>Loading...</div>;
    }



    return (
        <>
            {/* <section className="pb-4">
                <div className="banner__about">
                    <img src={Australia__banner} className="img-fluid"  alt="image" border="0" />
                </div>
            </section> */}

            <section>
                <div className="container mb-5 australia__container">
                <div className="banner__about">
                    <img src={Australia__banner} className="img-fluid"  alt="image" border="0" />
                </div>
                    <h3 className="txt__title text-center mt-4">AUSTRALIAN SERVICES</h3>
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="txt__desc txt_justify">
                                Shelley Global Pty Ltd provides domestic and cross-border taxation, financial accounting, local entity formation,
                                and international expansion services in Australia.
                                With a team of experienced professionals, the company offers tailored solutions to help businesses establish and
                                grow their presence in Australia and beyond. The company's expertise in Australian market entry is
                                particularly valuable for foreign companies looking to expand into the country. In addition to tax and
                                accounting services, Shelley Global Pty Ltd offers business advisory services to help clients make informed
                                decisions about their operations, investments, and growth strategies.
                            </p>
                        </div>
                    </div>
                    <div className="row g-3 ">
                        {
                            australiaServicesData !== undefined && australiaServicesData.map((services) => {
                                return (
                                    <div className="col-md-4" key={services.id}>
                                        <Link to={`/australian-services/${services.id}`} className="services__list__link" rel="bookmark" title={services.ht_title}>
                                            <div className="services__card">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6 className="services__card__title">{services.ht_title}</h6>
                                                    </div>
                                                    <div className="card__overlay__txt">
                                                        <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default AustraliaServices;