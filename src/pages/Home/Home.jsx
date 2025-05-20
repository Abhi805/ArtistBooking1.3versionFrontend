import React from "react";
import "./Home.css"; 

import HeroSection from "../../components/HeroSection/HeroSection";
import CorporateEventPlanner from "../../components/CorporateEventPlanner/CorporateEventPlanner";
import Bookcard from "../../components/Bookcard/BookCard";
import EventPlanner from "../../components/EventPlanner/EventPlanner";
import PastEvent from "../../components/PastEvent/PastEvent";
import EventManagment from "../../components/EventManagment/EventManagment";
import ArtistSlider from "../../components/ArtistSlider/ArtistSlider";
import TrustCompany from "../../components/TrustCompany/TrustCompany";
import EquipmentSection from "../../components/EquipmentSection/EquipmentSection";
import PlanningEvent from "../../components/PlanningEvent/PlanningEvent";
import ClientFeedBack from "../../components/ClientFeedBack/ClientFeedBack";
import ExpertPlanner from "../../components/ExpertPlanner/ExpertPlanner";
import Faq from "../../components/Faq/Faq";
import BlogPosts from "../../components/BlogPost/BlogPosts";
import OnlineBooking from "../../components/OnlineBooking/OnlineBooking";

const Home = () => {   
  return (    
    <div className="container-fluid" style={{ padding: "0px" }}>
      <HeroSection />
      <div className="mt-5 mb-5" >      
        <CorporateEventPlanner  />
      </div>
      <div style={{padding:"0px"}} className="container-fluid">
        <Bookcard />
      </div>     
      <div>
        <EventPlanner />
      </div> 
      <div className="mb-5" > 
        <PastEvent />  
      </div>
      <div>
        <EventManagment />
      </div>
      <div>
        <ArtistSlider />
      </div>
      <div className="mb-5">
        <TrustCompany />
      </div>
      <div>
        <EquipmentSection />
      </div>
      <div>
        <PlanningEvent />
      </div>
      <div>
        <ExpertPlanner/>
      </div>
      <div>  
        <ClientFeedBack/>
      </div>
      <div>
        <Faq/>
      </div>   
      <div> 
        <BlogPosts/>
      </div>
      <div>
        <OnlineBooking/>
      </div>
    </div>
  );
};

export default Home;