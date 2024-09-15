"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "./Loading";
import { useContext } from "react";
import IdContext from "../context/IdContext";

export default function Trending() {
  const { setMovieId, setTvId } = useContext(IdContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/trending/all/week?api_key=233d579ffe391c65ea271864eb408536"
        );
        if (!res.ok) {
          console.log(`The error is ${res.statusText}`);
          return;
        }
        const result = await res.json();
        setData(result.results);
        setIsLoading(false);  
      } catch (error) {
        console.log(error);
      }
    };
    getResponse();
  }, []);

  function handleClick(evt) {
    if (evt.media_type === "tv") {
      setTvId(evt.id);
    } else {
      setMovieId(evt.id);
    }
  }

  return (
    <div className="container mx-auto px-4 mt-10 overflow-hidden ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-3 lg:grid-cols-4 gap-6">
        {isLoading && <Loading cards={20} />}

        {data.map((movie) => {
          return (
            <div
              key={movie.id}
              className="bg-white scale-100 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.original_name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <Link
                  onClick={() => handleClick(movie)} 
                  href={`/section/${
                    movie.media_type === "movie" ? "movies" : "tv"
                  }/${movie.title || movie.original_name}`}
                  className="text-lg hover:underline text-black font-semibold mb-2 truncate"
                >
                  {movie.title || movie.original_name}
                </Link>
                <p className="text-gray-600 text-sm mb-4">
                  {movie.release_date || movie.first_air_date}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-yellow-500 font-bold">
                    ⭐ {movie.vote_average.toFixed(1)}
                  </p>

                  <Link
                    onClick={() => handleClick(movie)}  
                    href={`/section/${
                      movie.media_type === "movie" ? "movies" : "tv"
                    }/${movie.title || movie.original_name}`}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
