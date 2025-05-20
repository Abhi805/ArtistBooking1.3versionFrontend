    import React, { useEffect, useState } from 'react';
    import './UjjainCity.css';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import '@fortawesome/fontawesome-free/css/all.min.css';
    
    import img1 from '../../VenueBooking/UjjainCity/assets23/imperialhotel.avif';
    import img2 from '../../VenueBooking/UjjainCity/assets23/mittalevenue.jpg';
    import img3 from '../../VenueBooking/UjjainCity/assets23/mpt.avif';
    import img4 from '../../VenueBooking/UjjainCity/assets23/solitarehotel.jpg';
    import img5 from '../../VenueBooking/UjjainCity/assets23/vikramaditya.jpg';
     
    
    const UjjainCity = () => {
      useEffect(() => {
        AOS.init({ once: true, duration: 800, easing: 'ease-out-quart' });
      }, []);
    
      const [selected, setSelected] = useState(null);
      const handleClick = (i) => setSelected(i);
    
      const venues = [
          { image: img1, venue: "imperialhotel", rating: "4.5", address: "3687/1 Near over bridge Hari Phatak indore road, imperial square, Ujjain, Madhya Pradesh 456010" },
         { image: img2, venue: "mittalevenue",   rating: "5.0", address: "Ring Road, near CHL Hospital, Nanakheda, Rishi Nagar, Ujjain, Sawara Khedi, Madhya Pradesh 456010"   },
         { image: img3, venue: "mpt",             rating: "4.3",address: "University Road Infront Of, Madhav Club Rd, Ujjain, Madhya Pradesh 456010•0734 255 5687"         },
         { image: img4, venue: "solitarehotel",   rating: "3.9", address: "Chintaman Road, Jaysinghpura, near Jantar Mantar, infront of Gyan Sagar Girls Academy, Ujjain, Madhya Pradesh 456001"       },
         { image: img5, venue: "vikramaditya",     rating: "4.0", address: "81/1, chouraha, near, Ring Road, Ujjain, Madhya Pradesh 456001"       },
        
      ];
    
      return (
        <div className="indore-page">
    
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
              Book Top <span className="highlight">Venues in UjjainCity</span>
            </h2>
            <p
              className="hero-subtitle"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
                style={{color:"white"}}
              
            >
             Looking To Book The Best Venues In ujjainCity for your Next Event? GNVIndia offers A Seamless Venue Booking Experience For Corporate Events, Weddings, Exhibitions, And Private Parties. Choose From Our Extensive Network Of Banquet Halls, Luxury Hotels, Outdoor Lawns, Resorts, And Convention Centers To Make Your Event Truly Special.
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
    
    export default UjjainCity;
      