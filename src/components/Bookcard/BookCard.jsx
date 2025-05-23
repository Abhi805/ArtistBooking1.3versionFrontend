import React from "react";
import "./BookCard.css";

import OrganizeConference from './assets3/gop.jpg';
import Bookartists from './assets3/Bookartists.jpeg';
import renteventequipment from './assets3/renteventequipment.jpeg';
import plancorporateoffsite from './assets3/plancorporateoffsite.jpg';
import bookeventvenue from './assets3/bookeventvenue.webp';

export default function BookCard() {
  const cardData = [
    {
      img: OrganizeConference,   
      title: "Book Volunteer",
      btn: "Book Now",
    },
    {
      img: Bookartists,
      title: "Book Artists",   
      btn: "Book Now",
    },
    {
      img: renteventequipment,
      title: "Rent Event Equipment",
      btn: "Book Now", 
    },
    {
      img: plancorporateoffsite,
      title: "Event Planner",
      btn: "Book Now",
    },
    {
      img: bookeventvenue,
      title: "Book Event Venue",
      btn: "Book Now",
    },
  ];

  return (
    <div className="container bookcard-wrapper py-5">
     {/* 👇 Add your heading here */}
   <h2 className="section-title mb-5 fw-bold">
    What We Offer
    </h2>
       <div className="row justify-content-center px-3 px-md-0">
        {cardData.slice(0, 3).map((card, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4"
            key={index}
          >
            <div className="card-custom">
              <img src={card.img} alt={card.title} className="card-img" />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <a href="#" className="btn-custom text-white">
                  {card.btn}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row justify-content-center px-3 px-md-0">
        {cardData.slice(3).map((card, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4"
            key={index + 3}
          >
            <div className="card-custom">
              <img src={card.img} alt={card.title} className="card-img" />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <a href="#" className="btn-custom text-white">
                  {card.btn}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
