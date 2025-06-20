import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.jsx";

const MyDashboardRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axiosInstance.get("api/auth/check-auth");
        console.log("✅ Auth Response:", res.data); // Check auth response

        const user = res.data.user;

        if (user.role === "admin") {
          console.log("🔒 Redirecting to Admin Dashboard");
          navigate("/AdminDashboard");
        } else if (user.role === "artist") {
          console.log("🎨 Redirecting to Artist Dashboard");
          navigate("/user-dashboard");
        } else if (user.role === "volunteer") {
          console.log("🧑‍🤝‍🧑 Volunteer detected, fetching volunteer details...");
          const volunteerRes = await axiosInstance.get(
            `api/volunteers/by-user/${user.id}`
          );
          console.log("📦 Volunteer Data:", volunteerRes.data);

          const vid = volunteerRes.data.volunteer._id;
          console.log("🆔 Volunteer ID:", vid);
          navigate(`/volunteer/edit/${vid}`);
        }
      } catch (err) {
        console.error("❌ Error in checkUser:", err);
        navigate("/login");
      }
    };

    checkUser();
  }, [navigate]);

  return null;
};

export default MyDashboardRedirect;
