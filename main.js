/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati ricordati.
*/

// funzione per generare numeri random da un minimo ad un massimo
function getRandInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * ## La funzione genera n numeri casuali compresi tra 1 e 100
 * @param {number} limit indica il massimo di numeri che vogliamo generare all'interno dell'array
 * @returns {array} un array con gli n numeri casuali
 */
// genero 5 numeri casuali da mostrare in pagina
function generateRandNumbers(limit) {
    let randomNumbers = [];
    while (randomNumbers.length !== limit) {
        numberGenerated = getRandInteger(1, 100);
        randomNumbers.push(numberGenerated);
    }
    return randomNumbers;
}

//console.log(generateRandNumbers(5));

let displayedNumbers = generateRandNumbers(5);

// creo la timing function che mi permette di dare un tempo prestabilito alla funzione
setTimeout(showNumbers, 30000)
// mostro l'alert con i numeri random generati nella funzione sopra
let numbersDisplay = document.querySelector(".numbers");
numbersDisplay.append(displayedNumbers);
/**
 * ## Funzione che genera un'array con i numeri inseriti dall'utente per n volte
 * @param {number} chosedNumbers indica quanti numeri l'utente può inserire nel prompt
 */
// creo la funzione a tempo che parte dopo 30 secondi e permette all'utente di inserire i 5 numeri 
function showNumbers() {
    // tolgo la visualizzazione dei numeri a schermo
    numbersDisplay.style.display = "none";
}

setTimeout(inputNumbers, 31000)
function inputNumbers() {
    let inputedNumbers = [];
    // creo un ciclo per inserire i numeri generati nell'array
    while (inputedNumbers.length !== 5) {
        userNumber = (prompt("Inserisci un numero:"));
        
        if (!inputedNumbers.includes(userNumber)) {
            inputedNumbers.push(userNumber);
        }
        //console.log(inputedNumbers);
    }
}

//console.log(displayedNumbers);

