import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Training from './pages/Training'
import Contact from './pages/Contact'
import contentData from './data/content.json'

function App() {
  const [content, setContent] = useState(null)

  useEffect(() => {
    setContent(contentData)
  }, [])

  if (!content) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation content={content.navigation} />
      <main>
        <Routes>
          <Route path="/" element={<Home content={content.home} />} />
          <Route path="/training" element={<Training content={content.training} />} />
          <Route path="/contact" element={<Contact content={content.contact} />} />
        </Routes>
      </main>
      <Footer content={content.footer} />
    </div>
  )
}

export default App 