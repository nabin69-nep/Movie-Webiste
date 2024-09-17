import React from 'react'
import ThisWeek from '../component/ThisWeek'
export default function page() {
  return (
    <>
    <ThisWeek />
    </>
  )
}
export function generateMetadata({ data }) {
  return {
    title:"Herne | thisweek",
    description:"Get all your movies and show on herne",
  };

}