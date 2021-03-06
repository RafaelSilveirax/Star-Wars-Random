import api from "../../services/api"
import { useState, useEffect } from "react";
import Nav from "../baseComponents/nav/Nav";
import Loading from "../baseComponents/loading/Loading";
import Error from "../baseComponents/error";

function makeNewArray(categories){
  var arr = []
  Object.keys(categories).forEach((category) => arr.push({ categoryName: category, categoryApi: categories[category]}))

  return arr
}

export function Home(){
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [requestSuc, setRequestSuc] = useState(true);

    useEffect(() => {
      api.get().then((response) => {
        setCategories(makeNewArray(response.data))
          setLoading(false)  
      }).catch(function(e){
        setRequestSuc(false)
      })
    }, []);

    return(
      <>
         {!requestSuc ? <Error/>
        : loading ? <Loading/> 
        : <Nav categories={categories}/>}
      </>
    )
}