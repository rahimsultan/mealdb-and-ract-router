import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/error/Error';
import FoodDetails from './components/foodDetails/FoodDetails';
import HomePage from './components/homecontent/HomePage';
import './index.css';
import ChickenBreast from './pages/chicken_breast/ChickenBreast.jsx';
import Home from './pages/home/Home';
import Meals from './pages/meals/Meals.jsx';
import MealsDetails from './pages/mealsDetails/MealsDetails';
import SeaFood from './pages/seafood/SeaFood.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/meals',
        element: <Meals/>,
        loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
      },
      {
        path: '/seafood',
        element: <SeaFood/>,
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      },
      {
        path: '/chicken_breast',
        element: <ChickenBreast/>,
        loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
      },
      {
        path:'/food/:foodId',
        element: <FoodDetails/>,
        loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`)
      },
      {
        path: '/meal/:mealId',
        element: <MealsDetails/>,
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
      },
      {
        path: '/chicken/:chickenId',
        element: <MealsDetails/>,
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.chickenId}`)
      },
      {
        path: '/seafood/:seafoodId',
        element: <MealsDetails/>,
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.seafoodId}`)
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
