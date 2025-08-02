import React from 'react'
import web from "../src/images/img.png"
import Common from './Common'

export default function Home() {
  return (
    <div>
      <Common
        name="Hi, I'm a Full Stack"
        imgsrc={web}
        visit="/contact"
        btname="Get In Touch"
        subtitle="Developer & Designer"
        description="I create beautiful, responsive websites and applications that provide exceptional user experiences. Let's bring your ideas to life!"
      />
      
      {/* Skills Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>My Skills</h2>
            <p>Technologies and tools I work with</p>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="skill-item text-center">
                <div className="skill-icon mb-3">
                  <i className="fab fa-react fa-3x text-primary"></i>
                </div>
                <h5>React.js</h5>
                <p>Modern frontend development</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="skill-item text-center">
                <div className="skill-icon mb-3">
                  <i className="fab fa-node-js fa-3x text-success"></i>
                </div>
                <h5>Node.js</h5>
                <p>Backend development</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="skill-item text-center">
                <div className="skill-icon mb-3">
                  <i className="fas fa-database fa-3x text-info"></i>
                </div>
                <h5>Databases</h5>
                <p>MongoDB, PostgreSQL</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="skill-item text-center">
                <div className="skill-icon mb-3">
                  <i className="fab fa-aws fa-3x text-warning"></i>
                </div>
                <h5>Cloud</h5>
                <p>AWS, Docker, DevOps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="stat-item">
                <h3 className="stat-number">50+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="stat-item">
                <h3 className="stat-number">3+</h3>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="stat-item">
                <h3 className="stat-number">30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="stat-item">
                <h3 className="stat-number">24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
