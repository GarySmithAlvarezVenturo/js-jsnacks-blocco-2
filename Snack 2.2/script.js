/*Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi
e una lista di cognomi,e da queste vuole generare una falsa 
lista di invitati con nome e cognome.*/ 

// lista dei nomi
let nomi = ["Gary", "Lorenzo", "Gianluca", "Vincenzo", "Andrea"];

// lista dei cognomi
let cognomi = ["Alvarez", "Di Vita", "Liguori", "Rovazzi", "Picchiarello"];

// lista degli invitati con nome e cognome generati casualmente
let invitati = [];

// ciclo per generare casualmente i nomi e i cognomi degli invitati
for (let i = 0; i < 10; i++) {
let nomeCasuale = nomi[Math.floor(Math.random() * nomi.length)];
let cognomeCasuale = cognomi[Math.floor(Math.random() * cognomi.length)];
invitati.push(nomeCasuale + " " + cognomeCasuale);
}

console.log(invitati);