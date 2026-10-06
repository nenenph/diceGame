

function refreshRoll() {
    var dices = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
    var player1 = document.querySelector(".player1");
    var player2 = document.querySelector(".player2");
    var h1 = document.querySelector("h1");

    var r = Math.random();
    var r2 = Math.random();
    r = (r * 6);
    r = Math.floor(r);

    r2 = (r2 * 6);
    r2 = Math.floor(r2);

    player1.setAttribute("src", dices[r]);
    player2.setAttribute("src", dices[r2]);

    if (r>r2){ 
        h1.textContent="🚩Player 1 Win";
    } else if (r2>r){ 
        h1.textContent="🚩Player 2 Win";
    } else { 
        h1.textContent="Draw";
    }
}
// Check if the page was reloaded
// if (performance.getEntriesByType("navigation")[0].type === "reload") {
//     refreshRoll();
// }

if (sessionStorage.getItem("visit")) {
    //here we're
    refreshRoll();
} else {
    // The "Locker" is empty, so this is the first visit.
    sessionStorage.setItem("visit", "true");
}






