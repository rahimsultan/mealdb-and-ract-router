import { Link } from "react-router-dom";

const HomeFood = ({food}) => {
    const {strMealThumb, strMeal,strInstructions} = food;
  return (
    <div className="rounded-md border">
      <img
        src={strMealThumb}
        alt="meal"
        className=" w-full rounded-md object-contain"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{strMeal}</h1>
        <p className="mt-3 text-sm text-gray-600">
          {strInstructions.length > 230 ? strInstructions.slice(0, 230) +'...' : strInstructions}
        </p>
        <Link to={`/food/${food.idMeal}`}>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Details
        </button>
        </Link>
      </div>
    </div>
  )
}

export default HomeFood