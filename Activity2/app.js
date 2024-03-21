import { leftDiv } from "./info.js"
import { rightDiv } from "./img.js"

let container = document.getElementById("container")

const data = {
    title : " List of Anime in 2019",
    para : "Are you looking for the best anime list to watch? 2019 was an excellent year for the world of animation.The list below contains some of the best anime list of 2019.",
    para2 : " 1. Mob Psycho 100 II <br> 2. Sarazanmai <br> 3. My Hero Academia Season 4 <br> 4. The Promised Neverland <br> 5. Dororo <br> 6. O Maidens in Your Savage Season <br> 7. Carole & Tuesday <br> 8. Demon Slayer: Kimetsu no Yaiba",
    buttonOne : "Contact Us",
    buttonTwo : "About Us",
    buttonThree : "Like Us",
    buttonFour : "Share Us",
    AnimeImage : "anime.jpg"
}

const { title, para, para2, buttonOne, buttonTwo, buttonThree, buttonFour, AnimeImage } = data

container.append(leftDiv(title, para, para2, buttonOne, buttonTwo, buttonThree, buttonFour))
container.append(rightDiv(AnimeImage))