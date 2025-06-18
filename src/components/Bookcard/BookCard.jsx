import React from "react";
import "./BookCard.css";

import volunteer from './assets3/volunteer.jpeg';
import Bookartists from './assets3/Bookartists.jpeg';
import renteventequipment from './assets3/renteventequipment.jpeg';
import eventplanner from './assets3/planner.jpeg';
import bookeventvenue from './assets3/bookeventvenue.webp';

export default function BookCard() {
  const cardData = [
           {
      img: eventplanner,
      title: "Event Planner",
      btn: "Book Now",
      link: "/EventPlanner",
    },
        {
      img: Bookartists,
      title: "Book Artists",
      btn: "Book Now",
      link: "/ArtistBooking",
    },
       {
      img: bookeventvenue,
      title: "Book Event Venue",
      btn: "Book Now",
      link:  "/ComingPage",
    },
        {
      img: volunteer,
      title: "Book Volunteer",
      btn: "Book Now",
      link: "/VolunteerBooking"
    },
        {
      img: renteventequipment,
      title: "Rent Event Equipment",
      btn: "Book Now",
      link: "/ComingPage",
    },

  ];  

  return (
    <div className="container-fluid kappp">
      <div className="container bookcard-wrapper py-5">
        <h2 className="section-title mb-5 fw-bold">What We Offer</h2>
        <div className="row justify-content-center px-3 px-md-0">
          {cardData.map((card, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-around mb-4"
              key={index}
            >
              <div className="card-custom">
                <img src={card.img} alt={card.title} className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <a href={card.link} className="btn-custom text-white">
                    {card.btn}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
