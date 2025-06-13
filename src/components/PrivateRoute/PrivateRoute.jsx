// PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setChecking(false);
      }
    };
    fetchUser();
  }, []);

  if (checking) return <p>Loading...</p>;

  if (user && !user.profileCompleted) {
    alert("⚠️ Please complete your profile first.");
    return <Navigate to="/BasicDetail" />;
  }

  return children;
};

export default PrivateRoute;
