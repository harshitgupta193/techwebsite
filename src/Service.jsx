import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

export default function Service() {
  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 mb-4">Our Services</h1>
              <p className="lead mb-0">
                We provide comprehensive digital solutions to help your business grow and succeed in the modern world.
                From web development to mobile apps, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>What We Offer</h2>
            <p>Professional services tailored to meet your business needs</p>
          </div>
          <div className="row">
            {Sdata.map((val, ind) => {
              return (
                <div key={ind} className="col-lg-4 col-md-6 mb-4">
                  <Card 
                    imgsrc={val.imgsrc} 
                    title={val.title} 
                    description={val.description}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
            <p>What makes us different from the competition</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-box text-center">
                <div className="feature-icon mb-3">
                  <i className="fas fa-clock fa-3x text-primary"></i>
                </div>
                <h4>Fast Delivery</h4>
                <p>We deliver high-quality projects on time, every time. Our efficient workflow ensures quick turnaround without compromising quality.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-box text-center">
                <div className="feature-icon mb-3">
                  <i className="fas fa-shield-alt fa-3x text-success"></i>
                </div>
                <h4>Reliable & Secure</h4>
                <p>Security is our priority. We implement best practices and industry standards to ensure your applications are safe and reliable.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-box text-center">
                <div className="feature-icon mb-3">
                  <i className="fas fa-headset fa-3x text-info"></i>
                </div>
                <h4>24/7 Support</h4>
                <p>Our dedicated support team is available round the clock to assist you with any questions or issues you might have.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Process</h2>
            <p>How we work to deliver exceptional results</p>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="process-step text-center">
                <div className="step-number">01</div>
                <h4>Discovery</h4>
                <p>We understand your requirements and goals to create the perfect solution.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="process-step text-center">
                <div className="step-number">02</div>
                <h4>Design</h4>
                <p>Creating wireframes and designs that align with your brand and user needs.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="process-step text-center">
                <div className="step-number">03</div>
                <h4>Development</h4>
                <p>Building your solution using the latest technologies and best practices.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="process-step text-center">
                <div className="step-number">04</div>
                <h4>Launch</h4>
                <p>Testing, deployment, and ongoing support to ensure everything runs smoothly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
