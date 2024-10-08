"use client";
import React, { useState, useEffect, useContext } from "react";
import IdContext from "../context/IdContext";

export default function Trailer() {
  const { tvId } = useContext(IdContext); 
  const [trailer, setTrailer] = useState(null); 
  useEffect(() => {
    const getTrailer = async () => {
      if (!tvId) return; 
      try {
            const res = await fetch(
               `https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=233d579ffe391c65ea271864eb408536`
            );
        if (!res.ok) {
          console.log(`The error is ${res.statusText}`);
          return;
        }
        const result = await res.json();
        const youtubeTrailer = result.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer" 
        );
        if (youtubeTrailer) {
          setTrailer(youtubeTrailer);
        } 
      } catch (error) {
        console.log("Error fetching the trailer:", error);
      }
    };

    getTrailer();
  }, [tvId]); 
  return (
    trailer ? (
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ) : (
      <p>No trailer available</p>
    )
  );
}
