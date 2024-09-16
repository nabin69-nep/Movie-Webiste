import React from 'react'
import SearchResultPeople from "@/app/component/SearchResultPeople"
export default function page() {
  return (
    <SearchResultPeople />
  )
}
export function generateMetadata({ data }) {
  return {
    title:"Herne/searchpeople",
    description:"Get all your movies and show on herne",
  };

}