import * as S from './styles'
function CardVehicles({req}){
    return(
        <S.vehiclesContainer>
            <h1>{req.name}</h1> 
            <p>Model - {req.model}</p> 
            <p>Passengers - {req.passengers}</p> 
            <p>Vehicle Class - {req.vehicle_class}</p> 
            <p>Cost - {req.cost_in_credits}</p> 
        </S.vehiclesContainer>
    )
} 

export default CardVehicles; 