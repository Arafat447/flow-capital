import React, { useState } from 'react';
import Resources_banner from '../../assets/Resources_banner.png';

const Resources = () => {
    const [taxFillingProcessUsa, setTaxFillingProcess] = useState([
        {
            id: 1, title_name: "Individuals",
            desc: "To successfully file your taxes, it is important to gather essential documents such as W-2 forms, 1099 forms, receipts for deductible expenses, and any other relevant financial records. Additionally, you need to determine your filing status, whether it's single, married filing jointly, married filing separately, head of household, or qualifying widow(er) with a dependent child. Next, choose the appropriate tax form, typically Form 1040, to accurately report your income from various sources and claim eligible deductions and credits. Once you have entered all the necessary information, calculate your tax liability using the tax rates and brackets provided by the IRS. Finally, file your completed tax return electronically or by mail and make payment if you owe taxes, selecting either direct deposit or a paper check if you are eligible for a refund."
        },
        {
            id: 2, title_name: "Sole Proprietorship",
            desc: "When preparing your taxes as a sole proprietorship, it is crucial to gather the necessary documents, including income records such as sales invoices, receipts, and business-related expense documents. These will be used to complete Schedule C (Form 1040), which allows you to report your business income and expenses. Additionally, calculate your self-employment tax using Schedule SE (Form 1040) to cover Social Security and Medicare taxes for self-employed individuals. If you anticipate owing $1,000 or more in taxes, remember to make quarterly estimated tax payments using Form 1040-ES. Finally, file your individual tax return (Form 1040) along with any additional forms related to your business and make payment if necessary."
        },
        {
            id: 3, title_name: "Partnerships",
            desc: "To properly handle partnership taxes, ensure you have essential documents such as financial statements, profit and loss statements, and partnership agreements. File Form 1065 (U.S. Return of Partnership Income) to report the partnership's income, deductions, gains, and losses. Additionally, provide Schedule K-1 to each partner, which outlines their share of the partnership's income, deductions, and credits. It is crucial for each partner to include their respective share of partnership income on their individual tax returns (Form 1040). Finally, file the partnership tax return (Form 1065) by the due date and provide copies of Schedule K-1 to the partners. Partners should file their individual tax returns and pay any taxes owed accordingly."
        },
        {
            id: 4, title_name: "Corporations",
            desc: "Gather necessary documents is first thing to prepare taxes for a corporation. For example, collect financial statements, profit and loss statements, and corporate income tax returns from the previous year. File Form 1120 (U.S. Corporation Income Tax Return) to accurately report the corporation's income, deductions, gains, and losses. Complete Schedule K (Form 1120) to reconcile net income (loss) per books with taxable income (loss). If the corporation anticipates owing $500 or more in taxes, make estimated tax payments using Form 1120-W. File the corporate tax return (Form 1120) by the due date, ensuring to include any required schedules and attachments. Finally, pay any taxes owed to fulfill your tax obligations."
        },
        {
            id: 5, title_name: "Limited Liability Companies (LLCs)",
            desc: "When dealing with taxes for a Limited Liability Company (LLC), the first step is to determine the tax classification for your LLC. LLCs can choose to be treated as sole proprietorships, partnerships, or corporations for tax purposes. Once the tax classification is determined, follow the relevant tax filing steps outlined above for individuals, sole proprietorships, partnerships, or corporations accordingly. This includes gathering necessary documents, completing the appropriate tax forms (such as Form 1040, Schedule C, Schedule K-1, Form 1065, Form 1120, etc.), reporting income and deductions, calculating tax liability, and filing and paying taxes as per the specific tax classification of the LLC.",
            desc2: "It's important to note that this is a general overview, and the tax filing process may vary based on individual circumstances and specific tax requirements. Consider consulting a tax professional or utilizing tax software to ensure accurate and compliant tax filing.",
        },
    ]);


    const [useFullLinksUsa, setUseFullLinksUsa] = useState([
        // {
        //     id: 1,
        //     title_name: "Individuals",
        //     link: "https://home.treasury.gov/services/taxes",
        // },
        {
            id: 2,
            title_name: "U.S Dept of Treasury",
            link: "https://home.treasury.gov/services/taxes"
        },
        {
            id: 1,
            title_name: "Internal Revenue Service",
            link: "https://www.irs.gov/"
        },
        {
            id: 3,
            title_name: "USA.gov",
            link: "https://www.usa.gov/"
        },
        {
            id: 4,
            title_name: "Social Security",
            link: "https://www.ssa.gov/"
        },
        {
            id: 5,
            title_name: "State Government Tax",
            link: "https://www.irs.gov/businesses/small-businesses-self-employed/state-government-websites"
        },
        {
            id: 6,
            title_name: "Tax Credentials",
            link: "https://www.irs.gov/tax-professionals/understanding-tax-return-preparer-credentials-and-qualifications"
        },
        {
            id: 7,
            title_name: "Forms & Publication",
            link: "https://www.irs.gov/forms-instructions-and-publications",
        },
        {
            id: 8,
            title_name: "Tax Table",
            link: "https://www.irs.gov/pub/irs-pdf/i1040tt.pdf"
        },
        {
            id: 9,
            title_name: "Tax Withholding Estimator",
            link: "https://www.irs.gov/individuals/tax-withholding-estimator",
        },

        {
            id: 10,
            title_name: "Social Security and Medicare Taxes",
            link: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes"
        },
        {
            id: 11,
            title_name: "Credits and Deductions",
            link: "https://www.irs.gov/credits-and-deductions"
        },
        {
            id: 12,
            title_name: "Refund Checking",
            link: "https://www.irs.gov/refunds"
        },
        {
            id: 13,
            title_name: "Make Payment",
            link: "https://www.irs.gov/payments"
        },
        {
            id: 14,
            title_name: "Child Tax Credit",
            link: "https://www.irs.gov/credits-deductions/individuals/child-tax-credit"
        },
        {
            id: 15,
            title_name: "Earned Income Tax Credit Estimator",
            link: "https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit-eitc"
        },
        {
            id: 16,
            title_name: "Health Insurance",
            link: "https://www.irs.gov/affordable-care-act/individuals-and-families/the-health-insurance-marketplace"
        },
        {
            id: 17,
            title_name: "Retirement Plan",
            link: "https://www.ssa.gov/prepare/plan-retirement"
        },
        {
            id: 18,
            title_name: "Audit Process",
            link: "https://www.irs.gov/businesses/small-businesses-self-employed/irs-audits"
        },
        {
            id: 19,
            title_name: " Penalties & Interest",
            link: "https://www.irs.gov/payments/penalties"
        },
        {
            id: 20,
            title_name: "Tax Treaties",
            link: "https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z"
        },
        {
            id: 21,
            title_name: "Dispute Resolution",
            link: "https://www.oecd.org/tax/dispute/ "
        },
        {
            id: 22,
            title_name: "FBAR",
            link: "https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar"
        },
        {
            id: 23,
            title_name: "Financial Crime Enforcement Network (FinCEN)",
            link: "https://www.fincen.gov/"
        },
        {
            id: 24,
            title_name: "OECD Tax treaties",
            link: "https://www.oecd.org/tax/treaties/"
        },
        {
            id: 25,
            title_name: "Intl Tax and Crime",
            link: "https://www.oecd.org/tax/crime/",
        },
        {
            id: 26,
            title_name: "IRS Newsroom",
            link: "https://www.irs.gov/newsroom"
        },
    ]);


    const [taxFillingProcessCanada, setTaxFillingProcessCanada] = useState([
        {
            id: 1,
            title_name: "Gather all your income documents",
            desc: "Before filing your tax return, you need to collect all your income documents, such as T4 slips(for employment income), T5 slips(for investment income), T1 form(for business income and expenses), T5013 form(for partnership income and expenses), T2 form(for corporate income tax) T3 form(for trust income tax) and receipts for any other sources of income."
        },
        {
            id: 2,
            title_name: "Determine your residency status",
            desc: "It is important to determine your residency status in Canada before filing your tax return.Your residency status determines which income is taxable in Canada and which is not.If you are a non - resident of Canada, you may still have to file a tax return in Canada, but you may have different tax obligations."
        },
        {
            id: 3,
            title_name: "Choose a method to file your tax return",
            desc: "You can file your tax return in Canada either online or by mail.The CRA encourages taxpayers to file their tax returns online through its website or by using tax preparation software.Online filing is fast, secure, and efficient.If you prefer to file your tax return by mail, you can download the forms from the CRA website and mail them to the address provided.",
        },
        {
            id: 4,
            title_name: "Fill out the tax forms",
            desc: "The CRA requires taxpayers to complete a set of tax forms to report their income and deductions.The most common tax form used by individuals is the T1 General Income Tax and Benefit Return.Make sure to fill out the forms accurately and completely to avoid any delays or penalties.",
        },
        {
            id: 5,
            title_name: "Claim your deductions and credits",
            desc: "To reduce your tax liability, you can claim various deductions and credits on your tax return.These may include medical expenses, charitable donations, education expenses, and more.Make sure to keep all your receipts and documents as evidence to support your claims.",
        },
        {
            id: 6,
            title_name: "Submit your tax return",
            desc: "Once you have completed your tax forms and claimed all your deductions and credits, you can submit your tax return to the CRA.If you file your tax return online, you will receive a confirmation of receipt from the CRA.If you file by mail, make sure to send it in early to avoid any potential delays.",
            desc2: "In conclusion, filing a tax return in Canada can be a complex process, but with careful preparation and attention to detail, it can be done accurately and efficiently.If you have any questions or concerns about your tax obligations, it is recommended to seek professional advice from a tax accountant or tax lawyer.If you're ever unsure about anything, don't hesitate to consult with us.",
            desc3: "Thank you for visiting our Resources page.We hope you find the information and resources here helpful in your quest for financial success and security.If you have any questions or comments, please do not hesitate to contact us.Our team of experts is always happy to help.",
        },
    ]);


    const [useFullLinksCanada, setUseFullLinksCanada] = useState([
        { id: 1, title_name: "Canada Revenue Agency", link: "https://www.canada.ca/en/revenue-agency.html", },
        { id: 2, title_name: "Forms and Publications", link: " https://www.canada.ca/en/revenue-agency/services/forms-publications.html", },
        { id: 3, title_name: "Federal Tax Rates", link: " https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html#federal", },
        { id: 4, title_name: "Tax Credits and Benefits", link: " https://www.canada.ca/en/services/taxes/child-and-family-benefits.html", },
        { id: 5, title_name: "Payments to the CRA", link: " https://www.canada.ca/en/revenue-agency/services/payments-cra.html", },
        { id: 6, title_name: "Interest and penalties:", link: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/interest-penalties.html", },
        { id: 7, title_name: "International and Non-Resident taxes", link: " https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents-tax.html", },
        { id: 8, title_name: "Tax treaties", link: "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents-tax.html", },
        { id: 9, title_name: "All Rates", link: "https://www.canada.ca/en/revenue-agency/services/tax/rates.html", },
        { id: 10, title_name: "Benefits", link: "https://www.canada.ca/en/services/benefits.html", },
    ]);


    const [taxFillingProcessAustralia, setTaxFillingProcessAustralia] = useState([
        { id: 1, desc: "The Australian Taxation Office (ATO) is an Australian statutory agency and the principal revenue collection body for the Australian Government. When living and working in Australia, filing a tax return is a legal requirement for anyone who earned income during the financial year (July 1 to June 30). This process involves reporting all of your income and claiming any deductions you may be entitled to, in order to calculate the amount of tax you owe or the refund you are eligible to receive." },

        { id: 2, desc: "The tax filing process in Australia can vary depending on the type of entity, such as individuals, sole traders, partnerships, companies, and trusts. Here is a general for tax filing for different entities." },

        { id: 3, desc: "The first step to file your tax return is to obtain a Tax File Number (TFN) from the Australian Taxation Office (ATO). You will need to provide identification documents such as your passport or birth certificate to apply for a TFN." },

        { id: 4, desc: "Next, you will need to gather all of your income and expense records for the financial year. This includes payment summaries, bank statements, receipts, and invoices for any work-related expenses. Keep in mind that you can only claim expenses that are directly related to your job or business.", },

        { id: 5, desc: "After you have collected all necessary documents, you can begin the process of filing your tax return. This can be done either online through the ATO's myTax system or with the assistance of a registered tax agent." },

        { id: 6, desc: "If you choose to use myTax, you will need to create an account on the ATO website and follow the prompts to enter your income, deductions, and any other relevant information. The system will calculate your tax liability or refund amount automatically." },

        { id: 7, desc: "Alternatively, you can choose to work with a registered tax agent who can help you navigate the tax system and ensure that your return is accurate and complete. They can also provide advice on maximizing your deductions and minimizing your tax liability." },

        { id: 8, desc: "It is important to note that the deadline for filing your tax return in Australia is October 31st. Failing to lodge your tax return by this deadline can result in penalties and interest charges." },

        { id: 9, desc: "Overall, filing a tax return in Australia can be a complex process, but with proper preparation and the assistance of a qualified professional, you can ensure that you meet your legal obligations and make the most of your tax deductions. If you're ever unsure about anything, don't hesitate to consult with us." },
    ]);

    const [useFullLinksAustralia, setUseFullLinksAustralia] = useState([
        {
            id: 1, title_name: "Tax Practitioners Board (TPB)",
            link: "https://www.tpb.gov.au/public-register?practitioner=26129706"
        },
        {
            id: 2, title_name: "Australian Taxation Office (ATO)",
            link: "https://www.ato.gov.au/"
        },
        {
            id: 3, title_name: "Tax Credential Search",
            link: "https://www.tpb.gov.au/public-register?practitioner=25949383"
        },
        {
            id: 4, title_name: "Australian Securities & Investments Commission",
            link: "https://asic.gov.au/ "
        },
        {
            id: 5, title_name: "Australian Business Register (ABR)",
            link: "https://www.abr.gov.au/"
        },
        {
            id: 6, title_name: "Business Name Check Availability",
            link: "https://connectonline.asic.gov.au/RegistrySearch/faces/landing/bn/SearchBnRegisters.jspx?_adf.ctrl-state=l7ij8m7iw_20",
        },
        {
            id: 7, title_name: "ABN Look Up",
            link: "https://www.abr.business.gov.au/"
        },
        {
            id: 8, title_name: "Forms and Instructions",
            link: "https://www.ato.gov.au/Forms/?duration=2015/2016&marketsegment=Business&sorttype=SortByTopic"
        },
        {
            id: 9, title_name: "Super fund looks up",
            link: "https://superfundlookup.gov.au/",
        },
        {
            id: 10, title_name: "Tax Tables",
            link: "https://www.ato.gov.au/Rates/Tax-tables/"
        },
        {
            id: 11, title_name: "Deductions",
            link: "https://www.ato.gov.au/Individuals/Income-deductions-offsets-and-records/Deductions-you-can-claim/"
        },
        {
            id: 12, title_name: "Fringe Benefits Tax Thresholds",
            link: "https://www.ato.gov.au/rates/fbt/"
        },
        {
            id: 13, title_name: "Superannuation",
            link: "https://www.ato.gov.au/individuals/super/"
        },
        {
            id: 14, title_name: "Australian Stock Exchange",
            link: " https://www2.asx.com.au/"
        },
        {
            id: 15, title_name: "Compliance, Duties, Levies & Royalties",
            link: "https://www.revenue.nsw.gov.au/",
        },
        {
            id: 16, title_name: "Foreign Exchange Rates",
            link: "https://www.ato.gov.au/Rates/Foreign-exchange-rates/?anchor=Monthlyrates#Monthlyrates"
        },
        {
            id: 17, title_name: "Centrelink & Medicare",
            link: "https://www.servicesaustralia.gov.au/"
        },
    ]);





    return (
        <div className="">
            <div className="container mb-4 resources__container">
            <div className="privacy__banner">
                <img src={Resources_banner} alt="image"  />
            </div>
                <div className="row pt-4 mb-4 d-flex justify-content-center">
                    <div className="col-md-12">
                        <h3 className="txt__title text-center">RESOURCES</h3>
                        <h5 className="resouces__subtitle_txt text-center">Welcome to the Resources page of Shelley Global.</h5>
                        <p className="txt__desc">
                            On this page, you will find a wealth of resources to help you better understand the complex world of tax and accounting.
                            Whether you want to improve financial management skills, learn about tax laws and regulations, or stay informed about
                            industry best practices, our informative links keep you up-to-date with the latest developments. Our team of professionals
                            is dedicated regularly update our resources to reflect current trends of the industry.
                        </p>
                    </div>
                </div>

                <div className="row pt-2 mb-4 d-flex justify-content-start">
                    <h5 className="resouces__subtitle_txt text-center">Tax filing process in the USA</h5>
                    <div className="col-md-9">
                        <p className="txt__desc">
                            The Internal Revenue Service (IRS) is the revenue service for the United States federal government, which is responsible
                            for collecting U.S. federal taxes and administering the Internal Revenue Code, the main body of the federal statutory tax law.
                        </p>
                        <p className="txt__desc">
                            The tax filing process in the USA can vary depending on the type of entity, such as individuals, sole proprietorships,
                            partnerships, corporations, and LLCs. Here is a general step-by-step guide for tax filing for different entities:
                        </p>
                        <ul className="list-unstyled pt-1">
                            {
                                taxFillingProcessUsa !== undefined && taxFillingProcessUsa.map((item, index) => (
                                    <>
                                        <li key={index} >
                                            <h6 className="txt__idividual__resources pt-3">{item.title_name}</h6>
                                        </li>
                                        <li className="txt__desc">{item.desc}</li>
                                        <li className="txt__desc">{item.desc2}</li>
                                    </>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <div className="resources__use__link__bg p-2">
                            <h6 className="resouces__subtitle_txt">USEFUL LINKS FOR UNITED STATES</h6>
                            <ul>
                                {
                                    useFullLinksUsa !== undefined && useFullLinksUsa.map((item, index) => (
                                        <li key={index} className="text-white"><a href={item.link} className="use__links" target="_blank" rel="noopener noreferrer" title={item.title_name}>{item.title_name}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row pt-2 mb-4 d-flex justify-content-start">
                    <h5 className="resouces__subtitle_txt text-center">Tax Filing in Australia</h5>
                    <div className="col-md-9">
                        {
                            taxFillingProcessAustralia !== undefined && taxFillingProcessAustralia.map((item, index) => (
                                <p key={index} className="txt__desc">{item.desc}</p>
                            ))
                        }
                    </div>
                    <div className="col-md-3">
                        <div className="resources__use__link__bg p-2">
                            <h6 className="resouces__subtitle_txt">USEFUL LINKS FOR AUSTRAILA</h6>
                            <ul>
                                {
                                    useFullLinksAustralia !== undefined && useFullLinksAustralia.map((item, index) => (
                                        <li key={index} className="text-white"><a href={item.link} className="use__links" target="_blank" rel="noopener noreferrer" title={item.title_name}>{item.title_name}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row pt-2 mb-4 d-flex justify-content-start">
                    <h5 className="resouces__subtitle_txt text-center">Tax Filing in Canada</h5>
                    <div className="col-md-9">
                        <p className="txt__desc">
                            The Canada Revenue Agency (CRA) collects taxes, administers tax law and policy, and delivers benefit programs and tax
                            credits. Filing a tax return in Canada is an essential part of every taxpayer's annual financial obligation. Whether
                            you are an employee, self-employed, or a business owner, partnerships, corporations or trusts, CRA requires all eligible
                            taxpayers to file a tax return every year. Here is a step-by-step guide to help you file your tax return in Canada.
                        </p>
                        <ul className="list-unstyled pt-1">
                            {
                                taxFillingProcessCanada !== undefined && taxFillingProcessCanada.map((item, index) => (
                                    <>
                                        <li key={index} >
                                            <h6 className="txt__idividual__resources pt-3">{item.title_name}</h6>
                                        </li>
                                        <li className="txt__desc">{item.desc}</li>
                                        <li className="txt__desc">{item.desc2}</li>
                                    </>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <div className="resources__use__link__bg p-2">
                            <h6 className="resouces__subtitle_txt">USEFUL LINKS FOR CANADA</h6>
                            <ul>
                                {
                                    useFullLinksCanada !== undefined && useFullLinksCanada.map((item, index) => (
                                        <li key={index} className="text-white"><a href={item.link} className="use__links" target="_blank" rel="noopener noreferrer" title={item.title_name}>{item.title_name}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resources;