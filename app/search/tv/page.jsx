import React from 'react'
import SearchResultTv from "@/app/component/SearchResultTv"
export default function page() {
  return (
    <SearchResultTv />
  )
}
export function generateMetadata({ data }) {
  return {
    title:"Herne | searchtvshows",
    description:"Get all your movies and show on herne",
  };

}