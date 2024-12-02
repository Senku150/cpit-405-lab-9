import React from "react";
import ShowResult from "./ShowResult";
import { useState } from "react";

const SearchButton = ({userInput})=>{
    const [payload,setPayload]=useState([])
    const handleAPI = async ()=>{
        const key= process.env.REACT_APP_FOOD_API_KEY;
        const totallyNotApiKey ="https://api.spoonacular.com/recipes/complexSearch?apiKey="+key+"&number=44&instructionsRequired=true&addRecipeInformation=true&query="
        const response = await fetch(totallyNotApiKey+userInput)
        const data = await response.json();
        setPayload(data)
    }
    return(
        <div id="SearchButton" >
            <button id="SubmitSearch" onClick={handleAPI}>Search</button>
            <ShowResult payload={payload}/>
        </div>
    )
}

export default SearchButton