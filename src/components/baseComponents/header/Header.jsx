import * as S from './styles'
import{Link} from 'react-router-dom'
import { GiStarfighter, GiDeathStar } from "react-icons/gi";
import logoStarwars from "../../../img/star-wars.png"

function Header(){  
    return(
        <S.HeaderContainer>
            <GiDeathStar/>
            <Link to="/">
                <img src={logoStarwars} alt="" />
            </Link>
            <GiStarfighter/>
        </S.HeaderContainer>
    )
}

export default Header;