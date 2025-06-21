// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./App.css";

// import EventPopup from "./components/EventPopup/EventPopup";
// import AboutUs from "./pages/AboutUs/About";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home/Home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
// import Login from "./pages/Login/Login";
// import Signup from "./pages/SignUp/SignUp";
// import VendorRegistration from "./pages/VendorRegistration/VendorRegistration";

// import ArtistBooking from "./ArtistBooking/ArtistBooking/ArtistBooking";

// import RentalDetail from "./pages/EventRental/RentalDetail";
// import PlannerProfile from "./pages/EventPlanner/PlannerProfile";
// import EventPlannerForm from "./pages/EventPlanner/EventPlannerForm";
// import VolunteerForm from "./pages/VolunteerBooking/VolunteerForm";
// import VolunteerProfile from "./pages/VolunteerBooking/VolunteerProfile";
// import EventRentalForm from "./pages/EventRental/EventRentalForm";

// import ArtistDetail2 from "./ArtistBooking/ArtistBooking/ArtistDetail2";

// import IndoreCity from "./VenueBooking/IndoreCity/IndoreCity";
// import BhopalCity from "./VenueBooking/BhopalCity/BhopalCity";

// import GwaliorCity from "./VenueBooking/GwaliorCity/GwaliorCity";
// import UjjainCity from "./VenueBooking/UjjainCity/UjjainCity";
// import BasicDetail from "./CreateArtistProfile/BasicDetail/BasicDetail";
// import EditArtistProfile from "./CreateArtistProfile/EditArtistProfile/EditArtistProfile";
// import TopNavbar from "./components/TopNavbar/TopNavbar";
// import ComingPage from "./components/ComingPage/ComingPage";
// import SocialSidebar from "./components/SocialSidebar/SocialSidebar";
// import ContactWidget from "./components/ContactWidget/ContactWidget";
// import Services from "./pages/Services/Services";  
// import EventRental from "./pages/EventRental/EventRental";

// import EventPlanner from "./pages/EventPlanner/EventPlanner";
// import ContactUs from "./pages/Contact Us/ContactUs";
// import VolunteerBooking from "./pages/VolunteerBooking/VolunteerBooking";
// import { ScrollProvider } from "./components/ScrollTriger/ScrollTrigger";
// import NewsBlog from "./pages/NewsandBlog/NewsBlog";
// import EventBookingModel1 from "./VenueBooking/IndoreCity/BookingMode1l/EventBookingModel1";
// import EventBookingModel2 from "./VenueBooking/IndoreCity/BookingModel2/EventBookingModel2";
// import EventBookingModel3 from "./VenueBooking/IndoreCity/BookingModel3/EventBookingModel3";
// import EventBookingModel4 from "./VenueBooking/IndoreCity/BookingModel4/EventBookingModel4";
// import EventBookingModel5 from "./VenueBooking/IndoreCity/BookingModel5/EventBookingModel5";
// import EventBookingModel6 from "./VenueBooking/IndoreCity/BookingModel6/EventBookingModel6";
// import EventBookingModel7 from "./VenueBooking/IndoreCity/BookingModel7/EventBookingModel7";
// import EventBookingModel8 from "./VenueBooking/IndoreCity/BookingModel8/EventBookingModel8";
// import AdminArtistDashboard from "./AdminDashBoard/AdminArtistDashboard";
// import ArtistApprovalDetail from "./AdminDashBoard/ArtistApprovalDetail";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import MyDashboardRedirect from "./pages/MyDashboardRedirect/MyDashboardRedirect";
// import ThankYou from "./pages/ThankYou/ThankYou.jsx"; // import karo
// import VenueBooking from "./VenueBooking/VenueBooking";
// import VolunteerEditForm from "./pages/VolunteerBooking/VolunteerEditForm/VolunteerEditForm";
// import ArtistProfileEdit from "./pages/MyBoard/ArtistProfileEdit";
// function App() {
//   return (
//     <>
//       <Router>
//         <EventPopup />
//         <TopNavbar />
//         <Navbar />
//         <ScrollProvider>
//           <SocialSidebar />
//           <ContactWidget />
//         </ScrollProvider>

//         <Routes>
//           <Route path="/" element={<Home />} />

//           {/* Protected Router*/}
//           <Route
//             path="/AdminDashboard"
//             element={
//               <ProtectedRoute>
//                 <AdminArtistDashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/artistko/:id"
//             element={
//               <ProtectedRoute>
//                 <ArtistApprovalDetail />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/BasicDetail"
//             element={
//               <ProtectedRoute>
//                 <BasicDetail />{" "}
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/user-dashboard"
//             element={
//               <ProtectedRoute>
//                 <ArtistProfileEdit />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/VolunteerForm"
//             element={
//               <ProtectedRoute>
//                 <VolunteerForm />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/MyDashBoard"
//             element={
//               <ProtectedRoute>
//                 <MyDashboardRedirect />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/volunteer/edit/:id"
//             element={
//               <ProtectedRoute>
//                 <VolunteerEditForm />
//               </ProtectedRoute>
//             }
//           />

//           {/*Protected Router*/}

//           <Route path="/AboutUs" element={<AboutUs />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/Services" element={<Services />} />
//           <Route path="/ContactUs" element={<ContactUs />} />
//           <Route path="/ComingPage" element={<ComingPage />} />
//           <Route path="/thank-you" element={<ThankYou />} />

//           <Route path="/EventEquipmentRental" element={<EventRental />} />
//           <Route path="/EventPlanner" element={<EventPlanner />} />
//           <Route path="/Registration" element={<VendorRegistration />} />
//           <Route path="/ArtistBooking" element={<ArtistBooking />} />
//           <Route path="/RentalDetail" element={<RentalDetail />} />
//           <Route path="/PlannerProfile" element={<PlannerProfile />} />
//           <Route path="/EventPlannerForm" element={<EventPlannerForm />} />

//           <Route path="/volunteers/:id" element={<VolunteerProfile />} />
//           <Route path="/VenueBooking" element={<VenueBooking />} />

//           <Route path="/EventRentalForm" element={<EventRentalForm />} />
//           <Route path="/artist/:id" element={<ArtistDetail2 />} />
//           <Route path="/IndoreCity" element={<IndoreCity />} />
//           <Route path="/BhopalCity" element={<BhopalCity />} />
//           <Route path="/GwaliorCity" element={<GwaliorCity />} />
//           <Route path="/UjjainCity" element={<UjjainCity />} />
//           <Route path="/EditArtistProfile" element={<EditArtistProfile />} />
//           <Route path="/newsblog" element={<NewsBlog />} />
//           <Route path="/EventBookingModel1" element={<EventBookingModel1 />} />
//           <Route path="/EventBookingModel2" element={<EventBookingModel2 />} />
//           <Route path="/EventBookingModel3" element={<EventBookingModel3 />} />
//           <Route path="/EventBookingModel4" element={<EventBookingModel4 />} />
//           <Route path="/EventBookingModel5" element={<EventBookingModel5 />} />
//           <Route path="/EventBookingModel6" element={<EventBookingModel6 />} />
//           <Route path="/EventBookingModel7" element={<EventBookingModel7 />} />
//           <Route path="/EventBookingModel8" element={<EventBookingModel8 />} />
//           <Route path="/Volunteer" element={<VolunteerBooking />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;





// App.jsx
import React from "react";
import ComingSoon from "./pages/ComingSoon/ComingSoon.jsx";

const App = () => {
  return (
    <>
      <ComingSoon />
    </>
  );
};

export default App;
