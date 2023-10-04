import React, { useState } from 'react';
import '../reviews/Reviews.css';


const Reviews = () => {
    const [reviewData, setReviewData] = useState([
        // 1st page data 1-24 
        {
            id: 1,
            title_name: "File Australian taxes for the last year",
            rating: "5.00",
            date_time: "Jun 22, 2020 - Jun 1, 2023",
            desc: "It has been a pleasure working with Selina. Would definitely recommend her for taxes related issues.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 2,
            title_name: "Complete Partnership & 2 personal tax returns",
            rating: "5.00",
            date_time: "May 11, 2023 - May 18, 2023",
            desc: "Once again Selina did an excellent job in preparing my three tax returns in record time. Her expertise and efficiency in completing my returns was very much appreciated. I highly recommend Selina if you are ooking for a highly skilled accountant.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 3,
            title_name: "Xero Bookkeeper & BAS for small Australian company",
            rating: "5.00",
            date_time: "Oct 16, 2019 - May 16, 2023",
            desc: "Working with Selina has been an absolute pleasure over the last couple of years. She has always completed work on time, communicated regularly, and became a reliable part of our small team. We've now hired to bring these skills in-house but wouldn't hesitate to recommend her to other businesses looking for proficient bookkeeping and accounting support.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 4,
            title_name: "Simple tax return for Australian company",
            rating: "5.00",
            date_time: "Mar 15, 2023 - Mar 19, 2023",
            desc: "An excellent experience! Prompt, efficient, and great work. Thank you.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 5,
            title_name: "Accountant for Tax preparation and filling",
            rating: "5.00",
            date_time: "Jun 24, 2020 - Mar 15, 2023",
            desc: "This is the 2nd year in a row. Very knowledgeable, efficient, fast, and good at communication. I would highly recommend Selina",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 6,
            title_name: "Xero Expert with A2X experience required for AU bookkeeping",
            rating: "5.00",
            date_time: "May 17, 2021 - Mar 7, 2023",
            desc: "Selina was very diligent and helpful with all accounting requests our company required. She was responsive and communicated well. Would definitely recommend and will be in touch again in the future.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 7,
            title_name: "Xero audit and BAS/Tax preparation",
            rating: "5.00",
            date_time: "Aug 23, 2022 - Mar 2, 2023",
            desc: "Great knowledge and communication",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 8,
            title_name: "Submit Australia Company Tax and Personal Tax",
            rating: "5.00",
            date_time: "Mar 26, 2022 - Nov 2, 2022",
            desc: "Selina fixed all of our tax problems. She explained everything to us, and we are now up-to-date with everything! Highly recommended.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 9,
            title_name: "Tax Lodgement for FY2019 Sol Revolver Group P/L",
            rating: "5.00",
            date_time: "Dec 4, 2020 - Oct 26, 2022",
            desc: "Always a delight to work with. Professional, prompt and easy to work with. I will hire Selina again for my next tax return.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 10,
            title_name: "Australia tax return individual and company",
            rating: "5.00",
            date_time: "Sep 4, 2022 - Sep 8, 2022",
            desc: "Very efficient, fast and good communication. She is very knowledgeable and I would highly recommend Selina.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 11,
            title_name: "Tax & bookkeeping for Sole trader based in Melbourne, Australia",
            rating: "5.00",
            date_time: "Sep 7, 2020 - Jul 20, 2022",
            desc: "Selina has been a fantastic support for my small business. 5 Stars!",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 12,
            title_name: "Help filing Tax return and on going business set up",
            rating: "5.00",
            date_time: "Mar 6, 2020 - Jun 28, 2022",
            desc: "Selina has been fantastic to work with and I have used her services for quite some time now.",
            desc2: "She is very experienced, prompt, efficient and more than obliging to answer any financial questions I may have.",
            desc3: "I would highly recommend Selina!",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 13,
            title_name: "Looking for a Top Notch Ecommerce Accountant",
            rating: "5.00",
            date_time: "Apr 5, 2021 - May 19, 2022",
            desc: "Selina was extremely helpful managing all tax related work for my business. I would highly recommend working with her.",
            desc2: "She was always approachable and made sure that all tasks were done within the deadlines.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 14,
            title_name: "Tax filing for 2012",
            rating: "5.00",
            date_time: "Nov 5, 2020 - Apr 10, 2022",
            desc: "This is the second year in a row that Selina has completed business and personal tax filing for me, and I will continue to work with her as she has made this process so simple and stress-free for me ! 10/10 would recommend to anyone needing a similar job done.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 15,
            title_name: "Tax return to ATO and IRS for an e-commerce business",
            rating: "5.00",
            date_time: "Mar 13, 2022 - Apr 2, 2022",
            desc: "Awesome! Highly recommended!",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 16,
            title_name: "Tax Returns",
            rating: "5.00",
            date_time: "Jun 24, 2020 - Feb 3, 2022",
            desc: "Extremely helpful and professional to answer all my questions and business matters. Her knowledge and expertises are just top-notch ones.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 17,
            title_name: "Business Tax Return",
            rating: "5.00",
            date_time: "Mar 11, 2021 - Feb 3, 2022",
            desc: "Thank you!",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 18,
            title_name: "Complete Partnership & 2 personal tax returns",
            rating: "5.00",
            date_time: "Oct 21, 2021 - Dec 15, 2021",
            desc: "I highly recommend Selina to anyone needing their tax returns completed in Australia. Selina is very professional, knowledgeable and was very quick to respond to my questions. I look forward to working with Selina again next year for all my taxation needs.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 19,
            title_name: "Tax lodgement to ATO and IRS",
            rating: "5.00",
            date_time: "May 14, 2021 - Dec 8, 2021",
            desc: "Selina helped me with lodging my tax to IRS and ATO. Highly recommended for Amazon US seller residing in Australia.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 20,
            title_name: "Help needed to File tax return for previous financial year - Australia",
            rating: "5.00",
            date_time: "Aug 13, 2020 - Nov 26, 2021",
            desc: "Very knowledgeable, excellent work, fast delivery will highly recommend Selina to anyone looking for high quality and professional work",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 21,
            title_name: "Accountant for ATO Tax Report, Sole Trader",
            rating: "5.00",
            date_time: "Jun 28, 2020 - Oct 31, 2021",
            desc: "Selina was absolutely incredible and I will use her for all my future accounting needs. If you want someone who truly knows the best ways to handle taxes, she is your best bet",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 22,
            title_name: "Australia Accountant - Delcaring Non-Tax Resident",
            rating: "5.00",
            date_time: "Jul 16, 2021 - Jul 19, 2021",
            desc: "Always fantastic to work with Selina! Fast, professional and easy to work with. Highly recommended for Australian Tax services.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 23,
            title_name: "Company Bookkeeper",
            rating: "5.00",
            date_time: "Feb 16, 2021 - Jul 17, 2021",
            desc: "Selina was incredibly helpful at guiding us and advising on what we were doing well and not so well from an accounting perspective. Selina made improvement recommendations and provided resources to assist.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 24,
            title_name: "Register My Australian Business For GST",
            rating: "5.00",
            date_time: "Jan 21, 2020 - May 31, 2021",
            desc: "Great experience working with Selina , would recommend",
            price: "",
            btn_name: "",
            share_link: "",
        },



        // page 2 start 
        {
            id: 25,
            title_name: "Lodge a tax return and ask for my super (Working Holiday Visa)",
            rating: "5.00",
            date_time: "Jan 8, 2021 - May 24, 2021",
            desc: "Selina's professionalism and timeliness were exceptional. She was able to provide answers to all my taxation questions and I will certainly be working with her again come next year :)",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 26,
            title_name: "Need Help filing a company tax return and winding up an Australian company",
            rating: "5.00",
            date_time: "Jan 25, 2021 - Apr 30, 2021",
            desc: "Wonderful service. Helped me with all my outstanding accounting and tax issues concerning closing of my company.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 27,
            title_name: "Amazon E-Commerce Accountant",
            rating: "5.00",
            date_time: "Jan 25, 2020 - Apr 2, 2021",
            desc: "I am closing this job because Selina decided not to work on bookkeeping anymore. I have another fixed-price contract with her for business tax filing. She is very professional and has remarkable communication skills. Highly recommended. 5/5",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 28,
            title_name: "Bookkeeper BAS Agent Xero Expert",
            rating: "4.10",
            date_time: "Feb 9, 2021 - Apr 1, 2021",
            desc: "I was happy with the work but not with the communication. I needed certain things to be done for accounting reasons asked every day and now it's a new quarter and I still don't have the rules set up in Xero that I needed.",
            desc2: "Freelancer's response",
            desc3: "The client suddenly ended up the contract without giving me any notices or red flags. I am really surprised! It's Easter Holiday going here and everything is closed because of it in Australia. Also, For March Qtr, GST  dead line is not 1st of April, its 28th of April. Anyway, I was happy working with her except the last-minute surprise. It was a complete misunderstanding not the miscommunication.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 29,
            title_name: "Prepare/Submit Tax for the 2020 Financial Year (as per previous year)",
            rating: "5.00",
            date_time: "Feb 24, 2021 - Mar 8, 2021",
            desc: "Selina was always very professional, competent, proactive and extremely reliable.",
            desc2: "We used Selina last year for our Australian company tax, and couldn't fault her so it was an easy choice to  employ her again. We ran our business in the United States and although we do not pay tax in that country  - it was great to have her knowledge and expertise in the filing of various American tax exemption forms.",
            desc3: "Without hesitation we would recommend Selina for tax preparation and filing. I feel that we have only used a glimmer of her capabilities!",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 30,
            title_name: "Tax accountant required to lodge Monthly BAS",
            rating: "5.00",
            date_time: "Dec 18, 2020 - Feb 17, 2021",
            desc: "AAA+",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 31,
            title_name: "Australia Accountant - Delcaring Non-Tax Resident",
            rating: "5.00",
            date_time: "Aug 23, 2022 - Mar 2, 2023",
            desc: "Absolutely fantastic!!! I can't recommend Selina more highly! The top reviews on her profile are true. Selina was super fast with me, highly professional, action-orientated, and just got the work done, no fuss, no complication.",
            desc2: "She should be everyone's 'go-to' accountant for Australia residents. I've been wanting to solve a tax status issue in Australia for years and Selina fixed this for me within days.",
            desc3: "Again, Selina is the best, and she should be YOUR next accountant. 10/10",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 32,
            title_name: "Tax filing for 2018-2019 and 2019-2020 + general accounting inquiries",
            rating: "5.00",
            date_time: "Nov 5, 2020 - Nov 24, 2020",
            desc: "Selina handled all our requested extremely professionally and promptly. She was a very clear communicator and happy to answer any questions making tax related problems a breeze. Would highly  recommend her to anyone needing a business accountant who will save them money and make there life easy.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 33,
            title_name: "Income tax statement - dividends, capital gains, rental property",
            rating: "5.00",
            date_time: "Dec 4, 2020 - Oct 26, 2022",
            desc: "I would highly recommend Selina to anyone looking to get their Australian tax return completed quickly and professionally.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 34,
            title_name: "Accountant to help lodge R and D Tax submission",
            rating: "5.00",
            date_time: "Jan 28, 2020 - Jul 4, 2020",
            desc: "Selina is an amazing professional and I am so grateful to have met her and highly recommend her. She has been focused, responsive and is a pleasure to deal with. I really can't thank her and her skills enough in the way she has supported and dealt with our items in such a quick and high quality way.",
            desc2: "Thanks you so much! And I am not normally this 'gushy' about accounting but when you find someone  who is a great professional, great to deal with it does change the way you praise, Accounting needs great people with a top focus as well as a good manner, and Selina has it all.",
            desc3: "Highly recommended and do it just to improve your own business ! And no, I am not paid for this testimonial :)",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 35,
            title_name: "Xero Payroll setup and training",
            rating: "5.00",
            date_time: "May 1, 2020 - May 7, 2020",
            desc: "Very efficient and organised!",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 36,
            title_name: "10 tax",
            rating: "5.00",
            date_time: "Dec 14, 2018 - Apr 6, 2020",
            desc: "Selina is very useful and polite.would recomend.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 37,
            title_name: "Bookkeeper",
            rating: "5.00",
            date_time: "Feb 23, 2020 - Feb 26, 2020",
            desc: "Great reactivity and communication with Selina! Great advices",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 38,
            title_name: "Xero Expert needed for bookkeeping for an eCommerce store",
            rating: "5.00",
            date_time: "Feb 4, 2020 - Feb 19, 2020",
            desc: "Reconciled accounts from the last few months as expected",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 39,
            title_name: "Online/E-Commerce Set Up with Xero/Amazon/Shopify/Ebay/Stripe/PayPal",
            rating: "5.00",
            date_time: "Jan 25, 2020 - Feb 6, 2020",
            desc: "Selina is a very professional and trustworthy accountant with amazing tech-savvy skills. She is great tax advisor for tax savings. Her communication skills for remote jobs are awesome. I will work with her on an ongoing basis. Highly recommended. A++",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 40,
            title_name: "Help reconciling Xero and submitting BAS statement",
            rating: "5.00",
            date_time: "Jun 4, 2018 - Dec 15, 2019",
            desc: "Awesome resource. always delivered on time and with 100% accuracy. I will definitely use Selina again in the future",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 41,
            title_name: "Australian Tax Agent For Company Tax Return",
            rating: "5.00",
            date_time: "Dec 2, 2019 - Dec 3, 2019",
            desc: "Fantastic communication, fast delivery and awesome quality.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 42,
            title_name: "Need BAS Agent",
            rating: "5.00",
            date_time: "Nov 7, 2019 - Nov 11, 2019",
            desc: "Great work Selina! I'm very satisfied with your work. Selina is very responsive and quick. No doubt of her skill, she knows her stuffs. She helped me prepare and lodge BAS with no problem. Very recommended and I definitely will have her to help me with next projects.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 43,
            title_name: "Set up Xero for a software Start-up with on-going bookkeeping",
            rating: "5.00",
            date_time: "Nov 21, 2015 - Oct 18, 2019",
            desc: "Selina did great work and I'm delighted her business is growing. Thanks",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 44,
            title_name: "Best Bookkeeper with Payroll and Super",
            rating: "5.00",
            date_time: "Oct 16, 2017 - Oct 5, 2019",
            desc: "Super skilled and professional accountant!",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 45,
            title_name: "Australian Company and personal tax return - prepare and lodge",
            rating: "5.00",
            date_time: "May 28, 2019 - Aug 2, 2019",
            desc: "great job. efficient.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 46,
            title_name: "Looking for a great bookkeeper to help cleanup/maintain my Xero account",
            rating: "5.00",
            date_time: "May 17, 2018 - Jun 10, 2019",
            desc: "Selina is fantastic. When I started with her my bookkeeping and accounting were both a complete mess, she fixed it all up and has helped me for the last 2 years. She's great to work with, highly recommended!",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 47,
            title_name: "personal + company tax",
            rating: "5.00",
            date_time: "Jul 9, 2018 - Aug 8, 2018",
            desc: "Selina is a highly skilled accountant and she went above and beyond our original requirements. I would not hessitate to hire her again!",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 48,
            title_name: "Tax return for sole trader",
            rating: "5.00",
            date_time: "Sep 15, 2016 - May 16, 2018",
            desc: "Thanks for your help",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 49,
            title_name: "Need help preparing 2 Australian tax returns",
            rating: "5.00",
            date_time: "Oct 24, 2016 - May 13, 2018",
            desc: "Great service. Will hire again without question",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 50,
            title_name: "Experienced XERO Book Keeper Required for a Glass and Glazing company",
            rating: "5.00",
            date_time: "Jan 30, 2018 - Mar 16, 2018",
            desc: "Selina was fantastic to deal with. She completely cleaned up and reorganised my file from an absolute mess. She worked methodically and always kept me up to date with what she was doing. Highly recommended",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 51,
            title_name: "Bookkeeping",
            rating: "5.00",
            date_time: "Jun 4, 2013 - Jan 30, 2018",
            desc: "Selina did our bookwork for years and then also did our tax returns, she was well over qualified for the tasks given by us as a small business though was brilliant in every capacity, I can't recommend Selina highly enough",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 52,
            title_name: "Australian business tax agent",
            rating: "5.00",
            date_time: "Dec 6, 2017 - Jan 5, 2018",
            desc: "Selina completed our business partnership return quickly and effectively. We will be using her again for our tax needs.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 53,
            title_name: "Need Xero Bookkeeper for straight forward reconcialiation",
            rating: "5.00",
            date_time: "May 6, 2016 - Nov 13, 2017",
            desc: "Great communication, really skilled at what she does and I will gladly hire her again for more work in the near future. A real PRO.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 54,
            title_name: "Bookkeeper",
            rating: "5.00",
            date_time: "Apr 9, 2013 - Mar 6, 2017",
            desc: "Excellent BAS and other financial work for Australian business",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 55,
            title_name: "Looking for the best book keeper",
            rating: "5.00",
            date_time: "Sep 2, 2016 - Feb 6, 2017",
            desc: "We hired Selina for a very complex accounting job and she performed remarkably well given the information provided and our communication throughout the project.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 56,
            title_name: "Initial discussion on myob task in australia",
            rating: "5.00",
            date_time: "May 7, 2012 - May 2, 2016",
            desc: "Excellent work, great communication and very flexible.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 57,
            title_name: "Xero Expert",
            rating: "5.00",
            date_time: "Oct 29, 2013 - Jan 18, 2016",
            desc: "Selina has been an excellent contractor and of great assistance to our business. Work has always been completed promptly and with solid accuracy. Her feedback and advice have been most appreciated.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 58,
            title_name: "Xero Book Keeper",
            rating: "5.00",
            date_time: "Jul 14, 2013 - Oct 9, 2014",
            desc: "Selina is great. She worked full time for us until we needed to use a local solution and combined with our other companies.",
            desc1: "We will use Selina again if we have any work.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 59,
            title_name: "2 hours support on GST in Australia",
            rating: "5.00",
            date_time: "Sep 19, 2014",
            desc: "I hired Selina for some GST questions and she did a great job. She is helpful, very responsive and easy to work with. Thanks for the clear answers! Highly recommended",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 60,
            title_name: "BAS Lodgement",
            rating: "5.00",
            date_time: "Dec 20, 2012 - Feb 28, 2014",
            desc: "Selina was hired by our company to provide quality tax preparation and BAS reporting. I am pleased to provide positive feedback to her for her professionalism and high quality work performance. She has exceeded KPI's for our project and I cant recommend her enough to any business seeking quality accounting at an affordable rate. Thank you Selina!",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 61,
            title_name: "Prepare Tax Return",
            rating: "5.00",
            date_time: "Jan 9, 2013 - Nov 16, 2013",
            desc: "Selina did a great job. I can highly recommend her.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 62,
            title_name: "Tax Lodgement",
            rating: "5.00",
            date_time: "Sep 17, 2013 - Oct 20, 2013",
            desc: "Great Job Selina, thank you and look forward to working with you again.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 63,
            title_name: "Xero Expert",
            rating: "5.00",
            date_time: "Aug 16, 2013 - Sep 2, 2013",
            desc: "Selina did a fantastic job, specifically double checking our accounting transactions. She was very professional and very good communicator. I would HIGHLY recommend her.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 64,
            title_name: "BAS Statement (Australia)",
            rating: "5.00",
            date_time: "Jan 23, 2013 - Jul 30, 2013",
            desc: "Pleasure to work with. You went the extra mile to help me and solve my problems,Thank you!",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 65,
            title_name: "Accountant",
            rating: "5.00",
            date_time: "Nov 13, 2012 - Jul 30, 2013",
            desc: "Selina is a professional of Xero and Australian accounting. Great at delivering on time and meeting deadlines with the tax office. As soon as Selina is taking on more clients we'll be the first in line! Highly recommended.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 66,
            title_name: "Xero - Company set up and maintain",
            rating: "5.00",
            date_time: "Mar 31, 2013 - Jul 14, 2013",
            desc: "Selina is extremely good and I am only stopping this contract to start another with her under a different account. She is a perfect communicator and extremely knowledgeable.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 67,
            title_name: "Saasu specialist",
            rating: "5.00",
            date_time: "Apr 10, 2013 - May 28, 2013",
            desc: "Selina did a fantastic job on my initial business set up. She is exceptionally helpful and very trust worthy. Thank you very much for your effort.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 68,
            title_name: "Professional Accountant",
            rating: "5.00",
            date_time: "Mar 30, 2013",
            desc: "Selina,",
            desc2: "Your are absolutely amazing to work with. You have an incredible ethic and straight forwardness that was greatly appreciated. Your level of communication was outstanding and skill were second to none. I would highly recommend you to anybody needing Accounting work and will definitely work with you in the future.",
            desc3: "Thanks a million!",
            desc4: "Clayton Australia",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 69,
            title_name: "Xero Accountant",
            rating: "5.00",
            date_time: "Feb 21, 2013 - Mar 24, 2013",
            desc: "Job was completed on time. Very happy with Selina. Will rehire her for next financial year.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 70,
            title_name: "MYOB Book keeper",
            rating: "5.00",
            date_time: "May 6, 2012 - Mar 12, 2013",
            desc: "Job was great. Accurate and fast. Thank you",
            desc2: "1 hour meeting advice on Accounting GST in Australia",
            desc3: "5.00 Apr 4, 2012 - Feb 22, 2013",
            desc4: "was an awesome help!",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 71,
            title_name: "Company tax preparation",
            rating: "5.00",
            date_time: "Jan 23, 2013 - Jan 25, 2013",
            desc: "Selina is very efficient and works very hard to meet deadline. Seems she has advance knowledge of Australian Taxation. Thank you Selina for taking care of this. Highly recommended for Australian accounting.",
            desc2: "",
            desc3: "",
            desc4: "",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 72,
            title_name: "QuickBook Bookkeeper",
            rating: "5.00",
            date_time: "Nov 10, 2012 - Jan 21, 2013",
            desc: "Selina is very skilled and accurate accountant. She is also impressive communicator. Highly recommended contractor.",
            desc2: "",
            desc3: "",
            desc4: "",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 73,
            title_name: "Tax and Bas lodgement",
            rating: "5.00",
            date_time: "Dec 28, 2012 - Jan 5, 2013",
            desc: "Thank you again Selina for an excellent job. Your work is of a high standard and your manner is very professional. I look forward to the next phase.",
            desc2: "",
            desc3: "",
            desc4: "",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 74,
            title_name: "Book keeping & Accounting",
            rating: "5.00",
            date_time: "Dec 12, 2012 - Dec 28, 2012",
            desc: "Great start Selina, look forward to our working relationship. Selina shares an excellent explanation of what's being done and keeping me in the loop.",
            desc2: "",
            desc3: "",
            desc4: "",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 75,
            title_name: "QuickBook Specialist",
            rating: "5.00",
            date_time: "Nov 6, 2012 - Nov 8, 2012",
            desc: "I recommend Selina to everyone in Australian bookkeeping. She is professional-excellent communicator and responsive. Also she has excellent technical skills. Will hire her again.",
            desc2: "",
            desc3: "",
            desc4: "",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 76,
            title_name: "Accountants Wanted with Australian Experience ONLY! GST/BAS",
            rating: "5.00",
            date_time: "Mar 28, 2012 - May 22, 2012",
            desc: "Very happy with Selina.",
            desc2: "She is currently moving to another country.",
            desc3: "When she is settled, I will re-hire her.",
            desc4: "Excellent and thorough.",
            price: "",
            btn_name: "",
            share_link: "",
        },
        {
            id: 77,
            title_name: "MYOB Specialist",
            rating: "5.00",
            date_time: "Apr 3, 2012 - May 2, 2012",
            desc: "Selina produced a lot more than what we asked for. In addtion she performed tasks in less time than what we had scheduled. She was very quick to grasp concepts and loyal to us",
            desc2: "",
            desc3: "",
            desc4: "",
            price: "",
            btn_name: "",
            share_link: "",
        },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 24;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = reviewData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const pageNumbers = Math.ceil(reviewData.length / itemsPerPage);
    const paginationLinks = [];
    for (let i = 1; i <= pageNumbers; i++) {
        paginationLinks.push(
            <li className={`page-item ${currentPage === i ? 'active' : ''}`} key={i}>
                <span className="page-link" onClick={() => handlePageChange(i)}>{i}</span>
            </li>
        );
    }

    return (
        <div className="container pt-2 mb-5 reviews__container">
            <h3 className="txt__title text-center mb-4">REVIEWS</h3>
            <div className="row g-3 gx-md-4">
                {currentItems.map(review => (
                    <div className="col-md-6" key={review.id}>
                        <h6 className="reviews__txt__title">{review.title_name}</h6>
                        <div className="d-flex align-items-center">
                            <p className="reviews__txt__rating__area me-2">
                                <span className="icons">
                                    <i className="fa-sharp fa-solid fa-star me-1"></i>
                                    <i className="fa-sharp fa-solid fa-star me-1"></i>
                                    <i className="fa-sharp fa-solid fa-star me-1"></i>
                                    <i className="fa-sharp fa-solid fa-star me-1"></i>
                                    <i className="fa-sharp fa-solid fa-star me-1"></i>
                                </span>
                                <span className="rating__no me-2"> {review.rating}</span>
                            </p>
                            <p className="reviews__txt__date me-3">{review.date_time}</p>
                        </div>
                        <p className="reviews__txt__desc">{review.desc}</p>
                    </div>
                ))}


                <div className="reviews__pagination pt-4">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : 'txt__pagination__active'}`}>
                                <span className="page-link btn__pagination"  onClick={() => handlePageChange(currentPage - 1)}><i className="fa-solid fa-less-than me-1"></i> <span className="">Previous</span></span>
                            </li>
                            {paginationLinks}
                            <li className={`page-item ${currentPage === pageNumbers ? 'disabled' : 'txt__pagination__active'} `}>
                                <span className="page-link btn__pagination" onClick={() => handlePageChange(currentPage + 1)}><span className="me-1">Next</span> <i className="fa-solid fa-greater-than"></i></span>
                            </li>
                        </ul>
                    </nav>
                </div>


            </div>
        </div>
    );
};

export default Reviews;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Reviews = () => {
//     const [reviewData, setRiviewData] = useState([
//         // page 1 start
//         {
//             id: 1,
//             title_name: "File Australian taxes for the last year",
//             rating: "5.00",
//             date_time: "Jun 22, 2020 - Jun 1, 2023",
//             desc: "It has been a pleasure working with Selina. Would definitely recommend her for taxes related issues.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 2,
//             title_name: "Complete Partnership & 2 personal tax returns",
//             rating: "5.00",
//             date_time: "May 11, 2023 - May 18, 2023",
//             desc: "Once again Selina did an excellent job in preparing my three tax returns in record time. Her expertise and efficiency in completing my returns was very much appreciated. I highly recommend Selina if you are ooking for a highly skilled accountant.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 3,
//             title_name: "Xero Bookkeeper & BAS for small Australian company",
//             rating: "5.00",
//             date_time: "Oct 16, 2019 - May 16, 2023",
//             desc: "Working with Selina has been an absolute pleasure over the last couple of years. She has always completed work on time, communicated regularly, and became a reliable part of our small team. We've now hired to bring these skills in-house but wouldn't hesitate to recommend her to other businesses looking for proficient bookkeeping and accounting support.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 4,
//             title_name: "Simple tax return for Australian company",
//             rating: "5.00",
//             date_time: "Mar 15, 2023 - Mar 19, 2023",
//             desc: "An excellent experience! Prompt, efficient, and great work. Thank you.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 5,
//             title_name: "Accountant for Tax preparation and filling",
//             rating: "5.00",
//             date_time: "Jun 24, 2020 - Mar 15, 2023",
//             desc: "This is the 2nd year in a row. Very knowledgeable, efficient, fast, and good at communication. I would highly recommend Selina",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 6,
//             title_name: "Xero Expert with A2X experience required for AU bookkeeping",
//             rating: "5.00",
//             date_time: "May 17, 2021 - Mar 7, 2023",
//             desc: "Selina was very diligent and helpful with all accounting requests our company required. She was responsive and communicated well. Would definitely recommend and will be in touch again in the future.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 7,
//             title_name: "Xero audit and BAS/Tax preparation",
//             rating: "5.00",
//             date_time: "Aug 23, 2022 - Mar 2, 2023",
//             desc: "Great knowledge and communication",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 8,
//             title_name: "Submit Australia Company Tax and Personal Tax",
//             rating: "5.00",
//             date_time: "Mar 26, 2022 - Nov 2, 2022",
//             desc: "Selina fixed all of our tax problems. She explained everything to us, and we are now up-to-date with everything! Highly recommended.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 9,
//             title_name: "Tax Lodgement for FY2019 Sol Revolver Group P/L",
//             rating: "5.00",
//             date_time: "Dec 4, 2020 - Oct 26, 2022",
//             desc: "Always a delight to work with. Professional, prompt and easy to work with. I will hire Selina again for my next tax return.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 10,
//             title_name: "Australia tax return individual and company",
//             rating: "5.00",
//             date_time: "Sep 4, 2022 - Sep 8, 2022",
//             desc: "Very efficient, fast and good communication. She is very knowledgeable and I would highly recommend Selina.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 11,
//             title_name: "Tax & bookkeeping for Sole trader based in Melbourne, Australia",
//             rating: "5.00",
//             date_time: "Sep 7, 2020 - Jul 20, 2022",
//             desc: "Selina has been a fantastic support for my small business. 5 Stars!",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 12,
//             title_name: "Help filing Tax return and on going business set up",
//             rating: "5.00",
//             date_time: "Mar 6, 2020 - Jun 28, 2022",
//             desc: "elina has been fantastic to work with and I have used her services for quite some time now.",
//             desc2: "She is very experienced, prompt, efficient and more than obliging to answer any financial questions I may have.",
//             desc3: "I would highly recommend Selina!",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 13,
//             title_name: "Looking for a Top Notch Ecommerce Accountant",
//             rating: "5.00",
//             date_time: "Apr 5, 2021 - May 19, 2022",
//             desc: "Selina was extremely helpful managing all tax related work for my business. I would highly recommend working with her.",
//             desc2: "She was always approachable and made sure that all tasks were done within the deadlines.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 14,
//             title_name: "Tax filing for 2012",
//             rating: "5.00",
//             date_time: "Nov 5, 2020 - Apr 10, 2022",
//             desc: "This is the second year in a row that Selina has completed business and personal tax filing for me, and I will continue to work with her as she has made this process so simple and stress-free for me ! 10/10 would recommend to anyone needing a similar job done.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 15,
//             title_name: "Tax return to ATO and IRS for an e-commerce business",
//             rating: "5.00",
//             date_time: "Mar 13, 2022 - Apr 2, 2022",
//             desc: "Awesome! Highly recommended!",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 16,
//             title_name: "Tax Returns",
//             rating: "5.00",
//             date_time: "Jun 24, 2020 - Feb 3, 2022",
//             desc: "Extremely helpful and professional to answer all my questions and business matters. Her knowledge and expertises are just top-notch ones.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 17,
//             title_name: "Business Tax Return",
//             rating: "5.00",
//             date_time: "Mar 11, 2021 - Feb 3, 2022",
//             desc: "Thank you!",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 18,
//             title_name: "Complete Partnership & 2 personal tax returns",
//             rating: "5.00",
//             date_time: "Oct 21, 2021 - Dec 15, 2021",
//             desc: "I highly recommend Selina to anyone needing their tax returns completed in Australia. Selina is very professional, knowledgeable and was very quick to respond to my questions. I look forward to working with Selina again next year for all my taxation needs.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 19,
//             title_name: "Tax lodgement to ATO and IRS",
//             rating: "5.00",
//             date_time: "May 14, 2021 - Dec 8, 2021",
//             desc: "Selina helped me with lodging my tax to IRS and ATO. Highly recommended for Amazon US seller residing in Australia.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 20,
//             title_name: "Help needed to File tax return for previous financial year - Australia",
//             rating: "5.00",
//             date_time: "Aug 13, 2020 - Nov 26, 2021",
//             desc: "Very knowledgeable, excellent work, fast delivery will highly recommend Selina to anyone looking for high quality and professional work",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 21,
//             title_name: "Accountant for ATO Tax Report, Sole Trader",
//             rating: "5.00",
//             date_time: "Jun 28, 2020 - Oct 31, 2021",
//             desc: "Selina was absolutely incredible and I will use her for all my future accounting needs. If you want someone who truly knows the best ways to handle taxes, she is your best bet",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 23,
//             title_name: "Australia Accountant - Delcaring Non-Tax Resident",
//             rating: "5.00",
//             date_time: "Jul 16, 2021 - Jul 19, 2021",
//             desc: "Always fantastic to work with Selina! Fast, professional and easy to work with. Highly recommended for Australian Tax services.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 24,
//             title_name: "Company Bookkeeper",
//             rating: "5.00",
//             date_time: "Feb 16, 2021 - Jul 17, 2021",
//             desc: "Selina was incredibly helpful at guiding us and advising on what we were doing well and not so well from an accounting perspective. Selina made improvement recommendations and provided resources to assist.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 25,
//             title_name: "Register My Australian Business For GST",
//             rating: "5.00",
//             date_time: "Jan 21, 2020 - May 31, 2021",
//             desc: "Great experience working with Selina , would recommend",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },



//         // page 2 start 
//         {
//             id: 26,
//             title_name: "Lodge a tax return and ask for my super (Working Holiday Visa)",
//             rating: "5.00",
//             date_time: "Jan 8, 2021 - May 24, 2021",
//             desc: "Selina's professionalism and timeliness were exceptional. She was able to provide answers to all my taxation questions and I will certainly be working with her again come next year :)",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 27,
//             title_name: "Need Help filing a company tax return and winding up an Australian company",
//             rating: "5.00",
//             date_time: "Jan 25, 2021 - Apr 30, 2021",
//             desc: "Wonderful service. Helped me with all my outstanding accounting and tax issues concerning closing of my company.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 28,
//             title_name: "Amazon E-Commerce Accountant",
//             rating: "5.00",
//             date_time: "Jan 25, 2020 - Apr 2, 2021",
//             desc: "I am closing this job because Selina decided not to work on bookkeeping anymore. I have another fixed-price contract with her for business tax filing. She is very professional and has remarkable communication skills. Highly recommended. 5/5",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 29,
//             title_name: "Bookkeeper BAS Agent Xero Expert",
//             rating: "4.10",
//             date_time: "Feb 9, 2021 - Apr 1, 2021",
//             desc: "I was happy with the work but not with the communication. I needed certain things to be done for accounting reasons asked every day and now it's a new quarter and I still don't have the rules set up in Xero that I needed.",
//             desc2: "Freelancer's response",
//             desc3: "The client suddenly ended up the contract without giving me any notices or red flags. I am really surprised! It's Easter Holiday going here and everything is closed because of it in Australia. Also, For March Qtr, GST  dead line is not 1st of April, its 28th of April. Anyway, I was happy working with her except the last-minute surprise. It was a complete misunderstanding not the miscommunication.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 30,
//             title_name: "Prepare/Submit Tax for the 2020 Financial Year (as per previous year)",
//             rating: "5.00",
//             date_time: "Feb 24, 2021 - Mar 8, 2021",
//             desc: "Selina was always very professional, competent, proactive and extremely reliable.",
//             desc2: "We used Selina last year for our Australian company tax, and couldn't fault her so it was an easy choice to  employ her again. We ran our business in the United States and although we do not pay tax in that country  - it was great to have her knowledge and expertise in the filing of various American tax exemption forms.",
//             desc3: "Without hesitation we would recommend Selina for tax preparation and filing. I feel that we have only used a glimmer of her capabilities!",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 31,
//             title_name: "Tax accountant required to lodge Monthly BAS",
//             rating: "5.00",
//             date_time: "Dec 18, 2020 - Feb 17, 2021",
//             desc: "AAA+",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 32,
//             title_name: "Australia Accountant - Delcaring Non-Tax Resident",
//             rating: "5.00",
//             date_time: "Aug 23, 2022 - Mar 2, 2023",
//             desc: "Absolutely fantastic!!! I can't recommend Selina more highly! The top reviews on her profile are true. Selina was super fast with me, highly professional, action-orientated, and just got the work done, no fuss, no complication.",
//             desc2: "She should be everyone's 'go-to' accountant for Australia residents. I've been wanting to solve a tax status issue in Australia for years and Selina fixed this for me within days.",
//             desc3: "Again, Selina is the best, and she should be YOUR next accountant. 10/10",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 33,
//             title_name: "Tax filing for 2018-2019 and 2019-2020 + general accounting inquiries",
//             rating: "5.00",
//             date_time: "Nov 5, 2020 - Nov 24, 2020",
//             desc: "Selina handled all our requested extremely professionally and promptly. She was a very clear communicator and happy to answer any questions making tax related problems a breeze. Would highly  recommend her to anyone needing a business accountant who will save them money and make there life easy.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 34,
//             title_name: "Income tax statement - dividends, capital gains, rental property",
//             rating: "5.00",
//             date_time: "Dec 4, 2020 - Oct 26, 2022",
//             desc: "I would highly recommend Selina to anyone looking to get their Australian tax return completed quickly and professionally.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 35,
//             title_name: "Accountant to help lodge R and D Tax submission",
//             rating: "5.00",
//             date_time: "Jan 28, 2020 - Jul 4, 2020",
//             desc: "Selina is an amazing professional and I am so grateful to have met her and highly recommend her. She has been focused, responsive and is a pleasure to deal with. I really can't thank her and her skills enough in the way she has supported and dealt with our items in such a quick and high quality way.",
//             desc2: "Thanks you so much! And I am not normally this 'gushy' about accounting but when you find someone  who is a great professional, great to deal with it does change the way you praise, Accounting needs great people with a top focus as well as a good manner, and Selina has it all.",
//             desc3: "Highly recommended and do it just to improve your own business ! And no, I am not paid for this testimonial :)",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 36,
//             title_name: "Xero Payroll setup and training",
//             rating: "5.00",
//             date_time: "May 1, 2020 - May 7, 2020",
//             desc: "Very efficient and organised!",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 37,
//             title_name: "10 tax",
//             rating: "5.00",
//             date_time: "Dec 14, 2018 - Apr 6, 2020",
//             desc: "Selina is very useful and polite.would recomend.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 38,
//             title_name: "Bookkeeper",
//             rating: "5.00",
//             date_time: "Feb 23, 2020 - Feb 26, 2020",
//             desc: "Great reactivity and communication with Selina! Great advices",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 39,
//             title_name: "Xero Expert needed for bookkeeping for an eCommerce store",
//             rating: "5.00",
//             date_time: "Feb 4, 2020 - Feb 19, 2020",
//             desc: "Reconciled accounts from the last few months as expected",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 40,
//             title_name: "Online/E-Commerce Set Up with Xero/Amazon/Shopify/Ebay/Stripe/PayPal",
//             rating: "5.00",
//             date_time: "Jan 25, 2020 - Feb 6, 2020",
//             desc: "Selina is a very professional and trustworthy accountant with amazing tech-savvy skills. She is great tax advisor for tax savings. Her communication skills for remote jobs are awesome. I will work with her on an ongoing basis. Highly recommended. A++",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 41,
//             title_name: "Help reconciling Xero and submitting BAS statement",
//             rating: "5.00",
//             date_time: "Jun 4, 2018 - Dec 15, 2019",
//             desc: "Awesome resource. always delivered on time and with 100% accuracy. I will definitely use Selina again in the future",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 42,
//             title_name: "Australian Tax Agent For Company Tax Return",
//             rating: "5.00",
//             date_time: "Dec 2, 2019 - Dec 3, 2019",
//             desc: "Fantastic communication, fast delivery and awesome quality.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 43,
//             title_name: "Need BAS Agent",
//             rating: "5.00",
//             date_time: "Nov 7, 2019 - Nov 11, 2019",
//             desc: "Great work Selina! I'm very satisfied with your work. Selina is very responsive and quick. No doubt of her skill, she knows her stuffs. She helped me prepare and lodge BAS with no problem. Very recommended and I definitely will have her to help me with next projects.",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 44,
//             title_name: "Set up Xero for a software Start-up with on-going bookkeeping",
//             rating: "5.00",
//             date_time: "Nov 21, 2015 - Oct 18, 2019",
//             desc: "Selina did great work and I'm delighted her business is growing. Thanks",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },
//         {
//             id: 45,
//             title_name: "Best Bookkeeper with Payroll and Super",
//             rating: "5.00",
//             date_time: "Oct 16, 2017 - Oct 5, 2019",
//             desc: "Super skilled and professional accountant!",
//             price: "",
//             btn_name: "",
//             share_link: "",
//         },



//     ]);




//     return (
//         <div className="container pt-2 mb-5 reviews__container">
//             <h3 className="txt__title text-center mb-4">REVIEWS</h3>
//             <div className="row g-3 gx-md-4">
//                 {
//                     reviewData !== undefined && reviewData.map(riview => {
//                         return (
//                             <div className="col-md-6" key={riview.id}>
//                                 <h6 className="reviews__txt__title">{riview.title_name}</h6>
//                                 <div className="d-flex align-items-center">
//                                     <p className="reviews__txt__rating__area me-2">
//                                         <span className="icons">
//                                             <i className="fa-sharp fa-solid fa-star me-1"></i>
//                                             <i className="fa-sharp fa-solid fa-star me-1"></i>
//                                             <i className="fa-sharp fa-solid fa-star me-1"></i>
//                                             <i className="fa-sharp fa-solid fa-star me-1"></i>
//                                             <i className="fa-sharp fa-solid fa-star me-1"></i>
//                                         </span>
//                                         <span className="rating__no me-2"> {riview.rating}</span>
//                                     </p>
//                                     <p className="reviews__txt__date me-3">{riview.date_time}</p>
//                                 </div>
//                                 <p className="reviews__txt__desc">{riview.desc}</p>
//                             </div>
//                         )
//                     })
//                 }
//                 <nav aria-label="Page navigation example">
//                     <ul className="pagination justify-content-center">
//                         <li className="page-item disabled">
//                             <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
//                         </li>
//                         <li className="page-item"><a className="page-link" href="#">1</a></li>
//                         <li className="page-item"><a className="page-link" href="#">2</a></li>
//                         <li className="page-item"><a className="page-link" href="#">3</a></li>
//                         <li className="page-item">
//                             <a className="page-link" href="#">Next</a>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </div>
//     );
// };

// export default Reviews;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Reviews1 = () => {
//     const [reviewData, setRiviewData] = useState([
//         {
//             id: 1,
//             title_name: "Complete Partnership & 2 personal tax returns",
//             rating: "5.00",
//             date_time: "May 10,2023 - May 17.2023",
//             desc: "Once again Selina tli 1 an excellent fob in preparing my three tax returns in record time. Her expertise and efficiency in completing my returns was very much aPPreMated l highly recommend Selina if you are looking for a highly skilled accountant ",
//             price: "",
//             btn_name: "",
//             share_link: "http://dev.shelleyglobal.com/",
//         },
//         {
//             id: 2,
//             title_name: "Xero Expert with A2X experience required for AU bookkeeping",
//             rating: "5.00",
//             date_time: "May 16, 2021- Mar 6. 2023",
//             desc: "Selina was very diligent and helpful with all accounting requests our company requ responsive and communicated well Would definitely recommend and will be in tout future",
//             price: "",
//             btn_name: "",
//             share_link: "http://dev.shelleyglobal.com/",
//         },
//         {
//             id: 3,
//             title_name: "Xero Bookkeeper & BAS for small Australian company	",
//             rating: "5.00",
//             date_time: "Oct 15, 2010 May15 2023",
//             desc: "Working with Selina has been an absolute pleasure over the last couple of years. She has always ein!,etetl work on ffne, ocmmunioaled maid.* and ',came a reliable ',a, of our small team We've now hired to bong these skills in-house but wouldn't hesitate to recommend her to other businesses looking for proficient bookkeeping and accounting support",
//             price: "",
//             btn_name: "",
//             share_link: "http://dev.shelleyglobal.com/",
//         },
//         {
//             id: 4,
//             title_name: "Australia company tax return",
//             rating: "5.00",
//             date_time: "Feb7.2023 - Mar 6.2023",
//             desc: "",
//             price: "",
//             btn_name: "",
//             share_link: "http://dev.shelleyglobal.com/",
//         },
//         {
//             id: 5,
//             title_name: "Simple tax return for Australian company",
//             rating: "5.00",
//             date_time: "Mar 1$ 2023- Mar 10 2020",
//             desc: "An excellent experience, Prompt efficient and great work. Thank you.",
//             price: "",
//             btn_name: "",
//             share_link: "http://dev.shelleyglobal.com/",
//         },
//         {
//             id: 6,
//             title_name: "Partnership Tax returns",
//             rating: "5.00",
//             date_time: "Oct 5. 2020 - Mar 1, 202",
//             desc: "",
//             price: "",
//             btn_name: "",
//             share_link: "http://dev.shelleyglobal.com/",
//         },
//         {
//             id: 7,
//             title_name: "Accountant for Tax preparation and filling",
//             rating: "5.00",
//             date_time: "Jun 23.2020 - Mari, 2023",
//             desc: "This 'stiff 2nd year in a row Very knowledgeable, efficient fast, and good at communication. I would highly recommend Selina.",
//             price: "",
//             btn_name: "",
//             share_link: "http://dev.shelleyglobal.com/",
//         },
//         {
//             id: 8,
//             title_name: "Xero audit and BAS/Tax preparation",
//             rating: "5.00",
//             date_time: "Aug 22. 2022 - Mar 1, 2023",
//             desc: "Great knowledge and communication",
//             price: "",
//             btn_name: "",
//             share_link: "http://dev.shelleyglobal.com/",
//         },
//         {
//             id: 9,
//             title_name: "USA & AUS Imports tax",
//             rating: "5.00",
//             date_time: "Jan 31 2021. Jan 29 202",
//             desc: "",
//             price: "",
//             btn_name: "",
//             share_link: "http://dev.shelleyglobal.com/",
//         },
//         {
//             id: 10,
//             title_name: "Submit Australia Company Tax and Personal Tax",
//             rating: "5.00",
//             date_time: "Mar 2$ 2022 - Nov 1. 2022",
//             desc: "Selina fixed all of our tax problems. She explained everything to us and we are now updo-date with everything! Highly recommended",
//             price: "",
//             btn_name: "",
//             share_link: "http://dev.shelleyglobal.com/",
//         },
//         {
//             id: 11,
//             title_name: "Looking for a Top Notch Ecommerce Accountant",
//             rating: "5.00",
//             date_time: "Apr $ 202, - May 18. 2022 i4",
//             desc: "Selina was extremely helpful managing all tax related work for my busMess. I would highly recommend working with her. She was always approachabkand made sure that  all tasks were done within the deadknes ",
//             price: "",
//             btn_name: "",
//             share_link: "http://dev.shelleyglobal.com/",
//         },
//         {
//             id: 12,
//             title_name: "Tax Lodgement for FY2019 Sol Revolver Group P/L",
//             rating: "5.00",
//             date_time: "Dec 3 2020- 00125 2022",
//             desc: "",
//             price: "",
//             btn_name: "",
//             share_link: "http://dev.shelleyglobal.com/",
//         },
//     ]);




//     return (
//         <div className="container pt-2 mb-5">
//             <h3 className="txt__title text-center mb-4">REVIEWS</h3>
//             <div className="row g-3 gx-md-4">
//                 {
//                     reviewData !== undefined && reviewData.map(riview => {
//                         return (
//                             <div className="col-md-6" key={riview.id}>
//                                 <h6 className="reviews__txt__title">{riview.title_name}</h6>
//                                 <div className="d-flex align-items-center">
//                                     <p className="reviews__txt__rating__area me-2">
//                                         <span className="icons">
//                                             <i className="fa-sharp fa-solid fa-star me-1"></i>
//                                             <i className="fa-sharp fa-solid fa-star me-1"></i>
//                                             <i className="fa-sharp fa-solid fa-star me-1"></i>
//                                             <i className="fa-sharp fa-solid fa-star me-1"></i>
//                                             <i className="fa-sharp fa-solid fa-star me-1"></i>
//                                         </span>
//                                         <span className="rating__no me-2"> {riview.rating}</span>
//                                     </p>
//                                     <p className="reviews__txt__date me-3">{riview.date_time}</p>
//                                     <p className="share__links__area">
//                                         <a href={`${riview.share_link}`} className="share__links" target='_blank' rel='noreferrer' title='Share'> <i className="fa-sharp fa-solid fa-share-nodes"></i></a>
//                                     </p>
//                                 </div>
//                                 <p className="reviews__txt__desc">{riview.desc}</p>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     );
// };

// export default Reviews1;