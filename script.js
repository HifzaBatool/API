"use strict";


const jokeContiner = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContiner.textContent = `${item.joke}`;
    });
}
btn.addEventListener("click", getJoke);

 
