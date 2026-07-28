import APIClient from "./APIClient.js";

const panorama = document.getElementById("panorama");

console.log( await APIClient.getPlayers() );