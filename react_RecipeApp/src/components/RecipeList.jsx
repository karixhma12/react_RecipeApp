import RecipeCard from "./RecipeCard";


function RecipeList({recipes,setSelectedRecipe}){
    return(
    <div>
        {recipes.map(recipe=>{
            return(
                <RecipeCard key={recipe.id} recipe={recipe} setSelectedRecipe={setSelectedRecipe}/>
            )
        })}
    </div>
    )
    
}

export default RecipeList;