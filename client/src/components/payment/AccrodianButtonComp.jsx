import React, { useState } from 'react';
import visa_img from '../../assets/visa_img.png';
import mastercard_img from '../../assets/mastercard_img.png';
import paypal_img1 from '../../assets/paypal_img1.png';
import ameria_express_img from '../../assets/ameria_express_img.png';
import apple_pay_img1 from '../../assets/apple_pay_img1.png';
import google_pay_img from '../../assets/google_pay_img.png';

const AccordionButtonComp = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [accordionData, setAccordionData] = useState([
        {
            title: 'CHOOSE A PAYMENT METHOD',
            content: [
                { id: 1, image: visa_img, selected: false },
                { id: 2, image: mastercard_img, selected: false },
                { id: 3, image: paypal_img1, selected: false },
                { id: 4, image: ameria_express_img, selected: false },
                { id: 5, image: apple_pay_img1, selected: false },
                { id: 5, image: google_pay_img, selected: false },
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


    return (
        <div>
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
                            <div className="accordion-content text-dark pt-3">
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
    );
};

export default AccordionButtonComp;
