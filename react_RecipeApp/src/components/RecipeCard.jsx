

function RecipeCard({recipe}){
    return(
        <>
            <div> {recipe.title} </div>
            <div> {recipe.category} </div>
            <img src={recipe.image} alt={recipe.title}/> 
        </>
    )
}

export default RecipeCard;