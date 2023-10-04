import { useEffect } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import MainHomePage from './components/mainHomePage/MainHomePage';
import Layouts from './components/layouts/Layouts';
import AboutUs from './components/aboutUs/AboutUs';
import UsaServices from './components/services/UsaServices';
import UsaServicesDetails from './components/services/UsaServicesDetails';
import AustraliaServices from './components/services/AustraliaServices';
import CanadianServices from './components/services/CanadianServices';
import AustraliaServicesDetails from './components/services/AustraliaServicesDetails';
import CanadianServicesDetails from './components/services/CanadianServicesDetails';
import Appointment from './components/appointment/Appointment';
import OurManagementTeam from './components/ourManagementTeam/OurManagementTeam';
import TechPartners from './components/techPartners/TechPartners';
import Payment from './components/payment/Payment';
import Testimonial from './components/testimonial/Testimonial';
import Faqs from './components/faqs/Faqs';
import Resources from './components/resources/Resources';
import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy';
import WhyUs from './components/whyUs/WhyUs';
import Career from './components/career/Career';
import Reviews from './components/reviews/Reviews';



function App() {
  //scroll top onClick in the new page
  const location = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<MainHomePage />}></Route>
          <Route path="about" element={<AboutUs />}></Route>
          <Route path="our-management-team" element={<OurManagementTeam />}></Route>
          <Route path="career" element={<Career />}></Route>
          <Route path="appointment" element={<Appointment />}></Route>
          <Route path="tech-partners" element={<TechPartners />}></Route>
          <Route path="payment" element={<Payment />}></Route>
          <Route path="testimonial" element={<Testimonial />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
          <Route path="resources" element={<Resources />}></Route>
          <Route path="faqs" element={<Faqs />}></Route>
          <Route path="why-us" element={<WhyUs />}></Route>
          <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>

          <Route path="usa-services" element={<UsaServices />}></Route>
          <Route path="usa-services/:id" element={<UsaServicesDetails />}></Route>

          <Route path="australian-services" element={<AustraliaServices />}></Route>
          <Route path="australian-services/:id" element={<AustraliaServicesDetails />}></Route>

          <Route path="canadian-services" element={<CanadianServices />}></Route>
          <Route path="canadian-services/:id" element={<CanadianServicesDetails />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
