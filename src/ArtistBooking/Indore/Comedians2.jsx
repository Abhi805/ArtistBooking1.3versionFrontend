import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Comedians2.css";
import { Link, useNavigate } from "react-router-dom";

import artist from "./assets33/artist.jpg";
import artist1 from "./assets33/artist1.jpeg";
import artist2 from "./assets33/artist2.jpeg";
import artist3 from "./assets33/artist3.jpg";
import artist4 from "./assets33/artist4.jpeg";
import artist5 from "./assets33/artist5.jpg";
import artist6 from "./assets33/artist6.webp";
import artist7 from "./assets33/artist7.jpeg";
import artist8 from "./assets33/artist8.jpg";
import artist9 from "./assets33/artist9.webp";
import artist10 from "./assets33/artist10.jpeg";
import artist11 from "./assets33/artist11.jpeg";
import artist12 from "./assets33/artist12.jpeg";
import artist13 from "./assets33/artist13.jpeg";
import artist14 from "./assets33/artist14.jpeg";
import artist15 from "./assets33/artist15.jpeg";

const Comedians = () => {
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
          image: artist,
          rating: "4.5★",
          reviews: "1010",
          duration: "90-100 Mins",
        },
        {
          name: "Ayush Rojariya",
          image: artist1,
          rating: "4.5★",
          reviews: "1010",
          duration: "90-100 Mins",
        },
        {
          name: "Shahab Masoom",
          image: artist2,
          rating: "4.6★",
          reviews: "1375",
          duration: "90-130 Mins",
        },
        {
          name: "Hemesh Raj",
          image: artist3,
          rating: "4.4★",
          reviews: "1578",
          duration: "85-120 Mins",
        },
        {
          name: "Dhruv chorasiya",
          image: artist4,
          rating: "4.6★",
          reviews: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Akshay Raykwar",
          image: artist5,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "ShridharNagraj",
          image: artist6,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Pooja Thakre",
          image: artist7,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Shashwat Singh",
          image: artist8,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Dance Troupe",
          image: artist9,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Asad Khan ",
          image: artist10,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Boby Chorasiya",
          image: artist11,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Sardul Pandit",
          image: artist12,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Shrey Mittal",
          image: artist13,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Las Cury",
          image: artist14,
          rating: "4.6★",
          review: "1027",
          duration: "75-100 Mins",
        },
        {
          name: "Sanjay kumar",
          image: artist15,
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
                      src={artist.image}
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

export default Comedians;
