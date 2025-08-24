import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ content }) => {
  // WhatsApp integration function
  const openWhatsApp = (service = "General Inquiry") => {
    const phoneNumber = "919876543210" // Replace with your actual WhatsApp number
    const message = `Hi! I'm interested in DebiFit services.

*Service:* ${service}

I'd like to know more about your fitness training programs and how to get started.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    window.open(whatsappURL, '_blank')
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-200 rounded-full opacity-20 animate-ping"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary-200 rounded-full opacity-20 animate-pulse"></div>
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {content.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openWhatsApp("Fitness Journey")}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  <span>{content.hero.cta} on WhatsApp</span>
                </button>
                <Link to="/training" className="btn-outline text-center">
                  View Programs
                </Link>
              </div>
            </div>
            
            {/* Animated Logo Banner */}
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl flex items-center justify-center relative overflow-hidden border-4 border-blue-100">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 opacity-30"></div>
                
                {/* Main Logo Container */}
                <div className="relative z-10 text-center">
                  {/* Large Animated Logo */}
                  <div className="w-48 h-48 mx-auto mb-6 relative group">
                    {/* Logo Container with Animation */}
                    <div className="w-full h-full rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                      {/* Animated Ring */}
                      <div className="absolute inset-0 border-4 border-orange-300 rounded-3xl animate-ping opacity-20"></div>
                      
                      {/* Actual Logo Image */}
                      <img 
                        src="/debifit-logo.jpg" 
                        alt="DebiFit Logo" 
                        className="w-full h-full object-cover rounded-3xl relative z-10 group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    </div>
                  </div>
                  
                  {/* Brand Name with Animation */}
                  <div className="space-y-2">
                    <h2 className="text-4xl font-bold text-gradient font-display animate-pulse">
                      DebiFit
                    </h2>
                    <p className="text-lg text-gray-600 font-medium">
                      Transform Your Life Through Fitness
                    </p>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-10 left-10 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
                  <div className="absolute top-20 right-10 w-6 h-6 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-20 left-10 w-4 h-4 bg-primary-400 rounded-full opacity-60 animate-ping"></div>
                  <div className="absolute bottom-10 right-20 w-6 h-6 bg-secondary-400 rounded-full opacity-60 animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose DebiFit?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive fitness solutions tailored to your individual needs and goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.features.map((feature, index) => (
              <div key={index} className="card p-8 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Trainer Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                {content.about.title}
              </h2>
              <h3 className="text-2xl font-semibold text-primary-600">
                {content.about.name}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content.about.description}
              </p>
              <div className="space-y-3">
                {content.about.credentials.map((credential, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <i className="fas fa-check-circle text-primary-500"></i>
                    <span className="text-gray-700">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-2xl flex items-center justify-center">
                <i className="fas fa-user-circle text-white text-8xl opacity-20"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {content.stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-primary-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who transformed their lives with DebiFit.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-user text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-primary-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-500 to-green-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their lives with DebiFit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openWhatsApp("Fitness Journey")}
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span>Get Started on WhatsApp</span>
            </button>
            <Link to="/training" className="bg-green-400 text-white hover:bg-green-300 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 