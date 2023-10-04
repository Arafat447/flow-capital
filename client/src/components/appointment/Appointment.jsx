import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apointment_banner2 from '../../assets/apointment_banner2.png';
import timezones from './timezone';
import axios from 'axios';


const Appointment = () => {
    const [appointmentInfo, setAppointmentInfo] = useState({
        date: '',
        email: '',
        first_name: '',
        last_name: '',
        message: '',
        otp: '',
        phone: '',
        service: '',
        time: '',
        time_zone: '',
    });
    const handleChange = (e) => {
        setAppointmentInfo({
            ...appointmentInfo, [e.target.name]: e.target.value
        })
    }
    const [isVarified, setIsVerified] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isOtpLoading, setIsOtpLoading] = useState(false);
    const [isVerifyLoading, setIsVerifyLoading] = useState(false);
    const [isSendOtp, setIsSendOtp] = useState(false);
    const [selectedService, setSelectedService] = useState([]);
    const sendOtp = () => {
        setIsOtpLoading(true);
        axios.post('send-otp', appointmentInfo)
            .then(res => {
                console.log(res);
                setIsOtpLoading(false);
                toast.success('CODE has been sent successfully');
                setIsSendOtp(true);
            })
            .catch(err => {
                console.log(err);
                toast.error('Something went wrong');
                setIsOtpLoading(false);
            })
    }
    const verifyOtp = () => {
        setIsVerifyLoading(true);
        axios.post('verify-otp', appointmentInfo)
            .then(res => {
                console.log(res);
                toast.success('CODE has been verified successfully');
                setIsVerifyLoading(false);
                setIsVerified(true);
            })
            .catch(err => {
                console.log(err);
                toast.error('Something went wrong');
                setIsVerifyLoading(false);
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isVarified) {
            if (appointmentInfo.service && appointmentInfo.time_zone && selectedService.length > 0) {
                setIsLoading(true);
                axios.post('send-email', {...appointmentInfo, selected_service: selectedService.toString()})
                    .then(res => {
                        console.log(res);
                        toast.success('Appointment request has been submitted successfully');
                        setIsLoading(false);
                        e.target.reset();
                        setAppointmentInfo({
                            date: '',
                            email: '',
                            first_name: '',
                            last_name: '',
                            message: '',
                            otp: '',
                            phone: '',
                            service: '',
                            time: '',
                            time_zone: '',
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        toast.error('Something went wrong');
                        setIsLoading(false);
                    })
            } else {
                if (!appointmentInfo.service) {
                    toast.error('Please select service');
                }

                if (!appointmentInfo.time_zone) {
                    toast.error('Please select time zone');
                }
                if(selectedService.length === 0) {
                    toast.error('Please select a service');
                }
            }
        } else {
            toast.error('Please verify yout email');
        }

    }
    let allInfo = appointmentInfo.date && appointmentInfo.time && appointmentInfo.service && appointmentInfo.time_zone && appointmentInfo.phone && appointmentInfo.email && appointmentInfo.first_name && appointmentInfo.last_name && appointmentInfo.otp && isVarified;
    
    const australiaServicesData = [
        {
            id: 1,
            ht_title: "DOMESTIC TAXATION",
        },
        {
            id: 2,
            ht_title: "CROSS-BORDER TAXATION",
        },
        {
            id: 3,
            ht_title: "FINANCIAL ACCOUNTING",
        },
        {
            id: 4,
            ht_title: "LOCAL ENTITY FORMATION",
        },
        {
            id: 5,
            ht_title: "INTERNATIONAL EXPANSION",
        },
        {
            id: 6,
            ht_title: "AUSTRALIAN MARKET ENTRY",

        },
        {
            id: 7,
            ht_title: "AUDITING, PAYROLL TAX AND OTHERS",

        },
        {
            id: 8,

            ht_title: "BUSINESS ADVISORY",
            link: "",
        },
    ];
    const usaServicesData = [
        {
            id: 1,
            ht_title: "INDIVIDUAL TAX FEDERAL & STATE",
        },
        {
            id: 2,
            ht_title: "PARTNERSHIP TAX FEDERAL & STATE",
        },
        {
            id: 3,
            ht_title: "CORPORATE TAX FEDERAL & STATE",
        },
        {
            id: 4,
            ht_title: "ESTATE & TRUST FEDERAL & STATE",
        },
        {
            id: 5,
            ht_title: "INTERNATIONAL INDIVIDUAL TAX",
        },
        {
            id: 6,
            ht_title: "INTERNATIONAL BUSINESS TAX",
        },
        {
            id: 7,
            ht_title: "AMENDED & LATE TAX RETURN",
        },
        {
            id: 8,
            ht_title: "BOOKKEEPING & PAYROLL",
        },
        {
            id: 9,
            ht_title: "REPORTING",
        },
        {
            id: 10,
            ht_title: "ENTITY SETUP-USA",
        },
        {
            id: 11,
            ht_title: "ENTITY SETUP-FOREIGNER",
        },
        {
            id: 12,
            ht_title: "REPRESENTATION",
        },
        {
            id: 13,
            ht_title: "ADVISORY",
        },
    ];
    const canadaServicesData = [
        {
            id: 1,
            ht_title: "LOCAL TAX",
        },
        {
            id: 2,
            ht_title: "CROSS-BORDER TAX",
        },
        {
            id: 3,
            ht_title: "ACCOUNTING & BOOKKEEPING",
        },
        {
            id: 4,
            ht_title: "ENTITY SERVICES",
        },
        {
            id: 5,
            ht_title: "ADVISORY SERVICES",
        },
    ];
    
    const handleCheckbox = (e, item) => {
        if (e.target.checked) {
            setSelectedService([...selectedService, item])
        } else {
            const service = selectedService.filter(s => s !== item)
            setSelectedService(service)
        }
    }
    return (
        <div className="appointment__bg pb-4">
            <ToastContainer />
            <div className="container apointment__container">
                <div className="apointment__banner">
                    <img src={apointment_banner2} alt="image" />
                </div>
                <div className="row pt-4 mb-2 d-flex justify-content-center">
                    <div className="col-md-12">
                        <h3 className="txt__title text-center">APPOINTMENT</h3>
                        <h5 className="resouces__subtitle_txt text-center">Welcome to our Appointment Page!</h5>
                        <p className="txt__desc">
                            To request an appointment, please fill out and submit the form below. Once we receive your submission,
                            our team will reach out to you within 3 to 7 business days to confirm your appointment. By requesting an
                            appointment, you acknowledge that the information you provide will be used solely for the purpose of
                            scheduling and conducting the appointment. We follow to strict privacy and data protection policies to
                            safeguard your personal information. If you have any specific questions, please include them here.
                        </p>
                    </div>
                </div>
                <div className="row g-3 mb-4 d-flex justify-content-center">
                    {/* <div className="col-md-7 pe-md-4">
                        <div className="appiontment_img">
                            <img src={Appointment_img} alt="image"  />
                        </div>
                    </div> */}
                    <div className="col-md-12">
                        <div className="app__form__row__bg">
                            <div className="app__form__row">
                                <form className="row g-3" onSubmit={handleSubmit}>
                                    <div className="col-md-6">
                                        <input type="text" onChange={(e) => handleChange(e)} name="first_name" className="form-control form-control-sm" required placeholder="FIRST NAME" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" onChange={(e) => handleChange(e)} name="last_name" className="form-control form-control-sm" required placeholder="LAST NAME" />
                                    </div>
                                    <div className="col-md-5">
                                        <input type="number" onChange={(e) => handleChange(e)} name="phone" className="form-control form-control-sm" required placeholder="PHONE NO" />
                                    </div>
                                    <div className="col-md-5">
                                        <input type="email" value={appointmentInfo.email} onChange={(e) => handleChange(e)} name="email" className="form-control form-control-sm" required placeholder="E-MAIL" />
                                    </div>
                                    <div className="col-md-2">
                                        <input type="button" disabled={!appointmentInfo.email || isOtpLoading} onClick={sendOtp} className="form-control form-control-sm" value={isOtpLoading ? 'SENDING...' : 'SEND CODE'} />
                                    </div>

                                    <div className="col-md-5">
                                        {
                                            isSendOtp &&
                                            <>
                                                <p className="form__txt">Please check your email</p>
                                                <p className="form__txt__otp">We’ve sent a code to <span className="form__txt__otp__email">“{appointmentInfo.email}”</span></p>
                                            </>
                                        }
                                    </div>
                                    <div className="col-md-2">
                                        <input type="number" value={appointmentInfo.otp} onChange={(e) => handleChange(e)} name='otp' className="form-control form-control-sm" required placeholder="CODE" />
                                    </div>
                                    <div className="col-md-1">
                                        <input type="button" disabled={!appointmentInfo.otp || isVerifyLoading || isVarified || !isSendOtp} onClick={verifyOtp} className={`form-control form-control-sm ${appointmentInfo.otp && !isVarified && isSendOtp ? 'btn__app' : ''} `} value={isVerifyLoading ? 'VERIFYING' : isVarified ? 'VERIFIED' : 'VERIFY'} />
                                    </div>
                                    <div className="col-md-1">
                                        <input type="button" onClick={() => { setAppointmentInfo({ ...appointmentInfo, email: '', otp: '' }); setIsSendOtp(false); setIsVerified(false); }} className="form-control form-control-sm" value="CANCEL" />
                                    </div>
                                    <div className="col-md-2">
                                        <p className="form__txt">Didn’t  get a code?</p>
                                        <p className="form__txt__otp">(Click to resend)</p>
                                    </div>
                                    <div className="col-md-1">
                                        <input disabled={!isSendOtp || isVarified} onClick={sendOtp} type="button" className="form-control form-control-sm" value="RESEND" />
                                    </div>

                                    <div className="col-md-12 appointment-service-section">
                                        <select name='service' onChange={(e) => { handleChange(e); setSelectedService([]); }} className="form-select form-select-sm">
                                            <option selected>SERVICES</option>
                                            <option value="AUSTRALIA">AUSTRALIA</option>
                                            <option value="CANADA">CANADA</option>
                                            <option value="USA">USA</option>
                                        </select>
                                        {
                                            appointmentInfo.service === 'AUSTRALIA' &&
                                            <div className="row mt-2">
                                                {
                                                    australiaServicesData.map((item, index) => {
                                                        return (
                                                            // <option value={item.id} key={index}>{item.ht_title}</option>
                                                            <div key={index} className='col-md-3'>
                                                                <input type="checkbox" onChange={(e) => handleCheckbox(e, item.ht_title)} className=" me-1" />
                                                                <label className="">{item.ht_title}</label>
                                                            </div>

                                                        )
                                                    })
                                                }
                                            </div>

                                        }
                                        {
                                            appointmentInfo.service === 'CANADA' &&
                                            <div className="row mt-2">
                                                {
                                                    canadaServicesData.map((item, index) => {
                                                        return (
                                                            // <option value={item.id} key={index}>{item.ht_title}</option>
                                                            <div key={index} className='col-md-3'>
                                                                <input type="checkbox" onChange={(e) => handleCheckbox(e, item.ht_title)} className=" me-1" />
                                                                <label className="">{item.ht_title}</label>
                                                            </div>

                                                        )
                                                    })
                                                }
                                            </div>

                                        }
                                        {
                                            appointmentInfo.service === 'USA' &&
                                            <div className="row mt-2">
                                                {
                                                    usaServicesData.map((item, index) => {
                                                        return (
                                                            // <option value={item.id} key={index}>{item.ht_title}</option>
                                                            <div key={index} className='col-md-3'>
                                                                <input type="checkbox" onChange={(e) => handleCheckbox(e, item.ht_title)} className=" me-1" />
                                                                <label className="">{item.ht_title}</label>
                                                            </div>

                                                        )
                                                    })
                                                }
                                            </div>

                                        }
                                    </div>
                                    <div className="col-md-4">
                                        <input type="date" onChange={(e) => handleChange(e)} name="date" className="form-control form-control-sm" required placeholder="DATE" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="time" onChange={(e) => handleChange(e)} name='time' className="form-control form-control-sm" required placeholder="TIME" />
                                    </div>
                                    <div className="col-md-4">
                                        <select name='time_zone' onChange={(e) => handleChange(e)} className="form-select form-select-sm">
                                            <option selected>TIME ZONE</option>
                                            {
                                                timezones.map((item, index) => {
                                                    return (
                                                        <option value={item.text} key={index}>{item.text}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                        <textarea name='message' onChange={(e) => handleChange(e)} className="form-control form-control-sm" rows="3" placeholder="MESSAGE (Optional)"></textarea>
                                        {
                                            appointmentInfo.message &&
                                            <span style={{ fontSize: '12px' }} className=''>Characters : {appointmentInfo.message.length}</span>
                                        }
                                    </div>
                                    <div className="col-md-12">
                                        <div className="d-flex justify-content-center pt-3">
                                            <div style={{ width: "120px" }}>
                                                <input type='submit' disabled={isLoading || !allInfo} className={`${(isLoading || !allInfo) ? 'form-control form-control-sm ' : 'btn__learn__more'}`} value={isLoading ? 'SUBMITING...' : 'SUBMIT NOW'} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-2 d-flex justify-content-center">
                    <div className="col-md-12">
                        <p className="txt__desc">
                            For immediate concerns or inquiries, please contact us directly to +1 888 415 2440 (USA, CA) or +61 2 804 662 30 (AU).
                            We are available to assist you promptly.
                        </p>
                        <p className="txt__desc">
                            Please note that requesting an appointment does not guarantee availability on your preferred date and time.
                            We will make every effort to accommodate your request and will contact you to confirm the appointment details.
                            Thank you for considering Shelley Global for your tax, accounting or advisory needs. We look forward to assisting you soon.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;