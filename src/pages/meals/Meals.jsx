import { Link, useLoaderData } from "react-router-dom";


const Meals = () => {
    const canada = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            canada.meals.map(meal=>{
                return (
                    <div className="border text-center" key={meal.idMeal}>
                        <div>
                            <img src={meal.strMealThumb} alt="" />
                        </div>
                        <h2 className="text-center my-5">{meal.strMeal}</h2>
                        <Link to={`/meal/${meal.idMeal}`}>
                        <button
                            type="button"
                            className="my-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                            Details
                        </button>
                        </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Meals