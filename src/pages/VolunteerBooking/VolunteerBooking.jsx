import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VolunteerBooking.css";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance.jsx";
import districtMap from "../../components/RegisterPage/data/districtMap";
import Select from "react-select";

const VolunteerBooking = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistricts, setSelectedDistricts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      const res = await axiosInstance.get("api/volunteers/fetch");
      setVolunteers(res.data);
    } catch (err) {
      console.error("Error fetching volunteers:", err);
    }
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedDistricts([]); // Reset districts when state changes
  };

  const handleDistrictChange = (selectedOptions) => {
    setSelectedDistricts(selectedOptions || []);
  };

  const filteredVolunteers = volunteers.filter((vol) => {
    const districtMatch =
      selectedDistricts.length === 0 ||
      selectedDistricts.some((d) => d.value === vol.district);
    return districtMatch;
  });

  // State options
  const stateOptions = Object.keys(districtMap).map((state) => ({
    value: state,
    label: state,
  }));

  // District options based on selected state
  const districtOptions =
    selectedState && districtMap[selectedState.value]
      ? districtMap[selectedState.value].map((district) => ({
          value: district,
          label: district,
        }))
      : [];

      const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#2c2c2c",
    borderColor: state.isFocused ? "#007bff" : "#555",
    color: "#fff",
    boxShadow: state.isFocused ? "0 0 0 1px #007bff" : "none",
    "&:hover": {
      borderColor: "#007bff",
    },
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#2c2c2c",
    color: "#fff",
    zIndex: 9999,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#007bff"
      : state.isFocused
      ? "#444"
      : "#2c2c2c",
    color: "#fff",
    cursor: "pointer",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#fff",
  }),
  placeholder: (base) => ({
    ...base,
    color: "",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#007bff",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "white",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "white",
    ':hover': {
      backgroundColor: "#ff4b2b",
      color: "white",
    }
  })
};


  return (
    <div className="container-fluid my-5">
      <div className="venue-header text-white py-2">
        <div className="container">
          <div className="mt-3">
            <h1>Volunteer Booking</h1>
            <p className="text-capitalize text-white">
              Every great event has silent heroes behind the scenes. Our
              volunteers are the energy, passion, and precision that power
              every moment.
            </p>
            <Link to="/login?redirect=volunteer">
              <button className="btn btn-primary px-4 py-2 mt-4">
                Registration
              </button>
            </Link>
          </div>
          <div className="d-flex flex-wrap gap-4 mt-4 align-items-start">
            <div style={{ minWidth: "250px" }}>
              <Select
                options={stateOptions}
                value={selectedState}
                onChange={handleStateChange}
                placeholder="Search State..."
                isClearable
                styles={customStyles}
              />
            </div>

            {/* Select District */}
            <div style={{ minWidth: "300px" }}>
              {/* <label className="text-white mb-1">Select District(s)</label> */}
              <Select
                options={districtOptions}
                value={selectedDistricts}
                onChange={handleDistrictChange}
                placeholder="Search District(s)..."
                isMulti
                isClearable
                styles={customStyles}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Cards */}
      <div className="container mt-4">
        <div className="row justify-content-start">
          {filteredVolunteers.length === 0 ? (
            <p className="text-center">No volunteers found.</p>
          ) : (
            filteredVolunteers.map((artist, i) => (
              <div key={i} className="col-md-4 mb-4" data-aos="fade-up">
                <div className="card artist-card h-100 shadow-sm">
                  <img
                    src={artist.profilePhoto}
                    className="card-img-top"
                    alt={artist.fullName}
                  />
                  <div className="card-body">
                    <h6 className="card-title fw-bold">Name: {artist.fullName}</h6>
                    <h6 className="card-title fw-bold">Location: {artist.location}</h6>
                    <h6 className="card-title fw-bold">District: {artist.district}</h6>
                    <h6 className="card-title fw-bold">Volunteer Type: {artist.category}</h6>
                    <div className="text-center mt-2">
                      <Link
                        className="btn btn-outline-danger text-white"
                        to={`/volunteers/${
                          artist.userId?.username || artist.userId?._id
                        }`}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerBooking;
