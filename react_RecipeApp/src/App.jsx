import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";

function App(){
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