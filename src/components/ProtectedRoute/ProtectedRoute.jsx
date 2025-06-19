// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import axiosInstance from "../../api/axiosInstance.jsx";
const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axiosInstance.get("api/auth/protected")
         console.log("Protected route response:", res);
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
