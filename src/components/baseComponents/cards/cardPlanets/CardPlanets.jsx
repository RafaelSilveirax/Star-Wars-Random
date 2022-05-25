import * as S from './styles'
function CardPlanets({req}){

    return(
        <S.planetContainer>
            <h1>{req.name}</h1> 
            <p>Climate - {req.climate}</p> 
            <p>Gravity - {req.gravity}</p> 
            <p>terrain - {req.terrain}</p> 
            <p>Population- {req.population}</p> 
            <p>Rotation - {req.rotation_period}d</p> 
            <p>Orbital - {req.orbital_period}</p> 
        </S.planetContainer>   
    )
} 

export default CardPlanets; 