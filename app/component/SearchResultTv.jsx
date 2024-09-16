"use client"
import React, { useContext } from "react";
import IdContext from "../context/IdContext";
import Link from "next/link";
const SearchResultItem = () => {
  const { searchTv,setTvId}=useContext(IdContext)
  if(searchTv.length<=0){
    return <>
    <p className=" h-[70vh] flex justify-center items-center text-bold  text-xl sm:text-3xl">No result found !</p>
    </>

  }
  return (
    <div>
      {
        searchTv.map((movie)=>{
          return <Link  onClick={()=>setTvId(movie.id)}
          href={`/section/tv/${
            movie.title || movie.original_name
          }`} key={movie.id} className="flex flex-col md:flex-row items-start w-full bg-white p-4 mb-4 rounded-lg shadow-md">
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
        alt={movie.title || movie.name}
        className="w-24 h-32 md:w-24 md:h-32 rounded-lg object-cover"
      />

      <div className="mt-4 md:mt-0 md:ml-4 flex-1">
        <h2 className="text-black text-xl hover:underline font-bold">{movie.name}</h2>
        <p className="text-gray-500 mb-2">{movie.first_air_date}</p>
        <p className="text-gray-700 line-clamp-2">
          {movie.overview}
        </p>
      </div>
      </Link>
        })
      }
      {/* Content */}
    </div>
  );
};
export default SearchResultItem;
