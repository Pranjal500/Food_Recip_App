 import { anotherRecipeObject } from "./model.js"
 export class servingsView
{
    rightContainer
    render()
    {
        this.rightContainer= document.getElementById("right-container")
        this.handleServings()
    }
    handleServings()
    {
       
            // logic which will identify increase and Decrease button
            this.rightContainer.addEventListener("click", function(e)
    {
        const btnName = e.target.innerText;
        if(btnName == "Increase")
        {
            this.rightContainer= document.getElementById("right-container")


            //logic to increase the count of the servings
            const completeData = anotherRecipeObject.recipeObject
            let myServings = completeData.servings

            anotherRecipeObject.recipeObject.servings= myServings+1

            anotherRecipeObject.recipeObject.ingredients.map(function(i)
            {
                // newQuantity =(oldQuantity * servings) /5
                i.quantity = Math.ceil(i.quantity * anotherRecipeObject.recipeObject.servings) /5
            })

           const recievedData= anotherRecipeObject.recipeObject

            this.rightContainer.innerText = ""
            return this.rightContainer.insertAdjacentHTML("afterbegin",` <div class="right-food-container">
        <img class="right-image" src="${recievedData.imageUrl}"/>
        <h2 class="right-title">Title: ${recievedData.title}</h2>
        <h3 class="right-publisher">publisher: ${recievedData.publisher}</h3>
        <h3 class="right-servings">servings: ${recievedData.servings}</h3>
        <button id="inc" >Increase</button>
        <button id="dec" >Decrease</button>

        <h3 class="right-cooking-time">cooking-Time: ${recievedData.cookingTime}</h3>

        <div class="ingredients">
            ${recievedData.ingredients.map(function (i) {
            console.log(i)
            return ` <div>
                            <span>${i.description}</span>  --
                            <span>${i.quantity}</span>
                            <span>${i.unit}</span>
                        </div>`
        }).join("")}
        </div>
        
    </div> `
            )}
        else if(btnName == "Decrease")
        {
            //Logic to decrease the count of the servings
            this.rightContainer= document.getElementById("right-container")


            //logic to increase the count of the servings
            const completeData = anotherRecipeObject.recipeObject
            let myServings = completeData.servings

            anotherRecipeObject.recipeObject.servings= myServings - 1

            anotherRecipeObject.recipeObject.ingredients.map(function(i)
            {
                // newQuantity =(oldQuantity * servings) /5
                i.quantity = Math.ceil(i.quantity * anotherRecipeObject.recipeObject.servings) /5
            })

           const recievedData= anotherRecipeObject.recipeObject

            this.rightContainer.innerText = ""
            return this.rightContainer.insertAdjacentHTML("afterbegin",` <div class="right-food-container">
        <img class="right-image" src="${recievedData.imageUrl}"/>
        <h2 class="right-title">Title: ${recievedData.title}</h2>
        <h3 class="right-publisher">publisher: ${recievedData.publisher}</h3>
        <h3 class="right-servings">servings: ${recievedData.servings}</h3>
        <button id="inc" >Increase</button>
        <button id="dec" >Decrease</button>

        <h3 class="right-cooking-time">cooking-Time: ${recievedData.cookingTime}</h3>

        <div class="ingredients">
            ${recievedData.ingredients.map(function (i) {
            console.log(i)
            return ` <div>
                            <span>${i.description}</span>  --
                            <span>${i.quantity}</span>
                            <span>${i.unit}</span>
                        </div>`
        }).join("")}
        </div>
        
    </div> `
            )}
    })
}
}
