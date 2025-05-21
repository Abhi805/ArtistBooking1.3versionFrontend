import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { FormProvider } from "../context/FormContext.jsx";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <FormProvider> */}
        <App />
      {/* </FormProvider> */}
  </StrictMode>,
)
