import PropTypes from "prop-types";

function CookTable({ recipe, id }) {
  const { name, preparing_time, calories } = recipe;

  return (
    <>
      <tr className="hover">
        <th>{id + 1}</th>
        <td>{name}</td>
        <td>{preparing_time} min</td>
        <td>{calories}</td>
        <td>
          <button className="btn btn-sm bg-green-500 text-white">
            Preparing
          </button>
        </td>
      </tr>
    </>
  );
}

CookTable.propTypes = {
  recipe: PropTypes.object.isRequired,
  id: PropTypes.number,
};

export default CookTable;
