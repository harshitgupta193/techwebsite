import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 mb-4">Get In Touch</h1>
              <p className="lead mb-0">
                Ready to start your next project? Let's discuss your ideas and 
                create something amazing together. I'm always excited to work on new challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-8 mb-5">
              <div className="contact-form">
                <h3 className="mb-4">Send Me a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name" 
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 12345 67890" 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project inquiry, consultation, etc." 
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea 
                      className="form-control" 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Tell me about your project, requirements, timeline, budget, etc."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message <i className="fas fa-paper-plane ms-2"></i>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-4">
              <div className="contact-info-sidebar">
                <h3 className="mb-4">Contact Information</h3>
                
                <div className="contact-item mb-4">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Email</h5>
                    <p>harsh@example.com</p>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Phone</h5>
                    <p>+91 12345 67890</p>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Location</h5>
                    <p>India</p>
                  </div>
                </div>

                <div className="contact-item mb-4">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-details">
                    <h5>Working Hours</h5>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="social-connect">
                  <h5 className="mb-3">Connect With Me</h5>
                  <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about my services and process</p>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      How long does a typical project take?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, 
                      while a complex web application could take 2-6 months. I'll provide a detailed timeline during our initial consultation.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      What's your development process?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      I follow an agile development process: Discovery & Planning → Design & Wireframing → Development → 
                      Testing → Deployment → Maintenance. You'll be involved throughout the process with regular updates and feedback sessions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Do you provide ongoing support?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! I offer ongoing support and maintenance packages. This includes bug fixes, security updates, 
                      performance optimization, and feature enhancements to keep your application running smoothly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
