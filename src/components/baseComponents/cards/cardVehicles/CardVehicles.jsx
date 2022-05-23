import * as S from './styles'
import { useState, useEffect } from "react";
import axios from 'axios';
import Loading from "../../loading/Loading";

function CardVehicles({itemRandom, numbRandom}){
const [vehicles, setVehicles] = useState(null);
const [loading, setLoading] = useState(true);
const [requestSuc, setRequestSuc] = useState(true);
    
    const vehiclesSpecies = axios.create({baseURL: `https://swapi.py4e.com/api/vehicles/${numbRandom}`}) 

    useEffect(() => {
        vehiclesSpecies.get().then((response) => {
            setVehicles(response.data)  
            setLoading(false)   
        }).catch(function(e){
            setRequestSuc(false)
          }); 
    }); 

    if (!vehicles) return null; 

    return(
        <>
        {!requestSuc ? <h1>Erro</h1> 
        : loading ? <Loading/> : 
        <S.vehiclesContainer>
            <h1>{vehicles.name}</h1> 
            <p>Model - {vehicles.model}</p> 
            <p>Passengers - {vehicles.passengers}</p> 
            <p>Vehicle Class - {vehicles.vehicle_class}</p> 
            <p>Cost - {vehicles.cost_in_credits}</p> 
        </S.vehiclesContainer>}
      </>    
    )
} 

export default CardVehicles; 