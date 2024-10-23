import PropTypes from "prop-types";
import CookTable from "./CookTable";
import PreparingTable from "./PreparingTable";

function CalculateTables({
  recipes,
  handelPreparingEvent,
  preparingRecipe,
  totalTime,
  totalCalories,
}) {
  return (
    <div className="border rounded-md lg:w-2/5 p-4 h-min">
      <div>
        <h1 className="text-center font-bold mb-3">
          Want to cook: {recipes.length}
        </h1>
        <hr />
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {recipes.map((recipe, idx) => (
                  <CookTable
                    key={idx}
                    id={idx}
                    recipe={recipe}
                    handelPreparingEvent={handelPreparingEvent}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-center font-bold mb-3">
          Currently cooking: {preparingRecipe.length}
        </h1>
        <hr />
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {preparingRecipe.map((recipe, idx) => (
                  <PreparingTable recipe={recipe} id={idx} key={idx} />
                ))}

                {/* Total */}
                <tr>
                  <th></th>
                  <td></td>
                  <td>Total: {totalTime} min</td>
                  <td>Total: {totalCalories}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

CalculateTables.propTypes = {
  recipes: PropTypes.array.isRequired,
  handelPreparingEvent: PropTypes.func.isRequired,
  preparingRecipe: PropTypes.array,
  totalTime: PropTypes.number,
  totalCalories: PropTypes.number,
};

export default CalculateTables;
