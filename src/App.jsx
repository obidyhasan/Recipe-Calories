import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import OurRecipe from "./Components/OurRecipe";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <Navbar></Navbar>
      <Header />
      <OurRecipe />
    </div>
  );
}

export default App;
