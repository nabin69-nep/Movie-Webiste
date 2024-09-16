"use client"
import React, { useContext ,useState} from "react";
import IdContext from "../context/IdContext";
import Link from "next/link";

const SearchResultsPage = () => {
  const {searchMovie,  searchPeople, searchTv}=useContext(IdContext)
  const [activeButton, setActiveButton] = useState(0);
  const section=[{
    title: "Movies",
    go: "/search",
    count: searchMovie.length,
  },
  {
    title: "TV Shows",
    go: "/search/tv",
    count: searchTv.length,
  },
    {
      title: "People",
      go: "/search/people",
      count: searchPeople.length,
    }
]
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
          {
            section.map((item, index) => (
              <Link key={index} href={item.go} 
    onClick={()=>setActiveButton(index)} 
    className={`flex justify-between items-center p-2 rounded-lg cursor-pointer ${
      activeButton ==index? 'bg-gray-200 font-bold dark:text-red-800' : 'hover:bg-gray-100 dark:hover:bg-red-200'
    }`}
    >
      <span>{item.title}</span>
      <span className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full text-sm font-semibold">
        {item.count}
      </span>
    </Link>
            ))
          }
        </ul>
      </aside>

      {/* Results List */}
     
    </div>
  );
};

export default SearchResultsPage;
