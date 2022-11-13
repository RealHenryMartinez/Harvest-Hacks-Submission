import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// pages for routes
import FoodGalleryPage from './pages/FoodGalleryPage'
import AboutUsPage from './pages/AboutUsPage'

import Header from './components/Header'


// store my routes
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<FoodGalleryPage />} />
        <Route exact path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
