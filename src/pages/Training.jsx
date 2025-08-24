import React from 'react'
import { Link } from 'react-router-dom'

const Training = ({ content }) => {
  // WhatsApp integration function
  const openWhatsApp = (service) => {
    const phoneNumber = "919876543210" // Replace with your actual WhatsApp number
    const message = `Hi! I'm interested in your *${service.name}* service.

*Service Details:*
• Duration: ${service.duration}
• Original Price: ${service.originalPrice}
• Offer Price: ${service.offerPrice} (${service.discount})

*Features:*
${service.features.map(feature => `• ${feature}`).join('\n')}

I'd like to know more about this service and how to get started.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    window.open(whatsappURL, '_blank')
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {content.title}
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Training Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Training Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of fitness services designed to meet your specific needs and budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {content.services.map((service, index) => (
              <div key={index} className={`card p-8 relative overflow-hidden group ${
                service.popular ? 'ring-2 ring-accent-500' : ''
              }`}>
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.discount}
                </div>
                
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${service.icon} text-white text-3xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Pricing Section */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-3xl font-bold text-primary-600">
                      {service.offerPrice}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      {service.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Duration: {service.duration}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-gray-900 text-center mb-4">What's Included:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <i className="fas fa-check text-primary-500 flex-shrink-0"></i>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <button
                  onClick={() => openWhatsApp(service)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  <span>Get Started on WhatsApp</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Choose DebiFit Services?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-user-check text-primary-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Personalized Approach
                    </h3>
                    <p className="text-gray-600">
                      Every service is customized to your specific goals, fitness level, and lifestyle.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-chart-line text-secondary-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Progress Tracking
                    </h3>
                    <p className="text-gray-600">
                      Monitor your improvements with detailed progress reports and regular assessments.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-accent-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Flexible Options
                    </h3>
                    <p className="text-gray-600">
                      Choose from one-time services or ongoing personal training based on your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-tag text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Amazing Offers
                    </h3>
                    <p className="text-gray-600">
                      Get premium fitness services at incredible 90% off prices for a limited time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl flex items-center justify-center">
                <i className="fas fa-dumbbell text-white text-8xl opacity-20"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our services to find the perfect fit for your fitness journey.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 border border-gray-200 font-semibold text-gray-900">Service</th>
                  <th className="text-center p-4 border border-gray-200 font-semibold text-gray-900">Duration</th>
                  <th className="text-center p-4 border border-gray-200 font-semibold text-gray-900">Original Price</th>
                  <th className="text-center p-4 border border-gray-200 font-semibold text-gray-900">Offer Price</th>
                  <th className="text-center p-4 border border-gray-200 font-semibold text-gray-900">Savings</th>
                </tr>
              </thead>
              <tbody>
                {content.services.map((service, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">
                      {service.name}
                    </td>
                    <td className="p-4 border border-gray-200 text-center text-gray-700">
                      {service.duration}
                    </td>
                    <td className="p-4 border border-gray-200 text-center text-gray-500 line-through">
                      {service.originalPrice}
                    </td>
                    <td className="p-4 border border-gray-200 text-center font-bold text-primary-600">
                      {service.offerPrice}
                    </td>
                    <td className="p-4 border border-gray-200 text-center font-bold text-green-600">
                      {service.discount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-500 to-green-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don't miss out on our amazing 90% off offers! Click any "Get Started" button above to chat with us on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openWhatsApp({ name: "General Inquiry", duration: "N/A", originalPrice: "N/A", offerPrice: "N/A", discount: "N/A", features: ["Fitness consultation", "Service information", "Pricing details"] })}
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span>Chat on WhatsApp</span>
            </button>
            <Link to="/" className="bg-green-400 text-white hover:bg-green-300 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Training 