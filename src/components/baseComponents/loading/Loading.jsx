import * as S from './styles'
import vader from "../../../img/vaderLoading.png"

function Loading(){  
    return(
        <S.LoadingContainer>
            <img src={vader} alt="loading" />
        </S.LoadingContainer>
    )
}

export default Loading;