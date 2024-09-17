import React from 'react'
import PopularPeople from "../../component/PopularPeople"
export default function page() {
  return (
   <PopularPeople />
  )
}
export function generateMetadata({ data }) {
    return {
      title:"Herne | people",
      description:"Get all your movies and show on herne",
    };
  
  }