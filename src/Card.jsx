import React from 'react'

import { NavLink } from 'react-router-dom'

export default function Card(props) {
  return (
    <>
        <div className='col-md-4 col-10 mx-auto'>
                <div class="card" style={{ width: "18rem" }}>
                  <img src={props.imgsrc} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <NavLink to="" class="btn btn-primary">Go somewhere</NavLink>
                  </div>
                </div>
              </div>
    </>
  )
}
