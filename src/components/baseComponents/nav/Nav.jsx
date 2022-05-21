import  NavItem  from "../navItem/NavItem";
import * as S from './styles'
 
function Nav({categories}){
/* console.log("🚀 ~ file: Nav.jsx ~ line 5 ~ Nav ~ categories", categories) */
    
    return(
        <S.NavContainer>
            <section>
                {categories.map((category, index) => <NavItem key={index} 
                category={category}/> )}
            </section>
        </S.NavContainer>
    )
}

export default Nav;