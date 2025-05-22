// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/protected", {
          withCredentials: true,
        });
        setAuth(res.status === 200);
      } catch (err) {
        setAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (auth === null) return <div>Loading...</div>;

  return auth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
