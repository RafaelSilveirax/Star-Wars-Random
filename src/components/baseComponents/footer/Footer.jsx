import * as S from './styles'
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Footer(){  
    return(
        <S.FooterContainer>
               <p>RafSilveira &copy; 2022</p>
              <ul>                
                <li>
                    <a href="https://www.linkedin.com/in/rafael-silveira-65a10a160/" target="_blank">
                        <FaLinkedin/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/RafaelSilveirax" target="_blank">
                        <FaGithub/>
                    </a>
                </li>
            </ul>
        </S.FooterContainer>
    )
}

export default Footer;