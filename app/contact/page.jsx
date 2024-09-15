import React from 'react'
import Contact from '../component/Contact'
export default function page() {
  return (
    <Contact />
  )
}
export function generateMetadata({ data }) {
    return {
      title:"Herne",
      description:"Get all your movies and show on herne",
    };
  
  }