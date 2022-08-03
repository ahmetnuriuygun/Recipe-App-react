import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'
import { FormContainer, HeaderContainer, MainHeader,FoodInput, Button, Select } from './HeaderStyles'

const Header = ({setQuery,setMealType,getData}) => {

  const submit=(e)=>{
    e.preventDefault();
    getData();
}

return (

<div>

<HeaderContainer>
    <MainHeader>RECIPER APP</MainHeader>
    <FormContainer>
      <FoodInput type="text" name="query" placeholder='Search Food' onChange={(e)=>setQuery(e.target.value)}></FoodInput>
      <Button type="submit" onSubmit={submit}> Search</Button>
      <Select onChange={(e)=>setMealType(e.target.value)}>
        <option >Breakfeast</option>
        <option >Lunch</option>
        <option >Dinner</option>
        <option >Teatime</option>
        <option >Snack</option>
      </Select>
    </FormContainer>
</HeaderContainer>
</div>

  )
}
export default Header


