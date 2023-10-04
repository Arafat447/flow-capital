import React, { useState } from 'react';
import magagement_img from "../../assets/magagement_img.png";
import management_img from "../../assets/management_img.png";
import funder_img from "../../assets/funder_img.png";
import director_img from "../../assets/director_img.png";
import AzizurRahman from "../../assets/AzizurRahman.png";
import JabedAkhter from "../../assets/JabedAkhter.png";
import RafiSarker from "../../assets/RafiSarker.png";
import SamSyed from "../../assets/SamSyed.png";
import MyiaTabassum from "../../assets/MyiaTabassum.png";
import ZulfiqarAli from "../../assets/ZulfiqarAli.png";
import KamrulIslam from "../../assets/KamrulIslam.png";
import MohammadHakim from "../../assets/MohammadHakim.png";


const OurManagementTeam = () => {
    const [aboutUsData, setAboutUsData] = useState([
        { id: 1, image: funder_img, title: "Australia", link: "usa-services", desc: "Shelley Global Pty Ltd provides domestic and cross-border taxation, financial accounting, local entity formation, and international expansion services in Australia. With a team of experienced professionals, the company offers tailored solutions to help businesses establish and grow their presence in Australia and beyond. The company's expertise in Australian market entry is particularly valuable for foreign companies looking to expand into the country." },
        { id: 2, image: director_img, title: "UNITED STATES", link: "australian-services", desc: "Shelley Global Inc offers a wide range of tax and financial services in the United States to individuals, businesses, and trusts. These services include the preparation of federal and state tax returns for individuals, partnerships, corporations, and estates and trusts. In addition, the company provides international tax preparation services for both individuals and businesses, as well as assistance with entity setup for both US residents and foreigners." },
        { id: 3, image: director_img, title: "CANADA", link: "canadian-services", desc: "Shelley Global LLP offers services in Canada, including local tax services for individuals and businesses, as well as cross-border tax services to help clients navigate the complexities of international tax regulations. The company  provides accounting and bookkeeping services to help clients manage their finances and ensure compliance with local regulations. In addition, Shelley Global LLP offers entity services to help clients establish and manage their businesses in Canada." },
    ]);

    const [managementTeamData, setManagementTeamData] = useState([
        {
            id: 1, image: funder_img, title: "Selina Shelley", position_rank: "Founder", inc: "Shelley Global Inc (United States)", pty: "Shelley Global Pty Ltd (Australia)", llp: "Shelley Global LLP (Canada)", hd_title: "MESSAGE FROM THE FOUNDER",
            desc1: " Selina Shelley: Selina is the Founder of our accounting firm, and has been serving clients in the industry for over 15 years. With a degree in accounting from university and multiple certifications and licenses, Selina is an expert in her field and has a deep understanding of all aspects of accounting, taxation, and financial planning.",
            desc2: "As the Director of our multi-national accounting firm, Selina brings a wealth of experience and knowledge to the table. With a keen understanding of the global market and a passion for innovation, Selina has been leading our firm to new heights. She has a deep understanding of the unique needs and challenges faced by multi-national businesses and has been successful in developing tailored solutions that help our clients.",
            desc3: "Selina's vision and leadership have enabled our team to expand our services and reach new markets. Whether it's navigating complex tax laws, managing cross-border transactions, or staying ahead of the latest industry trends, Selina has the expertise and experience to help our clients succeed.",
        },
        {
            id: 2, image: director_img, title: "Tal Al", position_rank: "Director", inc: "Shelley Global Inc (United States)", pty: "Shelley Global Pty Ltd (Australia)", llp: "Shelley Global LLP (Canada)", hd_title: "MESSAGE FROM THE DIRECTOR",
            desc1: "Tal Al: Tal is the Director and In Charge of Operations at Shelley Global. Tal has a degree in business, licenses, a deep understanding of the latest accounting and tax regulations, and has been serving clients for over 12 years. As the director of the accounting firm, Tal is committed to fostering a culture of excellence and continuous improvement. Tal is a dynamic and results-driven professional who possesses business acumen, technical skills, and strategic thinking.",
            desc2: "Also, as the person in charge of all departments of the accounting firm, Tal is responsible for overseeing the day-to-day operations and ensuring that all teams are working together cohesively to meet the needs of clients. He is always seeking new and innovative ways to improve operations and ensure that the firm remains ahead of the curve in an ever-changing marketplace. He is a natural listener who is able to understand the needs of others and work effectively with them to achieve common goals.",
        },
        {
            id: 3, image: MyiaTabassum, title: "Myia Tabassum", position_rank: "Director", inc: "Shelley Global Inc (United States)", pty: "Shelley Global Pty Ltd (Australia)", llp: "Shelley Global LLP (Canada)", hd_title: "MESSAGE FROM THE DIRECTOR",
            desc1: "Myia Tabassum: Myia is the Director at our accounting firm. Myia is responsible for ensuring the successful completion of all projects including expansion of our firms, from start to finish. Having degree with a deep understanding of project management and business operations, Myia is able to oversee all aspects of each project, from planning and budgeting to execution and delivery. She is a strategic thinker who is able to assess the big picture and develop comprehensive solutions that meet the needs of both the client and the firm.",
            desc2: "Myia is a strong communicator and is able to work effectively with all stakeholders, including clients, team members, and vendors. In addition to her technical skills, Myia is also a natural leader who is able to inspire and motivate her team. She fosters a positive work environment and encourages collaboration and teamwork, which allows her team to deliver exceptional results and exceed expectations.",
        },
        {
            id: 4, image: ZulfiqarAli, title: "Zulfiqar Ali", position_rank: "Director", inc: "Shelley Global Inc (United States)", pty: "Shelley Global Pty Ltd (Australia)", llp: "Shelley Global LLP (Canada)", hd_title: "MESSAGE FROM THE DIRECTOR",
            desc1: "Zulfiqar Ali: Zulfiqar is a Senior Tax Manager at our accounting firm. With a degree in accounting and certifications, and over 12 years of experience, Zulfiqar is responsible for overseeing a team of tax consultants and ensuring that all clients work is completed accurately and efficiently. He is a strong leader who is known for his ability to motivate and inspire his team, and is always looking for ways to improve the services.",
            desc2: "Throughout his career, Zulfiqar has helped many businesses and individuals save significant amounts of money through his expert tax planning and compliance services. Zulfiqar's passion for tax law and his dedication to his clients have made him a highly sought-after consultant and trusted advisor. He is known for his ability to break down complex tax laws and regulations into manageable and understandable terms for clients.",
        },
        {
            id: 5, image: KamrulIslam, title: "Kamrul Islam", position_rank: "Director", inc: "Shelley Global Inc (United States)", pty: "Shelley Global Pty Ltd (Australia)", llp: "Shelley Global LLP (Canada)", hd_title: "MESSAGE FROM THE DIRECTOR",
            desc1: "Kamrul Islam: As an SMSF Audit Manager, Kamrul is responsible for overseeing a team of auditors and ensuring that all SMSF audits are performed to the highest standards of quality and accuracy. He brings a wealth of experience and expertise to the role, having worked in the SMSF industry for many years.",
            desc2: "With his deep knowledge of SMSF laws and regulations, Kamrul is well equipped to manage the day-to-day operations of the audit team and ensure that all audits are conducted efficiently and effectively. With Kamrul, our clients are confident their SMSF audits will be performed to the highest standards of quality and accuracy. His experience and expertise ensure that your SMSF remains compliant with all relevant laws and regulations.",
        },
        
        {
            id: 6, image: MohammadHakim, title: "Mohammad Hakim", position_rank: "Director", inc: "Shelley Global Inc (United States)", pty: "Shelley Global Pty Ltd (Australia)", llp: "Shelley Global LLP (Canada)", hd_title: "MESSAGE FROM THE DIRECTOR",
            desc1: "Mohammad Hakim: Mohammad is a Senior Tax Consultant at our accounting firm, where he is responsible for providing tax planning and compliance services to a wide range of clients. With a degree in accounting, certifications and over 20 years of experience in the field, Mohammad is a true expert in his field and has been serving clients with distinction for many years.",
            desc2: "Throughout his career, Hakim has been recognized for his exceptional knowledge of tax law and his ability to find innovative solutions for his clients. Hakim is not only just a talented tax consultant he is also a compassionate advisor who is dedicated to helping his clients succeed. He is always looking for ways to minimize their tax liability with the legal boundaries.",
        },
        {
            id: 7, image: SamSyed, title: "Sam Syed", position_rank: "Director", inc: "Shelley Global Inc (United States)", pty: "Shelley Global Pty Ltd (Australia)", llp: "Shelley Global LLP (Canada)", hd_title: "MESSAGE FROM THE DIRECTOR",
            desc1: "Sam Syed: Sam is our Admin & Bookkeeping Manager at Shelley Global. With a degree in Business Administration, relevant certificates and over years of experience in bookkeeping, Sam plays a role that our client’s financial records are accurate, up-to-date and compliance with all relevant regulations and laws. He is responsible for managing our company's bookkeeping system, including invoicing, accounts payable and receivable, and financial reporting. Sam, ensures all employees are paid accurately and on time with all deductions and withholdings are taken out.",
            desc2: "Sam also manages our administrative works where he is responsible for ensuring the smooth operation of all office processes. Sam's attention to detail, excellent organizational skills, and ability to work efficiently make him an invaluable member of our team.",
        },
        {
            id: 8, image: RafiSarker, title: "Rafi Sarker", position_rank: "Director", inc: "Shelley Global Inc (United States)", pty: "Shelley Global Pty Ltd (Australia)", llp: "Shelley Global LLP (Canada)", hd_title: "MESSAGE FROM THE DIRECTOR",
            desc1: "Rafi Sarker: Rafi is our Accounting & Tax Manager of Shelley Global. With the degree in Accounting and experience in tax planning and compliance, Rafi has a deep understanding of US and Australian tax laws and regulations, and he works closely with our clients to ensure that they are in compliance with all applicable tax requirements. His expertise and attention to detail have helped our clients navigate complex tax issues and minimize their tax liabilities.",
            desc2: "Rafi is also a great team player, and he works closely with our other departments to ensure that our clients receive comprehensive and coordinated tax services. We are proud to have Rafi on our team and are confident that his expertise and dedication will continue to benefit our clients for years to come. Rafi has been recognized for his exceptional problem-solving skills and commitment to delivering top-notch technical support.",
        },
        {
            id: 9, image: JabedAkhter, title: "Jabed Akhter", position_rank: "Director", inc: "Shelley Global Inc (United States)", pty: "Shelley Global Pty Ltd (Australia)", llp: "Shelley Global LLP (Canada)", hd_title: "MESSAGE FROM THE DIRECTOR",
            desc1: "Jabed Akhter: Jabed is a highly skilled IT professional at Shelley Global, He has degree in Information Technology and a broad range of expertise. With a strong foundation in IT principles and practices, Jabed excels in troubleshooting technical issues and providing efficient support to our team and clients. His ability to integrate systems and manage networks ensures our smooth operations and streamlined processes.",
            desc2: "In addition to his technical proficiency, Jabed is committed to staying up-to-date with the latest advancements in the IT industry. With Jabed's expertise, our IT infrastructure remains optimized, secure, and aligned with industry best practices. Jabed is not only a skilled IT professional but also possesses strong team management skills. In summary, Jabed's IT perspective and expertise are invaluable assets that contribute to our team's success and our ability to meet the needs of our clients.",
        },
        // {
        //     id: 10, image: AzizurRahman, title: "Azizur Rahman", position_rank: "Director", inc: "Shelley Global Inc (United States)", pty: "Shelley Global Pty Ltd (Australia)", llp: "Shelley Global LLP (Canada)", hd_title: "MESSAGE FROM THE DIRECTOR",
        //     desc1: "Azizur Rahman: As the Business Development Manager at Shelley Global, Azizur is responsible for identifying new opportunities, nurturing client relationships, and expanding the company's market presence. Azizur's primary focus is revenue growth by identifying and capitalizing on new business prospects. This involves conducting market research, analyzing industry trends, and identifying target markets with a strategic mindset.",
        //     desc2: "In addition to new business acquisition, Azizur also plays a vital role in nurturing existing client relationships. He facilitates long-term partnerships by understanding client requirements and identifying opportunities for upselling or cross-selling. Azizur's strong communication and negotiation skills are instrumental in closing deals, securing contracts, and negotiating favorable terms for sustained success and market expansion.",
        // },
    ]);


    return (
        <div>
            <div className="container pt-3 management__container">
                <h3 className="txt__title text-center mb-3">OUR MANAGEMENT TEAM</h3>
                <div className="row g-3 mb-4 pt-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-7 pe-md-5">
                        <h6 className="manage__team__txt__heading">
                            At Shelley Global, our team is our greatest asset. We're proud to be made up of a talented and diverse
                            team of professionals who are dedicated to providing the best possible service to our clients. Our
                            team of experienced professionals includes certified public accountants, enrolled agents, auditors
                            and other tax specialists who are dedicated to providing personalized and attentive service to each
                            of our clients. Meet a few of our management team members here.
                        </h6>
                    </div>
                    <div className="col-md-5">
                        <div className="our__manage__team__img">
                            <img src={management_img} className="img-fluid"  alt="image" border="0" />
                        </div>
                    </div>
                </div>
                <div className="row g-3 gx-md-5 pt-4 mb-3">
                    {
                        managementTeamData !== undefined && managementTeamData.map((team) => {
                            return (
                                <div key={team.id} className="col-md-6 py-2">
                                    <div className="our__management__card">
                                        <div className="card__img">
                                            <img src={team.image} className="img-fluid"  alt="image" border="0" />
                                        </div>
                                        <h6 className="card__title pt-4">{team.title}</h6>
                                        <div className="pt-0">
                                            <p className="card__text pt-2">{team.desc1}</p>
                                            <p className="card__text pt-2">{team.desc2}</p>
                                            <p className="card__text pt-2">{team.desc3}</p>
                                        </div>
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

export default OurManagementTeam;