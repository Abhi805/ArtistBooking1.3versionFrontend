


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

// Image imports
import image1 from "../../assets/Govermentimage.jpg";
import image2 from "../../assets/corporateimage.jpg";
import image3 from "../../assets/culturalimage.webp";
import image4 from "../../assets/sportimage.jpg";
import image5 from "../../assets/roadshowimage.jpg";
import image6 from "../../assets/presconferenceimage.jpg";
import image7 from "../../assets/exhibitionsimage.jpg";
import image8 from "../../assets/celebritymanagement.jpg";
import image9 from "../../assets/promotionaactivites.png";
import image10 from "../../assets/artistimages.jpg";
import image11 from "../../assets/entertainmentevents.jpg";
import image12 from "../../assets/modelcorpo.avif";
import image13 from "../../assets/brandimage.gif";
import image14 from "../../assets/eventmanagment.jpg";
import image15 from "../../assets/weddingplanning.jpg";
import image16 from "../../assets/themeParties.avif";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const services = [
    {
      title: "Govt. Events",
      description:
        "Expert coordination with over 200 dedicated teams for high-scale public and official events.",
      image: image1,
    },
    {
      title: "Corporate Events",
      description:
        "Professional planning with access to the best venues and flawless execution tailored to your brand.",
      image: image2,
    },
    {
      title: "Cultural Events",
      description:
        "Creative, theme-based programs that showcase traditions with a modern touch — we truly think out of the box.",
      image: image3,
    },
    {
      title: "Sports Events",
      description:
        "From planning to promotion, we deliver energetic and well-organized sporting events.",
      image: image4,
    },
    {
      title: "Road Shows",
      description:
        "Impactful and mobile brand promotion with strategic planning and vibrant presentation.",
      image: image5,
    },
    {
      title: "Press Conference",
      description:
        "Organized with professionalism — from venue selection to media coordination.",
      image: image6,
    },
    {
      title: "Exhibitions",
      description:
        "End-to-end management of exhibitions with smooth logistics and impressive displays.",
      image: image7,
    },
    {
      title: "Celebrity Management",
      description:
        "We arrange appearances and performances by Bollywood stars, TV actors, and sports personalities.",
      image: image8,
    },
    {
      title: "Promotional Activities",
      description:
        "From product launches to brand activations — creative ideas that drive real results.",
      image: image9,
    },
    {
      title: "Artist Management",
      description:
        "Booking and managing international and national artists for every type of event.",
      image: image10,
    },
    {
      title: "Entertainment Events",
      description: "Organizing unforgettable live musical experiences.",
      image: image11,
    },
    {
      title: "Model Coordination",
      description:
        "We provide professional models and manage everything for fashion shows, campaigns, and more.",
      image: image12,
    },
    {
      title: "Brand Management",
      description:
        "We shape and promote your brand through strategic events and activations.",
      image: image13,
    },
    {
      title: "Event Management",
      description:
        "One-stop solution for any and every type of event, handled from concept to completion.",
      image: image14,
    },
    {
      title: "Wedding Planning",
      description:
        "Your dream wedding, anywhere, anytime — designed with elegance and handled with care.",
      image: image15,
    },
    {
      title: "Theme Parties",
      description:
        "Million ideas, one goal: fun-filled, unforgettable parties personalized to your taste.",
      image: image16,
    },
  ];

  return (  
    <div className="containerpx-4">
      <div className="row">
      <div className="col">
       <div className="service-page">
        <section className="service-hero text-white text-center py-5">
        <h1 className="fw-bold" data-aos="fade-down">
            Plan Your Event with Us
          </h1>
          <p className="mt-3 text-white" data-aos="fade-up">
            From planning to execution, we handle it all — so you can enjoy every moment stress-free.
            Your vision, our expertise — a perfect event, every time.
          </p>
        </section>
       </div>
       </div>
      </div>
   
 <section className="services-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" data-aos="fade-down">
          <span style={{color:"red"}}>Our Services</span>
        </h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-lg-3 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="service-card p-4 text-center h-100 shadow-sm bg-white rounded">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-icon mb-3 img-fluid rounded"
                    style={{ height: "150px", objectFit: "cover", width: "100%" }}
                  />
                )}
                <h5 className="fw-bold mb-2">{service.title}</h5>
                <p className="text-muted small">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div> 
  );
}
