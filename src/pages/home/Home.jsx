import {  useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import RecipeCard from "./RecipeCard";
 import homeSvg from "../../assets/home.svg";
import { getDefaultNormalizer } from "@testing-library/react";

 const APP_ID = "08bcbbe3";

 const APP_KEY = "47e4df7a5f21a9bf49b2e1049eb299e0";



// ****buraya kendi id ve key imizi yaziyoruz**********

const Home = () => {
  const [query, setQuery] = useState("pizza");
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMealType] = useState(mealTypes[0].toLowerCase());

  const [data,setData] = useState();
  
  const url= `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
const getData = async () =>{
  const info = await axios.get(url)
  setData(info.data.hits)
  console.log(data)
};

console.log(query)
console.log(meal)
console.log(data)


  return (
    <div>
   
    
      <Header 
      
      setQuery={setQuery}
      
      setMealType={setMealType}
      
      getData={getData} />

      
            <RecipeCard   />
          
    </div>
  );
};

export default Home;
