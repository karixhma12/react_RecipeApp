import Card from "./Card";

function RecipeCard({recipe,setSelectedRecipe}){
    return(
        <Card onClick={setSelectedRecipe(recipe)}>
            <div>{recipe.title}</div> 
            <div>{recipe.category}</div>
        </Card>
    )
}

export default RecipeCard;