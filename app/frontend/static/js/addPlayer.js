import APIClient from "./APIClient.js";

const addPlayerForm = document.getElementById("add-player-form");
const firstnameInput = document.getElementById("firstname");
const lastnameInput = document.getElementById("lastname");
const shortnameInput = document.getElementById("shortname");

addPlayerForm.addEventListener("submit", async e => {
    e.preventDefault();
    await APIClient.createPlayer({
        player_firstname: firstnameInput.value,
        player_lastname: lastnameInput.value,
        player_shortname: shortnameInput.value
    });
});