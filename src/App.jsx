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
import ArtistBooking from "./ArtistBooking/ArtistBooking/ArtistBooking";
import RentalDetail from "./pages/EventRental/RentalDetail";
import PlannerProfile from "./pages/EventPlanner/PlannerProfile";
import EventPlannerForm from "./pages/EventPlanner/EventPlannerForm";
import VolunteerForm from "./pages/VolunteerBooking/VolunteerForm";
import VolunteerProfile from "./pages/VolunteerBooking/VolunteerProfile";
import EventRentalForm from "./pages/EventRental/EventRentalForm";
import ArtistDetail2 from "./ArtistBooking/ArtistBooking/ArtistDetail2";
import BasicDetail from "./CreateArtistProfile/BasicDetail/BasicDetail";
import EditArtistProfile from "./CreateArtistProfile/EditArtistProfile/EditArtistProfile";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import ComingPage from "./components/ComingPage/ComingPage";
import SocialSidebar from "./components/SocialSidebar/SocialSidebar";
import ContactWidget from "./components/ContactWidget/ContactWidget";
import Services from "./pages/Services/Services";  
import EventRental from "./pages/EventRental/EventRental";
import EventPlanner from "./pages/EventPlanner/EventPlanner";
import ContactUs from "./pages/Contact Us/ContactUs";
import VolunteerBooking from "./pages/VolunteerBooking/VolunteerBooking";
import { ScrollProvider } from "./components/ScrollTriger/ScrollTrigger";
import NewsBlog from "./pages/NewsandBlog/NewsBlog";

import AdminArtistDashboard from "./AdminDashBoard/AdminArtistDashboard";
import ArtistApprovalDetail from "./AdminDashBoard/ArtistApprovalDetail";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import MyDashboardRedirect from "./pages/MyDashboardRedirect/MyDashboardRedirect";
import ThankYou from "./pages/ThankYou/ThankYou.jsx"; // import karo

import VolunteerEditForm from "./pages/VolunteerBooking/VolunteerEditForm/VolunteerEditForm";
import ArtistProfileEdit from "./pages/MyBoard/ArtistProfileEdit";
import VenueBooking from "./VenueBooking/VenueBooking.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton.jsx";

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
          <ScrollToTopButton/>
        </ScrollProvider>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Protected Router*/}
          <Route
            path="/AdminDashboard"
            element={
              <ProtectedRoute>
                <AdminArtistDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/artistko/:id"
            element={
              <ProtectedRoute>
                <ArtistApprovalDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/BasicDetail"
            element={
              <ProtectedRoute>
                <BasicDetail />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute>
                <ArtistProfileEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="/VolunteerForm"
            element={
              <ProtectedRoute>
                <VolunteerForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/MyDashBoard"
            element={
              <ProtectedRoute>
                <MyDashboardRedirect />
              </ProtectedRoute>
            }
          />
          <Route
            path="/volunteer/edit/:id"
            element={
              <ProtectedRoute>
                <VolunteerEditForm />
              </ProtectedRoute>
            }
          />

          {/*Protected Router*/}

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/ComingPage" element={<ComingPage />} />
          <Route path="/thank-you" element={<ThankYou />} />

          <Route path="/EventEquipmentRental" element={<EventRental />} />
          <Route path="/EventPlanner" element={<EventPlanner />} />
          <Route path="/Venuebooking" element={<VenueBooking />} />
          <Route path="/Registration" element={<VendorRegistration />} />
          <Route path="/ArtistBooking" element={<ArtistBooking />} />
          <Route path="/RentalDetail" element={<RentalDetail />} />
           <Route path="/PlannerProfile" element={<PlannerProfile />} />
          <Route path="/EventPlannerForm" element={<EventPlannerForm />} />
          <Route path="/volunteers/:username" element={<VolunteerProfile />} />
          {/* <Route path="/volunteers/:id" element={<VolunteerProfile />} /> */}
 
          <Route path="/EventRentalForm" element={<EventRentalForm />} />
          <Route path="/artist/:id" element={<ArtistDetail2 />} />
        
          <Route path="/EditArtistProfile" element={<EditArtistProfile />} />
          <Route path="/newsblog" element={<NewsBlog />} />
          <Route path="/Volunteer" element={<VolunteerBooking />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;





// App.jsx
// import React from "react";
// import ComingSoon from "./pages/ComingSoon/ComingSoon.jsx";

// const App = () => {
//   return (
//     <>
//       <ComingSoon />
//     </>
//   );
// };

// export default App;



