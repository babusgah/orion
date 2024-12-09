import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Features from './pages/Features'
import UI from './pages/UI'
import Showcases from './pages/Showcases'
import FAQ from './pages/FAQ'
import Community from './pages/Community'
import Terms from './pages/Terms'
import Policy from './pages/Policy'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/ui" element={<UI />} />
        <Route path="/showcases" element={<Showcases />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/community" element={<Community />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </Router>
  )
}

export default App

