import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {

    const [searchQuery,setSearchQuery] = useState("");
    const [suggestions,setSuggestions] = useState("");
    

    useEffect(()=>{
        //make an api call after every key press
        //if the difference between two api calls is <200s
        //decline the api call
        const timer = setTimeout(()=> getSearchSuggestion(),200)

        return () => {
            clearTimeout(timer)
        }
    },[searchQuery])


    const getSearchSuggestion = async () => {
    
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const json = await data.json();
        setSuggestions(json[1]);
        
    }



    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return(
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
        <div className="flex col-span-1">
            <img onClick={() => toggleMenuHandler()} className="h-12 -mt-2 cursor-pointer" alt="menu" src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"></img>
            <img className="h-8 mx-2" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"></img>
        </div>
        <div className="col-span-10 px-12">
            <div>
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"></input>
            <button className="border border-gray-400 p-2 rounded-r-full px-5 bg-gray-100">🔍</button>    
            </div>
            <div className="fixed bg-white py-2 px-5 w-[40.5rem] border-gray-100">
                <ul>
                    {suggestions.map((s)=>(
                             <li key={Math.random()} className="py-2 shadow-sm hover:bg-gray-100 ">🔍 {s}</li>
                    ))}
                   
                </ul>
            </div>
        </div>

    
        <div className="col-span-1">
            <img className="h-8" alt="user" src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"></img>
        </div>

    </div>
    )

}

export default Head;