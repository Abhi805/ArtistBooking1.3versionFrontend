// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./Login.css";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Spinner } from "react-bootstrap";

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const redirect = new URLSearchParams(location.search).get("redirect");

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });

//     const savedEmail = localStorage.getItem("rememberEmail");
//     if (savedEmail) {
//       setEmail(savedEmail);
//       setRememberMe(true);
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password },
//         { withCredentials: true }
//       );

//       if (rememberMe) {
//         localStorage.setItem("rememberEmail", email);
//       } else {
//         localStorage.removeItem("rememberEmail");
//       }

//       toast.success("Login successful!", { position: "top-center" });

//       const role = res.data.user.role;

//       setTimeout(() => {
//         if (redirect === "volunteer") {
//           navigate("/volunteerForm");
//         } else if (role === "admin") {
//           navigate("/AdminDashboard");
//         } else {
//           navigate("/user-dashboard");
//         }
//       }, 2000);
//     } catch (err) {
//       toast.error(err.response?.data?.msg || "Login failed", {
//         position: "top-center",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="login-section">
//       <ToastContainer />
//       <div className="container">
//         <div className="row align-items-center justify-content-center">
//           <div className="col-md-6" data-aos="fade-up">
//             <div className="card8 p-5 shadow-lg bg-white rounded-4">
//               <div className="card-body">
//                 <h2 className="login-title mb-2 text-center">Welcome back</h2>
//                 <p className="login-subtitle mb-4 text-center">
//                   Please enter your details
//                 </p>

//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-3">
//                     <label className="form-label">Email address</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="Enter email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </div>

//                   <div className="mb-3 position-relative">
//                     <label className="form-label">Password</label>
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       className="form-control"
//                       placeholder="Enter password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                     <span
//                       onClick={() => setShowPassword(!showPassword)}
//                       style={{
//                         position: "absolute",
//                         right: "10px",
//                         top: "38px",
//                         cursor: "pointer",
//                         userSelect: "none",
//                         color: "#555",
//                       }}
//                       title={showPassword ? "Hide Password" : "Show Password"}
//                     >
//                       <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//                     </span>
//                   </div>

//                   <div className="mb-3 form-check">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id="rememberMeCheck"
//                       checked={rememberMe}
//                       onChange={() => setRememberMe(!rememberMe)}
//                     />
//                     <label className="form-check-label" htmlFor="rememberMeCheck">
//                       Remember Me
//                     </label>
//                   </div>

//                   <div className="d-grid mb-3">
//                     <button
//                       type="submit"
//                       className="btn btn-primary login-btn"
//                       disabled={loading}
//                     >
//                       {loading ? <Spinner animation="border" size="sm" /> : "Sign in"}
//                     </button>
//                   </div>

//                   <p className="text-center mb-0">
//                     Don’t have an account?{" "}
//                     <Link to="/signup">Sign up</Link>
//                   </p>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // new state
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const savedEmail = localStorage.getItem("rememberEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password, role },
        { withCredentials: true }
      );

      if (rememberMe) {
        localStorage.setItem("rememberEmail", email);
      } else {
        localStorage.removeItem("rememberEmail");
      }

      toast.success("Login successful!", { position: "top-center" });

      const userRole = res.data.user.role;

      setTimeout(() => {
        if (userRole === "other") {
          navigate("/AdminDashboard");
        } else if (userRole === "artist") {
          navigate("/basicdetail");
        } else if (userRole === "volunteer") {
          navigate("/volunteerform");
        } else {
          navigate("/");
        }
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Login failed", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-section">
      <ToastContainer />
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6" data-aos="fade-up">
            <div className="card8 p-5 shadow-lg bg-white rounded-4">
              <div className="card-body">
                <h2 className="login-title mb-2 text-center">Welcome back</h2>
                <p className="login-subtitle mb-4 text-center">
                  Please enter your details
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Role Selection */}
                  <div className="mb-3">
                    <label className="form-label">Select Role</label>
                    <select
                      className="form-select"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    >
                      <option value="">Choose Role</option>
                      <option value="admin">other</option>
                      <option value="artist">Artist</option>
                      <option value="volunteer">Volunteer</option>
                     {/* <option value="user">User</option>  */}
                    </select>
                  </div>

                  {/* Email Field */}
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div className="mb-3 position-relative">
                    <label className="form-label">Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "38px",
                        cursor: "pointer",
                        userSelect: "none",
                        color: "#555",
                      }}
                      title={showPassword ? "Hide Password" : "Show Password"}
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                  </div>

                  {/* Remember Me */}
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMeCheck"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label className="form-check-label" htmlFor="rememberMeCheck">
                      Remember Me
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="d-grid mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary login-btn"
                      disabled={loading}
                    >
                      {loading ? <Spinner animation="border" size="sm" /> : "Sign in"}
                    </button>
                  </div>

                  {/* Link to Signup */}
                  <p className="text-center mb-0">
                    Don’t have an account? <Link to="/signup">Sign up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
