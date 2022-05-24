import * as S from './styles'
import { useState, useEffect } from "react";
import axios from 'axios';
import Loading from "../../loading/Loading";

function CardSpecies({itemRandom, numbRandom}){
const [species, setSpecies] = useState(null);
const [planet, setPlanet] = useState(null);
const [loading, setLoading] = useState(true);
const [requestSuc, setRequestSuc] = useState(true);
    
    const apiSpecies = axios.create({baseURL: `https://swapi.dev/api/species/${numbRandom}`}) 

    useEffect(() => {
        apiSpecies.get().then((response) => {
            setSpecies(response.data)  
            setLoading(false)   
        }).catch(function(e){
            setRequestSuc(false)
          }); 
    }); 
    if (!species) return null; 

    const apiPlanet = axios.create({baseURL: `${species.homeworld}`}) 
        apiPlanet.get().then((response) => {
            setPlanet(response.data)             
    });

    if (!planet) return null; 
 
    return(
        <>
        {!requestSuc ? <h1>Erro</h1> 
        : loading ? <Loading/> : 
        <S.speciesContainer>
            <h1>{species.name}</h1> 
            <p>Climate - {species.classification}</p> 
            <p>Gravity - {species.average_height}</p> 
            <p>terrain - {species.language}</p> 
            <p>Home World- {planet.name}</p> 
        </S.speciesContainer>}
      </>    
    )
} 

export default CardSpecies; 