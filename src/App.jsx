import { useState } from "react";
import CalculateTables from "./Components/CalculateTables";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import OurRecipe from "./Components/OurRecipe";
import Recipes from "./Components/Recipes";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [preparingRecipe, setPreparingRecipe] = useState([]);

  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handelWantToCook = (recipe) => {
    const isFind = recipes.find((rec) => rec.id === recipe.id);
    if (!isFind) {
      setRecipes([...recipes, recipe]);
    } else {
      alert("This recipe is available in the table");
    }
  };

  const handelPreparingEvent = (recipe) => {
    // Remove From Cook Table
    const remainRecipes = recipes.filter((rec) => rec.id !== recipe.id);
    setRecipes(remainRecipes);

    // Added To Preparing Table
    setPreparingRecipe([...preparingRecipe, recipe]);

    // Added Total Time and Total Calories
    setTotalTime(totalTime + recipe.preparing_time);
    setTotalCalories(totalCalories + recipe.calories);
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-7xl mx-auto px-5 pb-10">
        <Header />
        <OurRecipe />
        {/* Container */}
        <div className="flex gap-5 flex-col lg:flex-row">
          <Recipes handelWantToCook={handelWantToCook} />
          <CalculateTables
            recipes={recipes}
            handelPreparingEvent={handelPreparingEvent}
            preparingRecipe={preparingRecipe}
            totalTime={totalTime}
            totalCalories={totalCalories}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
