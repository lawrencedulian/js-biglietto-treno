// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// CONVERT THE TWO VALUES TO FLOATING POINT AND INTEGERS
// ASK USER HOW MANY KILOMETERES HE WANTS TO TRAVEL
const routeKm = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));

//ASK USER HIS AGE 
const userAge = parseInt(prompt("Quanti anni ha?"));

console.log(routeKm, typeof(routeKm));
console.log(userAge, typeof(userAge));

// PROCESSING DATA
// CALCULATE THE TOTAL FARE FOR THE TRIP
const fareTicket = "0.21";
const amountTicket = fareTicket * routeKm;
console.log(amountTicket, typeof(amountTicket)); //ORIGINAL PRICE


// IF THE AGE IS BELOW 18 THEN A 20% DISCOUNT WILL BE APPLIED 
    // OUTPUT MESSAGE: YOUR DISCOUNT FARE TICKET AMOUNT IS:
// IF THE AGE IS OVER 65 THEN A 40% DISCOUNT WILL BE APPLIED
    // OUTPUT MESSAGE: YOUR DISCOUNT FARE TICKET AMOUNT IS:
if ((userAge < 18)) {
    let discountMinor = (amountTicket * 20) / 100;
    discountFare = amountTicket - discountMinor;
} else if (userAge >= 65) {
    let discountOver = (amountTicket * 40) / 100;
    discountFare = amountTicket - discountOver;
}


//OUTPUT MESSAGE
alert (`Il biglietto costa: `+ discountFare);

   
    
