


function RecipeDetail({selectedRecipe}){
    return(
        <div> 
            {!selectedRecipe && <p>Select a recipe to see details</p>}
            {selectedRecipe && 
                <div>
                    {selectedRecipe.id}
                    {selectedRecipe.title}
                    {selectedRecipe.category}
                    <img src={selectedRecipe.image} alt={selectedRecipe.title}></img>

                    <ul>
                    {selectedRecipe.ingredients.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })}
                    </ul>

                    <ul>
                        {selectedRecipe.steps.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default RecipeDetail;