import { changeScugPortrait, createChallengeTable, hideTitle, showTitle, hideScugs, hideDifficulties, showDifficulties, hidePortrait, showPortrait, showTable } from "/graphics.js"

export let scugID;
export let difficultyID;

let chosenChallenges = [];
let challenges = fetchJSON();

export function selectSlug(slugID) {

    scugID = slugID;
    let audio = new Audio("./audio/ScugSelect.mp3");
    audio.volume = 1;
    audio.play();

    hideScugs();
    hideTitle();
    setTimeout(() => {

        document.getElementsByClassName("big")[0].innerHTML = "SELECT DIFFICULTY";
        showTitle();
        showDifficulties();
        changeScugPortrait();
        showPortrait();

    }, 500)
}

function fetchJSON() {

    //CHATGPT
    // Fetch the JSON file
    fetch('challenges.json')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error fetching challenges:', error));
}

export function selectDifficulty(diffID) {

    difficultyID = diffID;
    let audio = new Audio("./audio/DifficultySelect.mp3");
    audio.volume = 1;
    audio.play();

    let points = 0;
    let minPoints, maxPoints;

    switch (difficultyID) {
        case 0:
            minPoints = 1;
            maxPoints = 3;
            break;
        case 1:
            minPoints = 4;
            maxPoints = 8;
            break;
        case 2:
            minPoints = 9;
            maxPoints = 12;
            break;
        case 3:
            minPoints = 13;
            maxPoints = 16;
            break;
        case 4:
            minPoints = 17;
            maxPoints = 20;
            break;
    }

    while (points < minPoints) {

        let selected = Math.floor(Math.random() * challenges.length);
        let pointsAdded = challenges[selected][scugID + 1];
        if (points + pointsAdded < maxPoints && !chosenChallenges.includes(selected)) {

            chosenChallenges.push(selected);
            points += pointsAdded;
        }
    }

    hideTitle();
    hideDifficulties();
    hidePortrait();
    setTimeout(() => {

        document.getElementsByClassName("big")[0].innerHTML = "HERE ARE YOUR CHALLENGES ;)";
        showTitle();
        showPortrait();
        createChallengeTable();
        saveChallenges();
        showTable();

    }, 500)
}

function saveChallenges() {

    localStorage.setItem("scug", scugID);
    localStorage.setItem("challenges", chosenChallenges.length);

    for (let i = 0; i < chosenChallenges.length; i++)
        localStorage.setItem("challenge" + i, chosenChallenges[i]);
}

function loadChallenges() {

    if (!localStorage.getItem("scug"))
        return false;
    if (!confirm("Do you want to load the previous Challenges?"))
        return false;

    scugID = parseInt(localStorage.getItem("scug"));
    let n = localStorage.getItem("challenges");
    for (let i = 0; i < n; i++)
        chosenChallenges.push(localStorage.getItem("challenge" + i));

    return true;
}

function onAcceptLoad() {
    
    hideTitle();
    hideScugs();

    setTimeout(() => {

        document.getElementsByClassName("big")[0].innerHTML = "HERE ARE YOUR CHALLENGES ;)";
        showTitle();
        showPortrait();
        changeScugPortrait();
        createChallengeTable();
        showTable();
    }, 500);
}

//ASK IF YOU WANT TO LOAD PREVIOUS CHALLENGE OR NOT
window.onload = () => {
    setTimeout(() => {
        if (loadChallenges())
            onAcceptLoad();
        else localStorage.clear();
    }, 100);
};