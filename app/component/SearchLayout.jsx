"use client"
import React, { useContext } from "react";
import IdContext from "../context/IdContext";
import Link from "next/link";

const SearchResultsPage = () => {
  const {searchMovie,  searchPeople, searchTv}=useContext(IdContext)
  return (
    <div>
      {/* Sidebar */}
      <aside className="  w-full lg:mt-[110px] mt-10 rounded-lg shadow-md p-4 mb-4 lg:mb-0">
        {/* Header */}
        <h1 className="text-lg font-semibold text-white bg-blue-500 p-3 rounded-lg">
          Search Results
        </h1>

        {/* Categories */}
        <ul className="mt-4 space-y-2">
          <CategoryItem title="Movies" go="/search" count={searchMovie.length} active={true}/>
          <CategoryItem  go="/search/tv" title="TV Shows" count={searchTv.length}  />
          <CategoryItem title="People" go="/search/people" count={searchPeople.length} />
        </ul>
      </aside>

      {/* Results List */}
     
    </div>
  );
};

const CategoryItem = ({ title, count, active,go }) => {
  return (
    <Link href={go}
      className={`flex justify-between items-center p-2 rounded-lg cursor-pointer ${
        active ? 'bg-gray-200 font-bold dark:text-red-800' : 'hover:bg-gray-100 dark:hover:bg-red-200'
      }`}
    >
      <span>{title}</span>
      <span className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full text-sm font-semibold">
        {count}
      </span>
    </Link>
  );
};


export default SearchResultsPage;
