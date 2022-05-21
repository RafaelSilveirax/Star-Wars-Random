import { useLocation } from 'react-router-dom'  
import { useState, useEffect } from "react";
import axios from 'axios';

export function Random(){

    const location = useLocation()
    const apiCategory = (location.state.from) 

    
    const [post, setPost] = useState(null);
    
        useEffect(() => {
            axios.get(apiCategory).then((response) => {
            console.log("🚀 ~ file: Random.jsx ~ line 16 ~ axios.get ~ response", response)
            setPost(response.data)
           
        });
        }, []);
      
        if (!post) return null;

        var qtdTotal = (post.count)
        console.log(qtdTotal)

    return(
        <div>
            <h1>{location.state.from}</h1>
        </div>
    )
} 