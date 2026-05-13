import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";
import recipes from "./data";
import { useState } from "react";

function App(){

const [selectedRecipe,setSelectedRecipe] = useState(null);

  return(
    <div>
      <Navbar/>
      <RecipeList setSelectedRecipe={setSelectedRecipe} recipes={recipes}/>
      <RecipeDetail selectedRecipe={selectedRecipe}/>
    </div>
  )
}

export default App;