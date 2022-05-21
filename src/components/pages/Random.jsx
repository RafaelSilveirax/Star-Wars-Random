import { useLocation } from 'react-router-dom'  
import { useState, useEffect } from "react";
import axios from 'axios';
import CardFilms from '../baseComponents/cardFilms/CardFilms'

function numbeRandom(total){
    return Math.floor(Math.random() * (total))
}

const compObj = {
    "films": <CardFilms/>
}
export function Random(){

    const location = useLocation()
    const apiCategory = (location.state.from) 

    
    const [post, setPost] = useState(null);
    
        useEffect(() => {
            axios.get(apiCategory).then((response) => {
            setPost(response.data)      
        });
        }, []); 
        if (!post) return null;

        console.log("🚀 ~ file: Random.jsx ~ line 27 ~ Random ~ post", post)
        

    return(
        <>
            <h1>{numbeRandom(post.count)}</h1>
            {compObj[ "films"]}
        </>
    )
} 