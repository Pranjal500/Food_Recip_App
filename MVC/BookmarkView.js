import { anotherRecipeObject } from "./model.js"
import {collectAndStoreBookmark} from "./model.js"
export class BookmarkView
{
    handleBookmarks()
    {
       //Logic to perform click on that button and implement function
        this.right = document.getElementById("right-container")
        this.right.addEventListener("click", function(e)
        {
            const btnName = e.target.innerText
            if(btnName == "Mark As Bookmark")
            {
                const myTitle = anotherRecipeObject.recipeObject.title
                let titleArray = collectAndStoreBookmark(myTitle)
                //Logic to get the title and store it
                this.bookmark =  document.getElementById("childbookmark")
                this.bookmark.innerText =""
                titleArray.map((i)=>
                {              
                    this.bookmark.insertAdjacentHTML("afterbegin",`<h3 class ="save"> ${i}</h3>`)
                })

            }
        })
    }
}