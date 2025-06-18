

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.jsx";

const MyDashboardRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axiosInstance.get(
          "api/auth/check-auth");
        console.log("✅ Auth Response:", res.data); // Check this in browser console
        const user = res.data.user;

        if (user.role === "admin") {
          navigate("/AdminDashboard");
        } else if (user.role === "artist") {
          navigate("/user-dashboard");
        } else if (user.role === "volunteer") {
          const volunteerRes = await axios.get(
            `api/volunteers/by-user/${user.id}`
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
