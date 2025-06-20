// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axiosInstance from "../../api/axiosInstance.jsx";
// const BasicDetail = () => {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [customTravelMode, setCustomTravelMode] = useState(false);
//   const [customCategoryMode, setCustomCategoryMode] = useState(false);
//   const [customGenreMode, setCustomGenreMode] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     city: "",
//     duration: "",
//     travel: "",
//     category: "",
//     genre: "",
//     team: "",
//     location: "",
//     description: "",
//     profileImage: null,
//     images: [],
//     videoLink: [""], // Optional video links
//     profileTitle: "",
//     profileKeywords: "",
//     profileDescription: "",
//   });

//   const [previewUrl, setPreviewUrl] = useState(null);

//   // Update preview when images change
//   // useEffect(() => {
//   //   if (formData.images.length > 0) {
//   //     const objectUrl = URL.createObjectURL(formData.images[0]);
//   //     setPreviewUrl(objectUrl);
//   //     return () => URL.revokeObjectURL(objectUrl);
//   //   } else {
//   //     setPreviewUrl(null);
//   //   }
//   // }, [formData.images]);

//   useEffect(() => {
//     if (formData.profileImage) {
//       const objectUrl = URL.createObjectURL(formData.profileImage);
//       setPreviewUrl(objectUrl);
//       return () => URL.revokeObjectURL(objectUrl);
//     } else {
//       setPreviewUrl(null);
//     }
//   }, [formData.profileImage]);

//   // Validate mobile: allows optional +91 and exactly 10 digits
//   const validateMobile = (mobile) => {
//     const regex = /^(?:\+91[-\s]?)?[0]?[6-9]\d{9}$/;
//     return regex.test(mobile);
//   };

//   // Validate YouTube URL (only if not empty)
//   const isValidYoutubeUrl = (url) => {
//     if (!url.trim()) return true;
//     const ytRegex =
//       /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}(&.*|\?.*)?$/;
//     return ytRegex.test(url.trim());
//   };

//   // Check duplicate YouTube URLs (ignoring empty)
//   const hasDuplicateYoutubeUrls = (urls) => {
//     const filtered = urls.filter((u) => u.trim() !== "");
//     return new Set(filtered).size !== filtered.length;
//   };

//   // Handle text input changes
//   const handleChange = (e) => {
//     const { name, id, value } = e.target;
//     const key = name || id;

//     // Custom travel logic
//     if (key === "travel" && value === "custom") {
//       setCustomTravelMode(true);
//       setFormData((prev) => ({ ...prev, travel: "" }));
//       return;
//     }

//     if (key === "mobile") {
//       if (value && !/^\d*$/.test(value)) {
//         toast.error("Mobile number must contain digits only");
//         return;
//       }
//     }

//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   // Handle video link input change
//   const handleVideoLinkChange = (index, value) => {
//     if (value.trim() === "") {
//       // Empty allowed
//       const newLinks = [...formData.videoLink];
//       newLinks[index] = value;
//       setFormData({ ...formData, videoLink: newLinks });
//       return;
//     }

//     if (isValidYoutubeUrl(value)) {
//       const newLinks = [...formData.videoLink];
//       newLinks[index] = value;
//       setFormData({ ...formData, videoLink: newLinks });
//     } else {
//       const minLength = 15;
//       if (value.length >= minLength) {
//         toast.error(`Invalid YouTube URL at position ${index + 1}`);
//       }
//       const newLinks = [...formData.videoLink];
//       newLinks[index] = value;
//       setFormData({ ...formData, videoLink: newLinks });
//     }
//   };

//   // Add new video link input (max 6)
//   const addVideoLinkInput = () => {
//     if (formData.videoLink.length >= 6) {
//       toast.error("Maximum 6 YouTube URLs allowed");
//       return;
//     }
//     setFormData((prev) => ({ ...prev, videoLink: [...prev.videoLink, ""] }));
//   };

//   // Remove video link input by index
//   const removeVideoLinkInput = (index) => {
//     if (formData.videoLink.length === 1) return; // keep at least one input
//     const newVideoLinks = formData.videoLink.filter((_, i) => i !== index);
//     setFormData((prev) => ({ ...prev, videoLink: newVideoLinks }));
//   };

//   // Handle image upload (max 5 unique)
//   const handleImageChange = (e) => {
//     const newFiles = Array.from(e.target.files);

//     // Filter duplicates by name+size
//     const uniqueNewFiles = newFiles.filter(
//       (file) =>
//         !formData.images.some(
//           (img) => img.name === file.name && img.size === file.size
//         )
//     );

//     if (formData.images.length + uniqueNewFiles.length > 5) {
//       toast.error("You can upload up to 5 unique images only");
//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       images: [...prev.images, ...uniqueNewFiles],
//     }));
//   };

//   // Handle image upload 1 photo
//   const handleProfileImageChange = (e) => {
//     const file = e.target.files[0];

//     if (!file) return;

//     // File type check
//     const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
//     if (!allowedTypes.includes(file.type)) {
//       toast.error("Only JPG, PNG or WebP files are allowed");
//       return;
//     }

//     // Size limit: 2MB
//     const maxSize = 2 * 1024 * 1024;
//     if (file.size > maxSize) {
//       toast.error("Profile image must be under 2MB");
//       return;
//     }

//     // Save to formData
//     setFormData((prev) => ({
//       ...prev,
//       profileImage: file,
//     }));
//   };

//   // Remove image by index
//   const removeImage = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       images: prev.images.filter((_, i) => i !== index),
//     }));
//   };

//   // Validate required fields per step
//   const validateStep = () => {
//     if (step === 1) {
//       if (
//         !formData.firstName.trim() ||
//         !formData.lastName.trim() ||
//         !formData.email.trim() ||
//         !formData.mobile.trim()
//       ) {
//         toast.error("Please fill all required fields in Basic Details");
//         return false;
//       }
//       if (!validateMobile(formData.mobile.trim())) {
//         toast.error("Mobile number must be 10 to 15 digits");
//         return false;
//       }
//     } else if (step === 2) {
//       if (
//         !formData.city.trim() ||
//         !formData.duration.trim() ||
//         !formData.travel.trim() ||
//         !formData.category.trim()
//       ) {
//         toast.error("Please fill all required fields in Performance Info");
//         return false;
//       }
//     } else if (step === 3) {
//       if (
//         !formData.genre.trim() ||
//         !formData.team.trim() ||
//         !formData.location.trim() ||
//         !formData.description.trim()
//       ) {
//         toast.error("Please fill all required fields in Additional Info");
//         return false;
//       }
//     }
//     return true;
//   };

//   // Next step handler
//   const handleNext = (e) => {
//     e.preventDefault();
//     if (validateStep()) {
//       setStep((prev) => prev + 1);
//     }
//   };

//   // Previous step handler
//   const handlePrev = (e) => {
//     e.preventDefault();
//     if (step > 1) setStep((prev) => prev - 1);
//   };

//   // Submit form handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate final step fields
//     if (!validateStep()) return;

//     // Validate YouTube URLs if any filled
//     const nonEmptyLinks = formData.videoLink.filter((v) => v.trim() !== "");

//     if (nonEmptyLinks.length > 6) {
//       toast.error("Maximum 6 YouTube URLs allowed");
//       return;
//     }

//     if (hasDuplicateYoutubeUrls(nonEmptyLinks)) {
//       toast.error("Duplicate YouTube URLs found");
//       return;
//     }

//     for (const link of nonEmptyLinks) {
//       if (!isValidYoutubeUrl(link)) {
//         toast.error("Invalid YouTube URL found");
//         return;
//       }
//     }

//     setLoading(true);

//     try {
//       const submitData = new FormData();

//       // // Append fields to formData for submission
//       // Object.entries(formData).forEach(([key, value]) => {
//       //   if (key === "images") {
//       //     value.forEach((file) => submitData.append("images", file));
//       //   } else if (key === "videoLink") {
//       //     nonEmptyLinks.forEach((link) =>
//       //       submitData.append("videoLink[]", link)
//       //     );
//       //   } else {
//       //     submitData.append(key, value);
//       //   }
//       // });

//       Object.entries(formData).forEach(([key, value]) => {
//         if (key === "images") {
//           value.forEach((file) => submitData.append("images", file));
//         } else if (key === "videoLink") {
//           nonEmptyLinks.forEach((link) =>
//             submitData.append("videoLink[]", link)
//           );
//         } else if (key === "profileImage") {
//           if (value) submitData.append("profileImage", value);
//         } else {
//           submitData.append(key, value);
//         }
//       });

//       // Replace URL with your backend endpoint
//       await axiosInstance.post("api/artists/add", submitData);

//       toast.success("Profile submitted successfully!");
//       setStep(1);
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         mobile: "",
//         city: "",
//         duration: "",
//         travel: "",
//         category: "",
//         genre: "",
//         team: "",
//         location: "",
//         description: "",

//         profileImage: null,

//         images: [],
//         videoLink: [""],
//         profileTitle: "",
//         profileKeywords: "",
//         profileDescription: "",
//       });
//     } catch (err) {
//       const { errors, message } = err?.response?.data || {};

//       if (Array.isArray(errors) && errors.length > 0) {
//         toast.error(errors[0]); // Toast with first error
//       } else if (message) {
//         toast.error(message); // Toast with message
//       } else {
//         const fallback = "Something went wrong";
//         toast.error(fallback);
//       }

//       console.log("Server Response:", err.response.data);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="artist-profile-form py-5">
//       <ToastContainer />
//       <div className="container">
//         {/* Step Indicator */}
//         <div className="mb-4 text-center">
//           {[1, 2, 3, 4].map((s) => (
//             <span
//               key={s}
//               className={`mx-2 px-3 py-2 rounded ${
//                 step === s ? "bg-primary text-white" : "bg-light text-secondary"
//               }`}
//               style={{ cursor: "pointer" }}
//               onClick={() => setStep(s)}
//             >
//               Step {s}
//             </span>
//           ))}
//         </div>

//         <div className="row g-4 align-items-start p-4 shadow rounded">
//           <div className="col-md-4 text-center">
//             <div className="profile-section mb-3">
//               <img
//                 style={{ height: "200px", width: "200px", objectFit: "cover" }}
//                 src={
//                   previewUrl ||
//                   "https://via.placeholder.com/200?text=Profile+Image"
//                 }
//                 alt="Profile Preview"
//                 className="upload-profile rounded"
//               />
//             </div>
//             <div className="upload-btn-wrapper mb-4">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleProfileImageChange} // create this function separately
//                 className="form-control"
//               />
//               <small className="text-muted">
//                 Upload a single profile photo (JPG, PNG)
//               </small>
//             </div>

//             {/* Show uploaded images with remove button */}
//             <div className="d-flex flex-wrap justify-content-center gap-2">
//               {formData.images.map((file, i) => (
//                 <div
//                   key={i}
//                   className="position-relative"
//                   style={{ width: 60, height: 60 }}
//                 >
//                   <img
//                     src={URL.createObjectURL(file)}
//                     alt={`upload-${i}`}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       borderRadius: 4,
//                     }}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeImage(i)}
//                     className="btn btn-danger btn-sm position-absolute top-0 end-0"
//                     style={{ zIndex: 10 }}
//                   >
//                     ×
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>{" "}
//           <div className="col-md-8">
//             <form onSubmit={step === 4 ? handleSubmit : handleNext}>
//               {/* Step 1: Basic Details */}
//               {step === 1 && (
//                 <>
//                   <h4>Basic Details</h4>
//                   <div className="mb-3">
//                     <label htmlFor="firstName" className="form-label">
//                       First Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className="form-control"
//                       required
//                       placeholder="Enter Your First Name"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="lastName" className="form-label">
//                       Last Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className="form-control"
//                       required
//                       placeholder="Enter Your Last Name"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="form-control"
//                       required
//                       placeholder="Enter Your Email"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="mobile" className="form-label">
//                       Mobile Number *
//                     </label>
//                     <input
//                       type="text"
//                       id="mobile"
//                       value={formData.mobile}
//                       onChange={handleChange}
//                       maxLength={15}
//                       className="form-control"
//                       required
//                       placeholder="Enter Your Mobile No."
//                     />
//                     <small className="form-text text-muted">
//                       Digits only, 10 characters
//                     </small>
//                   </div>
//                 </>
//               )}

//               {/* Step 2: Performance Info */}
//               {step === 2 && (
//                 <>
//                   <h4>Performance Info</h4>
//                   <div className="mb-3">
//                     <label htmlFor="city" className="form-label">
//                       City *
//                     </label>
//                     <input
//                       type="text"
//                       id="city"
//                       value={formData.city}
//                       onChange={handleChange}
//                       className="form-control"
//                       required
//                       placeholder="Enter The City Where You Live"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="duration" className="form-label">
//                       Performance Duration *
//                     </label>
//                     <input
//                       type="text"
//                       id="duration"
//                       value={formData.duration}
//                       onChange={handleChange}
//                       className="form-control"
//                       required
//                       placeholder="Enter Performance Duration (e.g. 1 Hour 30 Minutes)"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="travel" className="form-label">
//                       Travel *
//                     </label>

//                     {!customTravelMode ? (
//                       <select
//                         id="travel"
//                         name="travel"
//                         value={formData.travel}
//                         onChange={handleChange}
//                         className="form-control"
//                         required
//                       >
//                         <option value="">Select travel scope</option>
//                         <option value="national">National</option>
//                         <option value="international">International</option>
//                         <option value="worldwide">Worldwide</option>
//                         {/* <option value="yes">YES</option> */}
//                         <option value="no">NO</option>
//                         <option value="custom">Custom</option>
//                       </select>
//                     ) : (
//                       <>
//                         <input
//                           type="text"
//                           name="travel"
//                           value={formData.travel}
//                           onChange={handleChange}
//                           className="form-control"
//                           placeholder="Enter your custom travel preference"
//                           required
//                         />
//                         <button
//                           type="button"
//                           className="btn btn-link p-0 mt-1"
//                           onClick={() => {
//                             setCustomTravelMode(false);
//                             setFormData((prev) => ({ ...prev, travel: "" }));
//                           }}
//                         >
//                           ← Back To Select Travel Options
//                         </button>
//                       </>
//                     )}
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="category" className="form-label">
//                       Artist Type *
//                     </label>

//                     {!customCategoryMode ? (
//                       <select
//                         id="category"
//                         name="category"
//                         value={formData.category}
//                         onChange={(e) => {
//                           if (e.target.value === "custom") {
//                             setCustomCategoryMode(true);
//                             setFormData((prev) => ({ ...prev, category: "" }));
//                           } else {
//                             handleChange(e);
//                           }
//                         }}
//                         className="form-control"
//                         required
//                       >
//                         <option value="">Select artist type</option>
//                         <option value="singer">Singer</option>
//                         <option value="dancer">Dancer</option>
//                         <option value="comedian">Comedian</option>
//                         <option value="magician">Magician</option>
//                         <option value="band">Band</option>
//                         <option value="custom">Custom</option>
//                       </select>
//                     ) : (
//                       <div className="position-relative">
//                         <input
//                           type="text"
//                           name="category"
//                           value={formData.category}
//                           onChange={handleChange}
//                           className="form-control"
//                           placeholder="Enter your custom artist type"
//                           required
//                         />
//                         <button
//                           type="button"
//                           className="btn btn-sm btn-light position-absolute end-0 top-0 mt-1 me-2"
//                           onClick={() => {
//                             setCustomCategoryMode(false);
//                             setFormData((prev) => ({ ...prev, category: "" }));
//                           }}
//                         >
//                           ⟵
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </>
//               )}

//               {/* Step 3: Additional Info */}
//               {step === 3 && (
//                 <>
//                   <h4>Additional Info</h4>
//                   <div className="mb-3">
//                     <label htmlFor="genre" className="form-label">
//                       Music/Genre *
//                     </label>

//                     {!customGenreMode ? (
//                       <select
//                         id="genre"
//                         name="genre"
//                         value={formData.genre}
//                         onChange={(e) => {
//                           if (e.target.value === "custom") {
//                             setCustomGenreMode(true);
//                             setFormData((prev) => ({ ...prev, genre: "" }));
//                           } else {
//                             handleChange(e);
//                           }
//                         }}
//                         className="form-control"
//                         required
//                       >
//                         <option value="">Select genre</option>
//                         <option value="rock">Rock</option>
//                         <option value="pop">Pop</option>
//                         <option value="classical">Classical</option>
//                         <option value="hiphop">Hip Hop</option>
//                         <option value="folk">Folk</option>
//                         <option value="custom">Custom</option>
//                       </select>
//                     ) : (
//                       <div className="position-relative">
//                         <input
//                           type="text"
//                           name="genre"
//                           value={formData.genre}
//                           onChange={handleChange}
//                           className="form-control"
//                           placeholder="Enter your custom genre"
//                           required
//                         />
//                         <button
//                           type="button"
//                           className="btn btn-sm btn-light position-absolute end-0 top-0 mt-1 me-2"
//                           onClick={() => {
//                             setCustomGenreMode(false);
//                             setFormData((prev) => ({ ...prev, genre: "" }));
//                           }}
//                         >
//                           ⟵
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="team" className="form-label">
//                       Team Members *
//                     </label>
//                     <input
//                       type="number"
//                       id="team"
//                       value={formData.team}
//                       onChange={handleChange}
//                       className="form-control"
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="location" className="form-label">
//                       Location *
//                     </label>
//                     <input
//                       type="text"
//                       id="location"
//                       value={formData.location}
//                       onChange={handleChange}
//                       className="form-control"
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="description" className="form-label">
//                       Description *
//                     </label>
//                     <textarea
//                       id="description"
//                       value={formData.description}
//                       onChange={handleChange}
//                       className="form-control"
//                       rows={3}
//                       maxLength={300}
//                       minLength={100}
//                       required
//                     />
//                   </div>
//                 </>
//               )}

//               {/* Step 4: SEO and Video Links */}
//               {step === 4 && (
//                 <>
//                   <h4>SEO & Video Links</h4>

//                   {/* ✅ Profile Image Upload Section */}
//                   <div className="upload-btn-wrapper mb-4">
//                     <input
//                       type="file"
//                       multiple
//                       accept="image/*"
//                       onChange={handleImageChange}
//                       className="form-control"
//                     />
//                     <small className="text-muted">
//                       Upload up to 5 unique images
//                     </small>
//                   </div>

//                   {/* ✅ Profile Title */}
//                   <div className="mb-3">
//                     <label htmlFor="profileTitle" className="form-label">
//                       Profile Title
//                     </label>
//                     <input
//                       type="text"
//                       id="profileTitle"
//                       value={formData.profileTitle}
//                       onChange={handleChange}
//                       className="form-control"
//                     />
//                   </div>

//                   {/* ✅ Keywords */}
//                   <div className="mb-3">
//                     <label htmlFor="profileKeywords" className="form-label">
//                       Profile Keywords
//                     </label>
//                     <input
//                       type="text"
//                       id="profileKeywords"
//                       value={formData.profileKeywords}
//                       onChange={handleChange}
//                       className="form-control"
//                     />
//                   </div>

//                   {/* ✅ Description */}
//                   <div className="mb-3">
//                     <label htmlFor="profileDescription" className="form-label">
//                       Profile Description
//                     </label>
//                     <textarea
//                       id="profileDescription"
//                       value={formData.profileDescription}
//                       onChange={handleChange}
//                       className="form-control"
//                       rows={3}
//                     />
//                   </div>

//                   {/* ✅ YouTube Links */}
//                   <div>
//                     <label className="form-label">
//                       YouTube Video Links (optional)
//                     </label>
//                     {formData.videoLink.map((link, i) => (
//                       <div key={i} className="input-group mb-2">
//                         <input
//                           type="text"
//                           value={link}
//                           placeholder="https://youtu.be/xyz"
//                           onChange={(e) =>
//                             handleVideoLinkChange(i, e.target.value)
//                           }
//                           className="form-control"
//                         />
//                         <button
//                           type="button"
//                           className="btn btn-danger"
//                           onClick={() => removeVideoLinkInput(i)}
//                           disabled={formData.videoLink.length === 1}
//                         >
//                           &times;
//                         </button>
//                       </div>
//                     ))}
//                     {formData.videoLink.length < 6 && (
//                       <button
//                         type="button"
//                         className="btn btn-secondary"
//                         onClick={addVideoLinkInput}
//                       >
//                         Add Video Link
//                       </button>
//                     )}
//                   </div>
//                 </>
//               )}

//               {/* Navigation buttons */}
//               <div className="mt-4 d-flex justify-content-between">
//                 {step > 1 && (
//                   <button
//                     type="button"
//                     className="btn btn-outline-primary"
//                     onClick={handlePrev}
//                     disabled={loading}
//                   >
//                     Previous
//                   </button>
//                 )}

//                 {step < 4 && (
//                   <button
//                     type="submit"
//                     className="btn btn-primary"
//                     disabled={loading}
//                   >
//                     Next
//                   </button>
//                 )}

//                 {step === 4 && (
//                   <button
//                     type="submit"
//                     className="btn btn-success"
//                     disabled={loading}
//                   >
//                     {loading ? "Submitting..." : "Submit"}
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasicDetail;
   




import React, { useState, useEffect } from "react";
import "./BasicDetail.css";

function ComingPage() {

  const deadline = "2025-07-15T00:00:00";

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const deadlineTime = new Date(deadline).getTime();

      const distance = deadlineTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ 
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000); 

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="coming-soon">
      <h1>Coming Soon</h1>
      <p>We are launching on 15th July 2025</p>
      <div className="counter">
        <div>
          <span>{timeLeft.days}</span>Days
        </div>
        <div>
          <span>{timeLeft.hours}</span>Hours
        </div>
        <div>
          <span>{timeLeft.minutes}</span>Min
        </div>
        <div>
          <span>{timeLeft.seconds}</span>Sec
        </div>
      </div>
    </div>
  );
}

export default ComingPage;

