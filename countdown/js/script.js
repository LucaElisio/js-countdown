// // alert("ciao")

// *Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"

// Trovo elemento seconds in pagina e lo salvo in variabile.
const secondElem = document.getElementById("second");
console.log(secondElem);

let second = 10;
console.log(second);
secondElem.innerText = second;


////////////////////////////////////////////

// const clock = setInterval(function() {

//     second--;
//     console.log(second);

//     if (second > 0) {
//         secondElem.innerText = second;
//     } else {
//         clearInterval(clock);
//         secondElem.innerText = "Buon anno!"
//     }

// }, 1000);


//////////////////////////////////

// const clock = setInterval(function() {
//     second--;
//     printTime (second)
// }, 1000);

// function printTime (s) {
//     s--;
//     if (s > 0) {
//         secondElem.innerText = s;
//     } else {
//         clearInterval(clock);
//         secondElem.innerText = "Buon anno!"
//     };
// };


///////////////////////////////////////

const clock = setInterval(decrease, 1000);

function decrease (second) {
    second--;
    printTime (second);
};

function printTime (s) {
    if (s > 0) {
        secondElem.innerText = s;
    } else {
        secondElem.innerText = "Buon anno!"
        clearInterval(clock);
    };
};