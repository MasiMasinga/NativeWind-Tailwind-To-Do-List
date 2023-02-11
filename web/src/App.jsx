import React from 'react'

// Routes
import AppRoutes from './routes/index'

// React Helmet
import { HelmetProvider } from "react-helmet-async";

function App() {

  return (
    <React.Fragment>
      <HelmetProvider>
        <AppRoutes />
      </HelmetProvider>
    </React.Fragment>
  )
}

export default App
