import api from "../../services/api"
import { useState, useEffect } from "react";

import Nav from "../baseComponents/nav/Nav";

function makeNewArray(categories){
  var arr = []
  Object.keys(categories).forEach((category) => arr.push({ categoryName: category, categoryApi: categories[category]}))

  return arr
}

export function Home(){
    const [categories, setCategories] = useState(null);

    useEffect(() => {
      console.log("opa")
      api.get().then((response) => {
        
        setCategories(makeNewArray(response.data))
      });
    }, []);
  
    if (!categories) return null;

    return(
      <Nav categories={categories}/>
    )
}