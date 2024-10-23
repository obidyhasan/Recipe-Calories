import Recipe from "./Recipe";

function Recipes() {
  return (
    <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Recipe />
      <Recipe />
      <Recipe />
    </div>
  );
}

export default Recipes;
