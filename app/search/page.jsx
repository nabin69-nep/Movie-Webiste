import React from 'react'
import SearchResult from "../component/SearchResultMovie"
export default function Search() {
  return (
    <SearchResult/>
  )
}
export function generateMetadata({ data }) {
  return {
    title:"Herne | searchmovies",
    description:"Get all your movies and show on herne",
  };

}