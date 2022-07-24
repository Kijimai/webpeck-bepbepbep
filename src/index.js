import generateJoke from "./generateJoke"
import "./styles/main.scss"
import Goobbue from "./assets/Goobbue2.png"

const goobbue = document.getElementById("goobImg")
goobbue.src = Goobbue

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()