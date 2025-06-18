// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const MyDashboardRedirect = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkUser = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/auth/check-auth", {
//           withCredentials: true,
//         });

//         const user = res.data.user;

//         if (user.role === "admin") {
//           navigate("/AdminDashboard");
//         } else {
//           navigate("/user-dashboard");
//         }
//       } catch (err) {
//         navigate("/login");
//       }
//     };

//     checkUser();
//   }, [navigate]);

//   return null;
// };

// export default MyDashboardRedirect;




import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyDashboardRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/check-auth", {
          withCredentials: true,
        });

        const user = res.data.user;

        if (user.role === "admin") {
          navigate("/AdminDashboard");
        } else if (user.role === "artist") {
          navigate("/user-dashboard");
        } else if (user.role === "volunteer") {
          navigate("/volunteer");
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
