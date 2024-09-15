import { useState,createContext } from "react";

const IdContext=createContext(null)

export const IdProvider=({children})=>{
    const [movieId, setMovieId]=useState("")
    const [tvId, setTvId]=useState("")
    const [peopleId, setPeopleId]=useState("")
   return <IdContext.Provider value={{movieId,setMovieId,tvId,setTvId,peopleId,setPeopleId}}>{children}</IdContext.Provider>
}
export default IdContext
