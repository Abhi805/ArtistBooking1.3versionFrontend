// import { createContext, useState, useContext } from "react";

// const FormContext = createContext();

// export const FormProvider = ({ children }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     category: "",
//     instagram: "",
//     performanceType: "",
//     city: "",
//     charges: "",
//     experience: "",
//     about: "",
//     photos: [],
//     videos: [],
//   });

//   return (
//     <FormContext.Provider value={{ formData, setFormData }}>
//       {children}
//     </FormContext.Provider>
//   );
// };

// export const useFormData = () => useContext(FormContext);
