import React from 'react'
import About from '../component/About'

export default function page() {
  return (
    <About />
  )
}
export function generateMetadata({ data }) {
    return {
      title:"Herne",
      description:"Get all your movies and show on herne",
    };
  
  }
