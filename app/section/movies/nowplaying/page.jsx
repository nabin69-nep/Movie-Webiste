import React from 'react'
import NowPlaying from "../../../component/NowPlaying"
export default function page() {
  return (
    <NowPlaying />
  )
}
export function generateMetadata({ data }) {
  return {
    title:"Herne/nowPlaying",
    description:"Get all your movies and show on herne",
  };

}