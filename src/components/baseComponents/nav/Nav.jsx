import  NavItem  from "../navItem/NavItem";
import * as S from './styles'
 
function Nav({categories}){
    
    return(
        <S.NavContainer>
            <h1>CATEGORIES</h1>
            <section>  
                {categories.map((category, index) => <NavItem key={index} 
                category={category}/> )}
            </section>
        </S.NavContainer>
    )
}

export default Nav;