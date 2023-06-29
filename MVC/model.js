

import { API_URL } from "../helpers/helpers.js"
import { getJSON, sendJSON } from "../config/config.js"
import { AddRecipeView } from "./AddrecipeView.js"
export const anotherRecipeObject =
{
  recipeObject: {

  }
}

export async function storeRecipeData(id) {
  const recipeData = await getJSON(`${API_URL}/${id}`)
  // const response = await fetch(`${API_URL}/${id}`)
  // const recipeData = await response.json()
  //    console.log(recipeData.data.recipe)


  anotherRecipeObject.recipeObject =
  {


    publisher: recipeData.data.recipe.publisher,
    title: recipeData.data.recipe.title,
    imageUrl: recipeData.data.recipe.image_url,
    servings: recipeData.data.recipe.servings,
    cookingTime: recipeData.data.recipe.cooking_time,
    ingredients: recipeData.data.recipe.ingredients,
  }
  //    console.log(anotherRecipeObject)
}

export const allData = {
  allRecipeData: [],
  page: 1,
  dataPerPage: 10
}
export async function getAllData(searchItem) {

  const recipeData = await getJSON(`${API_URL}?search=${searchItem}&key=4779f939-fb38-4112-b399-5e69d88088e8`)
  // console.log(recipeData)
  const recipeArray = recipeData.data.recipes

  allData.allRecipeData = recipeArray

  console.log(allData)

}

export function paginationData(page = allData.page)
 {
  console.log(page)
  allData.page = page
  const start = (page - 1) * allData.dataPerPage
  const stop = page * allData.dataPerPage
  return allData.allRecipeData.slice(start, stop)
}


 let bookmarkArray = []
 export function collectAndStoreBookmark(title)
{
  // Collect thee title and store it
  bookmarkArray.push(title)
  //localStorage --> storage which is inbuilt in the browser
  // Store the data in the form of a key value pair
  // "mobile" , "lenovo"
  // 4 methods ---> setItem() ---> Store the data in the form of key value pair,
  //getItem() ---> get/read that data
  //remove() ---> remove the data,
  //clear() ---> completely clear the data.
  // stringify() --> convert javascript data ---> JSON
  localStorage.setItem("bookmark",JSON.stringify(bookmarkArray) )
  // parse() --> convert JSON to javascript data
  const titleData = JSON.parse(localStorage.getItem("bookmark"))
  return titleData
  
}

export async function recipe(data)
{
  console.log(Object.entries(data));
   const ingredients =Object.entries(data).filter(function(i)
   {
      return i[0].startsWith("ingredient")
      
      }).map(function(j)
      {
       const data = j[1].split(",")
       const [quantity, unit, description] = data
       return {quantity, unit, description};
   })
//  console.log(ingredient);
   const newData = {
    title:  data.title,
    image_url: data.imageUrl,
    ingredients: ingredients,
    cooking_time: data.cookingTime,
    servings: data.servings,
    publisher: data.publisher,
    source_url: data.sourceUrl
   }
  
 const output = await sendJSON("https://forkify-api.herokuapp.com/api/v2/recipes?key=a5cbf09e-8ee0-4b47-a210-d23ddc86c5bc", newData)
 const outputData =(output.data.recipe);
 const myId = outputData.id
 const myTitle = outputData.title
 const myPublisher = outputData.publisher
 const myImageUrl = outputData.image_url

 const arv = new AddRecipeView()
 arv.displayData(myId, myTitle, myPublisher, myImageUrl)


  }
