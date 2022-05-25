import * as S from './styles'

function CardStarships({req}){
 

    return(
        <S.StarshipsContainer>
            <h1>{req.name}</h1> 
            <p>Model - {req.model}</p> 
            <p>Passengers - {req.passengers}</p> 
            <p>Vehicle Class - {req.starship_class}</p> 
            <p>Cost - {req.cost_in_credits}</p> 
        </S.StarshipsContainer>
    
    )
} 

export default CardStarships; 