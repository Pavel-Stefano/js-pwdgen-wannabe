// graph TD

// 1[informazioni]
// 1-->a
// 1-->c
// 1-->e
// a{qual'è il tuo nome?}
// a-->b[nome]
// c{ quel'è il tuo cognome?}
// c-->d[cognome]
// e{qual'è il tuo colore preferito?}
// e-->f[colore preferito]
// f-->g{riassunto}
// b-->g
// d-->g
// g-->h[nome + cognome + colore preferito]




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


const riassunto = ('')
document.getElementById('riassunto').innerHTML = riassunto + userName + lastName + favoriteColor + 21;

