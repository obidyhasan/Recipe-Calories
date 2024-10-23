import PropTypes from "prop-types";
import CookTable from "./CookTable";

function CalculateTables({ recipes }) {
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
                  <CookTable key={idx} id={idx} recipe={recipe} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-center font-bold mb-3">Currently cooking: {0}</h1>
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
                {/* row 1 */}
                <tr className="hover">
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>

                {/* Total */}
                <tr>
                  <th></th>
                  <td></td>
                  <td>Total: </td>
                  <td>Total: </td>
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
};

export default CalculateTables;
