import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";
import recipes from "./data";

function App(){
  console.log(recipes);
  return(
    <div>
      <Navbar/>
      <RecipeCard/>
      <RecipeDetail/>
      <RecipeList/>
    </div>
  )
}

export default App;