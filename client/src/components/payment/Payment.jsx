import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import payment_banner2 from '../../assets/payment_banner2.png';
import visa_card_img from '../../assets/visa_card_img.png';
import master_card_img from '../../assets/master_card_img.png';
import bank_transfer_img from '../../assets/bank_transfer_img.png';
import amex_img from '../../assets/amex_img.png';
import paypal_card_img from '../../assets/paypal_card_img.png';
import Stripe_img from '../../assets/Stripe_img.png';



const Payment = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [accordionData, setAccordionData] = useState([
        {
            title: 'CHOOSE A PAYMENT METHOD',
            content: [
                { id: 1, image: Stripe_img, selected: false },
                { id: 2, image: visa_card_img, selected: false },
                { id: 3, image: master_card_img, selected: false },
                { id: 4, image: bank_transfer_img, selected: false },
                { id: 5, image: amex_img, selected: false },
                { id: 5, image: paypal_card_img, selected: false },
            ],
        },
    ]);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const handleImageSelect = (index) => {
        const updatedData = [...accordionData];
        updatedData[activeIndex].content.forEach((item, subIndex) => {
            if (subIndex === index) {
                item.selected = true;
            } else {
                item.selected = false;
            }
        });
        setAccordionData(updatedData);
    };
const [impPaymentInstraction, setimpPaymentInstraction] = useState([
    { id:1, desc: "Invoices: Please ensure that you have received an official invoice from our team before making a payment and include your invoice or reference number in the payment description for easy identification."},
    { id:2, desc: "Currency: Our invoices are generally issued in the currency agreed upon during our engagement. If you need to make a payment in a different currency, please contact our office to discuss the available options."},
    { id:3, desc: "Payment Confirmation: Once your payment has been successfully processed, you will receive a payment confirmation via email or your preferred method of contact. If you require a receipt or proof of payment, please let us know, and we will be happy to provide it."},
    { id:4, desc: "Outstanding Balances: If you have any outstanding balances or if you're unsure about the amount due, please contact our office. Our team will be glad to assist you in resolving any payment-related queries."},
    { id:5, desc: "Timely payment is appreciated and ensures the continuity of our services. If you are experiencing any difficulties or need to discuss payment arrangements, please reach out to our office to explore possible solutions."},
]);




    return (
        <div className="appointment__bg">
            <div className="container pb-4 payment__container">
            <div className="apointment__banner">
                <img src={payment_banner2} alt="image"  />
            </div>
                <div className="row pt-4 mb-4 d-flex justify-content-center">
                    <div className="col-md-12">
                        <h3 className="txt__title text-center">PAYMENT</h3>
                        <h5 className="resouces__subtitle_txt text-center">Welcome to our Payment Page!</h5>
                        <p className="txt__desc">
                            We appreciate your trust in Shelley Global. To ensure a secure payment process, please find the following
                            information and instructions below. We take your security and privacy seriously. All payment information
                            provided to us is treated with strict confidentiality and handled in accordance with our privacy and data
                            protection policies. Our payment options are:
                        </p>
                        <p className="txt__desc pay__txt">
                            Direct Bank Transfer: You will find bank payment details including Swift Code for international transfers in our invoice.
                        </p>
                        <p className="txt__desc pay__txt">
                            Stripe: We accept major credit cards, including Visa, Mastercard, and American Express through Stripe.
                        </p>
                        <p className="txt__desc pay__txt">
                            PayPal: It allows to securely make payments as well by linking bank accounts or credit or debit cards.
                        </p>
                    </div>
                </div>
                <div className="row g-3 mb-4 d-flex justify-content-center">
                    <div className="col-md-12">
                        <div className="app__form__row__bg">
                            <div className="app__form__row">
                                <form className="row g-3 d-flex justify-content-center">
                                    <div className="col-md-12">
                                        <div className="accordion">
                                            {accordionData.map((item, index) => (
                                                <>
                                                    <div key={index} className="form-control form-control-sm">
                                                        <div
                                                            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                                                            onClick={() => toggleAccordion(index)}
                                                        >
                                                            <div className="d-flex justify-content-between ">
                                                                <p className="paydrop_txt">{item.title}</p>
                                                                <p className="paydrop_txt"><i class="fa-solid fa-angle-down"></i></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {activeIndex === index && (
                                                        <div className="accordion-content text-center text-dark pt-1">
                                                            {item.content.map((item, subIndex) => (
                                                                <div
                                                                    key={subIndex}
                                                                    className={`form-check form-check-inline ${item.selected ? 'selected' : ''}`}
                                                                    onClick={() => handleImageSelect(subIndex)}
                                                                >
                                                                    <label className="form-check-label " htmlFor={item.id}>
                                                                        <div className="form__dropdown__img">
                                                                            <img
                                                                                src={item.image}
                                                                                alt="image"
                                                                                
                                                                                className="img-fluid"
                                                                            />
                                                                            
                                                                            <div className="form__selected__icons">
                                                                                {item.selected && (
                                                                                    <span className="selected-icon">
                                                                                        <i className="fa-regular fa-circle-check"></i>
                                                                                    </span>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="col-md-10">
                                        <input type="email" className="form-control form-control-sm" placeholder="E-MAIL" />
                                    </div>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control form-control-sm" placeholder="FULL NAME" />
                                    </div>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control form-control-sm" placeholder="CARD NUMBER" />
                                    </div>
                                    <div className="col-md-5">
                                        <input type="text" className="form-control form-control-sm" placeholder="EXPIRATION DATE" />
                                    </div>
                                    <div className="col-md-5">
                                        <input type="text" className="form-control form-control-sm" placeholder="CVC" />
                                    </div>

                                    <div className="col-md-10">
                                        <div className="text-center pt-3">
                                            <Link to="#" className="btn__learn__more">PAY NOW</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-2 mb-4 d-flex justify-content-center">
                    <div className="col-md-12">
                        <p className="txt__desc">Important Payment Instructions:</p>
                        <ul className="">
                            {
                                impPaymentInstraction!==undefined && impPaymentInstraction.map((item, index) => {
                                    return (
                                        <li key={index} className="txt__desc mb-2">{item.desc}</li>
                                    )
                                })
                            }
                        </ul>
                        <p className="txt__desc">
                        Thank you for choosing Shelley Global for your international/domestic tax and accounting needs. Should you have any further questions or concerns regarding payments, please don't hesitate to contact our office directly. We value your business and look forward to serving you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Appointment_img from '../../assets/Appointment_img.png';
// import payment__banner from '../../assets/payment__banner.png';
// import AccrodianButtonComp from './AccrodianButtonComp';
// import visa_img from '../../assets/visa_img.png';
// import mastercard_img from '../../assets/mastercard_img.png';
// import paypal_img1 from '../../assets/paypal_img1.png';
// import ameria_express_img from '../../assets/ameria_express_img.png';
// import apple_pay_img1 from '../../assets/apple_pay_img1.png';
// import google_pay_img from '../../assets/google_pay_img.png';

// const Payment = () => {
//     const [activeIndex, setActiveIndex] = useState(null);
//     const [accordionData, setAccordionData] = useState([
//         {
//             title: 'CHOOSE A PAYMENT METHOD',
//             content: [
//                 { id: 1, image: visa_img, selected: false },
//                 { id: 2, image: mastercard_img, selected: false },
//                 { id: 3, image: paypal_img1, selected: false },
//                 { id: 4, image: ameria_express_img, selected: false },
//                 { id: 5, image: apple_pay_img1, selected: false },
//                 { id: 5, image: google_pay_img, selected: false },
//             ],
//         },
//     ]);

//     const toggleAccordion = (index) => {
//         if (activeIndex === index) {
//             setActiveIndex(null);
//         } else {
//             setActiveIndex(index);
//         }
//     };

//     const handleImageSelect = (index) => {
//         const updatedData = [...accordionData];
//         updatedData[activeIndex].content.forEach((item, subIndex) => {
//             if (subIndex === index) {
//                 item.selected = true;
//             } else {
//                 item.selected = false;
//             }
//         });
//         setAccordionData(updatedData);
//     };





//     return (
//         <div className="appointment__bg">
//             <div className="container py-4">
//                 <h3 className="txt__title text-center">PAYMENT</h3>
//             </div>
//             <div className="payment__banner">
//                 <img src={payment__banner} alt="image"  />
//                 <div className="payment__overlay__content">
//                     <div className="payment__content__inner">
//                         <div className="row g-3  d-flex justify-content-center">
//                             <div className="col-md-8 app__form__row__bg">
//                                 <div className="app__form__row">
//                                     <form className="row g-3">
//                                         <div className="col-md-12">
//                                             <div className="accordion">
//                                                 {accordionData.map((item, index) => (
//                                                     <>
//                                                         <div key={index} className="form-control form-control-sm">
//                                                             <div
//                                                                 className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
//                                                                 onClick={() => toggleAccordion(index)}
//                                                             >
//                                                                 <div className="d-flex justify-content-between ">
//                                                                     <p className="paydrop_txt">{item.title}</p>
//                                                                     <p className="paydrop_txt"><i class="fa-solid fa-angle-down"></i></p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         {activeIndex === index && (
//                                                             <div className="accordion-content text-dark pt-3">
//                                                                 {item.content.map((item, subIndex) => (
//                                                                     <div
//                                                                         key={subIndex}
//                                                                         className={`form-check form-check-inline ${item.selected ? 'selected' : ''}`}
//                                                                         onClick={() => handleImageSelect(subIndex)}
//                                                                     >
//                                                                         <label className="form-check-label " htmlFor={item.id}>
//                                                                             <div className="form__dropdown__img">
//                                                                                 <img
//                                                                                     src={item.image}
//                                                                                     alt="image"
//                                                                                     
//                                                                                     className="img-fluid"
//                                                                                 />
//                                                                                 <div className="form__selected__icons">
//                                                                                     {item.selected && (
//                                                                                         <span className="selected-icon">
//                                                                                             <i className="fa-regular fa-circle-check"></i>
//                                                                                         </span>
//                                                                                     )}
//                                                                                 </div>
//                                                                             </div>
//                                                                         </label>
//                                                                     </div>
//                                                                 ))}
//                                                             </div>
//                                                         )}
//                                                     </>
//                                                 ))}
//                                             </div>

//                                             {/* <AccrodianButtonComp /> */}
//                                         </div>

//                                         <div className="col-md-12">
//                                             <input type="email" className="form-control form-control-sm" placeholder="E-MAIL" />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <input type="text" className="form-control form-control-sm" placeholder="FIRST NAME" />
//                                         </div>
//                                         <div className="col-md-6">
//                                             <input type="text" className="form-control form-control-sm" placeholder="LAST NAME" />
//                                         </div>
//                                         <div className="col-md-12">
//                                             <input type="text" className="form-control form-control-sm" placeholder="CARD NUMBER" />
//                                         </div>
//                                         <div className="col-md-4">
//                                             <input type="text" className="form-control form-control-sm" placeholder="EXPIRATION DATE" />
//                                         </div>
//                                         <div className="col-md-4">
//                                             <input type="text" className="form-control form-control-sm" placeholder="CVC" />
//                                         </div>
//                                         <div className="col-md-4">
//                                             <input type="text" className="form-control form-control-sm" placeholder="ZIP" />
//                                         </div>

//                                         <div className="col-md-12">
//                                             <div className="text-center pt-4">
//                                                 <Link to="#" className="btn__learn__more">PAY NOW</Link>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Payment;