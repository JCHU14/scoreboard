let home = 0
let away = 0


function home1() {
    home += 1
    console.log(home)
    homeScore()
}

function home3() {
    home += 3
    console.log(home)
    homeScore()
}



function away1() {
    away += 1
    console.log(away)
    awayScore()
}



function away3() {
    away += 3
    console.log(away)
    awayScore()
}

function homeScore() {
    const homeelement = document.getElementById("homeScore")
    homeelement.innerText = home
}

function awayScore() {
    const awayelement = document.getElementById("awayScore")
    awayelement.innerText = away
}


function reset() {
    home = 0
    away = 0
    homeScore()
    awayScore()
}


