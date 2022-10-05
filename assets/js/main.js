let user_name;
let user_surname;
let user_color;
let this_year;

user_name = prompt("Come ti Chiami?");
console.log("Il tuo nome è:" + " " + user_name);

user_surname = prompt("Qual è il tuo Cognome?");
console.log("Il tuo cognome è:" + " " + user_surname);

user_color = prompt("Qual è il tuo Colore preferito?");
console.log("Il tuo Colore preferito è:" + " " + user_color);

this_year = 2022;

let password_generated;

password_generated = ("Ciao" + " " + user_name + "," + " " + "la tua Password è:" + " " + user_name + user_surname + user_color + this_year);

document.getElementById("password").innerHTML = password_generated