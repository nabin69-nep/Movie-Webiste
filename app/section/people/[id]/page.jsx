import React from 'react'
import PeopleDetails from "@/app/component/PeopleDetails"
export default function page() {
  return (
   <PeopleDetails />
  )
}
export function generateMetadata({ data }) {
    return {
      title:"Herne | peopledetails",
      description:"Get all your movies and show on herne",
    };
  
  }