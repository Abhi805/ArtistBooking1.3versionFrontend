// import React, { useEffect, useState } from "react";
// import "./VolunteerForm.css";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axiosInstance from "../../api/axiosInstance.jsx";
// import { useNavigate } from "react-router-dom";

// const VolunteerRegistration = () => {
//   const [hasFollowed, setHasFollowed] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     dob: "",
//     gender: "",
//     address: "",
//     addressState: "",
//     addressDistrict: "",
//     zipCode: "",
//     educationLevel: "",
//     degree: "",
//     profileSummary: "",
//     hasAward: "",
//     awards: [""],
//     hasExhibition: "",
//     exhibitionName: "",
//     exhibitionDesc: "",
//     selectedState: "",
//     selectedDistricts: [""],
//     skills: [{ skill: "", level: "" }],
//     profileImage: null,
//     galleryImages: [],
//   });

//   const [preview, setPreview] = useState(null);
//   const [galleryPreview, setGalleryPreview] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSkillChange = (index, key, value) => {
//     const newSkills = [...formData.skills];
//     newSkills[index][key] = value;
//     setFormData({ ...formData, skills: newSkills });
//   };

//   const handleAddSkill = () => {
//     setFormData({
//       ...formData,
//       skills: [...formData.skills, { skill: "", level: "" }],
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, profileImage: file });
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleRemoveProfile = () => {
//     setFormData({ ...formData, profileImage: null });
//     setPreview(null);
//   };

//   const handleGalleryChange = (e) => {
//     const files = Array.from(e.target.files);
//     const totalFiles = [...formData.galleryImages, ...files];

//     if (totalFiles.length > 10) {
//       toast.error("You can upload up to 10 photos only.");
//       return;
//     }

//     setFormData({ ...formData, galleryImages: totalFiles });
//     setGalleryPreview([
//       ...galleryPreview,
//       ...files.map((file) => URL.createObjectURL(file)),
//     ]);
//   };

//   const handleRemoveGalleryImage = (index) => {
//     const updatedGallery = [...formData.galleryImages];
//     const updatedPreview = [...galleryPreview];
//     updatedGallery.splice(index, 1);
//     updatedPreview.splice(index, 1);
//     setFormData({ ...formData, galleryImages: updatedGallery });
//     setGalleryPreview(updatedPreview);
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
//     if (!formData.email.trim()) newErrors.email = "Email required";
//     if (!formData.phone.trim()) newErrors.phone = "Phone required";
//     if (!formData.dob) newErrors.dob = "DOB required";
//     if (!formData.gender) newErrors.gender = "Gender required";
//     if (!formData.address) newErrors.address = "Address required";
//     if (!formData.addressState) newErrors.addressState = "State required";
//     if (!formData.addressDistrict) newErrors.addressDistrict = "District required";
//     if (!formData.educationLevel) newErrors.educationLevel = "Education level required";
//     if (!formData.degree) newErrors.degree = "Degree required";
//     if (!formData.profileImage) newErrors.profileImage = "Profile image required";
//     if (formData.galleryImages.length === 0) newErrors.galleryImages = "At least one gallery image required";
//     if (!hasFollowed) newErrors.social = "Please follow us on social platforms";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);
//     const submitData = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (Array.isArray(value)) {
//         if (key === "galleryImages") {
//           value.forEach((file) => submitData.append("galleryImages", file));
//         } else {
//           submitData.append(key, JSON.stringify(value));
//         }
//       } else if (value instanceof File) {
//         submitData.append(key, value);
//       } else {
//         submitData.append(key, value);
//       }
//     });

//     try {
//       await axiosInstance.post("api/volunteers/add", submitData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       toast.success("Volunteer registered successfully!");
//       navigate("/thank-you");

//       setFormData({
//         firstName: "", lastName: "", email: "", phone: "", dob: "", gender: "",
//         address: "", addressState: "", addressDistrict: "", zipCode: "",
//         educationLevel: "", degree: "", profileSummary: "", hasAward: "", awards: [""],
//         hasExhibition: "", exhibitionName: "", exhibitionDesc: "",
//         selectedState: "", selectedDistricts: [""],
//         skills: [{ skill: "", level: "" }],
//         profileImage: null, galleryImages: [],
//       });
//       setPreview(null);
//       setGalleryPreview([]);
//     } catch (err) {
//       console.error("Submit Error:", err);
//       toast.error("Submission failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form className="volunteer-form" onSubmit={handleSubmit}>
//       <ToastContainer />
//       <h2>Volunteer Registration</h2>

//       <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
//       {errors.firstName && <span className="error">{errors.firstName}</span>}

//       <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
//       {errors.lastName && <span className="error">{errors.lastName}</span>}

//       <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
//       {errors.email && <span className="error">{errors.email}</span>}

//       <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
//       {errors.phone && <span className="error">{errors.phone}</span>}

//       <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
//       {errors.dob && <span className="error">{errors.dob}</span>}

//       <select name="gender" value={formData.gender} onChange={handleInputChange}>
//         <option value="">-- Select Gender --</option>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//         <option value="Other">Other</option>
//       </select>
//       {errors.gender && <span className="error">{errors.gender}</span>}

//       <input name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} />
//       {errors.address && <span className="error">{errors.address}</span>}

//       <input name="addressState" placeholder="State" value={formData.addressState} onChange={handleInputChange} />
//       {errors.addressState && <span className="error">{errors.addressState}</span>}

//       <input name="addressDistrict" placeholder="District" value={formData.addressDistrict} onChange={handleInputChange} />
//       {errors.addressDistrict && <span className="error">{errors.addressDistrict}</span>}

//       <textarea name="profileSummary" placeholder="Profile Summary" value={formData.profileSummary} onChange={handleInputChange} />

//       <input name="educationLevel" placeholder="Education" value={formData.educationLevel} onChange={handleInputChange} />
//       {errors.educationLevel && <span className="error">{errors.educationLevel}</span>}

//       <input name="degree" placeholder="Degree" value={formData.degree} onChange={handleInputChange} />
//       {errors.degree && <span className="error">{errors.degree}</span>}

//       <h4>Skills</h4>
//       {formData.skills.map((skill, i) => (
//         <div key={i} className="skill-input">
//           <input type="text" placeholder="Skill" value={skill.skill} onChange={(e) => handleSkillChange(i, "skill", e.target.value)} />
//           <input type="text" placeholder="Level" value={skill.level} onChange={(e) => handleSkillChange(i, "level", e.target.value)} />
//         </div>
//       ))}
//       <button type="button" onClick={handleAddSkill}>+ Add Skill</button>

//       <h4>Profile Photo</h4>
//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       {preview && (
//         <div className="preview-wrapper">
//           <img src={preview} alt="Preview" />
//           <button type="button" className="remove-btn" onClick={handleRemoveProfile}>Remove</button>
//         </div>
//       )}
//       {errors.profileImage && <span className="error">{errors.profileImage}</span>}

//       <h4>Gallery Photos</h4>
//       <input type="file" multiple accept="image/*" onChange={handleGalleryChange} />
//       <div className="gallery-preview">
//         {galleryPreview.map((img, i) => (
//           <div key={i} className="gallery-item">
//             <img src={img} alt={`gallery-${i}`} />
//             <button type="button" className="remove-btn" onClick={() => handleRemoveGalleryImage(i)}>×</button>
//           </div>
//         ))}
//       </div>
//       {errors.galleryImages && <span className="error">{errors.galleryImages}</span>}

//       <div>
//         <p>📣 Follow our pages before submitting:</p>
//         <a href="https://www.instagram.com/gnvindia_ent/" target="_blank" rel="noreferrer">Instagram</a> |{" "}
//         <a href="https://www.facebook.com/profile.php?id=61577712865938" target="_blank" rel="noreferrer">Facebook</a>
//         <div>
//           <input type="checkbox" checked={hasFollowed} onChange={(e) => setHasFollowed(e.target.checked)} />
//           <label style={{ marginLeft: "8px" }}>I have followed GNV India</label>
//         </div>
//         {errors.social && <span className="error">{errors.social}</span>}
//       </div>

//       <button type="submit" disabled={loading}>
//         {loading ? <div className="button-spinner"></div> : "Register"}
//       </button>
//     </form>
//   );
// };

// export default VolunteerRegistration;

// import React, { useState } from "react";
// import districtMap from "./data/districtMap";
// import { IoAddCircleOutline } from "react-icons/io5";
// import axiosInstance from "../../api/axiosInstance";
// import "./VolunteerForm.css";

// const capitalize = (text) =>
//   text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";

// const VolunteerRegistration = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [address, setAddress] = useState("");
//   const [addressState, setAddressState] = useState("");
//   const [addressDistrict, setAddressDistrict] = useState("");
//   const [phone, setPhone] = useState("");
//   const [zipCode, setZipCode] = useState("");
//   const [educationLevel, setEducationLevel] = useState("");
//   const [degree, setDegree] = useState("");
//   const [profileSummary, setProfileSummary] = useState("");
//   const [hasExhibition, setHasExhibition] = useState("");
//   const [exhibitionName, setExhibitionName] = useState("");
//   const [exhibitionDesc, setExhibitionDesc] = useState("");
//   const [hasAward, setHasAward] = useState("");
//   const [awards, setAwards] = useState([]);
//   const [skills, setSkills] = useState([]);
//   const [newSkill, setNewSkill] = useState("");
//   const [newLevel, setNewLevel] = useState("");
//   const [newAward, setNewAward] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedDistricts, setSelectedDistricts] = useState([]);
//   const [profileImage, setProfileImage] = useState(null);
//   const [galleryImages, setGalleryImages] = useState([]);
//    const [loading, setLoading] = useState(false);
//   const handleGalleryUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setGalleryImages((prev) => [...prev, ...files].slice(0, 10));
//   };

//   const removeGalleryImage = (index) => {
//     setGalleryImages((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleProfileUpload = (e) => {
//     if (e.target.files[0]) {
//       setProfileImage(e.target.files[0]);
//     }
//   };

//   const handleGenderChange = (e) => {
//     setGender(e.target.value);
//   };

//   const addAward = () => {
//     if (newAward.trim()) {
//       setAwards([...awards, newAward.trim()]);
//       setNewAward("");
//     }
//   };

//   const handleDistrictChange = (e) => {
//     const { value, checked } = e.target;
//     setSelectedDistricts((prev) =>
//       checked ? [...prev, value] : prev.filter((d) => d !== value)
//     );
//   };

//   const addSkill = () => {
//     if (skills.length >= 5) {
//       alert("You can add a maximum of 5 skills.");
//       return;
//     }
//     if (newSkill && newLevel) {
//       setSkills([...skills, { skill: newSkill, level: newLevel }]);
//       setNewSkill("");
//       setNewLevel("");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();

//     const fields = {
//       firstName,
//       lastName,
//       email,
//       dob,
//       age,
//       gender,
//       address,
//       addressState,
//       addressDistrict,
//       phone,
//       zipCode,
//       educationLevel,
//       degree,
//       profileSummary,
//       hasExhibition,
//       exhibitionName,
//       exhibitionDesc,
//       hasAward,
//       selectedState,
//       selectedDistricts: JSON.stringify(selectedDistricts),
//       skills: JSON.stringify(skills),
//       awards: JSON.stringify(awards),
//     };

//     Object.entries(fields).forEach(([key, value]) => {
//       formData.append(key, value);
//     });

//     if (profileImage) {
//       formData.append("profileImage", profileImage);
//     }
//     galleryImages.forEach((file) => {
//       formData.append("galleryImages", file);
//     });

//     try {
//       const res = await axiosInstance.post("/api/volunteers/add", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         alert("Volunteer Registered Successfully!");
//       } else {
//         alert("Error: " + res.data.message);
//       }
//     } catch (err) {
//       console.error("Submission Error:", err);
//       alert("Error submitting form.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Skills Section */}
//       {/* First Row */}
//       <div className="two-cols">
//         <div className="form-row">
//           <label>First Name *</label>
//           <input
//             type="text"
//             value={firstName}
//             onChange={(e) => setFirstName(capitalize(e.target.value))}
//             required
//           />
//         </div>
//         <div className="form-row">
//           <label>Last Name *</label>
//           <input
//             type="text"
//             value={lastName}
//             onChange={(e) => setLastName(capitalize(e.target.value))}
//             required
//           />
//         </div>
//       </div>

//       <div className="two-cols">
//         <div className="form-row">
//           <label>Your Email *</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-row">
//           <label>Date of Birth *</label>
//           <input
//             type="date"
//             value={dob}
//             onChange={(e) => setDob(e.target.value)}
//             required
//           />
//         </div>
//       </div>

//       <div className="two-cols">
//         <div className="form-row">
//           <label>Age *</label>
//           <input
//             type="number"
//             min="10"
//             max="50"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             required
//             onInvalid={(e) =>
//               e.target.setCustomValidity("Age must be 10 years or above")
//             }
//             onInput={(e) => e.target.setCustomValidity("")}
//           />
//         </div>
//         <div className="form-row">
//           <label>Gender *</label>
//           <select value={gender} onChange={handleGenderChange} required>
//             <option value="">-- Select Gender --</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </div>
//       </div>

//       {/* Address Section with State and District */}
//       <div className="form-row full-width">
//         <label>Address *</label>
//         <input
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         />
//       </div>

//       <div className="two-cols">
//         <div className="form-row">
//           <label>Address State *</label>
//           <select
//             value={addressState}
//             onChange={(e) => {
//               setAddressState(e.target.value);
//               setAddressDistrict("");
//             }}
//             required
//           >
//             <option value="">-- Select State --</option>
//             {Object.keys(districtMap).map((state) => (
//               <option key={state} value={state}>
//                 {state}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-row">
//           <label>Address District *</label>
//           <select
//             value={addressDistrict}
//             onChange={(e) => setAddressDistrict(e.target.value)}
//             required
//             disabled={!addressState}
//           >
//             <option value="">-- Select District --</option>
//             {addressState &&
//               districtMap[addressState].map((district) => (
//                 <option key={district} value={district}>
//                   {district}
//                 </option>
//               ))}
//           </select>
//         </div>
//       </div>

//       <div className="two-cols">
//         <div className="form-row">
//           <label>Phone Number</label>
//           <input
//             type="text"
//             placeholder="Optional"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <div className="form-row">
//           <label>Postcode / Zip</label>
//           <input
//             type="text"
//             value={zipCode}
//             onChange={(e) => setZipCode(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Profile Image */}
//       <div className="form-row full-width">
//         <label>Profile Image *</label>
//         <input type="file" accept="image/*" onChange={handleProfileUpload} />
//         {profileImage && (
//           <div className="profile-preview">
//            <img src={URL.createObjectURL(profileImage)} alt="Profile" className="profile-thumb" />

//           </div>
//         )}
//       </div>

//       {/* Gallery Photos */}
//       <div className="form-row full-width">
//         <label>Gallery Photos (Max 10)</label>
//         <input
//           type="file"
//           multiple
//           accept="image/*"
//           onChange={handleGalleryUpload}
//         />
//       </div>

//       {galleryImages.length > 0 && (
//         <div className="form-row full-width">
//           <label>Gallery Preview:</label>
//           <div className="gallery-preview">
//             {galleryImages.map((img, index) => (
//               <div key={index} style={{ position: "relative" }}>
//                 <img src={URL.createObjectURL(img)} alt={`Gallery ${index + 1}`} className="gallery-thumb" />

//                 <button
//                   type="button"
//                   onClick={() => removeGalleryImage(index)}
//                   style={{
//                     position: "absolute",
//                     top: "0",
//                     right: "0",
//                     background: "red",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: "50%",
//                     width: "20px",
//                     height: "20px",
//                     fontSize: "12px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   ×
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Exhibition */}
//       <div className="form-row full-width">
//         <label>Have you participated in any exhibition?</label>
//         <select
//           value={hasExhibition}
//           onChange={(e) => setHasExhibition(e.target.value)}
//         >
//           <option value="">Select</option>
//           <option value="Yes">Yes</option>
//           <option value="No">No</option>
//         </select>
//       </div>

//       {hasExhibition === "Yes" && (
//         <div className="form-row full-width">
//           <input
//             type="text"
//             placeholder="Exhibition Name"
//             value={exhibitionName}
//             onChange={(e) => setExhibitionName(e.target.value)}
//           />
//           <textarea
//             maxLength={50}
//             placeholder="Exhibition Description (max 50 words)"
//             value={exhibitionDesc}
//             onChange={(e) => setExhibitionDesc(e.target.value)}
//           />
//         </div>
//       )}

//       {/* Profile Summary */}
//       <div className="form-row full-width">
//         <label>Profile Summary</label>
//         <textarea
//           maxLength={150}
//           placeholder="Enter summary (max 150 words)"
//           value={profileSummary}
//           onChange={(e) => setProfileSummary(e.target.value)}
//         />
//       </div>

//       {/* Education */}
//       <div className="two-cols">
//         <div className="form-row">
//           <label>Education Level *</label>
//           <select
//             value={educationLevel}
//             onChange={(e) => setEducationLevel(e.target.value)}
//             required
//           >
//             <option value="">-- Select Education Level --</option>
//             <option value="Post Graduation">Post Graduation</option>
//             <option value="Graduation">Graduation</option>
//             <option value="Pursuing">Pursuing</option>
//             <option value="Diploma">Diploma</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         <div className="form-row">
//           <label>Degree *</label>
//           <input
//             type="text"
//             placeholder="e.g. B.Tech, M.Sc"
//             value={degree}
//             onChange={(e) => setDegree(e.target.value)}
//             required
//           />
//         </div>
//       </div>

//       <div>
//         <label>Skills</label>
//         <input
//           type="text"
//           placeholder="Skill Name"
//           value={newSkill}
//           onChange={(e) => setNewSkill(e.target.value)}
//         />
//         <select value={newLevel} onChange={(e) => setNewLevel(e.target.value)}>
//           <option value="">Select Level</option>
//           <option value="Excellent">Excellent</option>
//           <option value="Good">Good</option>
//           <option value="Average">Average</option>
//         </select>
//         <button type="button" onClick={addSkill} disabled={skills.length >= 5}>
//           Add Skill <IoAddCircleOutline />
//         </button>
//       </div>
//       {skills.length > 0 && (
//         <ul>
//           {skills.map((s, i) => (
//             <li key={i}>
//               {s.skill} - {s.level}
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Awards Section */}
//       <div>
//         <label>Awards</label>
//         <input
//           type="text"
//           value={newAward}
//           onChange={(e) => setNewAward(e.target.value)}
//           placeholder="Award Title"
//         />
//         <button type="button" onClick={addAward}>
//           Add Award <IoAddCircleOutline />
//         </button>
//       </div>
//       {awards.length > 0 && (
//         <ul>
//           {awards.map((a, i) => (
//             <li key={i}>{a}</li>
//           ))}
//         </ul>
//       )}

//       {/* Performance Location Section - Moved to Bottom */}
//         <div className="performance-section">
//           <h3>Performance Location Preferences</h3>
//           <div className="form-row full-width">
//             <label>State for Performance *</label>
//             <select
//               value={selectedState}
//               onChange={(e) => {
//                 setSelectedState(e.target.value);
//                 setSelectedDistricts([]);
//               }}
//               required
//             >
//               <option value="">-- Select State --</option>
//               {Object.keys(districtMap).map((state) => (
//                 <option key={state} value={state}>{state}</option>
//               ))}
//             </select>
//           </div>

//           {selectedState && (
//             <div className="form-row full-width district-card">
//               <label>Select District(s) for Performance *</label>
//               <div className="district-checkboxes">
//                 {districtMap[selectedState].map((district) => (
//                   <label key={district} style={{ marginRight: "10px" }}>
//                     <input
//                       type="checkbox"
//                       value={district}
//                       checked={selectedDistricts.includes(district)}
//                       onChange={handleDistrictChange}
//                     />
//                     {district}
//                   </label>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//      <button type="submit" disabled={loading}>
//      {loading ? <div className="button-spinner"></div> : "Register"}
//    </button>
//     </form>
//   );
// };

// export default VolunteerRegistration;

import React, { useState } from "react";
import districtMap from "./data/districtMap";
import { IoAddCircleOutline } from "react-icons/io5";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./VolunteerForm.css";
import { ToastContainer } from "react-toastify";

const capitalize = (text) =>
  text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";

const VolunteerRegistration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [addressState, setAddressState] = useState("");
  const [addressDistrict, setAddressDistrict] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [degree, setDegree] = useState("");
  const [profileSummary, setProfileSummary] = useState("");
  const [hasExhibition, setHasExhibition] = useState("");
  const [exhibitionName, setExhibitionName] = useState("");
  const [exhibitionDesc, setExhibitionDesc] = useState("");
  const [hasAward, setHasAward] = useState("");
  const [awards, setAwards] = useState([]);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [newLevel, setNewLevel] = useState("");
  const [newAward, setNewAward] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistricts, setSelectedDistricts] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files);
    if (galleryImages.length + files.length > 10) {
      toast.error("You can upload a maximum of 10 gallery images.");
      return;
    }
    setGalleryImages((prev) => [...prev, ...files].slice(0, 10));
  };

  const removeGalleryImage = (index) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleProfileUpload = (e) => {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const addAward = () => {
    if (newAward.trim()) {
      setAwards([...awards, newAward.trim()]);
      setNewAward("");
    }
  };

  const handleDistrictChange = (e) => {
    const { value, checked } = e.target;
    setSelectedDistricts((prev) =>
      checked ? [...prev, value] : prev.filter((d) => d !== value)
    );
  };

  const addSkill = () => {
    if (skills.length >= 5) {
      toast.error("You can add a maximum of 5 skills.");
      return;
    }
    if (newSkill && newLevel) {
      setSkills([...skills, { skill: newSkill, level: newLevel }]);
      setNewSkill("");
      setNewLevel("");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    if (!formData.phone.trim()) newErrors.phone = "Phone required";
    if (!formData.dob) newErrors.dob = "DOB required";
    if (!formData.gender) newErrors.gender = "Gender required";
    if (!formData.address) newErrors.address = "Address required";
    if (!formData.addressState) newErrors.addressState = "State required";
    if (!formData.addressDistrict) newErrors.addressDistrict = "District required";
    if (!formData.educationLevel) newErrors.educationLevel = "Education level required";
    if (!formData.degree) newErrors.degree = "Degree required";
    if (!formData.profileImage) newErrors.profileImage = "Profile image required";
    if (formData.galleryImages.length === 0) newErrors.galleryImages = "At least one gallery image required";
    if (!hasFollowed) newErrors.social = "Please follow us on social platforms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const formData = new FormData();

    const fields = {
      firstName,
      lastName,
      email,
      dob,
      age,
      gender,
      address,
      addressState,
      addressDistrict,
      phone,
      zipCode,
      educationLevel,
      degree,
      profileSummary,
      hasExhibition,
      exhibitionName,
      exhibitionDesc,
      hasAward,
      selectedState,
      selectedDistricts: JSON.stringify(selectedDistricts),
      skills: JSON.stringify(skills),
      awards: JSON.stringify(awards),
    };
    const resetForm = () => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setDob("");
      setAge("");
      setGender("");
      setAddress("");
      setAddressState("");
      setAddressDistrict("");
      setPhone("");
      setZipCode("");
      setEducationLevel("");
      setDegree("");
      setProfileSummary("");
      setHasExhibition("");
      setExhibitionName("");
      setExhibitionDesc("");
      setHasAward("");
      setAwards([]);
      setSkills([]);
      setNewSkill("");
      setNewLevel("");
      setNewAward("");
      setSelectedState("");
      setSelectedDistricts([]);
      setProfileImage(null);
      setGalleryImages([]);
    };

    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    galleryImages.forEach((file) => {
      formData.append("galleryImages", file);
    });

    try {
      const res = await axiosInstance.post("/api/volunteers/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success("Volunteer Registered Successfully!");
        resetForm(); // 👈 add thi
      } else {
        toast.error(res.data.message || "An error occurred.");
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Something went wrong during form submission.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your full form JSX remains unchanged here, including the image previews and district selections */}
      {/* ... */}
      {/* Skills Section */}
      {/* First Row */}
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="two-cols">
        <div className="form-row">
          <label>First Name *</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(capitalize(e.target.value))}
            required
          />
        </div>
        <div className="form-row">
          <label>Last Name *</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(capitalize(e.target.value))}
            required
          />
        </div>
      </div>

      <div className="two-cols">
        <div className="form-row">
          <label>Your Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label>Date of Birth *</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="two-cols">
        <div className="form-row">
          <label>Age *</label>
          <input
            type="number"
            min="10"
            max="50"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("Age must be 10 years or above")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </div>
        <div className="form-row">
          <label>Gender *</label>
          <select value={gender} onChange={handleGenderChange} required>
            <option value="">-- Select Gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      {/* Address Section with State and District */}
      <div className="form-row full-width">
        <label>Address *</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div className="two-cols">
        <div className="form-row">
          <label>Address State *</label>
          <select
            value={addressState}
            onChange={(e) => {
              setAddressState(e.target.value);
              setAddressDistrict("");
            }}
            required
          >
            <option value="">-- Select State --</option>
            {Object.keys(districtMap).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label>Address District *</label>
          <select
            value={addressDistrict}
            onChange={(e) => setAddressDistrict(e.target.value)}
            required
            disabled={!addressState}
          >
            <option value="">-- Select District --</option>
            {addressState &&
              districtMap[addressState].map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="two-cols">
        <div className="form-row">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Optional"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Postcode / Zip</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
      </div>

      {/* Profile Image */}
      <div className="form-row full-width">
        <label>Profile Image *</label>
        <input type="file" accept="image/*" onChange={handleProfileUpload} />
        {profileImage && (
          <div className="profile-preview">
            <img
              src={URL.createObjectURL(profileImage)}
              alt="Profile"
              className="profile-thumb"
            />
          </div>
        )}
      </div>

      {/* Gallery Photos */}
      <div className="form-row full-width">
        <label>Gallery Photos (Max 10)</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleGalleryUpload}
        />
      </div>

      {galleryImages.length > 0 && (
        <div className="form-row full-width">
          <label>Gallery Preview:</label>
          <div className="gallery-preview">
            {galleryImages.map((img, index) => (
              <div key={index} style={{ position: "relative" }}>
                <img
                  src={URL.createObjectURL(img)}
                  alt={`Gallery ${index + 1}`}
                  className="gallery-thumb"
                />

                <button
                  type="button"
                  onClick={() => removeGalleryImage(index)}
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    background: "red",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {errors.profileImage && <span className="error">{errors.profileImage}</span>}

      {/* Exhibition */}
      <div className="form-row full-width">
        <label>Have you participated in any exhibition?</label>
        <select
          value={hasExhibition}
          onChange={(e) => setHasExhibition(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      {errors.galleryImages && <span className="error">{errors.galleryImages}</span>}

      {hasExhibition === "Yes" && (
        <div className="form-row full-width">
          <input
            type="text"
            placeholder="Exhibition Name"
            value={exhibitionName}
            onChange={(e) => setExhibitionName(e.target.value)}
          />
          <textarea
            maxLength={50}
            placeholder="Exhibition Description (max 50 words)"
            value={exhibitionDesc}
            onChange={(e) => setExhibitionDesc(e.target.value)}
          />
        </div>
      )}

      {/* Profile Summary */}
      <div className="form-row full-width">
        <label>Profile Summary</label>
        <textarea
          maxLength={150}
          placeholder="Enter summary (max 150 words)"
          value={profileSummary}
          onChange={(e) => setProfileSummary(e.target.value)}
        />
      </div>

      {/* Education */}
      <div className="two-cols">
        <div className="form-row">
          <label>Education Level *</label>
          <select
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            required
          >
            <option value="">-- Select Education Level --</option>
            <option value="Post Graduation">Post Graduation</option>
            <option value="Graduation">Graduation</option>
            <option value="Pursuing">Pursuing</option>
            <option value="Diploma">Diploma</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-row">
          <label>Degree *</label>
          <input
            type="text"
            placeholder="e.g. B.Tech, M.Sc"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            required
          />
        </div>
        {errors.social && <span className="error">{errors.social}</span>}
      </div>

      <div>
        <label>Skills</label>
        <input
          type="text"
          placeholder="Skill Name"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <select value={newLevel} onChange={(e) => setNewLevel(e.target.value)}>
          <option value="">Select Level</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
        </select>
        <button type="button" onClick={addSkill} disabled={skills.length >= 5}>
          Add Skill <IoAddCircleOutline />
        </button>
      </div>
      {skills.length > 0 && (
        <ul>
          {skills.map((s, i) => (
            <li key={i}>
              {s.skill} - {s.level}
            </li>
          ))}
        </ul>
      )}

      {/* Awards Section */}
      <div>
        <label>Awards</label>
        <input
          type="text"
          value={newAward}
          onChange={(e) => setNewAward(e.target.value)}
          placeholder="Award Title"
        />
        <button type="button" onClick={addAward}>
          Add Award <IoAddCircleOutline />
        </button>
      </div>
      {awards.length > 0 && (
        <ul>
          {awards.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      )}

      {/* Performance Location Section - Moved to Bottom */}
      <div className="performance-section">
        <h3>Performance Location Preferences</h3>
        <div className="form-row full-width">
          <label>State for Performance *</label>
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedDistricts([]);
            }}
            required
          >
            <option value="">-- Select State --</option>
            {Object.keys(districtMap).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {selectedState && (
          <div className="form-row full-width district-card">
            <label>Select District(s) for Performance *</label>
            <div className="district-checkboxes">
              {districtMap[selectedState].map((district) => (
                <label key={district} style={{ marginRight: "10px" }}>
                  <input
                    type="checkbox"
                    value={district}
                    checked={selectedDistricts.includes(district)}
                    onChange={handleDistrictChange}
                  />
                  {district}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
      <button type="submit" disabled={loading}>
        {loading ? <div className="button-spinner"></div> : "Register"}
      </button>
    </form>
  );
};

export default VolunteerRegistration;
