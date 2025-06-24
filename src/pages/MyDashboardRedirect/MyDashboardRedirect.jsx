import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.jsx";

const MyDashboardRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axiosInstance.get("api/auth/check-auth");
        console.log("✅ Auth Response:", res.data);

        const user = res.data.user;

        if (user.role === "admin") {
          console.log("🔒 Redirecting to Admin Dashboard");
          navigate("/AdminDashboard");
        } else if (user.role === "artist") {
          console.log("🎨 Redirecting to Artist Dashboard");
          navigate("/user-dashboard");
        } else if (user.role === "volunteer") {
          console.log("🧑‍🤝‍🧑 Volunteer detected, fetching volunteer details...");
          try {
            const volunteerRes = await axiosInstance.get(
              `api/volunteers/by-user/${user.id}`
            );
            const volunteerData = volunteerRes.data.volunteer;

            if (volunteerData) {
              console.log("📦 Volunteer Data:", volunteerData);
              navigate(`/volunteer/edit/${volunteerData._id}`);
            } else {
              console.log("🆕 No Volunteer Profile Found. Redirecting to Registration...");
              navigate("/VolunteerForm");
            }
          } catch (volunteerErr) {
            console.log("📭 No Volunteer Record Yet. Redirecting to Registration...");
            navigate("/VolunteerForm");
          }
        }
      } catch (err) {
        console.error("❌ Error in checkUser:", err);
        navigate("/login"); // optional fallback
      }
    };

    checkUser();
  }, [navigate]);

  return null;
};

export default MyDashboardRedirect;
