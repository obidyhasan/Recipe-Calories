import { useState } from "react";
import CalculateTables from "./Components/CalculateTables";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import OurRecipe from "./Components/OurRecipe";
import Recipes from "./Components/Recipes";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handelWantToCook = (recipe) => {
    setRecipes([...recipes, recipe]);
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
          <CalculateTables recipes={recipes} />
        </div>
      </div>
    </div>
  );
}

export default App;
