
// Trovo elemento min in pagina
const minElem = document.getElementById("min");
// Trovo elemento secondi in pagina
const secElem = document.getElementById("sec");

let sec = 0;
let min = 0;
let clock;

function printTime (s, m) {

    let sStr = sec <= 9 ? "0" + sec.toString() : sec.toString();
    let mStr = min <= 9 ? "0" + min.toString() : min.toString();

    secElem.innerText = sStr;
    minElem.innerText = mStr;
}

// Stop al click del bottone
document.getElementById("stop").addEventListener("click", function() {
    clearInterval(clock);
    document.getElementById("start").classList.remove("hidden");

});

// Start al click del bottone
document.getElementById("start").addEventListener("click", function(){

    document.getElementById("start").classList.add("hidden");

    clock = setInterval(function() {

        if (sec < 59) {
            sec++;
        } else {
            sec = 0;
            min++;
        }

        printTime(min, sec);
    
    }, 1000)
});

// Reset al click del bottone
document.getElementById("reset").addEventListener("click", function(){
    secElem.innerText = "00";
    minElem.innerText = "00";
    sec = 0;
    min = 0;
    document.getElementById("start").classList.remove("hidden");
});

