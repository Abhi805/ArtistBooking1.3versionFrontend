import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../api/axiosInstance.jsx";

const RatingDisplay = ({ username, refresh }) => {
  const [averageRating, setAverageRating] = useState(null);

  const fetchRating = async () => {
    try {
      const res = await axiosInstance.get(`/api/ratings/volunteer/${username}`);
      setAverageRating(res.data.averageRating || 0);
    } catch (err) {
      console.error(`Error fetching rating for ${username}`, err);
    }
  };

  useEffect(() => {
    fetchRating();
  }, [username, refresh]);

  return (
    <div className="mb-2">
      {averageRating !== null ? (
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                fontSize: "22px",
                color: star <= averageRating ? "#ffc107" : "#e4e5e9",
              }}
            >
              ★
            </span>
          ))}
          <small className="ms-2">({averageRating.toFixed(1)})</small>
        </div>
      ) : (
        <p>No ratings yet</p>
      )}
    </div>
  );
};

export default RatingDisplay;
