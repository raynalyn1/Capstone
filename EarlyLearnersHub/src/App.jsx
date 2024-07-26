import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    
      <Router>
        <ErrorBoundary>
        <Routes>
          <Route path="/admin/*" element={<LandingPageAd />} />
          <Route path="/user/*" element={<UserPage />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/" element={<LandingPage />} /> {/* Default route */}
        </Routes>
        </ErrorBoundary>
      </Router>
    
  );
}

export default App;
