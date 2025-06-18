

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyDashboardRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/auth/check-auth",
          {
            withCredentials: true,
          }
        );
        console.log("✅ Auth Response:", res.data); // Check this in browser console
        const user = res.data.user;

        if (user.role === "admin") {
          navigate("/AdminDashboard");
        } else if (user.role === "artist") {
          navigate("/user-dashboard");
        } else if (user.role === "volunteer") {
          const volunteerRes = await axios.get(
            `http://localhost:5000/api/volunteers/by-user/${user.id}`
          );
          const vid = volunteerRes.data.volunteer._id;
          navigate(`/volunteer/edit/${vid}`);
        }
      } catch (err) {
        navigate("/login");
      }
    };

    checkUser();
  }, [navigate]);

  return null;
};

export default MyDashboardRedirect;
