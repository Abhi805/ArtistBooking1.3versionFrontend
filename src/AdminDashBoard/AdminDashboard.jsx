import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // ✅ CORRECT
import "./AdminDashboard.css";

axios.defaults.baseURL = "http://localhost:5000"; // Change to your API base URL
axios.defaults.withCredentials = true; // Send cookies with requests

const AdminDashboard = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState([]);

  const fetchPendingArtists = async () => {
    try {
      const res = await axios.get("/api/artists/pending");
      const data = res.data;
      setArtists(data);
      if (data.images && data.images.length > 0) {
        setImageSrc(data.images);
      }
    } catch (err) {
      console.error("Error fetching artists:", err);
    } finally {
      setLoading(false);
    }
  };

  const approveArtist = async (id) => {
    try {
      await axios.patch(`/api/artists/${id}/approve`);
      setArtists((prev) => prev.filter((artist) => artist._id !== id));
    } catch (err) {
      console.error("Approval error:", err);
    }
  };

  useEffect(() => {
    fetchPendingArtists();
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: "100vh", marginTop: "25px" }}>
      {/* Sidebar */}
      <nav className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h4>Admin Panel</h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <Link to="/AdminDashboard" className="nav-link  kapo ">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AdminDashboard" className="nav-link kapo ">
              Pending Artists
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AdminDashboard" className="nav-link kapo ">
              Approved Artists
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between mb-4">
          <h2>Pending Artists</h2>
          <button className="btn btn-danger">Logout</button>
        </div>

        {loading ? (
          <p>Loading artists...</p>
        ) : artists.length === 0 ? (
          <p>No pending artists found.</p>
        ) : (
          <div className="row">
            {artists.map((artist) => (
              <div className="col-md-6 mb-3" key={artist._id}>
                <div className="card">
                  {artist.images?.[0] && (
                    <img
                      src={artist.images[0]}
                      className="card-img-top"
                      alt={artist.firstName}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">
                      {artist.firstName} {artist.lastName}
                    </h5>
                    <p className="card-text">{artist.email}</p>
                    <p className="card-text">
                      <strong>Category:</strong> {artist.category}
                    </p>
                    <p className="card-text">
                      <strong>Mobile No. :</strong> {artist.mobile}
                    </p>
                    <p className="card-text">
                      <strong>City :</strong> {artist.city}
                    </p>
                    <p className="card-text">
                      <strong>Performans Duration :</strong> {artist.duration}
                    </p>
                    <p className="card-text">
                      <strong>Travel :</strong> {artist.travel}
                    </p>
                    <p className="card-text">
                      <strong>Genre :</strong> {artist.genre}
                    </p>
                    <p className="card-text">
                      <strong>Team :</strong> {artist.team}
                    </p>
                    <p className="card-text">
                      <strong>Location :</strong> {artist.location}
                    </p>
                    <p className="card-text">
                      <strong>Description :</strong> {artist.description}
                    </p>
                    <p className="card-text">
                      <strong>Images :</strong> {artist.images}
                    </p>
                    <div className="container py-4" data-aos="fade-up">
                      <h5 className="fw-bold mb-3">Photo Gallery</h5>
                      <div className="row g-4 justify-content-center">
                        {imageSrc.length > 0 ? (
                          imageSrc.map((src, i) => (
                            <div key={i} className="col-6 col-md-4 col-lg-3">
                              <div className="card border-0 shadow-sm overflow-hidden">
                                <img
                                  src={src}
                                  className="card-img-top img-fluid hover-zoom fixed-size"
                                  alt={`Artist Image ${i + 1}`}
                                />
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-center">No images available.</p>
                        )}
                      </div>
                    </div>

                    <p className="card-text">
                      <strong>videolinks :</strong> {artist.videoLink}
                    </p>
                    <p className="card-text">
                      <strong>Profile Title :</strong> {artist.profileTitle}
                    </p>
                    <p className="card-text">
                      <strong>Profile KeyWords :</strong>{" "}
                      {artist.profileKeywords}
                    </p>
                    <p className="card-text">
                      <strong>Profile Description :</strong>{" "}
                      {artist.profileDescription}
                    </p>
                    <button
                      className="btn btn-success"
                      onClick={() => approveArtist(artist._id)}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
