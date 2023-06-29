

// https://forkify-api.herokuapp.com/v2
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key
// b8f8cf3b-752a-49fc-bde6-4efa43482c03
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=b8f8cf3b-752a-49fc-bde6-4efa43482c03

const searchBtn = document.getElementById("search")
const searchInput = document.getElementById("searchinput")
const leftContainer = document.getElementById("left-container")
const rightContainer = document.getElementById("right-container")
const Text = document.getElementById("text")

import { storeRecipeData } from "./MVC/model.js"

import { OneRecipeView } from "./MVC/OneRecipeView.js"
import { API_URL } from "./helpers/helpers.js"
import { getJSON } from "./config/config.js"

import { getAllData } from "./MVC/model.js"
import { AllRecipeView } from "./MVC/AllRecipeView.js"
import { allData } from "./MVC/model.js"
import { paginationData } from "./MVC/model.js"
import { MyPaginationView } from "./MVC/MypaginationView.js"
import { servingsView } from "./MVC/ServingsView.js"
import {  BookmarkView } from "./MVC/BookmarkView.js"
import { AddRecipeView } from "./MVC/AddrecipeView.js"

searchBtn.addEventListener("click", () => {
    getRecipeData()
   rightContainer.innerHTML = ""
   
})

async function getRecipeData() {

    try {
        const searchItem = searchInput.value
        await getAllData(searchItem)


        const arv = new AllRecipeView()
        // arv.render(allData.allRecipeData)
        arv.render(paginationData(7))


        //pagination logic

        const mpv = new MyPaginationView()
        mpv.render(allData)

    }

    catch (e) 
    {
        alert(e)
    }
}
async function loadParticularRecipe()
 {
    const hashID = window.location.hash.slice(1)
    console.log(hashID)


    await storeRecipeData(hashID)

    const rv = new OneRecipeView()
    rv.render()



}
loadParticularRecipe()

function callHashChangeEventHandler() 
{
    const r = new OneRecipeView()
    r.hashChangeEventHandler(loadParticularRecipe)
}
callHashChangeEventHandler()


function controlPagination(number) {
        const arv = new AllRecipeView()
        // arv.render(allData.allRecipeData)
        arv.render(paginationData(number))

       const mpv = new MyPaginationView()
        mpv.render(allData)
}    


function callIt()
   {
        const view = new MyPaginationView()
        view.getPageNumberFromButton(controlPagination)

        
    }
callIt()

function servings()
{
   const sv =  new servingsView()
   sv.render()
}
servings()

function bookmark()
{
   const bv = new BookmarkView()
   bv.handleBookmarks()
}
bookmark()

function AddRecipe()
{
    const arv = new AddRecipeView()
    arv.displayaddRecipeForm()
    arv.collectRecipeData()
}

AddRecipe()



// window.addEventListener("hashchange", loadParticularRecipe)
// getRecipeData()

// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcded
