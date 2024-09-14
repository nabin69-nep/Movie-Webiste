import {createContext,useEffect,useState} from "react";

const TrendingContext=createContext(null);

export const TrendingProvider=(props)=>{
    const getResposne=()=>{

    }
    return(
<TrendingContext.Provider>
    {props.children}
</TrendingContext.Provider>
    )
}