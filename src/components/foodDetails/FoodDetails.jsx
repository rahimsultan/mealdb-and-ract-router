import { useLoaderData, useNavigate } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();
  const { strMeal, strMealThumb, strInstructions } = food.meals[0];

  const navigate = useNavigate()

  const goBack =()=>{
    navigate(-1)
    console.log('Hello');
  }

  return (
    <div className="border text-center mb-10">
      <div>
        <img src={strMealThumb} className="mx-auto" />
      </div>
      <h2 className="text-center my-5">{strMeal}</h2>
      <p>{strInstructions}</p>
      <button
      onClick={goBack}
        type="button"
        className="my-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Back
      </button>
    </div>
  );
};

export default FoodDetails;
