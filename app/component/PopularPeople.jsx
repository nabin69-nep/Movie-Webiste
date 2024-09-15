"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "./Loading";
import { useContext } from "react";
import IdContext from "../context/IdContext";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
export default function Trending() {
  const { setPeopleId } = useContext(IdContext);
  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getResponse = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/person/popular?api_key=233d579ffe391c65ea271864eb408536&page=${page}`
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
  return (
    <div className="container mx-auto px-4 mt-10 overflow-hidden ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-3 lg:grid-cols-4 gap-6">
  {isLoading && <Loading cards={20} />}

  {data.map((people) => (
    <Link onClick={()=>setPeopleId(people.id)}
      href={`/section/people/${people.name}`}
      key={people.id}
      className="bg-white scale-100 rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${people.profile_path}`}
        alt={people.title || people.original_name}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <p className="text-lg hover:underline text-black font-semibold mb-2 truncate">
          {people.name || people.original_name}
        </p>
        {/* Loop over known_for array */}
        {people.known_for?.length > 0 && (
          <div>
            {people.known_for.map((e, index) => (
              <span key={index} className="text-gray-600 text-sm mb-4">
                {e.title || e.original_title}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  ))}
</div>

      <div>
      </div>
      <Carousel>
  <CarouselContent>  
    {data.map((people, index) => {
       return  <CarouselItem key={people.id} className="py-5 text-center basis-1/3">
  <button
          key={index}
          onClick={(e)=>{e.preventDefault(); setActiveButton(index);setPage(index+1) ;setIsLoading(!isLoading)}} // Set the clicked button as active
          className={`py-2 px-4 rounded focus:outline-none ${
            activeButton === index
              ? 'bg-gray-400' // Active button styles
              : 'bg-blue-500 text-white hover:bg-blue-600' // Inactive button styles
          }`}
        >
          {index+1}
        </button>
        </CarouselItem>

    })}
  </CarouselContent>
  <CarouselPrevious className="absolute top-1/2 left-0" />
  <CarouselNext className="absolute top-1/2 right-0" />
</Carousel>
    </div>
  );
}
