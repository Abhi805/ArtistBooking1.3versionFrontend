import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ArtistBooking.css";
import { Link } from "react-router-dom";

import axiosInstance from "../../api/axiosInstance.jsx";
const ArtistBooking = () => {
  const [artistData, setArtistData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800 });

    const fetchArtists = async () => {
      try {
        const response = await axiosInstance.get("api/artists/");
        setArtistData(response.data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchArtists();
  }, []);

  // Get unique city list
  const uniqueCities = [...new Set(artistData.map(a => a.city))].filter(Boolean);

  // Filter artists by selected city
  const filteredArtists = selectedCity
    ? artistData.filter(a => a.city?.toLowerCase() === selectedCity.toLowerCase())
    : artistData;

  return (
    <div className="artist-booking">
     


       <div className="venue-header text-white">
        <div className="container">
          <h1>Book Top Artists </h1>
          <p className="text-capitalize text-white">
            Book live bands, singers, comedians, celebrities, and more with GNV
            India. Find the perfect artist for your event   and More with GNV India.
          </p>
        </div>
      </div>

      <div className="container my-5">
        {/* 🔍 City Filter Dropdown */}
        <div className="mb-4">
          <select
            className="form-select w-auto d-inline-block"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">-- Search by City --</option>
            {uniqueCities.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <h5 className="fw-bold mb-4">Top Artists</h5>      
        <div className="row">
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist, i) => (
              <div key={i} className="col-md-3 mb-4"> 
                <div className="card artist-card5 h-100 shadow-sm">
                  {artist.images?.length > 0 ? (
                    <img
                      loading="lazy"
                      style={{ height: "230px", objectFit: "cover" }}
                      src={artist.profileImage}
                      alt={`${artist.firstName} ${artist.lastName}`}
                      className="img-fluid rounded shadow-lg artist-main-img"
                    />
                  ) : (
                    <div
                      className="placeholder-img rounded shadow-lg d-flex align-items-center justify-content-center"
                      style={{ height: "230px", backgroundColor: "#eee" }}
                    >
                      No Image
                    </div>
                  )}
                  <div className="card-body">
                    <h6 className="card-title fw-bold">
                      {artist.firstName} {artist.lastName}
                    </h6>
                    <p className="text-muted mb-1">
                      ⭐ {artist.rating || "N/A"} ({artist.reviews || 0} Reviews)
                    </p>
                    <p className="text-muted small">  
                      Performance Duration: {artist.duration || "N/A"}
                    </p>
                    <Link to={`/artist/${artist._id}`} className="btn btn-danger btn-sm">
                      BOOK NOW
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p>No artists found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistBooking;
