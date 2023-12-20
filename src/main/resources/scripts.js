let scugID;
let difficultyID;


let chosenChallenges = [];
let challenges = [
    //OBJECTIVE, Monk, Survivor, Hunter, Gourmand, Artificer, Rivulet, Spearmaster, Saint
    // ["", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Kill Moon", 1, 1, 1, 1, 100, 100, 100, 100],
    ["Tame a Lizard using Pups", 3, 3, 100, 3, 100, 100, 100, 100],
    ["Explode Yourself", 1, 1, 1, 1, 1, 1, 1, 1],
    ["Bonk a King Vulture to Death", 100, 100, 100, 2, 100, 100, 100, 100],
    ["Kill a Red Centipede without using Spore Puffs", 5, 5, 5, 4, 3, 5, 3, 100],
    ["Kill all Scavengers at a toll (5 minimum)", 5, 5, 4, 4, 3, 4, 3, 100],
    ["Deliver 2 of Moon's Neuron Flies to Five Pebbles", 4, 4, 4, 5, 100, 3, 4, 3],
    ["Throw a Singularity Bomb at Five Pebbles", 100, 100, 100, 2, 100, 100, 100, 100],
    ["Store 5 King Vulture Masks", 100, 5, 5, 4, 2, 4, 3, 100],
    ["Starve, then fill your stomach with quarter pip foods", 100, 100, 3, 100, 3, 100, 100, 100],
    ["Befriend a Cyan Lizard for it to Zoom into the Void", 4, 5, 2, 3, 3, 2, 2, 100],
    ["Stock up on 4 lanters so you never freeze", 2, 2, 2, 1, 2, 2, 2, 3],
    ["Kill a Strawberry Lizard", 100, 100, 100, 100, 100, 100, 100, 3],
    ["Tame a Strawberry Lizard (They cute<3)", 5, 100, 100, 100, 100, 100, 100, 3],
    ["Visit all Echoes", 4, 4, 4, 5, 5, 4, 4, 100],
    ["Get the Nomad in a Single Cycle", 4, 4, 4, 5, 4, 4, 4, 4],
    ["Complete the Food Quest", 100, 100, 100, 5, 100, 100, 100, 100],
    ["Lineage a Red Centipede", 4, 4, 3, 4, 3, 4, 3, 5],
    ["Kill at least 1 of every Lizard (No Train Lizards nor Reds)", 5, 5, 5, 5, 5, 5, 5, 100],
    ["Demask a Vulture with a backflip", 100, 3, 3, 4, 3, 4, 2, 100],
    ["Stock up on 10 blue fruits (same shelter)", 1, 2, 2, 1, 2, 1, 2, 3],
    ["Store 3 different Vulture Grubs in the same shelter", 2, 2, 2, 2, 2, 2, 2, 100],
    //["Use 3 Vulture Grubs at the same time, then survive after killing at least 1 of the spawned vultures", 100, 5, 5, 5, 3, 5, 4, 100],

    ["You may avoid completing a Challenge", -4, -4, -4, -4, -4, -4, -4, -4],

    ["You can only use One Hand (Crafting Allowed)", 4, 4, 3, 4, 4, 4, 5, 3],
    ["You can't use your Stomach (Crafting Allowed)", 4, 4, 4, 4, 3, 4, 100, 5],
    ["You can't use Passage Perk", 2, 2, 2, 2, 1, 1, 2, 1],
    ["You can't use Karma Flower Perk", 1, 1, 1, 1, 2, 1, 1, 1],
    ["You can't use Neuron Glow Perk", 2, 2, 2, 1, 2, 2, 2, 2],
    ["You can't use Back Spear Perk", 1, 2, 100, 1, 2, 2, 1, 100],
    ["You can't use Item Crafting Perk", 2, 2, 2, 100, 2, 2, 2, 2],
    ["You can't use Artificer Blast Perk", 3, 4, 4, 5, 100, 3, 4, 4],
    ["You can't use Explosion Resistance Perk", 1, 1, 1, 1, 100, 1, 1, 1],
    ["You can't use High Agility Perk", 3, 3, 3, 5, 3, 100, 3, 2],
    ["You can't use Spear Dual Wielding Perk", 2, 3, 3, 1, 3, 3, 100, 100],
    ["Don't kill ANY Blue Lizard", 1, 2, 2, 2, 2, 1, 2, 100]

]

function selectSlug(slugID) {

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

function selectDifficulty(diffID) {

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

function changeScugPortrait() {

    let character;

    switch (scugID) {

        case 0:
            character = "Monk"; break;
        case 1:
            character = "Survivor"; break;
        case 2:
            character = "Hunter"; break;
        case 3:
            character = "Gourmand"; break;
        case 4:
            character = "Artificer"; break;
        case 5:
            character = "Rivulet"; break;
        case 6:
            character = "Spearmaster"; break;
        case 7:
            character = "Saint"; break;
    }

    document.getElementsByClassName("scug-difficulty")[0].src = "./img/" + character + "_portrait.png";
}

function createChallengeTable() {

    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let chal = document.createElement("td");
    let pnts = document.createElement("td");
    chal.innerHTML = "Challenge Description";
    chal.classList.add("table-header");
    pnts.innerHTML = "Points";
    pnts.classList.add("table-header");
    tr.appendChild(chal);
    tr.appendChild(pnts);
    table.appendChild(tr);

    chosenChallenges.forEach(challenge => {

        tr = document.createElement("tr");
        chal = document.createElement("td");
        pnts = document.createElement("td");

        chal.innerHTML = challenges[challenge][0];

        pnts.innerHTML = challenges[challenge][scugID + 1];
        pnts.classList.add("pnts");

        tr.appendChild(chal);
        tr.appendChild(pnts);
        table.appendChild(tr);
    });

    document.getElementsByTagName("body")[0].appendChild(table);
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

function hideTitle() {

    let i = 0;
    let interval = setInterval(() => {

        document.getElementsByClassName("big")[0].style.opacity = (100 - 2 * i).toString() + "%";
        i++;
        if (i == 51)
            clearInterval(interval);
    }, 5);
}

function showTitle() {

    let i = 0;
    document.getElementsByClassName("big")[0].style.opacity = "0";

    let interval = setInterval(() => {

        document.getElementsByClassName("big")[0].style.opacity = (2 * i).toString() + "%";
        i++;
        if (i == 51)
            clearInterval(interval);
    }, 5);
}

function hideScugs() {

    let i = 0;
    let interval = setInterval(() => {

        Array.from(document.getElementsByClassName("scug")).forEach(element => {

            element.style.opacity = (100 - 2 * i).toString() + "%";
        });
        i++;
        if (i == 51) {
            clearInterval(interval);
            Array.from(document.getElementsByClassName("scug")).forEach(element => {

                element.style.display = "none";
            });
        }
    }, 5);
}

function showScugs() {

    let i = 0;
    Array.from(document.getElementsByClassName("scug")).forEach(element => {

        element.style.display = "block";
        element.style.opacity = "0";
    });

    let interval = setInterval(() => {

        Array.from(document.getElementsByClassName("scug")).forEach(element => {

            element.style.opacity = (2 * i).toString() + "%";
        });
        i++;
        if (i == 51)
            clearInterval(interval);
    }, 5);
}

function hideDifficulties() {

    let i = 0;
    let interval = setInterval(() => {

        Array.from(document.getElementsByClassName("difficulty")).forEach(element => {

            element.style.opacity = (100 - 2 * i).toString() + "%";
        });
        i++;
        if (i == 51) {
            clearInterval(interval);
            Array.from(document.getElementsByClassName("difficulty")).forEach(element => {

                element.style.display = "none";
            });
        }
    }, 5);
}

function showDifficulties() {

    let i = 0;
    Array.from(document.getElementsByClassName("difficulty")).forEach(element => {

        element.style.display = "inline-block";
        element.style.opacity = "0";
    });

    let interval = setInterval(() => {

        Array.from(document.getElementsByClassName("difficulty")).forEach(element => {

            element.style.opacity = (2 * i).toString() + "%";
        });
        i++;
        if (i == 51)
            clearInterval(interval);
    }, 5);
}

function hidePortrait() {

    let i = 0;
    let interval = setInterval(() => {

        document.getElementsByClassName("scug-difficulty")[0].style.opacity = (100 - 2 * i).toString() + "%";
        i++;
        if (i == 51) {
            clearInterval(interval);
            document.getElementsByClassName("scug-difficulty")[0].style.display = "none";
        }
    }, 5);
}

function showPortrait() {

    let i = 0;
    document.getElementsByClassName("scug-difficulty")[0].style.opacity = "0";
    document.getElementsByClassName("scug-difficulty")[0].style.display = "block";


    let interval = setInterval(() => {

        document.getElementsByClassName("scug-difficulty")[0].style.opacity = (2 * i).toString() + "%";
        i++;
        if (i == 51)
            clearInterval(interval);
    }, 5);
}

function hideTable() {

    let i = 0;
    let interval = setInterval(() => {

        document.getElementsByTagName("table")[0].style.opacity = (100 - 2 * i).toString() + "%";
        Array.from(document.getElementsByTagName("td")).forEach(element => {

            element.style.opacity = (100 - 2 * i).toString() + "%";
        });
        i++;
        if (i == 51) {
            clearInterval(interval);
            document.getElementsByTagName("table")[0].style.display = "none";
            Array.from(document.getElementsByTagName("td")).forEach(element => {

                element.style.display = "none";
            });
        }
    }, 5);
}

function showTable() {

    let i = 0;
    document.getElementsByTagName("table")[0].display = "block";
    document.getElementsByTagName("table")[0].style.opacity = 0;
    Array.from(document.getElementsByClassName("td")).forEach(element => {

        element.style.display = "block";
        element.style.opacity = "0";
    });

    let interval = setInterval(() => {

        document.getElementsByTagName("table")[0].style.opacity = (2 * i).toString() + "%";
        Array.from(document.getElementsByClassName("td")).forEach(element => {

            element.style.opacity = (2 * i).toString() + "%";
        });
        i++;
        if (i == 51)
            clearInterval(interval);
    }, 5);
}

//ASK IF YOU WANT TO LOAD PREVIOUS CHALLENGE OR NOT
window.onload = () => {
    setTimeout(() => {
        if (loadChallenges())
            onAcceptLoad();
        else localStorage.clear();
    }, 100);
};