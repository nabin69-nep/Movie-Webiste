"use client"
import React,{useContext,useState,useEffect} from 'react';
import { useRouter } from 'next/navigation';
import IdContext from '../context/IdContext';
const Banner = () => {
  const router = useRouter();
  const{setWord,word,getResponse}=useContext(IdContext);
  const[data,setData]=useState("")
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
  useEffect(() => {
    // const number=Math.floor(Math.random()*10)
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
        setData(result.results[Math.floor(Math.random()*10)]);
      } catch (error) {
        console.log(error);
      }
    };
    getResponse();
  }, []);
  return (
    <div className="relative h-64 sm:h-72 lg:h-[320px]  bg-cover bg-center" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
    }}>
      <div className="absolute inset-0 bg-blue-400 opacity-50"></div>
      <div className="container px-2 mx-auto flex flex-col h-64 gap-4 justify-center">
        <h1 className="text-white relative z-10 text-5xl font-bold">Welcome.</h1>
        <p className="text-white relative z-10 text-2xl font-bold">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <form onSubmit={handleClick} className="relative">
          <input
          value={word}
          onChange={(e)=>setWord(e.target.value)}
            type="text"
            placeholder="Search for movie, tv show, person..."
            className="px-4 focus:outline-none text-black py-3 rounded-full w-[75%] md:w-[85%]"
          />
          <input
            type="submit"
            value="Search"
            className="font-bold cursor-pointer text-white absolute right-[5%] md:right-[10%] w-24 px-4 py-3 rounded-full bg-input-gradient"
          />
        </form>
      </div>
    </div>
  );
};

export default Banner;
