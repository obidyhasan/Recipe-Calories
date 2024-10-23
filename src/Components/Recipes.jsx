import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";

function Recipes({ handelWantToCook }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  });

  return (
    <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-5">
      {recipes.map((recipe, idx) => (
        <Recipe key={idx} recipe={recipe} handelWantToCook={handelWantToCook} />
      ))}
    </div>
  );
}

Recipes.propTypes = {
  handelWantToCook: PropTypes.func.isRequired,
};

export default Recipes;
