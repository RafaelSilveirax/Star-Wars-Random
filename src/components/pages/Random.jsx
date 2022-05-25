import { useLocation } from 'react-router-dom'  
import { useState, useEffect } from "react";
import { AiOutlineRollback } from "react-icons/ai";
import{Link} from 'react-router-dom'
import api from '../../services/api'
import Loading from "../baseComponents/loading/Loading";
import Error from "../baseComponents/error";
import CardFilms from '../baseComponents/cards/cardFilms/CardFilms'
import CardPeople from '../baseComponents/cards/cardPeople/CardPeople'
import CardPlanets from '../baseComponents/cards/cardPlanets/CardPlanets'
import CardSpecies from '../baseComponents/cards/cardSpecies/CardSpecies' 
import CardStarships from '../baseComponents/cards/cardStarships/CardStarships' 
import CardVehicles from '../baseComponents/cards/cardVehicles/CardVehicles'  
import BtnRandom from '../baseComponents/btnRandom/BtnRandom';

function numberRandom(total){
    return Math.floor(Math.random() * (total))
}
 
export function Random(){

    const location = useLocation()
    const apiCategory = (location.state.from)
    const nameCategory = (location.state.name)
    const [req, setReq] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [requestSuc, setRequestSuc] = useState(true);
    const [reload, setReload] = useState(0);


        useEffect(() => {
            console.log("dale")
            api.get(apiCategory).then((response) => {           
            var numbRandom = numberRandom(response.data.count)
    
            api.get(`${nameCategory}/${numbRandom}`).then((response) => {
                setReq(response.data)  
                setLoading(false)   
            }).catch(function(e){
                setRequestSuc(false)
              })
   
        });
        }, [reload]);    
       
        const compObj = {
            "films": <CardFilms req = {req}/>, 
            "people": <CardPeople req = {req} />,    
            "planets": <CardPlanets req = {req}/>, 
            "species": <CardSpecies req = {req}/>,
            "starships": <CardStarships req = {req}/>,
            "vehicles": <CardVehicles req = {req}/>,       
        }  
      
    return(
        <>
           {!requestSuc ? <Error/>
            : loading ? <Loading/> 
            :
            <>
                <Link to="/Home" >
                    <AiOutlineRollback/>
                </Link>
               
               <BtnRandom setRe={setReload} re ={reload}/>
               

                {compObj[ `${nameCategory}`]}
            </>}
        </>          
    )
} 