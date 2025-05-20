
  import React, { useEffect } from 'react';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import './VolunteerBooking.css';
  import { useNavigate } from 'react-router-dom'; 
  
  const VolunteerBooking = () => {
    useEffect(() => {
      AOS.init({ duration: 800 });
    }, []);
  
    const navigate = useNavigate(); 
  
    const artistData = [  
      {
        title: "Book The Best Volunteer In Indore",
        artists: [
          { name: "Swarvig The Band", image: "https://via.placeholder.com/200x150", rating: "4.5★", reviews: "1010", duration: "90-120 Mins" },
          { name: "Dhaiwat the Band", image: "https://via.placeholder.com/200x150", rating: "4.6★", reviews: "1375", duration: "90-120 Mins" },
          { name: "Nicotine Band", image: "https://via.placeholder.com/200x150", rating: "4.4★", reviews: "1578", duration: "90-120 Mins" },
          { name: "Swar Project", image: "https://via.placeholder.com/200x150", rating: "4.6★", reviews: "1027", duration: "90-120 Mins" }
        ]
      },
      {
        title: "Book The Best Volunteer In Indore",
        artists: [
          { name: "Sanjay Kumar", image: "https://via.placeholder.com/200x150", rating: "4.7★", reviews: "775", duration: "90-120 Mins" },
          { name: "Pragya Jain", image: "https://via.placeholder.com/200x150", rating: "4.6★", reviews: "824", duration: "90-120 Mins" },
          { name: "Asad Khan", image: "https://via.placeholder.com/200x150", rating: "4.5★", reviews: "1885", duration: "90-120 Mins" },
          { name: "Lash Curry", image: "https://via.placeholder.com/200x150", rating: "4.6★", reviews: "1548", duration: "90-120 Mins" }
        ]
      },
        // {
         //   title: "Book Top Stand-Up Comedians For Corporate Events In Bhopal",
         //   artists: [
          //     { name: "Bobby Chourasiya", image: "https://via.placeholder.com/200x150", rating: "4.7★", reviews: "620", duration: "45-90 Mins" },
          //     { name: "Anmol Garg", image: "https://via.placeholder.com/200x150", rating: "4.6★", reviews: "1140", duration: "60-120 Mins" },
         //     { name: "Rohit Swain", image: "https://via.placeholder.com/200x150", rating: "4.7★", reviews: "5720", duration: "45-90 Mins" },
      //     { name: "Pranav Sharma", image: "https://via.placeholder.com/200x150", rating: "4.6★", reviews: "7980", duration: "30-45 Mins" }
      //   ]
      // },
      // {
      //   title: "Book Top Actor/Actress For Event In Bhopal",
      //   artists: [
      //     { name: "Shivangi Khedkar", image: "https://via.placeholder.com/200x150", rating: "4.6★", reviews: "8726", duration: "90-120 Mins" },
      //     { name: "Amit Bhatt", image: "https://via.placeholder.com/200x150", rating: "4.9★", reviews: "9607", duration: "90-120 Mins" },
      //     { name: "Pradeep Machiraju", image: "https://via.placeholder.com/200x150", rating: "4.6★", reviews: "8086", duration: "90-120 Mins" },
      //     { name: "Lahari Shari", image: "https://via.placeholder.com/200x150", rating: "4.6★", reviews: "8703", duration: "90-120 Mins" }
      //   ]
      // }
    ];
  
    return (
      <div className="volunteer-booking">
        <div className="artist-header text-white py-5 text-center">
          <div className="container">
            <h1 className="fw-bold">Book Top Volunteer In Indore</h1>
            <p className="mt-3">
              {/* Book live bands, singers, comedians, celebrities, and more with GNV India. Find the perfect artist for your event in Bhopal. */}
            </p>
          </div>
        </div>
  
        <div className="container my-5">
          {artistData.map((section, index) => (
            <div key={index} className="mb-5" data-aos="fade-up">
              <h5 className="fw-bold mb-4">{section.title}</h5>
              <div className="row">
                {section.artists.map((artist, i) => (
                  <div key={i} className="col-md-3 mb-4">
                    <div className="card artist-card h-100 shadow-sm">
                      <img src={artist.image} className="card-img-top" alt={artist.name} />
                      <div className="card-body">
                        <h6 className="card-title fw-bold">{artist.name}</h6>
                        <p className="text-muted mb-1">⭐ {artist.rating} ({artist.reviews} Reviews)</p>
                        <p className="text-muted small">Performance Duration: {artist.duration}</p>
                        <button className="btn btn-danger btn-sm">BOOK NOW</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    if (section.title.includes("Comedian")) {
                      navigate('/comedians'); 
                    }
                  }}
                >
                  View More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default VolunteerBooking;
  