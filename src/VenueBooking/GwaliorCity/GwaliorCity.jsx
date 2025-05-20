  import React, { useEffect, useState } from 'react';
  import './GwaliorCity.css';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import '@fortawesome/fontawesome-free/css/all.min.css';
       
   import img1 from '../../VenueBooking/GwaliorCity/assets21/citypark.jpg';
   import img2 from '../../VenueBooking/GwaliorCity/assets21/royelinn.jpg';
   import img3 from '../../VenueBooking/GwaliorCity/assets21/tansan.jpg';
   import img4 from '../../VenueBooking/GwaliorCity/assets21/ushataj.jpg';
   
  const GwaliorCity = () => {  
    useEffect(() => {
      AOS.init({ once: true, duration: 800, easing: 'ease-out-quart' });
    }, []);
  
    const [selected, setSelected] = useState(null);
    const handleClick = (i) => setSelected(i);
  
    const venues = [
   { image: img1,    venue: "CentralPark Hotel", rating: "4.5", address: "Madhav Rao Scindia Marg, opp. Vishal Mega mart, City Center, Mahalgaon, Gwalior, Madhya Pradesh 474001" },
       { image: img2, venue: "Royelinn Hotel",   rating: "5.0", address: "Hotel, Nagar Nigam, 5, Main Rd, City Center, Patel Nagar, Gwalior, Madhya Pradesh 474011"   },
       { image: img3, venue: "Tansan Hotel",  rating: "4.3", address: "6-A, Gandhi Rd, LNUPE Campus, Thatipur, Gwalior, Madhya Pradesh 474002"         },
       { image: img4, venue: "UshaTaj Hotel",         rating: "3.9", address: "near Saraswati Shishu Mandir, Jayendraganj, Lashkar, Gwalior, Madhya Pradesh 474009"       },
      
     ];
  
    return (
      <div className="bhopal-page">
  
        {/* Hero Section */}
        <div
          className="hero-section d-flex flex-column justify-content-center align-items-center text-center"
        >
          <h2
            className="hero-title"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="200"
             style={{color:"white"}}
          >
            Book Top <span className="highlight">Venues In Gwalior</span>
          </h2>
          <p
            className="hero-subtitle"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
             style={{color:"white"}}
            
          >
           Looking To Book The Best Venues In GwaliorCity for your Next Event? GNVIndia offers A Seamless Venue Booking Experience For Corporate Events, Weddings, Exhibitions, And Private Parties. Choose From Our Extensive Network Of Banquet Halls, Luxury Hotels, Outdoor Lawns, Resorts, And Convention Centers To Make Your Event Truly Special.
          </p>
        </div>
  
        {/* Venue Cards */}
        <div className="container py-5">
          <div className="row">
            {venues.map((v, i) => (
              <div
                className="col-md-3 col-sm-6 mb-4"
                key={i}
                data-aos="zoom-in"
                data-aos-delay={300 + i * 100}
              >
                <div
                  className={`venue-card ${selected === i ? 'active' : ''}`}
                  onClick={() => handleClick(i)}
                >
                  <div className="img-wrap">
                    <img src={v.image} alt={v.venue} />
                    <div className="shine"></div>
                  </div>
                  <h5 className="mt-2">{v.venue}</h5>
                  <div className="rating">
                    <i className="fas fa-star"></i> {v.rating}
                  </div>
                  <p className="address">
                    <i className="fas fa-map-marker-alt"></i> {v.address}
                  </p>
                  <button className="book-btn">BOOK NOW</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default GwaliorCity;
  