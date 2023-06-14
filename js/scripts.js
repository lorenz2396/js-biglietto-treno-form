
// Input Calcola 
const calcButton = document.getElementById('calc-button');

console.log('calcButton', calcButton, typeof calcButton);

// Input Form 
const calcForm = document.getElementById('calc-form');

console.log('calcForm', calcForm, typeof calcForm);



calcForm.addEventListener('submit', function(argomento){

    console.log('Evento', argomento, typeof argomento);
    argomento.preventDefault();

    // Input Km
    let km = document.getElementById('km').value;
    km = parseInt(km);
    console.log('km', km, typeof km);

    // Input Age
    let age = document.getElementById('age').value;
    // age = parseInt(age);
    console.log('age', age, typeof age);

    let pricexKm = 0.21;
    let totalPrice = km * pricexKm;

         if (age = 'underage') {
          // Sconto del 20% per i minorenni
          totalPrice = totalPrice * 0.8;
        } else if (age = 'over') {
          // Sconto del 40% per gli over 65
          totalPrice = totalPrice * 0.6;
        }

    console.log('totalPrice', totalPrice, typeof totalPrice)
    console.log('totalPrice Formattato', totalPrice.toFixed(2))
    document.querySelector('.contenitore-prezzo').innerHTML = totalPrice.toFixed(2);
});