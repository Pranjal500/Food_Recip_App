import { recipe } from "./model.js"
export class AddRecipeView
{
    left
    right 
    addBtn
    displayaddRecipeForm()
    {
        this.right = document.getElementById("right-container")
        this.addBtn = document.getElementById("add-recipe")

        this.addBtn.addEventListener("click", ()=>
        {
            // console.log("Add Recipe button has been clicked!");

            //Here, we need to display the form from inside right container
            const AddRecipeForm = ` <form method="POST" class ="recipes-form">
            <label>Title:</label><br>
            <input type="text" placeholder="Enter the title..." name="title" value="Title 1"" /><br><br>

            <label>Image URL:</label><br>
            <input type="text" placeholder="Enter the image url..." name="imageurl" value="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" /><br><br>

            <label>Cooking Time:</label><br>
            <input type="text" placeholder="Enter the cooking time" name="cooking time" value="40"/><br><br>

            <label>Servings:</label><br>
            <input type="text" placeholder="Enter the servings" name="servings" value="4" /><br><br>

            <label>Publisher:</label><br>
            <input type="text" placeholder="Enter the publisher" name="publisher" value="PUBLISHER" /><br><br>

            <label>Ingredient 1:</label><br>
            <input type="text" placeholder="Enter the ingredient 1" name="ingredient 1" value="2,kg,Rice" /><br><br>

            <label>Ingredient 2:</label><br>
            <input type="text" placeholder="Enter the ingredient 2" name="ingredient 2" value="4,kg,dal" /><br><br>

            <label>Source URL:</label><br>
            <input type="text" placeholder="Enter the source url" name="sourceurl" value="https://123.com" /><br><br>
            
            <button type ="submit" id="add">Add</button>
         <form>`
             this.right.innerText = ""
             return this.right.insertAdjacentHTML("afterbegin", AddRecipeForm)
            
        })
    }

    collectRecipeData()
    {
        //Logic to collect the recipe details that is entered in the form
        this.right = document.getElementById("right-container")
        this.right.addEventListener("click", (event)=>
        {
            event.preventDefault()

            // collect the data from the form
            const title = event.target.form[0].value
            const imageUrl = event.target.form[1].value
            const cookingTime = event.target.form[2].value
            const servings = event.target.form[3].value
            const publisher = event.target.form[4].value
            const ingredient1 = event.target.form[5].value
            const ingredient2 = event.target.form[6].value
            const sourceUrl = event.target.form[7].value

            const newRecipeData = {
                title: title,
                imageUrl: imageUrl,
                cookingTime: cookingTime,
                servings: servings,
                publisher: publisher,
                ingredient1: ingredient1,
                ingredient2: ingredient2,
                sourceUrl: sourceUrl
                
            }
            // console.log(newRecipeData);
            recipe(newRecipeData)


        })

    }
    displayData(myId, myTitle, myPublisher, myImageUrl)
    {
        this.leftContainer = document.getElementById("left-container")
        return this.leftContainer.insertAdjacentHTML("afterbegin", `
        
        <a href="#${myId}">
            <div class="left-food-container">
               <img src="${myImageUrl}" id="myimage"/>  
               <h2 id="mypublisher">${myPublisher}</h2>  
               <h3 id="mytitle">${myTitle}</h3>                                       
          </div>
        </a>
   `)
    }
}   
