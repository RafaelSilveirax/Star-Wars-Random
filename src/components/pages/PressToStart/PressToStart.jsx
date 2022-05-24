import{Link} from 'react-router-dom'
import logoGrande from '../../../img/star-wars-logo-2.png'
import * as S from './styles'

export function PressToStart(){
  
  window.onload = function() {
    setTimeout(function () {
        var h1 = document.querySelector("h1")
        h1.className = "";
    },5000);
};

    return(
      <S.PressContainer> 
        <Link to="/Home">
              <img src={logoGrande} alt="" className='fade'/>          
        </Link>
        <h1 className='elemH1 hide' >Press Star Wars to continue</h1>
       </S.PressContainer>     
      
    )
}