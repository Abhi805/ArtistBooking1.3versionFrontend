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
import Eq22 from "./Eqimage/Eq22.jpg";
import Eq23 from "./Eqimage/Eq23.jpg";
import Eq24 from "./Eqimage/Eq24.jpg";

const EventRental = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const navigate = useNavigate();

  const artistData = [
    {
      artists: [
        {
          name: "Audio Interfaces And Di Boxes",
          image: Eq1,
          rating: "4.5★",
          reviews: "1010",
          Suitablefor:
            "Conference,Seminar,Concerts,Corporate Events,College Fest ,DJ Night...",
        },
        {
          name: "Audio Mixing Console",
          image: Eq2,
          rating: "4.5★",
          reviews: "1010",
          Suitablefor:
            "to control and balance audio levels of singers, bands, or DJs",
        },
        {
          name: "Field Audio MixerRecorder (Zoom F-Control or similar)",
          image: Eq3,
          rating: "4.6★",
          reviews: "1375",
          Suitablefor:
            "For recording live performances directly from stage mics",
        },
        {
          name: "Headphone",
          image: Eq4,
          rating: "4.4★",
          reviews: "1578",
          Suitablefor:
            "Used by sound engineers, musicians, and DJs to monitor and mix audio accurately.",
        },
        {
          name: "Intercom System",
          image: Eq5,
          rating: "4.6★",
          reviews: "1027",
          Suitablefor:
            " Used by event crew to coordinate backstage, lighting, and sound operations.",
        },
        {
          name: "Laptop",
          image: Eq6,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            "High-performance laptops are used for music production, film editing, and design.",
        },
        {
          name: "Laptop",
          image: Eq7,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            "High-performance laptops are used for music production, film editing, and design.",
        },
        {
          name: "Lights",
          image: Eq8,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            "To enhance stage presence, audience experience, and ambiance (weddings, concerts, parties).",
        },
        {
          name: "Colour Lights",
          image: Eq9,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            " For decoration, stage lighting, and dance floor effects.",
        },
        {
          name: "Mic",
          image: Eq10,
          rating: "4.6★",
          review: "1027",
          Suitablefor: "For vocal performances, speeches, and announcements.",
        },
        {
          name: "Microphone With Headphone",
          image: Eq11,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            "For clear voice capture while monitoring audio in real-time.",
        },
        {
          name: "Pioneer DJ Controller (CDJ + DJM Mixer)",
          image: Eq12,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            " DJs use it to perform live sets and mix tracks seamlessly.",
        },
        {
          name: "Mic",
          image: Eq13,
          rating: "4.6★",
          review: "1027",
          Suitablefor: "For vocal performances, speeches, and announcements.",
        },
        {
          name: "Smoke Machine",
          image: Eq14,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            " To add drama and highlight light beams or laser effects.",
        },
        {
          name: "Smoke Machine",
          image: Eq15,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            "Powerful output with a quick warm-up,Remote control included for easy operation",
        },
        {
          name: "Speaker",
          image: Eq16,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            "Studio monitors are used for accurate sound playback during mixing and mastering.",
        },
        {
          name: "Speakers And Wireless Mic",
          image: Eq17,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            "Speakers convert electrical audio signals into sound to amplify music, speech, or any audio for listeners.",
        },
        {
          name: "Speakers",
          image: Eq18,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            "large-sized loudspeakers designed to deliver high power and loud sound output for big venues and outdoor events.",
        },
        {
          name: "Stage Lighting",
          image: Eq19,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            " Ensures performers and key elements are clearly seen by the audience.",
        },
        {
          name: "Stage Lights",
          image: Eq20,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            " Ensures performers and key elements are clearly seen by the audience.",
        },
        {
          name: "Studio Condenser Microphone",
          image: Eq21,
          rating: "4.6★",
          review: "1027",
          Suitablefor: "For singing, voice-overs, podcasts, and broadcasting.",
        },
        {
          name: "Audio Visual Equipment Setup",
          image: Eq22,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            "Cables & Accessories Control Systems Visual Equipment Audio Equipment",
        },
        {
          name: "Stage Sound System Package",
          image: Eq23,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            "A Stage Sound System Package is a complete set of audio equipment designed to provide clear, powerful, and balanced sound reinforcement for live performances on stage.",
        },
        {
          name: "Sound Package Rental",
          image: Eq24,
          rating: "4.6★",
          review: "1027",
          Suitablefor:
            "Sound Package Rental refers to renting a complete set of audio equipment for events, including speakers, microphones, mixers, amplifiers, and accessories, for temporary use",
        },
      ],
    },
  ];

  return (
    <div className="container-fluid my-5">
      <div className="venue-header text-white">
        <div className="container">
          <h1>Event Equipment Rental</h1> 
          <p className="text-capitalize text-white">
            Welcome to Make your event truly spectacular with our top-quality
            event equipment on rent. From professional sound systems, dazzling
            lighting setups, LED walls, trussing, projectors to stage décor
            elements – we provide everything you need to elevate your event
            experience.
          </p>
             <Link to="/EventRentalForm">
                   <button className="btn btn-primary px-4 py-2">
                 Registeration
                </button>
                 </Link>
        </div>
      </div>

      <div className="container">    
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
                        Suitablefor: {artist.Suitablefor}
                      </p>
                      <div className="text-center">
                        <Link
                          className="btn btn-outline-danger text-white"
                          to="/RentalDetail"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventRental;