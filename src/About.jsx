import React from 'react'
import Common from './Common'
import web from "../src/images/support-modified.png"

export default function About() {
  return (
    <div>
      <Common
        name="About Me"
        subtitle="Passionate Developer"
        description="Learn more about my journey, skills, and what drives me to create amazing digital experiences."
        imgsrc={web}
        visit="/contact"
        btname="Let's Connect"
      />
      
      {/* About Content Section */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="about-content">
                <h2 className="mb-4">My Story</h2>
                <p className="lead mb-4">
                  I'm a passionate full-stack developer with over 3 years of experience creating 
                  digital solutions that make a difference. My journey began with a curiosity 
                  about how websites work, and it has evolved into a career dedicated to crafting 
                  exceptional user experiences.
                </p>
                <p className="mb-4">
                  I specialize in modern web technologies including React, Node.js, and cloud 
                  platforms. I believe in writing clean, maintainable code and following best 
                  practices to deliver robust applications that scale.
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="list-unstyled">
                      <li><strong>Name:</strong> Harsh Technical</li>
                      <li><strong>Location:</strong> India</li>
                      <li><strong>Experience:</strong> 3+ Years</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="list-unstyled">
                      <li><strong>Email:</strong> harsh@example.com</li>
                      <li><strong>Phone:</strong> +91 12345 67890</li>
                      <li><strong>Freelance:</strong> Available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="skills-section">
                <h3 className="mb-4">Technical Skills</h3>
                <div className="skill-bar mb-4">
                  <div className="skill-info d-flex justify-content-between mb-2">
                    <span>React.js</span>
                    <span>90%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-bar mb-4">
                  <div className="skill-info d-flex justify-content-between mb-2">
                    <span>Node.js</span>
                    <span>85%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-bar mb-4">
                  <div className="skill-info d-flex justify-content-between mb-2">
                    <span>JavaScript</span>
                    <span>95%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-bar mb-4">
                  <div className="skill-info d-flex justify-content-between mb-2">
                    <span>Python</span>
                    <span>80%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-bar mb-4">
                  <div className="skill-info d-flex justify-content-between mb-2">
                    <span>Database Design</span>
                    <span>85%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Experience</h2>
            <p>My professional journey and key milestones</p>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Senior Full Stack Developer</h4>
                    <h6 className="text-muted">TechCorp Solutions • 2022 - Present</h6>
                    <p>Leading development of enterprise web applications using React, Node.js, and AWS. 
                       Mentoring junior developers and implementing best practices across the team.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Full Stack Developer</h4>
                    <h6 className="text-muted">Digital Innovations • 2021 - 2022</h6>
                    <p>Developed and maintained multiple client projects using modern web technologies. 
                       Improved application performance by 40% through optimization techniques.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Frontend Developer</h4>
                    <h6 className="text-muted">StartupXYZ • 2020 - 2021</h6>
                    <p>Built responsive web applications and collaborated with design teams to create 
                       intuitive user interfaces. Gained expertise in React and modern CSS frameworks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Education & Certifications</h2>
            <p>Academic background and professional certifications</p>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="education-item">
                <h4>Bachelor of Computer Science</h4>
                <h6 className="text-muted">University of Technology • 2016 - 2020</h6>
                <p>Graduated with honors. Specialized in software engineering and web development.</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="education-item">
                <h4>AWS Certified Developer</h4>
                <h6 className="text-muted">Amazon Web Services • 2022</h6>
                <p>Professional certification in cloud development and deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
