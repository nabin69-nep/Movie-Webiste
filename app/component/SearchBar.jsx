"use client"
import React, { useContext } from "react";
import IdContext from "../context/IdContext";
import { FaSearch } from 'react-icons/fa'; 
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const router = useRouter();
  const{setWord,word,getResponse}=useContext(IdContext);
  function handleClick(event) {
    event.preventDefault(); 
    if(word.length>2){
      getResponse();
      router.push("/search"); 
    }
    else{
      alert("Please enter more than 2 characters")
    }
  }

  return (
    <div className="flex items-center border fixed md:top-16 top-20 dark:bg-black bg-white  border-gray-300  w-full  py-1  mx-auto">
      {/* Search Icon */}
      <FaSearch className="  ml-2" />

      <form onSubmit={handleClick} className="w-full">
      <input
        type="text"
        value={word}
        onChange={(e)=>setWord(e.target.value)}
        placeholder="Search Here..."
        className="ml-4 w-[95%] px-2 py-2  dark:bg-black focus:outline-none   italic"
      />
      </form>
    </div>
  );
};

export default SearchBar;
