import React from 'react'
import TopRatedShow from "../../../component/TopRatedShow"
export default function page() {
  return (
    <TopRatedShow />
  )
}export function generateMetadata({ data }) {
  return {
    title:"Herne/topRated",
    description:"Get all your movies and show on herne",
  };

}
