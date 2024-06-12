import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Services from '../pages/Service/Services'
import Portifolio from '../pages/Portifolio/Portifolio'
import Contact from '../pages/Contact/Contact'
import Header from '../components/Header/Header'


const RoutesHome = () => {
    return (
        <Router>
            <Header />
            <div className="p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portifolio />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}

export default RoutesHome
