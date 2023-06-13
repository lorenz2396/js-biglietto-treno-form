// Chiedi all'utente il numero di chilometri da percorrere
const km = parseInt (prompt("Inserisci il numero di chilometri da percorrere:"));

console.log('km', km, typeof km)

let pricexKm = 0.21;
let totalPrice = km * pricexKm;

if(isNaN(km)){
  alert('Ti avevo detto di inserire un numero')
}
else if(km <= 0){
  alert('Inserisci un numero maggiore di 0')
}
else{

    // Chiedi all'utente l'età del passeggero
  const age = parseInt (prompt("Inserisci l'età del passeggero:"));

  console.log('age', age, typeof age)
  if (isNaN(age)){
    alert('Inserisci un numero valido in cifre numeriche')
  }
  else if (age < 18) {
    // Sconto del 20% per i minorenni
    totalPrice = totalPrice * 0.8;
  } else if (age > 65) {
    // Sconto del 40% per gli over 65
    totalPrice = totalPrice * 0.6;
  }
}

// Prezzo totale
console.log("Il prezzo del biglietto è: " + totalPrice.toFixed(2) + "€", typeof totalPrice);

const ticketPrice = document.getElementById('ticketPrice-container')

console.log('ticketPrice-container', ticketPrice)

const previousText = ticketPrice.innerHTML;

console.log('previousText', previousText);

// Biglietto Finale
ticketPrice.innerHTML = previousText + totalPrice.toFixed(2) + '€';
