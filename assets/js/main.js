let userName;
let userSurname;
let userColor;
let thisYear;

userName = prompt("Come ti Chiami?");
console.log("Il tuo nome è:" + " " + userName);

userSurname = prompt("Qual è il tuo Cognome?");
console.log("Il tuo cognome è:" + " " + userSurname);

userColor = prompt("Qual è il tuo Colore preferito?");
console.log("Il tuo Colore preferito è:" + " " + userColor);

thisYear = prompt("In che anno siamo?");

let password_generated;

password_generated = ("Ciao" + " " + userName + "," + " " + "la tua Password è:" + " " + userName + userSurname + userColor + thisYear + ".");

document.getElementById("password").innerHTML = password_generated;