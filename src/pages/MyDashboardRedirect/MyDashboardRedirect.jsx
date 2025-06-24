// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../api/axiosInstance.jsx";

// const MyDashboardRedirect = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkUser = async () => {
//       try {
//         const res = await axiosInstance.get("api/auth/check-auth");
//         console.log("✅ Auth Response:", res.data);

//         const user = res.data.user;
//         if (user.role === "unassigned") {
//           // Default redirect to VolunteerForm (for example)
//           navigate("/VolunteerForm");
//         }
//         if (user.role === "admin") {
//           console.log("🔒 Redirecting to Admin Dashboard");
//           navigate("/AdminDashboard");
//         } else if (user.role === "artist") {
//           console.log("🎨 Redirecting to Artist Dashboard");
//           navigate("/user-dashboard");
//         } else if (user.role === "volunteer") {
//           console.log("🧑‍🤝‍🧑 Volunteer detected, fetching volunteer details...");
//           try {
//             const volunteerRes = await axiosInstance.get(
//               `api/volunteers/by-user/${user.id}`
//             );
//             const volunteerData = volunteerRes.data.volunteer;

//             if (volunteerData) {
//               console.log("📦 Volunteer Data:", volunteerData);
//               navigate(`/volunteer/edit/${volunteerData._id}`);
//             } else {
//               console.log(
//                 "🆕 No Volunteer Profile Found. Redirecting to Registration..."
//               );
//               navigate("/VolunteerForm");
//             }
//           } catch (volunteerErr) {
//             console.log(
//               "📭 No Volunteer Record Yet. Redirecting to Registration..."
//             );
//             navigate("/VolunteerForm");
//           }
//         }
//       } catch (err) {
//         console.error("❌ Error in checkUser:", err);
//         navigate("/login"); // optional fallback
//       }
//     };

//     checkUser();
//   }, [navigate]);

//   return null;
// };

// export default MyDashboardRedirect;


import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.jsx";

const MyDashboardRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axiosInstance.get("api/auth/check-auth");
        const user = res.data.user;

      
        // Admin
        if (user.role === "admin") {
          navigate("/AdminDashboard");
          return;
        }

        // Artist
        if (user.role === "artist") {
          navigate("/user-dashboard"); 
          return; 
        }

         // Artist
        if (user.role === "user") {
          navigate("/");
          return;
        }
          if (user.role === "unassigned") {
          navigate("/choose-role");
          return;
        }

                  //  if (user.role === "volunteer") {
                  //      navigate("/choose-role");
                  // return;
                  //  }

        // Volunteer
        if (user.role === "volunteer") {
          try {
            const volunteerRes = await axiosInstance.get(`api/volunteers/by-user/${user.id}`);
            const volunteerData = volunteerRes.data.volunteer;

            if (volunteerData) {
              navigate(`/volunteer/edit/${volunteerData._id}`); // already registered
            } else {
              // No profile yet → stay on /VolunteerForm if already there
              if (!location.pathname.includes("/VolunteerForm")) {
                navigate("/VolunteerForm");
              }
            }
          } catch (err) {
            navigate("/VolunteerForm"); // fallback if volunteer lookup fails
          }
          return;
        }

        // Future: Add more roles (client, etc.)

      } catch (err) {
        console.log("User not logged in.");
        // If user is not logged in, only force login if accessing protected page
        const protectedRoutes = ["/volunteer/edit", "/AdminDashboard", "/user-dashboard"];
        const isProtected = protectedRoutes.some((route) => location.pathname.startsWith(route));
        if (isProtected) {
          navigate("/login");
        }
      }
    };

    checkUser();
  }, [navigate, location]);

  return null;
};

export default MyDashboardRedirect;
