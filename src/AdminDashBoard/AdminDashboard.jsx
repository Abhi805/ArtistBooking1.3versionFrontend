import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

const AdminDashboard = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPendingArtists = async () => {
    try {
      const res = await axios.get("/api/artists/pending");
      setArtists(res.data);
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

  const convertToEmbedUrl = (url) => {
    if (!url || typeof url !== "string") return "";
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu.be\/)([^\s&]+)/;
    const match = url.match(youtubeRegex);
    return match && match[1]
      ? `https://www.youtube.com/embed/${match[1]}`
      : url;
  };

  return (
    <div className="d-flex bg-light mt-5" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <nav className="bg-dark text-white p-4 shadow" style={{ width: "260px" }}>
        <h4 className="text-center mb-4">Admin Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/AdminDashboard" className="nav-link text-white fw-bold">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AdminDashboard" className="nav-link text-white fw-bold">
              Pending Artists
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AdminDashboard" className="nav-link text-white fw-bold">
              Approved Artists
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow-1 p-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Pending Artists</h2>
          <button className="btn btn-outline-danger px-4">Logout</button>
        </div>

        {loading ? (
          <div className="text-center fw-semibold text-muted">
            Loading artists...
          </div>
        ) : artists.length === 0 ? (
          <div className="text-center text-secondary">
            No pending artists found.
          </div>
        ) : (
          <div className="row">
            {artists.map((artist) => (
              <div className="col-md-6 mb-4" key={artist._id}>
                <div className="card h-100 shadow-sm border-0 d-flex rounded-4">
                  {artist.images?.[0] && (
                    <img
                      src={artist.images[0]}
                      className="card-img-top rounded-top-4"
                      alt={artist.firstName}
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body  p-4">
                    <h5 className="card-title fw-bold text-primary">
                      {artist.firstName} {artist.lastName}
                    </h5>
                    <p className="mb-1">
                      <strong>Email:</strong> {artist.email}
                    </p>
                    <p className="mb-1">
                      <strong>Category:</strong> {artist.category}
                    </p>
                    <p className="mb-1">
                      <strong>Mobile:</strong> {artist.mobile}
                    </p>
                    <p className="mb-1">
                      <strong>City:</strong> {artist.city}
                    </p>
                    <p className="mb-1">
                      <strong>Duration:</strong> {artist.duration}
                    </p>
                    <p className="mb-1">
                      <strong>Travel:</strong> {artist.travel}
                    </p>
                    <p className="mb-1">
                      <strong>Genre:</strong> {artist.genre}
                    </p>
                    <p className="mb-1">
                      <strong>Team:</strong> {artist.team}
                    </p>
                    <p className="mb-1">
                      <strong>Location:</strong> {artist.location}
                    </p>
                    <p className="mb-3">
                      <strong>Description:</strong> {artist.description}
                    </p>

                    <p className="mb-1">
                      <strong>Profile Title:</strong> {artist.profileTitle}
                    </p>
                    <p className="mb-1">
                      <strong>Keywords:</strong> {artist.profileKeywords}
                    </p>
                    <p className="mb-3">
                      <strong>Description:</strong> {artist.profileDescription}
                    </p>
                    {/* Image Gallery */}
                    <h6 className="fw-semibold mb-2">Photo Gallery</h6>
                    <div className="row g-2 mb-3">
                      {artist.images?.length > 0 ? (
                        artist.images.map((img, i) => (
                          <div key={i} className="col-4">
                            <img
                              src={img}
                              className="img-fluid rounded shadow-sm"
                              style={{ height: "100px", objectFit: "cover" }}
                              alt={`Gallery ${i}`}
                            />
                          </div>
                        ))
                      ) : (
                        <p className="text-muted">No images available.</p>
                      )}
                    </div>

                    <h6 className="fw-semibold mb-2">Video Gallery</h6>
                    <div className="row g-2 mb-3">
                      {artist.videoLink && artist.videoLink.length > 0 ? (
                        artist.videoLink.map((link, i) => (
                          <div key={i} className="col-6">
                            <div className="ratio ratio-16x9">
                              <iframe
                                src={convertToEmbedUrl(link)}
                                title={`Video ${i}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-muted">No videos available.</p>
                      )}
                    </div>

                    <div className="text-end">
                      <button
                        className="btn btn-success px-4 rounded-pill"
                        onClick={() => {
                          if (window.confirm("Approve this artist?")) {
                            approveArtist(artist._id);
                          }
                        }}
                      >
                        Approve
                      </button>
                    </div>
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
