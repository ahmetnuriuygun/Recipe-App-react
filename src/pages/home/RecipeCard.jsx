import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, RecipeCards, RecipeHeader, RecipeImage } from './HomeStyles'
const RecipeCard = ({recipe1}) => {

console.log(recipe1);


let navigate = useNavigate()

const ViewDetails = () => {
    navigate("/details", {state:{recipe1}})
}


  return (
    



    <RecipeCards>
      <RecipeHeader>{recipe1.label}</RecipeHeader>
      <RecipeImage src={recipe1.image}></RecipeImage>
      <Button onClick={ViewDetails}>Details</Button>
    </RecipeCards>


    



  )
}

export default RecipeCard