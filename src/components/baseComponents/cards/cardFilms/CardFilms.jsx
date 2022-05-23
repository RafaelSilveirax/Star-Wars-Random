import * as S from './styles'

function CardFilms({itemRandom}){
    return(
        <S.FilmsContainer>
            <h1>{itemRandom.title}</h1>
            <h2>{itemRandom.episode_id}</h2>
            <p>{itemRandom.opening_crawl}</p>
        </S.FilmsContainer>
    )
} 

export default CardFilms; 