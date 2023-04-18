// Creo un array di numeri interi
let numeri = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Inizializzo la variabile somma con valore 0
let somma = 0;

// Faccio un ciclo for per scorrere tutti gli elementi dell'array
for(let i = 0; i < numeri.length; i++) {
  // Verifico se l'indice è dispari
  if(i % 2 !== 0) {
    // Aggiungo il valore dell'elemento alla variabile somma
    somma += numeri[i];
  }
}

// Stampo la somma degli elementi in posizione dispari
console.log("La somma degli elementi in posizione dispari è: " + somma);