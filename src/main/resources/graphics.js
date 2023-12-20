import { scugID } from "/scripts.js"

export function changeScugPortrait() {

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

export function createChallengeTable() {

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

export function hideTitle() {

    let i = 0;
    let interval = setInterval(() => {

        document.getElementsByClassName("big")[0].style.opacity = (100 - 2 * i).toString() + "%";
        i++;
        if (i == 51)
            clearInterval(interval);
    }, 5);
}

export function showTitle() {

    let i = 0;
    document.getElementsByClassName("big")[0].style.opacity = "0";

    let interval = setInterval(() => {

        document.getElementsByClassName("big")[0].style.opacity = (2 * i).toString() + "%";
        i++;
        if (i == 51)
            clearInterval(interval);
    }, 5);
}

export function hideScugs() {

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

export function showScugs() {

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

export function hideDifficulties() {

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

export function showDifficulties() {

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

export function hidePortrait() {

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

export function showPortrait() {

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

export function hideTable() {

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

export function showTable() {

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