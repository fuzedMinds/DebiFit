import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ content }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                <img 
                  src="/debifit-logo.jpg" 
                  alt="DebiFit Logo" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <span className="text-2xl font-bold font-display">DebiFit</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {content.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/debifit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com/debifit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com/debifit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://linkedin.com/in/debifit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-white transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Debi
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#personal-training" className="text-gray-300 hover:text-white transition-colors">
                  Personal Training
                </a>
              </li>
              <li>
                <a href="#group-classes" className="text-gray-300 hover:text-white transition-colors">
                  Group Classes
                </a>
              </li>
              <li>
                <a href="#nutrition" className="text-gray-300 hover:text-white transition-colors">
                  Nutrition Coaching
                </a>
              </li>
              <li>
                <a href="#online" className="text-gray-300 hover:text-white transition-colors">
                  Online Training
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {content.copyright}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {content.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 