import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/baseComponents/footer/Footer.jsx';
import Header from './components/baseComponents/header/Header.jsx';
import { Home } from './components/pages/Home.jsx';
import {Random} from './components/pages/Random.jsx'
import  {PressToStart} from './components/pages/PressToStart/PressToStart'
import * as S from './styles'

export default function App() {
  return (
    <Router>   
        <Header/>
        <S.Container>
          <S.SubContainer>
            <Routes>
              <Route exact path='/' element={<PressToStart/>}/>
              <Route exact path='/Home' element={<Home/>}/>
              <Route exact path='/Random/' element={<Random/>}/>
            </Routes>
          </S.SubContainer>
        </S.Container>

        <Footer/>
    </Router>
     
 
  );
}






