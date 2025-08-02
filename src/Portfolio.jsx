import React from 'react'
import { NavLink } from 'react-router-dom'

// Import project images (using existing images for demo)
import webProject from '../src/images/web1.webp'
import appProject from '../src/images/app.webp'
import gameProject from '../src/images/game.jpg'
import iosProject from '../src/images/ios.jpg'

const portfolioData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: webProject,
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: appProject,
    description: "A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management features.",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Task Management System",
    category: "Web Development",
    image: webProject,
    description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "iOS Fitness App",
    category: "Mobile Development",
    image: iosProject,
    description: "A comprehensive fitness tracking app with workout plans, nutrition tracking, and social features for iOS devices.",
    technologies: ["Swift", "Core Data", "HealthKit", "Firebase"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "2D Puzzle Game",
    category: "Game Development",
    image: gameProject,
    description: "An engaging 2D puzzle game with multiple levels, achievements system, and social leaderboards.",
    technologies: ["Unity", "C#", "Firebase", "Google Play Games"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Restaurant Management",
    category: "Web Development",
    image: webProject,
    description: "A complete restaurant management system with online ordering, inventory management, and customer analytics.",
    technologies: ["Vue.js", "Laravel", "MySQL", "PayPal API"],
    liveUrl: "#",
    githubUrl: "#"
  }
]

export default function Portfolio() {
  const [filter, setFilter] = React.useState('All')
  
  const categories = ['All', 'Web Development', 'Mobile Development', 'Game Development']
  
  const filteredProjects = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === filter)

  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 mb-4">My Portfolio</h1>
              <p className="lead mb-0">
                Explore my latest projects and see how I bring ideas to life through code.
                Each project represents a unique challenge and creative solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter & Grid */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Featured Projects</h2>
            <p>A showcase of my recent work and achievements</p>
          </div>

          {/* Filter Buttons */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="portfolio-filter text-center">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`filter-btn ${filter === category ? 'active' : ''}`}
                    onClick={() => setFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="row">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div className="portfolio-item">
                  <div className="portfolio-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="img-fluid"
                    />
                    <div className="portfolio-overlay">
                      <div className="portfolio-links">
                        <a href={project.liveUrl} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                        <a href={project.githubUrl} className="portfolio-link" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="portfolio-category">{project.category}</span>
                    <h4 className="portfolio-title">{project.title}</h4>
                    <p className="portfolio-description">{project.description}</p>
                    <div className="portfolio-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">Ready to Start Your Project?</h2>
              <p className="lead mb-4">
                Let's discuss your ideas and create something amazing together. 
                I'm always excited to work on new and challenging projects.
              </p>
              <NavLink to="/contact" className="btn btn-primary btn-lg">
                Start a Project <i className="fas fa-arrow-right ms-2"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}