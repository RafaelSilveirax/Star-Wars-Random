import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/baseComponents/header/Header.jsx';
import { Home } from './components/pages/Home.jsx';
import {Random} from './components/pages/Random.jsx'

export default function App() {
  return (
    <Router>   
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Random/' element={<Random/>}/>
        </Routes>
    </Router>
     
 
  );
}






