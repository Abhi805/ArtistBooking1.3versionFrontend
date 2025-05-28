import React from "react";
import "./Services.css";

import volunteer from '../Services/volunteer.jpeg';
import bookArtists from '../Services/Bookartists.jpeg';
import rentEquipment from '../Services/renteventequipment.jpeg';
import planner from '../Services/planner.jpeg';
import bookVenue from '../Services/bookeventvenue.webp';

const services = [
  {
    img: volunteer,
    title: "Volunteers",
    desc: "Ensure smooth and professional execution of your event with our trained volunteers. From guest handling and backstage coordination to registration desks and crowd management, GNV India Entertainment provides skilled and well-groomed volunteers who act as the backbone of every successful event. Let our support team bring structure, energy, and professionalism to your occasion.",
    link: "/VolunteerBooking"
  },
  {
    img: bookArtists,
    title: "Artists",
    desc: "Make your event unforgettable by booking top-tier artists from across India. Whether you need singers, dancers, stand-up comedians, anchors, DJs, or celebrity performers — GNV India Entertainment connects you with talent that elevates every celebration. We curate performers based on your theme, audience, and vibe to deliver a show that leaves lasting impressions.",
    link: "/Bhopal"
  },
  {
    img: rentEquipment,
    title: "Rent Event Equipment",
    desc: "Power your event with top-quality equipment delivered and managed seamlessly. From professional sound systems, lighting rigs, LED walls, projectors, trussing, and staging to generators and décor tech — GNV India Entertainment offers a complete range of rental solutions. We ensure timely setup, on-site support, and reliable performance so your event runs flawlessly.",
    link: "/EventRental"
  },
  {
    img: planner,
    title: "Hire Event Planners",
    desc: "From concept to celebration — we plan it all. GNV India Entertainment specializes in curating unforgettable experiences with meticulous planning, creative themes, and flawless execution. Whether it’s a wedding, corporate event, concert, or private party, our planners handle everything — venue, vendors, design, logistics, and guest management — so you enjoy your event stress-free.",
    link: "/EventPlanner"
  },
  {
    img: bookVenue,
    title: "Event Venues",
    desc: "Find the perfect venue for your perfect event — faster and easier with GNV India Entertainment. We offer access to a wide network of premium venues across India, from lavish banquet halls and open lawns to resorts, heritage properties, and luxury hotels. Based on your budget, theme, and guest size, we help you shortlist, visit, and book the ideal location to match your vision.",
    link: "/BhopalCity"
  },
];

export default function Services() {
  return (
    <div className="services-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">Our Services</h2>
        {services.map((service, index) => (
          <div
            className={`row service-row align-items-center mb-5 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
            key={index}
          >
            <div className="col-md-6 mb-3 mb-md-0">
              <img src={service.img} alt={service.title} className="img-fluid service-img rounded" />
            </div>
            <div className="col-md-6">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <a href={service.link} className="btn btn-custom mt-3">Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
