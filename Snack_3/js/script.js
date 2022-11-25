// Calcola la somma dei primi 10 numeri di un array.

const list = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12'
];

let somma = 0;

for ( let i = 0; i < 10; i++ ) {

    somma += parseInt (list[i]);
}

console.log(somma);

// Calcola la somma e la media dei primi 10 numeri di un array.

let media = somma / 10;

console.log(media);