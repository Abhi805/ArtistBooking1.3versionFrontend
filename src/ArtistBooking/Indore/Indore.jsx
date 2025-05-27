// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./Indore.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Indore = () => {
//   const [artistData, setArtistData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 800 });

//     const fetchArtists = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/artists/");
//         const data = response.data;

//         // Convert image buffers to base64 for each artist
//         const artistsWithBase64Images = await Promise.all(
//           data.map(async (artist) => {
//             if (artist.images && artist.images.length > 0) {
//               const image = artist.images[0];
//               const byteArray = new Uint8Array(image.data.data);
//               const blob = new Blob([byteArray], { type: image.contentType });

//               const base64Image = await new Promise((resolve) => {
//                 const reader = new FileReader();
//                 reader.onloadend = () => resolve(reader.result);
//                 reader.readAsDataURL(blob);
//               });

//               return { ...artist, base64Image };
//             } else {
//               return { ...artist, base64Image: null };
//             }
//           })
//         );

//         setArtistData(artistsWithBase64Images);
//       } catch (error) {
//         console.error("Error fetching artist data:", error);
//       }
//     };

//     fetchArtists();
//   }, []);

//   return (
//     <div className="artist-booking">
//       <div className="artist-header text-white py-5 text-center">
//         <div className="container">
//           <h1 className="fw-bold">Book Top Artists In Indore</h1>
//           <p className="mt-3" style={{ color: "white" }}>
//             Book live bands, singers, comedians, celebrities, and more with GNV
//             India. Find the perfect artist for your event in Indore.
//           </p>
//         </div>
//       </div>

//       <div className="container my-5">
//         <h5 className="fw-bold mb-4">Top Artists in Indore</h5>
//         <div className="row">
//           {artistData.map((artist, i) => (
//             <div key={i} className="col-md-3 mb-4">
//               <div className="card artist-card5 h-100 shadow-sm">
//                 {artist.base64Image ? (
//                   <img
//                     loading="lazy"
//                     style={{ height: "230px", objectFit: "cover" }}
//                     src={artist.base64Image}
//                     alt={`${artist.firstName} ${artist.lastName}`}
//                     className="img-fluid rounded shadow-lg artist-main-img"
//                   />
//                 ) : (
//                   <div className="placeholder-img rounded shadow-lg d-flex align-items-center justify-content-center" style={{ height: "480px", backgroundColor: "#eee" }}>
//                     No Image
//                   </div>
//                 )}
//                 <div className="card-body">
//                   <h6 className="card-title fw-bold">
//                     {artist.firstName} {artist.lastName}
//                   </h6>
//                   <p className="text-muted mb-1">
//                     ⭐ {artist.rating || "N/A"} ({artist.reviews || 0} Reviews)
//                   </p>
//                   <p className="text-muted small">
//                     Performance Duration: {artist.duration || "N/A"}
//                   </p>
//                   {/* <Link to="/ArtistDetail2" className="btn btn-danger btn-sm">
//                     BOOK NOW
//                   </Link> */}
//                   <Link to={`/artist/${artist._id}`} className="btn btn-danger btn-sm">BOOK NOW</Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Indore;

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Indore.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Indore = () => {
  const [artistData, setArtistData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });

    const fetchArtists = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/artists/");
        const data = response.data;

        // No base64 conversion needed; just use Cloudinary image URLs directly
        setArtistData(data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className="artist-booking">
      <div className="artist-header text-white py-5 text-center">
        <div className="container">
          <h1 className="fw-bold">Book Top Artists In Indore</h1>
          <p className="mt-3" style={{ color: "white" }}>
            Book live bands, singers, comedians, celebrities, and more with GNV
            India. Find the perfect artist for your event in Indore.
          </p>
        </div>
      </div>

      <div className="container my-5">
        <h5 className="fw-bold mb-4">Top Artists in Indore</h5>
        <div className="row">
          {artistData.map((artist, i) => (
            <div key={i} className="col-md-3 mb-4">
              <div className="card artist-card5 h-100 shadow-sm">
                {artist.images && artist.images[0]?.url ? (
                  <img
                    loading="lazy"
                    style={{ height: "230px", objectFit: "cover" }}
                    src={artist.images[0].url}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Indore;
