import React from 'react'
import ShowPopular from "../../component/ShowPopular"
export default function page() {
  return (
   <ShowPopular />
  )
}
export function generateMetadata({ data }) {
    return {
      title:"Herne/tvpopular",
      description:"Get all your movies and show on herne",
    };
  
  }