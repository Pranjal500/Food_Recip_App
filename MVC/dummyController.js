// // https://forkify-api.herokuapp.com/v2
// // https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key
// // b8f8cf3b-752a-49fc-bde6-4efa43482c03
// // https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=b8f8cf3b-752a-49fc-bde6-4efa43482c03

// const searchBtn = document.getElementById("search")
// const searchInput = document.getElementById("searchinput")
// const leftContainer = document.getElementById("left-container")
// const rightContainer = document.getElementById("right-container")
// const Text = document.getElementById("text")

// import { storeRecipeData } from "./MVC/model.js"

// import { OneRecipeView } from "./MVC/OneRecipeView.js"

// searchBtn.addEventListener("click", ()=>
// {
//     getRecipeData()
// })
// async function getRecipeData()
// {
//  try{
//  const searchItem = searchinput.value
//  const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}&key=4779f939-fb38-4112-b399-5e69d88088e8`)
//  const recipeData = await response.json()
//  const recipeArray = recipeData.data.recipes
//  recipeArray.map(function(i)
//  {
//     const myPublisher = i.publisher

//     const myTitle = i.title
//     const myImageUrl = i.image_url
//     const myId = i.id
//     console.log(myId)

//     // rightContainer.innerText = ""
//     return leftContainer.insertAdjacentHTML("afterbegin", `
        
//     <a href="#${myId}">
//         <div class="left-food-container">
//             <img src="${myImageUrl}" id="myimage"/>  
//             <h2 id="mypublisher">${myPublisher}</h2>  
//             <h3 id="mytitle">${myTitle}</h3>                                       
//         </div>
//         </a>
//         `)
//     })
//  }

//  catch(e)
//  {
//     alert(e)
//  }
// }
// async function loadParticularRecipe()
// {
//     const hashID = window.location.hash.slice(1)
//      console.log(hashID)

// //    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${hashID}`)
// //    const recipeData = await response.json()
// //    console.log(recipeData.data.recipe)
// //    const recipeObject =
// //    {
// //      publisher:recipeData.data.recipe.publisher,
// //      title:recipeData.data.recipe.title,
// //      imageUrl:recipeData.data.recipe.image_url,
// //      servings:recipeData.data.recipe.servings,
// //      cookingTime:recipeData.data.recipe.cooking_time,
// //      ingredients:recipeData.data.recipe.ingredients,
// //    }
//    await storeRecipeData(hashID)

//    const rv = new OneRecipeView()
//    rv.render()


// //    rightContainer.innerText = ""
   
// //    const rightData = ` <div class="right-food-container">
// //         <img class="right-image" src="${recipeObject.imageUrl}"/>
// //         <h2 class="right-title">Title: ${recipeObject.title}</h2>
// //         <h3 class="right-publisher">publisher: ${recipeObject.publisher}</h3>
// //         <h3 class="right-servings">servings: ${recipeObject.servings}</h3>
// //         <h3 class="right-cooking-time">cooking-Time: ${recipeObject.cookingTime}</h3>

// //         <div class="ingredients">
// //             ${recipeObject.ingredients.map(function(i)
// //                 {   
// //                     console.log(i)
// //                   return ` <div>
// //                             <span>${i.description}</span>  --
// //                             <span>${i.quantity}</span>
// //                             <span>${i.unit}</span>
// //                         </div>`
// //                 }).join("")}
// //         </div>
        
// //     </div> `
// //     rightContainer.insertAdjacentHTML("afterbegin", rightData)
// }

// loadParticularRecipe()

// window.addEventListener("hashchange", loadParticularRecipe)
// // getRecipeData()

// // https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcded