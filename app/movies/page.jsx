"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Link from "next/link";

export default function Trending() {
  const [data, setData] = useState([]);
  const [isToggled, setIsToggled] = useState(false);

  // Toggle the state when the button is clicked
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/trending/all/day?api_key=233d579ffe391c65ea271864eb408536"
        );
        if (!res.ok) {
          console.log(`The error is ${res.statusText}`);
          return;
        }
        const result = await res.json();
        setData(result.results);
      } catch (error) {
        console.log(error);
      }
    };
    getResponse();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-10 ">
      
      {data.length > 0 ? (    
<Carousel>
  <CarouselContent>
          {data.map((movie) => (
    <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-1/3">
       <div
              key={movie.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.original_name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg text-black font-semibold mb-2 truncate">
                  {movie.title || movie.original_name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {movie.release_date || movie.first_air_date}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-yellow-500 font-bold">
                    ⭐ {movie.vote_average.toFixed(1)}
                  </p>
                  <Link
                    href={`/movie/${movie.id}`}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
    </CarouselItem>
    
  ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
      ) : (
        <p className="font-bold text-3xl flex items-center justify-center">
          Loading...
        </p>
      )}
    </div>
  );
}
