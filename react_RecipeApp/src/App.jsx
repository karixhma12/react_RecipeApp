import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";
import recipes from "./data";

function App(){
  return(
    <div>
      <Navbar/>
      <RecipeList recipes={recipes}/>
      <RecipeDetail/>
    </div>
  )
}

export default App;