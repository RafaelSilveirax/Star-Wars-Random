import * as S from './styles'
import { useState, useEffect } from "react";
import axios from 'axios';
import Loading from "../../loading/Loading";

function CardStarships({itemRandom, numbRandom}){
const [starships, setStarships] = useState(null);
const [loading, setLoading] = useState(true);
const [requestSuc, setRequestSuc] = useState(true);
    
    const vehiclesSpecies = axios.create({baseURL: `https://swapi.py4e.com/api/starships/${numbRandom}`}) 

    useEffect(() => {
        vehiclesSpecies.get().then((response) => {
            setStarships(response.data)  
            setLoading(false)   
        }).catch(function(e){
            setRequestSuc(false)
          }); 
    }); 

    if (!starships) return null; 

    return(
        <>
        {!requestSuc ? <h1>Erro</h1> 
        : loading ? <Loading/> : 
        <S.StarshipsContainer>
            <h1>{starships.name}</h1> 
            <p>Model - {starships.model}</p> 
            <p>Passengers - {starships.passengers}</p> 
            <p>Vehicle Class - {starships.starship_class}</p> 
            <p>Cost - {starships.cost_in_credits}</p> 
        </S.StarshipsContainer>}
      </>    
    )
} 

export default CardStarships; 