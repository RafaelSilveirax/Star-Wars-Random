import{Link} from 'react-router-dom'
import * as S from './styles'

function NavItem({category}){
    return(
        <S.NavItem>
            <Link to="/Random" state={{from:category.categoryApi, name:category.categoryName}}>
            <button key={category.categoryName.toString()}>{category.categoryName}</button>
            </Link>
        </S.NavItem> 
    )
}

export default NavItem;

