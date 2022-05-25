import * as S from './styles'
import api from '../../../../services/api'
import { useState, useEffect} from "react";


function CardPeople({req}){
const [reqPlanet, setReqPlanet] = useState(null); 

    useEffect(() => {
        api.get(`${req.homeworld}`).then((response) => {
            setReqPlanet(response.data)             
        }); 
    }, []);  
        
    if (!reqPlanet) return null;  
  
    return(
        <S.FilmsContainer>
            <h1>{req.name}</h1>
            <p>birthday data - {req.birth_year}</p>
            <p>Height {req.height}</p>
            <p>Mass - {req.mass}</p>
            <p>Gender - {req.gender}</p>
            <p>Home World - {reqPlanet.name}</p>  
        </S.FilmsContainer>
        
    )
} 

export default CardPeople; 