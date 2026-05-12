import Card from "./Card";

function RecipeCard({recipe}){
    return(
        <Card>
            <div> {recipe.title} </div>
            <div> {recipe.category} </div> 
        </Card>
    )
}

export default RecipeCard;