import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card(props) {
  return (
    <>
      <div className="service-card h-100">
        <div className="card-image mb-3">
          <img src={props.imgsrc} className="card-img-top" alt={props.title} />
        </div>
        <div className="card-body">
          <h5 className="card-title mb-3">{props.title}</h5>
          <p className="card-text mb-4">{props.description}</p>
          <NavLink to="/contact" className="btn btn-primary">
            Get Started <i className="fas fa-arrow-right ms-2"></i>
          </NavLink>
        </div>
      </div>
    </>
  )
}
