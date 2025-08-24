import React, { useState } from 'react'

const Contact = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Google Forms integration
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
  const GOOGLE_FORM_ENTRY_IDS = {
    name: "entry.1234567890", // Replace with actual entry IDs from your Google Form
    email: "entry.0987654321",
    phone: "entry.1122334455",
    message: "entry.5566778899"
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Create form data for Google Forms
      const formDataToSend = new FormData()
      formDataToSend.append(GOOGLE_FORM_ENTRY_IDS.name, formData.name)
      formDataToSend.append(GOOGLE_FORM_ENTRY_IDS.email, formData.email)
      formDataToSend.append(GOOGLE_FORM_ENTRY_IDS.phone, formData.phone)
      formDataToSend.append(GOOGLE_FORM_ENTRY_IDS.message, formData.message)

      // Submit to Google Forms using fetch
      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // Required for Google Forms
      })

      // Since Google Forms returns no-cors, we can't check the response
      // But if we reach here, the submission was likely successful
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Show success message
      alert('Thank you for your message! We will get back to you within 24 hours.')
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      alert('There was an error submitting your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
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

      {/* Contact Form and Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {content.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {content.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {content.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {content.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Tell us about your fitness goals and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-lg py-4 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'btn-primary hover:bg-primary-700'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending Message...
                    </span>
                  ) : (
                    content.form.submit
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span className="text-green-700">Message sent successfully!</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="fas fa-exclamation-circle text-red-500 mr-2"></i>
                      <span className="text-red-700">Error sending message. Please try again.</span>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {content.info.title}
                </h2>
                <div className="space-y-6">
                  {content.info.items.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${item.icon} text-primary-600 text-xl`}></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.label}
                        </h3>
                        <p className="text-gray-600">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {content.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i className={`${social.icon} text-white text-lg`}></i>
                      </div>
                      <span className="font-medium text-gray-700 group-hover:text-primary-600">
                        {social.platform}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visit Our Location
                </h3>
                <div className="w-full h-48 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-map-marked-alt text-primary-600 text-4xl mb-2"></i>
                    <p className="text-primary-600 font-medium">Interactive Map</p>
                    <p className="text-sm text-primary-500">Click to view location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our training programs and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do I get started?
              </h3>
              <p className="text-gray-600">
                Simply fill out the contact form above or give us a call. We'll schedule a free consultation to discuss your goals and create a personalized plan.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What should I bring to my first session?
              </h3>
              <p className="text-gray-600">
                Just bring comfortable workout clothes, supportive shoes, and a water bottle. We'll provide all the necessary equipment.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer online training?
              </h3>
              <p className="text-gray-600">
                Yes! We offer virtual training sessions and online workout plans for clients who prefer remote training or have busy schedules.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What if I'm a complete beginner?
              </h3>
              <p className="text-gray-600">
                Perfect! Our Beginner's Journey program is designed specifically for those new to fitness. We'll teach you proper form and build your confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Don't wait any longer. Contact us today and take the first step towards a healthier, stronger you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15551234567" className="btn-secondary">
              <i className="fas fa-phone mr-2"></i>
              Call Now
            </a>
            <a href="mailto:debi@debifit.com" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              <i className="fas fa-envelope mr-2"></i>
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 