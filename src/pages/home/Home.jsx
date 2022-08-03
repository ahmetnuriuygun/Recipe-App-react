import {  useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import RecipeCard from "./RecipeCard";
 import homeSvg from "../../assets/home.svg";
import { getDefaultNormalizer } from "@testing-library/react";

//  const APP_ID = "08bcbbe3";

//  const APP_KEY = "47e4df7a5f21a9bf49b2e1049eb299e0";

const APP_ID = "4e9f05eb";

const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";



// ****buraya kendi id ve key imizi yaziyoruz**********

const Home = () => {
  const [query, setQuery] = useState("");
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMealType] = useState(mealTypes[0].toLowerCase());

  const [data,setData] = useState();
  
  const url= `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
  
  const getData = async () =>{
  const info = await axios.get(url);
  setData(info.data.hits);
  
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
    
    {data ? (
      <MainContainer>
        {data.map((i,index)=>(
          <RecipeCard key={index} recipe1 = {i.recipe}/>
        ))}
      </MainContainer>
    ) : (
          <ImgDiv> 
          <HomeImg src={homeSvg}/>
          </ImgDiv>
    )}
      
         
          
          
    </div>
  );
};

export default Home;
