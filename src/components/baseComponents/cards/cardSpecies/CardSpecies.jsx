import * as S from './styles'

function CardSpecies({req}){

/*     const apiPlanet = axios.create({baseURL: `${species.homeworld}`}) 
        apiPlanet.get().then((response) => {
            setPlanet(response.data)             
    });
    if (!planet) return null;  */
 
    return(
        <S.speciesContainer>
            <h1>{req.name}</h1> 
            <p>Climate - {req.classification}</p> 
            <p>Gravity - {req.average_height}</p> 
            <p>terrain - {req.language}</p> 
            {/* <p>Home World- {planet.name}</p>  */}
        </S.speciesContainer>
    )
} 

export default CardSpecies; 