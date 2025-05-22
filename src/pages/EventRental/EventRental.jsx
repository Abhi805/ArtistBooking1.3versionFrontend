import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./EventRental.css";
import { Link, useNavigate } from "react-router-dom";


import Eq1 from "./Eqimage/Eq1.jpg";
import Eq2 from "./Eqimage/Eq2.jpg";
import Eq3 from "./Eqimage/Eq3.jpg";
import Eq4 from "./Eqimage/Eq4.jpg";
import Eq5 from "./Eqimage/Eq5.jpg";
import Eq6 from "./Eqimage/Eq6.jpg";
import Eq7 from "./Eqimage/Eq7.jpg";
import Eq8 from "./Eqimage/Eq8.jpg";
import Eq9 from "./Eqimage/Eq9.jpg";
import Eq10 from "./Eqimage/Eq10.jpg";
import Eq11 from "./Eqimage/Eq11.jpg";
import Eq12 from "./Eqimage/Eq12.jpg";
import Eq13 from "./Eqimage/Eq13.jpg";
import Eq14 from "./Eqimage/Eq14.jpg";
import Eq15 from "./Eqimage/Eq15.jpg";
import Eq16 from "./Eqimage/Eq16.jpg";
import Eq17 from "./Eqimage/Eq17.jpg";
import Eq18 from "./Eqimage/Eq18.jpg";
import Eq19 from "./Eqimage/Eq19.jpg";
import Eq20 from "./Eqimage/Eq20.jpg";
import Eq21 from "./Eqimage/Eq21.jpg";

const EventRental = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const navigate = useNavigate();

  const artistData = [
    {
      title: "Book The Best Live Band For Events And Weddings In Bhopal",
      artists: [
        {
          name: "Dr. Anjana Jha",
          image: Eq1,
          rating: "4.5★",
          reviews: "1010",
          duration: "90-100 Mins",
        },
        {
          name: "Ayush Rojariya",
          image: Eq2,
          rating: "4.5★",
          reviews: "1010",
          duration: "90-100 Mins",
        },
        {
          name: "Shahab Masoom",
          image: Eq3,
          rating: "4.6★",
          reviews: "1375",
          duration: "90-130 Mins",
        },
        {
          name: "Hemesh Raj",
          image: Eq4,
          rating: "4.4★",
          reviews: "1578",
          duration: "85-120 Mins",
        },
        {
          name: "Dhruv chorasiya",
          image: Eq5,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Akshay Raykwar",
          image: Eq6,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "ShridharNagraj",
          image: Eq7,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Pooja Thakre",
          image: Eq8,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Shashwat Singh",
          image:  Eq9,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Dance Troupe",
          image: Eq10,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Asad Khan ",
          image: Eq11,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Boby Chorasiya",
          image:Eq12,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Sardul Pandit",
          image: Eq13,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Shrey Mittal",
          image: Eq14,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Las Cury",
          image: Eq15,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Sanjay kumar",
          image: Eq16,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Sanjay kumar",
          image: Eq17,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Sanjay kumar",
          image: Eq18,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Sanjay kumar",
          image: Eq19,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Sanjay kumar",
          image: Eq20,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Sanjay kumar",
          image: Eq21,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
      ],
    },
  ];

  return (
    
          
       <div className="container my-5">
        {artistData.map((section, index) => (
          <div key={index} className="mb-5" data-aos="fade-up">
            <h5 className="fw-bold mb-4">{section.title}</h5>
            <div className="row">
              {section.artists.map((artist, i) => (
                <div key={i} className="col-md-3 mb-4">
                  <div className="card artist-card h-100 shadow-sm">
                    <img
                      src={Eq1}
                      className="card-img-top"
                      alt={artist.name}
                    />
                    <div className="card-body">
                      <h6 className="card-title fw-bold">{artist.name}</h6>
                      <p className="text-muted mb-1">
                        ⭐ {artist.rating} ({artist.reviews} Reviews)
                      </p>
                      <p className="text-muted small">
                        Performance Duration: {artist.duration}
                      </p>
                      <button className="btn btn-danger btn-sm">
                        BOOK NOW
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link className="btn btn-outline-danger" to="/Comedians">
                View More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    
  );
};

export default EventRental;
