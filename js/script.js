// // Chiedi all’utente il suo nome,
// // poi chiedi il suo cognome,
// // poi chiedi il suo colore preferito
// // Infine scrivi sulla pagina nomecognomecolorepreferito21

let userName = prompt('come ti chiami?')
console.log(userName)

document.getElementById('userName').innerHTML += userName;


let lastName = prompt('quale è il tuo cognome?')
console.log(lastName)

document.getElementById('lastName').innerHTML += lastName;



let favoriteColor = prompt('quale è il tuo colore preferito?')
console.log(favoriteColor)

document.getElementById('favoriteColor').innerHTML += favoriteColor;


const riassunto = ('Ciao ')
document.getElementById('riassunto').innerHTML = riassunto + userName + ' ' + lastName + ' ' +favoriteColor + ' ' + 21;

