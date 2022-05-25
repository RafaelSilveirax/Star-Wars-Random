import{Link} from 'react-router-dom'
import { AiOutlineRollback } from "react-icons/ai";
import * as S from './styles'
function Error(){  
    return(
        <S.ErrorContainer>
            <Link to="/Home" >
                    <AiOutlineRollback/>
            </Link>
            <h1>An error has occurred, please reload</h1>
        </S.ErrorContainer>
          
    )
}

export default Error;