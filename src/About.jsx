import React from 'react'
import Common from './Common'
import web from "../src/images/support-modified.png"

export default function About() {
  return (
    <div>
    <Common
    name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact"
    
    ></Common>
    </div>
  )
}
