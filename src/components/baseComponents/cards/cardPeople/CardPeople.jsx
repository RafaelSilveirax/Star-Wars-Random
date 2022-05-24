import * as S from './styles'
import { useState, useEffect } from "react";
import axios from 'axios';
import Loading from "../../loading/Loading";

function CardPeople({itemRandom, numbRandom}){
const [name, setName] = useState(null);
const [planet, setPlanet] = useState(null);
const [loading, setLoading] = useState(true);
const [requestSuc, setRequestSuc] = useState(true);
    
    const apiPeople = axios.create({baseURL: `https://swapi.dev/api/people/${numbRandom}`}) 
    
    useEffect(() => {
        apiPeople.get().then((response) => {
            setName(response.data) 
            setLoading(false)   
        }).catch(function(e){
            setRequestSuc(false)
          }); 
    }); 
    
    if (!name) return null;  
    const apiPlanet = axios.create({baseURL: `${name.homeworld}`}) 
        apiPlanet.get().then((response) => {
            setPlanet(response.data)             
    });

    if (!planet) return null; 
 
    return(
        <>
        {!requestSuc ? <h1>Erro</h1> 
        : loading ? <Loading/> : 
        <S.FilmsContainer>
            <h1>{name.name}</h1>
            <p>birthday data - {name.birth_year}</p>
            <p>Height {name.height}</p>
            <p>Mass - {name.mass}</p>
            <p>Gender - {name.gender}</p>
            <p>Home World - {planet.name}</p> 
        </S.FilmsContainer>}
      </>    
    )
} 

export default CardPeople; 