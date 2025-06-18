import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AdminArtistDashboard.css"; // 💡 Import your CSS file
import axiosInstance from "../api/axiosInstance.jsx";

const AdminArtistDashboard = () => {
  const [artistData, setArtistData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800 });

    const fetchArtists = async () => {
      try {
        const response = await axiosInstance.get("api/artists/pending");
        setArtistData(response.data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchArtists();
  }, []);

  const uniqueCities = [...new Set(artistData.map(a => a.city))].filter(Boolean);

  const filteredArtists = selectedCity
    ? artistData.filter(a => a.city?.toLowerCase() === selectedCity.toLowerCase())
    : artistData;

  return (
    <div className="admin-dashboard">
      <div className="admin-header text-white py-5">
        <div className="container">
          <h1>Welcome to GNVIndia Admin Profile </h1>
          <p className="text-white">
            View and manage pending applications. Filter by city and review each profile.
          </p>
        </div>
      </div>

      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h5 className="fw-bold mb-0">Pending Artists</h5>
          <select
            className="form-select city-filter"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">-- Filter by City --</option>
            {uniqueCities.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="row">
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist, i) => (
              <div key={i} className="col-md-4 col-lg-3 mb-4">
                <div className="card artist-card shadow-sm h-100" data-aos="fade-up">
                  {artist.images?.length > 0 ? (
                    <img
                      loading="lazy"
                      className="artist-img"
                      src={artist.images[0]}
                      alt={`${artist.firstName} ${artist.lastName}`}
                    />
                  ) : (
                    <div className="no-image">No Image</div>
                  )}
                  <div className="card-body">
                    <h6 className="fw-bold">{artist.firstName} {artist.lastName}</h6>
                    <p className="text-muted mb-1">
                      ⭐ {artist.rating || "N/A"} ({artist.reviews || 0} Reviews)
                    </p>
                    <p className="small text-muted mb-2">Duration: {artist.duration || "N/A"}</p>
                    <Link to={`/artistko/${artist._id}`} className="btn btn-danger btn-sm w-100">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p>No pending artists found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminArtistDashboard;
