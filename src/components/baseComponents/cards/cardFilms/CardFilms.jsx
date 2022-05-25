import * as S from './styles'

function CardFilms({req}){
    return(
        <S.FilmsContainer>
            <h1>{req.title}</h1>
            <h2>{req.episode_id}</h2>
            <p>{req.opening_crawl}</p>
        </S.FilmsContainer>
    )
} 

export default CardFilms; 