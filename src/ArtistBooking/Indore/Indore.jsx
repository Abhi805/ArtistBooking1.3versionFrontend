import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Indore.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Indore = () => {
  const [artistData, setArtistData] = useState([]);
  // removed selectedCity and filter logic
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });

    const fetchArtists = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/artists/");
        const data = response.data;
        console.log("API response", response);
        setArtistData(data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchArtists();
  }, []);

  // No filtering by city, show all artists
  console.log("artistData full:", artistData);

  return (
    <div className="artist-booking">
      <div className="artist-header text-white py-5 text-center">
        <div className="container">
          <h1 className="fw-bold">Book Top Artists</h1>
          <p className="mt-3" style={{ color: "white" }}>
            Book live bands, singers, comedians, celebrities, and more with GNV
            India. Find the perfect artist for your event.
          </p>
        </div>
      </div>

      <div className="container my-5">
        {/* Removed city filter dropdown */}

        <h5 className="fw-bold mb-4">Top Artists</h5>
        <div className="row">
          {artistData.length > 0 ? (
            artistData.map((artist, i) => (
              <div key={i} className="col-md-3 mb-4">
                <div className="card artist-card5 h-100 shadow-sm">
                  {artist.images && artist.images.length > 0 ? (
                    <img
                      loading="lazy"
                      style={{ height: "230px", objectFit: "cover" }}
                      src={artist.images[0]}
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
                    <Link
                      to={`/artist/${artist._id}`}
                      className="btn btn-danger btn-sm"
                    >
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

export default Indore;
