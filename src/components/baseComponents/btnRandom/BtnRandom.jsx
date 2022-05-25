import * as S from './styles'


function BtnRandom({setRe, re}){  
    return(
        <S.BtnRandomContainer>
              <button onClick={() => setRe(re + 1)} >Random</button>
        </S.BtnRandomContainer>
    )
}

export default BtnRandom;