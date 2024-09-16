"use client";
import { useState, createContext, useEffect } from "react";

const IdContext = createContext(null);

export const IdProvider = ({ children }) => {
  const [movieId, setMovieId] = useState("");
  const [tvId, setTvId] = useState("");
  const [peopleId, setPeopleId] = useState("");
  const [word, setWord] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchTv, setSearchTv] = useState([]);
  const [searchPeople, setSearchPeople] = useState([]);
  const getResponse = async () => {
    try {
      const movieRes = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=233d579ffe391c65ea271864eb408536&query=${word}`
      );
      const peopleRes = await fetch(
        `https://api.themoviedb.org/3/search/person?api_key=233d579ffe391c65ea271864eb408536&query=${word}`
      );
      const tvRes = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=233d579ffe391c65ea271864eb408536&query=${word}`
      );
      if (!movieRes.ok) {
        console.log(`The error is ${movieRes.statusText}`);
        return;
      }
      const peopleResult = await peopleRes.json();
      const tvResult = await tvRes.json();
      const result = await movieRes.json();
      setSearchMovie(result.results);
      setSearchPeople(peopleResult.results);
      setSearchTv(tvResult.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <IdContext.Provider
      value={{
        movieId,
        setMovieId,
        tvId,
        setTvId,
        peopleId,
        setPeopleId,
        searchMovie,
        setSearchMovie,
        searchTv,
        setSearchTv,
        searchPeople,
        setSearchPeople,
        word,
        setWord,
        getResponse,
      }}
    >
      {children}
    </IdContext.Provider>
  );
};
export default IdContext;
