import React from "react";
import "./BookCard.css";

import OrganizeConference from './assets3/gop.jpg';
import Bookartists from './assets3/Bookartists.jpeg';
import renteventequipment from './assets3/renteventequipment.jpeg';
import plancorporateoffsite from './assets3/plancorporateoffsite.jpg';
import bookeventvenue from './assets3/bookeventvenue.webp';
import corporateteambuilding from './assets3/corporateteambuilding.jpg';

export default function BookCard() {
  const cardData = [
    {
      img: OrganizeConference,   
      title: "Organize Conference",
      text: "Host a flawless conference! Our expert planning ensures smooth execution.",
      btn: "Book Now",
    },
    {
      img: Bookartists,
      title: "Book Artists",
      text: "Make your event unforgettable! Book top artists, live bands, and more.",
      btn: "Book Now",
      
    },
    {
      img: renteventequipment,
      title: "Rent Event Equipment",
      text: "Get everything you need for your event! From sound and lighting to decor.",
      btn: "Book Now", 
    },
    {
      img: plancorporateoffsite,
      title: "Plan Corporate Offsite",
      text: "Plan the perfect corporate offsite with exciting destinations and agendas.",
      btn: "Book Now",
    },
    {
      img: bookeventvenue,
      title: "Book Event Venue",
      text: "Find the right venue hassle-free! Whether it's a wedding or seminar.",
      btn: "Book Now",
    },
    {
      img: corporateteambuilding,
      title: "Corporate Team Building",
      text: "Bring your team closer! Fun and engaging activities designed to bond.",
      btn: "Book Now",
    },
  ];

  return (
    <div style={{margin:"0px"}} className="container-fluid bookcard-wrapper py-5">
      <div className="row px-md-5 px-3">
        {cardData.map((card, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center"
            key={index}
          >
            <div className="card-custom">
              <img src={card.img} alt={card.title} className="card-img" />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href="#" className="btn-custom">
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
