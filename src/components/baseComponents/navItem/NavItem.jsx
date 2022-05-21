import{Link} from 'react-router-dom'
import * as S from './styles'

function NavItem({category}){
console.log("🚀 ~ file: NavItem.jsx ~ line 4 ~ NavItem ~ category", category)
    
    return(
        <S.NavItem>
            <Link to="/Random" state={{from:category.categoryApi}}>
            <button key={category.categoryName.toString()}>{category.categoryName}</button>
            </Link>
        </S.NavItem> 
    )
}

export default NavItem;

