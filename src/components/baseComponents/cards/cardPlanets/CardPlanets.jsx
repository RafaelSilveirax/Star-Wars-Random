import * as S from './styles'
import { useState, useEffect } from "react";
import axios from 'axios';
import Loading from "../../loading/Loading";

function CardPlanets({itemRandom, numbRandom}){
const [planet, setPlanet] = useState(null);
const [loading, setLoading] = useState(true);
const [requestSuc, setRequestSuc] = useState(true);
    
    const apiPlanet = axios.create({baseURL: `https://swapi.py4e.com/api/planets/${numbRandom}`}) 

    useEffect(() => {
        apiPlanet.get().then((response) => {
            setPlanet(response.data)  
            setLoading(false)   
        }).catch(function(e){
            setRequestSuc(false)
          }); 
    }); 
     

    if (!planet) return null; 
 
    return(
        <>
        {!requestSuc ? <h1>Erro</h1> 
        : loading ? <Loading/> : 
        <S.planetContainer>
            <h1>Home World - {planet.name}</h1> 
            <p>Climate - {planet.climate}</p> 
            <p>Gravity - {planet.gravity}</p> 
            <p>terrain - {planet.terrain}</p> 
            <p>Population- {planet.population}</p> 
            <p>Rotation - {planet.rotation_period}d</p> 
            <p>Orbital - {planet.orbital_period}</p> 
        </S.planetContainer>}
      </>    
    )
} 

export default CardPlanets; 