import { FaRegClock } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";

function Recipe() {
  return (
    <div className="border p-4 rounded-md space-y-3">
      <figure className="w-full h-[180px] rounded-md">
        <img src="" className="w-full h-full object-cover" alt="" />
      </figure>

      <h2 className="font-bold text-lg">Recipe Name</h2>
      <p className="text-sm text-gray-500">
        Classic italian pasta dish with savory meat sauce.
      </p>
      <hr />
      <div>
        <h3 className="font-bold">Ingredients: {6}</h3>
        <ul className="space-y-1 mt-2 list-disc list-inside ml-3 text-gray-500 text-sm">
          <li>500g ground beef</li>
          <li>500g ground beef</li>
          <li>500g ground beef</li>
        </ul>
      </div>

      <hr />

      <div className="flex items-center flex-wrap gap-4 text-gray-600">
        <div className="flex items-center gap-2 ">
          <FaRegClock />
          <span className="text-sm">{30} minutes</span>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineFire />
          <span className="text-sm">{600} calories</span>
        </div>
      </div>

      <button className="btn rounded-full bg-green-500 text-white btn-sm">
        Want to Cook
      </button>
    </div>
  );
}

export default Recipe;
