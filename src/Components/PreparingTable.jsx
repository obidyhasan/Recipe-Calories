import PropTypes from "prop-types";

function PreparingTable({ recipe, id }) {
  const { name, preparing_time, calories } = recipe;

  return (
    <tr className="hover">
      <th>{id + 1}</th>
      <td>{name}</td>
      <td>{preparing_time} min</td>
      <td>{calories}</td>
    </tr>
  );
}

PreparingTable.propTypes = {
  recipe: PropTypes.object.isRequired,
  id: PropTypes.number,
};

export default PreparingTable;
