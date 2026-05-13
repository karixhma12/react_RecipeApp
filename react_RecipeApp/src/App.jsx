import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";
import recipes from "./data";
import { useState } from "react";
import {useContext} from "react";
import {ThemeContext} from "./context/ThemeContext.jsx";

function App(){

const [selectedRecipe,setSelectedRecipe] = useState(null);
const [filter,setFilter] = useState("all");
const {theme} = useContext(ThemeContext);

  const filteredRecipes = filter=="all" ? recipes : recipes.filter((recipe)=>{
    return recipe.category === filter;
  })

  return(
    <div style={{
      background : theme==="light" ? "#ffffff" : "#222222",
      minHeight: "100vh",
      color : theme==="light" ? "#000000" : "#ffffff"
    }}>
      <Navbar/>
      <button onClick={()=>setFilter("all")}> All </button>
      <button onClick={()=>setFilter("breakfast")}> Breakfast </button>
      <button onClick={()=>setFilter("lunch")}> Lunch </button>
      <button onClick={()=>setFilter("dinner")}> Dinner </button>
      <RecipeList setSelectedRecipe={setSelectedRecipe} recipes={filteredRecipes}/>
      <RecipeDetail selectedRecipe={selectedRecipe}/>
    </div>
  )
}

export default App;