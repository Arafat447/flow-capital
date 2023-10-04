import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';



import Toronto_City_CANADA_banner from "../../assets/Toronto_City_CANADA_banner.png";
import local_tax_ca_banner from "../../assets/local_tax_ca_banner.jpg";
import cross_border_tax_ca_banner from "../../assets/cross_border_tax_ca_banner.jpg";
import Accounting_Bookkeping_CA_banner from "../../assets/Accounting_Bookkeping_CA_banner.jpg";
import Entity_Services_CA_banner from "../../assets/Entity_Services_CA_banner.jpg";
import ADVISORY_CA_banner from "../../assets/ADVISORY_CA_banner.png";



const CanadianServicesDetails = () => {

    const [australiaServicesData, setAustraliaServicesData] = useState([
        {
            id: 1,
            banner_imgs: local_tax_ca_banner,
            ht_title: "LOCAL TAX",
            ht_title_desc: "Federal tax services: ",
            subtitle: "",
            content1: [
                {
                    id: 1,
                    subtitle1: "Here are some specific federal tax services that Shelley Global LLP may offer:",
                    desc1: "Preparation and filing of federal income tax returns: This includes preparing and filing federal income tax returns for individuals, corporations, partnerships, trusts, and other entities. The firm will work to ensure that the returns are accurate and filed on time, and will provide advice on how to minimize the tax liability.",
                    desc2: "Tax planning and optimization: This involves identifying tax planning opportunities that can help businesses and individuals minimize their federal tax liability and maximize their after-tax profits. The firm will work with clients to develop tax planning strategies that are tailored to their specific needs and objectives.",
                    desc3: "Federal tax audit defense: If a client is audited by the Canada Revenue Agency (CRA), the firm may assist with the audit process, representing the client and providing advice on how to effectively defend their tax position. The firm will work to minimize any potential tax assessments, penalties, or other issues that may arise during the audit process.",
                    desc4: "International tax planning: For clients with international tax exposure, the firm may provide advice on how to structure their operations in a tax-efficient manner, taking into account both Canadian and foreign tax laws. This may include advising on transfer pricing, foreign tax credits, and other international tax issues.",
                    desc5: "Compliance with federal tax laws and regulations: The firm will work with clients to ensure that they are compliant with all relevant federal tax laws and regulations in Canada, including tax withholding and reporting requirements.",
                    desc6: "Federal tax appeals and disputes: If a client disagrees with a tax assessment or decision made by the CRA, the firm may assist with the appeals and dispute resolution process. The firm will work to ensure that the client's interests are effectively represented and that any disputes are resolved in a timely and cost-effective manner.",
                    desc7: "",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            content2: [
                {
                    id: 1,
                    subtitle2: "We also provide Local Tax Services including:",
                    desc1: "Goods and Services Tax (GST)/ Harmonized Sales Tax (HST) compliance",
                    desc2: "Provincial Sales Tax (PST) compliance",
                    desc3: "Payroll tax compliance",
                    desc4: "Property tax compliance",
                    desc5: "Municipal taxes and fees",
                    desc6: "Tax audit defense",
                    desc7: "Tax credits and incentives",
                    desc8: "Tax-efficient structuring",
                    desc9: "Tax technology solutions",
                    desc10: "Tax training and education",
                }
            ],
            link: "",
        },
        {
            id: 2,
            banner_imgs: cross_border_tax_ca_banner,
            ht_title: "CROSS-BORDER TAX",
            ht_title_desc: "",
            subtitle: "",
            content1: [
                {
                    id: 1,
                    subtitle1: "Here are some specific cross-border tax services that Shelley Global LLP may offer:",
                    desc1: "Cross-border tax planning and optimization: This involves identifying tax planning opportunities that can help clients minimize their tax liability and maximize their after-tax profits across multiple jurisdictions. The firm will work with clients to develop tax planning strategies that are tailored to their specific needs and objectives.",
                    desc2: "Cross-border tax compliance: This includes ensuring that clients are compliant with all relevant tax laws and regulations in multiple jurisdictions. The firm will work to ensure that clients meet their tax compliance obligations in each country where they have operations, investments, or transactions.",
                    desc3: "Cross-border tax preparation and filing: This includes preparing and filing tax returns in multiple jurisdictions. The firm will work to ensure that clients' tax returns are accurate and filed on time, and will provide advice on how to minimize their tax liability in each jurisdiction.",
                    desc4: "Transfer pricing: This involves determining the appropriate prices to be charged for goods and services transferred between related entities in different jurisdictions. The firm will work with clients to ensure that they comply with transfer pricing rules and regulations in each jurisdiction.",
                    desc5: "Expatriate tax services: This includes advising clients on the tax implications of working or living in a foreign country, as well as assisting clients with the preparation and filing of tax returns in both their home country and the foreign country where they are working or living.",
                    desc6: "Cross-border M&A tax services: This involves advising clients on the tax implications of mergers and acquisitions that involve entities in multiple jurisdictions. The firm will work with clients to ensure that they structure their transactions in a tax-efficient manner and comply with all relevant tax laws and regulations.",
                    desc7: "Compliance with foreign tax laws and regulations: This includes ensuring that clients are compliant with all relevant tax laws and regulations in foreign jurisdictions where they have operations, investments, or transactions.",
                    desc8: "Tax dispute resolution and litigation: If a client is involved in a tax dispute or litigation in a foreign jurisdiction, the firm may assist with the dispute resolution or litigation process, representing the client and providing advice on how to effectively defend their tax position.",
                    desc9: "Overall, Shelley Global LLP may offer a range of cross-border tax services designed to help clients manage their tax compliance obligations, minimize their tax liability, and optimize their tax positions across multiple jurisdictions.",
                    desc10: "",
                }
            ],
            link: "",
        },
        {
            id: 3,
            banner_imgs: Accounting_Bookkeping_CA_banner,
            ht_title: "ACCOUNTING & BOOKKEEPING",
            ht_title_desc: "",
            content1: [
                {
                    id: 1,
                    subtitle1: "Here are some specific accounting and bookkeeping services that Shelley Global LLP may offer: ",
                    desc1: "General bookkeeping: This includes recording financial transactions and maintaining accurate and up-to-date financial records for businesses and individuals.",
                    desc2: "Accounts payable management: This involves managing the process of paying bills and invoices, ensuring that payments are made on time and accurately.",
                    desc3: "Accounts receivable management: This includes managing the process of invoicing customers and tracking customer payments, ensuring that outstanding balances are collected in a timely manner.",
                    desc4: "Bank reconciliations: This involves reconciling bank statements with financial records to ensure that all transactions have been properly recorded.",
                    desc5: "Financial statement preparation: This includes preparing financial statements such as balance sheets, income statements, and cash flow statements.",
                    desc6: "Payroll processing: This involves managing the process of paying employees, including calculating pay, deducting taxes and other withholdings, and issuing paychecks or direct deposits.",
                    desc7: "Financial reporting: This includes preparing financial reports for internal use or external stakeholders, such as investors or lenders.",
                    desc8: "Budgeting and forecasting: This involve developing budgets and financial forecasts to help businesses and individuals plan for future financial performance.",
                    desc9: "QuickBooks consulting and support: This includes providing consulting and support services for QuickBooks, a popular accounting software platform.",
                    desc10: "Cloud accounting and bookkeeping: This includes utilizing cloud-based accounting software to manage financial records and transactions, allowing for greater accessibility and flexibility.",
                }
            ],
            link: "",
        },
        {
            id: 4,
            banner_imgs: Entity_Services_CA_banner,
            ht_title: "ENTITY SERVICES",
            ht_title_desc: "",
            subtitle: "",
            content1: [
                {
                    id: 1,
                    subtitle1: "Here are some specific entity services that Shelley Global LLP may offer:",
                    desc1: "Entity formation: This involves assisting clients with the process of forming a new entity, such as a corporation, partnership, or limited liability company (LLC). The firm may help with choosing the appropriate entity structure based on the client's specific needs and goals, preparing the necessary formation documents, and filing them with the appropriate government agencies.",
                    desc2: "Entity dissolution: If a client needs to dissolve their entity, the firm may assist with the process, including preparing and filing the necessary documents with government agencies.",
                    desc3: "Corporate secretarial services: This includes maintaining corporate records and ensuring compliance with relevant corporate laws and regulations. The firm may also assist with preparing and filing annual reports and other required corporate filings.",
                    desc4: "Entity compliance: This includes ensuring that the entity is compliant with all relevant laws and regulations, including tax laws, employment laws, and other regulations that may apply to the entity's operations.",
                    desc5: "Shareholder and partnership agreements: The firm may assist with the negotiation, drafting, and review of shareholder agreements and partnership agreements, which govern the relationships among the owners of the entity.",
                    desc6: "Due diligence: This involves conducting a thorough review of an entity's financial and operational performance in preparation for a potential acquisition, merger, or other significant transaction.",
                    desc7: "Mergers and acquisitions: The firm may assist with the process of buying or selling an entity, including conducting due diligence, negotiating and drafting the necessary agreements, and ensuring compliance with all relevant laws and regulations.",
                    desc8: "Equity and debt financing: The firm may assist with raising capital through equity or debt financing, including advising on the appropriate financing structure, preparing offering documents, and managing the financing process.",
                    desc9: "",
                    desc10: "",
                },
            ],
            link: "",
        },
        {
            id: 5,
            banner_imgs: ADVISORY_CA_banner,
            ht_title: "ADVISORY SERVICES",
            ht_title_desc: "",
            content1: [
                {
                    id: 1,
                    subtitle1: "Here are some specific tax planning services that the firm may offer:",
                    desc1: "Strategic tax planning: This includes developing and implementing tax strategies that are aligned with a client's overall business and financial goals, and that take into account relevant tax laws and regulations.",
                    desc2: "Corporate tax planning: The firm may provide advice on corporate tax planning strategies that help businesses minimize their tax liabilities, such as taking advantage of tax credits and deductions, restructuring their operations, or changing their legal structure.",
                    desc3: "Individual tax planning: This includes developing tax planning strategies for individuals that help them minimize their tax liabilities, such as maximizing deductions, utilizing tax-advantaged retirement accounts, and planning for charitable giving.",
                    desc4: "International tax planning: For clients with international operations or investments, the firm may develop international tax planning strategies that help them minimize their tax liabilities and comply with relevant tax laws and regulations in multiple jurisdictions.",
                    desc5: "Estate and gift tax planning: This includes developing tax planning strategies that help clients minimize their estate and gift tax liabilities, such as utilizing trusts, making gifts to family members or charitable organizations, or utilizing other tax-efficient estate planning strategies.",
                    desc6: "Tax credit and incentive planning: The firm may provide advice on how clients can take advantage of various tax credits and incentives offered by government agencies, such as research and development tax credits, renewable energy incentives, and others.",
                    desc7: "Overall, Shelley Global LLP may offer a range of tax planning services designed to help clients minimize their tax liabilities and maximize their after-tax profits, while remaining compliant with relevant tax laws and regulations.",
                    desc8: "",
                    desc9: "",
                    desc10: "",
                }
            ],
            link: "",
        },
    ]);
    const param = useParams();
    // const AusServicesDetails = australiaServicesData.find(item => item.id === param.id);
    const AusServicesDetails = australiaServicesData.find(item => item.id === Number(param.id));
    // console.log( "australiaServicesData", param.id,);
    console.log("AusServicesDetails", AusServicesDetails,);

    if (!australiaServicesData) {
        return <div>Loading...</div>;
    }





    return (
        <>
            {/* <section className="">
                <div className="banner__about">
                    <img src={AusServicesDetails.banner_imgs} className="img-fluid"  alt="image" border="0" />
                </div>
            </section> */}

            <section>
                <div className="container pt-2 mb-4 individula__container">
                    <h3 className="txt__title text-center">{AusServicesDetails.ht_title}</h3>
                    <div className="row pt-2 mb-2">
                        <div className="clearfix">
                            <img src={AusServicesDetails.banner_imgs} className="img-fluid col-md-6 float-md-end mb-3 ms-md-3"  alt="image" border="0" />
                            { AusServicesDetails.ht_title_desc && <p className="txt__desc txt_justify">{AusServicesDetails.ht_title_desc}</p> } 
                            {/* <h6 className="txt__idividual">{AusServicesDetails.subtitle}</h6> */}

                            {AusServicesDetails.content1 !== undefined && AusServicesDetails.content1.map((item) => {
                                return (
                                    <div className="" key={item.id}>
                                        <h6 className="txt__idividual">{item.subtitle1}</h6>
                                        {item.desc1 && <p className="txt__desc txt_justify">{item.desc1}</p>}
                                        {item.desc2 && <p className="txt__desc txt_justify">{item.desc2}</p>}
                                        {item.desc3 && <p className="txt__desc txt_justify">{item.desc3}</p>}
                                        {item.desc4 && <p className="txt__desc txt_justify">{item.desc4}</p>}
                                        {item.desc5 && <p className="txt__desc txt_justify">{item.desc5}</p>}
                                        {item.desc6 && <p className="txt__desc txt_justify">{item.desc6}</p>}
                                        {item.desc7 && <p className="txt__desc txt_justify">{item.desc7}</p>}
                                        {item.desc8 && <p className="txt__desc txt_justify">{item.desc8}</p>}
                                        {item.desc9 && <p className="txt__desc txt_justify">{item.desc9}</p>}
                                        {item.desc10 && <p className="txt__desc txt_justify">{item.desc10}</p>}

                                        {/* <p className="txt__desc txt_justify">{item.desc1}</p>
                                        <p className="txt__desc txt_justify">{item.desc2}</p>
                                        <p className="txt__desc txt_justify">{item.desc3}</p>
                                        <p className="txt__desc txt_justify">{item.desc4}</p>
                                        <p className="txt__desc txt_justify">{item.desc5}</p>
                                        <p className="txt__desc txt_justify">{item.desc6}</p>
                                        <p className="txt__desc txt_justify">{item.desc7}</p>
                                        <p className="txt__desc txt_justify">{item.desc8}</p>
                                        <p className="txt__desc txt_justify">{item.desc9}</p>
                                        <p className="txt__desc txt_justify">{item.desc10}</p> */}
                                    </div>
                                )
                            })}
                            {AusServicesDetails.content2 !== undefined && AusServicesDetails.content2.map((item) => {
                                return (
                                    <div className="" key={item.id}>
                                        <h6 className="txt__idividual">{item.subtitle2}</h6>
                                        <ul>
                                            {item.desc1 && <li className="txt__desc txt_justify">{item.desc1}</li>}
                                            {item.desc2 && <li className="txt__desc txt_justify">{item.desc2}</li>}
                                            {item.desc3 && <li className="txt__desc txt_justify">{item.desc3}</li>}
                                            {item.desc4 && <li className="txt__desc txt_justify">{item.desc4}</li>}
                                            {item.desc5 && <li className="txt__desc txt_justify">{item.desc5}</li>}
                                            {item.desc6 && <li className="txt__desc txt_justify">{item.desc6}</li>}

                                            {/* <li className="txt__desc txt_justify">{item.desc1}</li>
                                            <li className="txt__desc txt_justify">{item.desc2}</li>
                                            <li className="txt__desc txt_justify">{item.desc3}</li>
                                            <li className="txt__desc txt_justify">{item.desc4}</li>
                                            <li className="txt__desc txt_justify">{item.desc5}</li>
                                            <li className="txt__desc txt_justify">{item.desc6}</li> */}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* <div className="row d-flex justify-content-center">
                        {AusServicesDetails.content1 !== undefined && AusServicesDetails.content1.map((item) => {
                            return (
                                <div className="col-12" key={item.id}>
                                    <h6 className="txt__idividual">{item.subtitle1}</h6>
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


                    {/* <div className="row d-flex justify-content-center">
                        {AusServicesDetails.content2 !== undefined && AusServicesDetails.content2.map((item) => {
                            return (
                                <div className="col-12" key={item.id}>
                                    <h6 className="txt__idividual">{item.subtitle2}</h6>
                                    <ul>
                                        <li className="txt__desc txt_justify">{item.desc1}</li>
                                        <li className="txt__desc txt_justify">{item.desc2}</li>
                                        <li className="txt__desc txt_justify">{item.desc3}</li>
                                        <li className="txt__desc txt_justify">{item.desc4}</li>
                                        <li className="txt__desc txt_justify">{item.desc5}</li>
                                        <li className="txt__desc txt_justify">{item.desc6}</li>
                                    </ul>
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

export default CanadianServicesDetails;