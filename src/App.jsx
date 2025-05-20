import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";

import EventPopup from "./components/EventPopup/EventPopup";


import AboutUs from "./pages/AboutUs/About";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/SignUp";
import VendorRegistration from "./pages/VendorRegistration/VendorRegistration";
import MyBoard from "./pages/MyBoard/MyBoard";
import Indore from "./ArtistBooking/Indore/Indore";
import Bhopal from "./ArtistBooking/Bhopal/Bhopal";
import Gwalior from "./ArtistBooking/Gwalior/Gwalior";
import Jabalpur from "./ArtistBooking/Jabalpur/Jabalpur";
import Ujjain from "./ArtistBooking/Ujjain/Ujjain";




import Comedians from "./ArtistBooking/Bhopal/Comedians";

import ArtistDetail from "./ArtistBooking/Bhopal/ArtistDetail";
import ArtistDetail1 from "./ArtistBooking/Gwalior/ArtistDetail1";
import ArtistDetail2 from "./ArtistBooking/Indore/ArtistDetail2";
import ArtistDetail3 from "./ArtistBooking/Jabalpur/ArtistDetail3";
import ArtistDetail4 from "./ArtistBooking/Ujjain/ArtistDetail4";










import IndoreCity from "./VenueBooking/IndoreCity/IndoreCity";

import BhopalCity from "./VenueBooking/BhopalCity/BhopalCity";
// import JabalpurCity from "./VenueBooking/JabalpurCity/JabalpurCity";
import GwaliorCity from "./VenueBooking/GwaliorCity/GwaliorCity";
import UjjainCity from "./VenueBooking/UjjainCity/UjjainCity";

import BasicDetail from "./CreateArtistProfile/BasicDetail/BasicDetail";
import PrfoInfo from "./CreateArtistProfile/PrfoInfo/PrfoInfo";
import AddInfo from "./CreateArtistProfile/AddInfo/AddInfo";
import MediaUpload from "./CreateArtistProfile/MediaUpload/MediaUpload";
import EditArtistProfile from "./CreateArtistProfile/EditArtistProfile/EditArtistProfile";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import SocialSidebar from "./components/SocialSidebar/SocialSidebar";
import ContactWidget from "./components/ContactWidget/ContactWidget";
import SearchArtistButton from "./components/SearchArtistButton/SearchArtistButton";
import ScrollUpBar from "./components/ScrollUpBar/ScrollUpBar";
import Services from "./pages/Services/Services";
import EventRental from "./pages/EventRental/EventRental";
import EventPlanner from "./pages/EventPlanner/EventPlanner";
import ContactUs from "./pages/Contact Us/ContactUs";
import VolunteerBooking from "./pages/VolunteerBooking/VolunteerBooking";
import { ScrollProvider } from "./components/ScrollTriger/ScrollTrigger";
import NewsBlog from "./pages/NewsandBlog/NewsBlog";
import EventBookingModel1 from "./VenueBooking/IndoreCity/BookingMode1l/EventBookingModel1";
import EventBookingModel2 from "./VenueBooking/IndoreCity/BookingModel2/EventBookingModel2";
import EventBookingModel3 from "./VenueBooking/IndoreCity/BookingModel3/EventBookingModel3";
import EventBookingModel4 from "./VenueBooking/IndoreCity/BookingModel4/EventBookingModel4";
import EventBookingModel5 from "./VenueBooking/IndoreCity/BookingModel5/EventBookingModel5";
import EventBookingModel6 from "./VenueBooking/IndoreCity/BookingModel6/EventBookingModel6";
import EventBookingModel7 from "./VenueBooking/IndoreCity/BookingModel7/EventBookingModel7";
import EventBookingModel8 from "./VenueBooking/IndoreCity/BookingModel8/EventBookingModel8";





// import EventBookingModel9 from "./VenueBooking/UjjainCity/BookingModel9/EventBookingModel9";
// import EventBookingModel10 from "./VenueBooking/UjjainCity/BookingModel10/EventBookingModel10";
// import EventBookingModel11 from "./VenueBooking/UjjainCity/BookingModel11/EventBookingModel11";
// import EventBookingModel12 from "./VenueBooking/UjjainCity/BookingModel12/EventBookingModel12";
// import EventBookingModel13 from "./VenueBooking/UjjainCity/BookingModel13/EventBookingModel13";


// import EventBookingModel14 from "./VenueBooking/GwaliorCity/BookingModel14/EventBookingModel14";
// import EventBookingModel15 from "./VenueBooking/GwaliorCity/BookingModel15/EventBookingModel15";
// import EventBookingModel16 from "./VenueBooking/GwaliorCity/BookingModel16/EventBookingModel16";
// import EventBookingModel17 from "./VenueBooking/GwaliorCity/BookingModel17/EventBookingModel17";

function App() {
  return (
    <>
      <Router>
        <EventPopup />
        <TopNavbar />
        <Navbar />

        <ScrollProvider>
          <SocialSidebar />
          <ContactWidget />
          {/* ...rest of your app */}
        </ScrollProvider>
        <SearchArtistButton />
        <ScrollUpBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/VolunteerBooking" element={<VolunteerBooking />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/EventRental" element={<EventRental />} />
          <Route path="/EventPlanner" element={<EventPlanner />} />

          <Route path="/Registration" element={<VendorRegistration />} />
          <Route path="/MyBoard" element={<MyBoard />} />
          <Route path="/Indore" element={<Indore />} />
          <Route path="/Bhopal" element={<Bhopal />} />
          <Route path="/Gwalior" element={<Gwalior />} />
          <Route path="/Jabalpur" element={<Jabalpur />} />
          <Route path="/Ujjain" element={<Ujjain />} />

          <Route path="/Comedians" element={<Comedians />} />
          <Route path="/ArtistDetail" element={<ArtistDetail />} />
          <Route path="/ArtistDetail1" element={<ArtistDetail1 />} />
          <Route path="/ArtistDetail2" element={<ArtistDetail2 />} />
          <Route path="/ArtistDetail3" element={<ArtistDetail3 />} />
          <Route path="/ArtistDetail4" element={<ArtistDetail4 />} />









          <Route path="/IndoreCity" element={<IndoreCity />} />
          <Route path="/BhopalCity" element={<BhopalCity />} />
          <Route path="/GwaliorCity" element={<GwaliorCity />} />
          {/* <Route path="/JabalpurCity" element={<JabalpurCity />} /> */}
          
          
          
          <Route path="/UjjainCity" element={<UjjainCity />} />
          
          
          
          {/* <Route path="/EventPopup" element={<EventPopup />} /> */}

          
          
          
          
          
          <Route path="/BasicDetail" element={<BasicDetail />} />
          <Route path="/PrfoInfo" element={<PrfoInfo />} />
          <Route path="/AddInfo" element={<AddInfo />} />
          <Route path="/MediaUpload" element={<MediaUpload />} />
          <Route path="/EditArtistProfile" element={<EditArtistProfile />} />
          <Route path="/newsblog" element={<NewsBlog />}  />
         <Route path="/EventBookingModel1" element={<EventBookingModel1 />} /> 
         <Route path="/EventBookingModel2" element={<EventBookingModel2 />} /> 
         <Route path="/EventBookingModel3" element={<EventBookingModel3 />} /> 
         <Route path="/EventBookingModel4" element={<EventBookingModel4 />} /> 
         <Route path="/EventBookingModel5" element={<EventBookingModel5 />} /> 
         <Route path="/EventBookingModel6" element={<EventBookingModel6 />} /> 
         <Route path="/EventBookingModel7" element={<EventBookingModel7 />} /> 
         <Route path="/EventBookingModel8" element={<EventBookingModel8 />} /> 
 
         
         
         
         
         
         
         
         
         
         {/* <Route path="/EventBookingModel9" element={<EventBookingModel9 />} /> 
         <Route path="/EventBookingModel10" element={<EventBookingModel10 />} /> 
         <Route path="/EventBookingModel11" element={<EventBookingModel11 />} /> 
         <Route path="/EventBookingModel12" element={<EventBookingModel12 />} /> 
         <Route path="/EventBookingModel13" element={<EventBookingModel13 />} /> 


         <Route path="/EventBookingModel14" element={<EventBookingModel14 />} /> 
         <Route path="/EventBookingModel15" element={<EventBookingModel15 />} /> 
         <Route path="/EventBookingModel16" element={<EventBookingModel16 />} /> 
         <Route path="/EventBookingModel17" element={<EventBookingModel17 />} />  */}



           
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
