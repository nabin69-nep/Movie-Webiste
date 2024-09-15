"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MovieLoader from "./MovieLoader";
import { useContext } from "react";
import IdContext from "../context/IdContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Trending() {
  const {setMovieId,movieId}=useContext(IdContext)
  const [activeButton, setActiveButton] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await fetch(
          `
https://api.themoviedb.org/3/movie/now_playing?api_key=233d579ffe391c65ea271864eb408536&page=${page}`
        );
        if (!res.ok) {
          console.log(`The error is ${res.statusText}`);
          return;
        }
        const result = await res.json();
        setData(result.results);
        setIsLoading(!isLoading);
      } catch (error) {
        console.log(error);
      }
    };
    getResponse();
  }, [page]);
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-10 mt-10 ">
        <MovieLoader cards={20} />
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-10 mt-10 ">
      <Carousel>
        <CarouselContent>
          {data.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="md:basis-1/2 py-5 lg:basis-1/3"
            >
              <div
                key={movie.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.original_name}
                  className="w-full h-full object-contain"
                />
                <div className="p-4">
                  <Link onClick={()=>setMovieId(movie.id)}
                    href={`/section/movies/${
                      movie.title || movie.original_name
                    }`}
                    className="text-lg text-black font-semibold mb-2 hover:underline truncate"
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
                      onClick={()=>setMovieId(movie.id)}
                      href={`/section/movies/${
                        movie.title || movie.original_name
                      }`}
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-0 hover:bg-blue-500" />
        <CarouselNext className="absolute top-1/2 right-0 hover:bg-blue-500" />
      </Carousel>
      <Carousel>
        <CarouselContent>
          {data.map((movie, index) => {
            return (
              <CarouselItem
                key={movie.id}
                className="py-5 text-center basis-1/3"
              >
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveButton(index);
                    setPage(index + 1);
                    setIsLoading(!isLoading);
                  }} // Set the clicked button as active
                  className={`py-2 px-4 rounded focus:outline-none ${
                    activeButton === index
                      ? "bg-gray-400" // Active button styles
                      : "bg-blue-500 text-white hover:bg-blue-600" // Inactive button styles
                  }`}
                >
                  {index + 1}
                </button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-0" />
        <CarouselNext className="absolute top-1/2 right-0" />
      </Carousel>
    </div>
  );
}
