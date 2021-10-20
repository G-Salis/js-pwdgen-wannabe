/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/



const firstname = prompt('Nome');
const surname = prompt('Cognome');
const color = prompt('Colore');
let mypassword = firstname+surname+color+"21"

console.log(firstname);
console.log(surname);
console.log(color);

document.getElementById('stampa').innerHTML = 
`
Password: ${firstname}${surname}${color}21<br>
Lunghezza password: ${mypassword.length}
`;
