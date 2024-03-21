import {myFunction} from "./info.js"
import {myImage} from "./img.js"

const myObject = {
    title : "This  is a Dogs",
    paragraph : "The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct gray wolves, and the gray wolf is the dog's closest living relative. The dog was the first species to be domesticated by humans.",
    myImg : "Dogs.jpg",
    buttonName : "Contact Us" 
}

const {title, paragraph, myImg, buttonName} = myObject

let container = document.getElementById('container')

container.append(myImage(myImg))
container.append(myFunction(title, paragraph, buttonName))