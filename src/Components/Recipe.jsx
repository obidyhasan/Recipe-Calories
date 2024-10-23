import { FaRegClock } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from "prop-types";

function Recipe({ recipe, handelWantToCook }) {
  const {
    name,
    short_description,
    image,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="border p-4 rounded-md space-y-3 flex flex-col justify-between">
      <div className="space-y-3">
        <figure className="w-full h-[180px] rounded-md">
          <img
            src={image}
            className="w-full h-full object-cover rounded-md"
            alt=""
          />
        </figure>

        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-sm text-gray-500">{short_description}</p>
        <hr />
        <div>
          <h3 className="font-bold">Ingredients: {6}</h3>
          <ul className="space-y-1 mt-2 list-disc list-inside ml-3 text-gray-500 text-sm">
            {ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <hr />

        <div className="flex items-center flex-wrap gap-4 text-gray-600">
          <div className="flex items-center gap-2 ">
            <FaRegClock />
            <span className="text-sm">{preparing_time} minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineFire />
            <span className="text-sm">{calories} calories</span>
          </div>
        </div>

        <button
          onClick={() => handelWantToCook(recipe)}
          className="btn rounded-full bg-green-500 text-white btn-sm"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handelWantToCook: PropTypes.func.isRequired,
};

export default Recipe;
