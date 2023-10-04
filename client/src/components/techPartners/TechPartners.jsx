import React, { useState } from 'react';
import itrunt_proconnect from "../../assets/itrunt_proconnect.png";
import taxact from "../../assets/taxact.png";
import beatifull_account_soft from "../../assets/beatifull_account_soft.png";
import inturt_quckbook from "../../assets/inturt_quckbook.png";
import my_tax_exprees from "../../assets/my_tax_exprees.png";
import fresh_book from "../../assets/fresh_book.png";
import saasu from "../../assets/saasu.png";
import turbo_tax from "../../assets/turbo_tax.png";
import sage from "../../assets/sage.png";
import oracle_net_suite from "../../assets/oracle_net_suite.png";
import odoo from "../../assets/odoo.png";
import myob from "../../assets/myob.png";
import adra from "../../assets/adra.png";
import wave from "../../assets/wave.png";
import zoho from "../../assets/zoho.png";
import execl_img from "../../assets/execl_img.png";
import reccipt_bank from "../../assets/reccipt_bank.png";
import squirrel_streel from "../../assets/squirrel_streel.png";
import dropbox_img from "../../assets/dropbox_img.png";
import box_img from "../../assets/box_img.png";
import google_drive from "../../assets/google_drive.png";
import conga_img from "../../assets/conga_img.png";
import asana_img from "../../assets/asana_img.png";
import trello_img from "../../assets/trello_img.png";
import slack_img from "../../assets/slack_img.png";
import avanser_img from "../../assets/avanser_img.png";
import approval_max from "../../assets/approval_max.png";
import team_viewer from "../../assets/team_viewer.png";
import google_meet from "../../assets/google_meet.png";
import zoom_img from "../../assets/zoom_img.png";



const TechPartners = () => {
    const [taxAndAccounting, setTaxAndAccounting] = useState([
        { id: 1, image: itrunt_proconnect,},
        { id: 2, image: taxact,},
        { id: 3, image: beatifull_account_soft,},
        { id: 4, image: inturt_quckbook,},
        { id: 5, image: my_tax_exprees,},
        { id: 6, image: fresh_book,},
        { id: 7, image: saasu,},
        { id: 8, image: turbo_tax,},
        { id: 9, image: sage,},
        { id: 10, image: oracle_net_suite,},
        { id: 11, image: odoo,},
        { id: 12, image: myob,},
        { id: 13, image: adra,},
        { id: 14, image: wave,},
        { id: 15, image: zoho,},
        { id: 16, image: execl_img,},
    ])
    const [storageCommunication, setStorageCommunication] = useState([
        { id: 1, image: reccipt_bank,},
        { id: 2, image: squirrel_streel,},
        { id: 3, image: dropbox_img,},
        { id: 4, image: box_img,},
        { id: 5, image: google_drive,},
        { id: 6, image: conga_img,},
        { id: 7, image: asana_img,},
        { id: 8, image: trello_img,},
        { id: 9, image: slack_img,},
        { id: 10, image: avanser_img,},
        { id: 11, image: approval_max,},
        { id: 12, image: team_viewer,},
        { id: 13, image: google_meet,},
        { id: 14, image: zoom_img,},
    ])
    return (
        <div className="appointment__bg">
            <div className="container py-4 partners__container">
                <h3 className="txt__title text-center">TECH PARTNERS AND TECH EXPERTS</h3>
                <div className="row pt-2">
                    <div className="col-12">
                        <p className="tech__txt__title text-center">Welcome to real-time modern accounting and tax!</p>
                        <p className="txt__desc">
                            At Shelley Global, we have partnerships with popular accounting and tax software providers. Our team consists of tech-savvy professionals who are experts in a wide range of accounting, tax preparation, storage, and communication software and apps. They know how to navigate and make the most of these tools. With a deep understanding of these tools, our team is able to leverage their functionalities seamlessly. By staying updated with the latest software advancements, we ensure streamlined processes, increased productivity, and enhanced accuracy for our clients. Our commitment to utilizing cutting-edge software solutions empowers us to deliver accurate accounting practices, meticulous tax preparation, secure data storage, and seamless communication throughout the entire process. Here are some examples of Software and Apps that we are partnered with, knowledgeable and expert in using them.
                        </p>
                    </div>
                </div>
                <div className="row g-3 gx-md-4 pt-4 d-flex justify-content-center">
                    <h6 className="txt__title text-center mb-3" >Tax and Accounting</h6>
                    {
                        taxAndAccounting !== undefined && taxAndAccounting.map((item) => {
                            return (
                                <div className="col-md-3" key={item.id}>
                                    <div className="tax__card">
                                        <img src={item.image} className="img-fluid"  alt="image" border="0" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row g-3 gx-md-4 pt-5 mb-3 d-flex justify-content-center">
                    <h6 className="txt__title text-center mb-3" >Storage and Communication</h6>
                    {
                        storageCommunication !== undefined && storageCommunication.map((item) => {
                            return (
                                <div className="col-md-3" key={item.id}>
                                    <div className="tax__card">
                                        <img src={item.image} className="img-fluid"  alt="image" border="0" />
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

export default TechPartners;