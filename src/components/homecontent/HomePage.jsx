import React, { useEffect, useState } from 'react';
import HomeFood from '../homeFood/HomeFood';

const HomePage = () => {
    const [foods, setFoods]= useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=> res.json())
        .then(data => setFoods(data.meals))
    },[])
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
         {
            foods.map(food=> <HomeFood key={food.idMeal} food={food}/>)
            
         }     
    </div>
  )
}

export default HomePage