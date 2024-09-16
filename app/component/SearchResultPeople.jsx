"use client"
import React, { useContext } from "react";
import IdContext from "../context/IdContext";
import Link from "next/link";
const SearchResultItem = () => {
  const { searchPeople,setPeopleId}=useContext(IdContext)
  if(searchPeople.length<=0){
    return <p className=" h-[70vh] flex justify-center items-center text-bold  text-xl sm:text-3xl">No result found !</p>
  }
  return (
    <div>
      {
        searchPeople.map((people)=>{
          return <Link onClick={()=>setPeopleId(people.id)}
          href={`/section/people/${people.name}`}
          key={people.id}className="flex flex-col md:flex-row items-start w-full bg-white p-4 mb-4 rounded-lg shadow-md">
      <img 
        src={`https://image.tmdb.org/t/p/w500${ people.profile_path||people.poster_path}`}
        alt={people.name || people.original_name}
        className="w-24 h-32 md:w-24 md:h-32 rounded-lg object-cover"
      />

      <div className="mt-4 md:mt-0 md:ml-4 flex-1">
        <h2 className="text-xl hover:underline font-bold text-black ">{people.name || people.original_name}</h2>
        <p className="text-gray-700 line-clamp-2 truncate">
          {people.known_for_department}
        </p>
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
        })
      }
      {/* Content */}
    </div>
  );
};
export default SearchResultItem;
