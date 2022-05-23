import { useLocation } from 'react-router-dom'  
import { useState, useEffect } from "react";
import axios from 'axios';
import CardFilms from '../baseComponents/cards/cardFilms/CardFilms'
import CardPeople from '../baseComponents/cards/cardPeople/CardPeople'
import CardPlanets from '../baseComponents/cards/cardPlanets/CardPlanets'
import CardSpecies from '../baseComponents/cards/cardSpecies/CardSpecies' 
import CardStarships from '../baseComponents/cards/cardStarships/CardStarships' 
import CardVehicles from '../baseComponents/cards/cardVehicles/CardVehicles' 

function numberRandom(total){
    return Math.floor(Math.random() * (total))
}

export function Random(){

    const location = useLocation()
    const apiCategory = (location.state.from)
    const nameCategory = (location.state.name)
   
    const [post, setPost] = useState(null); 
        useEffect(() => {
            axios.get(apiCategory).then((response) => {
            setPost(response.data)      
        });
        }, []); 
        if (!post) return null;

        var numbRandom = numberRandom(post.count)
        var itemRandom = post.results[numbRandom]
        
       
        const compObj = {
            "films": <CardFilms numbRandom={numbRandom} itemRandom = {itemRandom}/>, 
            "people": <CardPeople numbRandom={numbRandom} itemRandom = {itemRandom}/>,    
            "planets": <CardPlanets numbRandom={numbRandom} itemRandom = {itemRandom}/>, 
            "species": <CardSpecies numbRandom={numbRandom} itemRandom = {itemRandom}/>,
            "starships": <CardStarships numbRandom={numbRandom} itemRandom = {itemRandom}/>, 
            "vehicles": <CardVehicles numbRandom={numbRandom} itemRandom = {itemRandom}/>,        
        }  
      
    return(
        <>
            {compObj[ `${nameCategory}`] }
        </>
            
    )
} 