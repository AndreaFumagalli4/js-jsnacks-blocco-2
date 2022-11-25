// Calcola la somma dei primi 10 numeri di un array.

const list = [
    '13',
    '24',
    '333',
    '42',
    '523',
    '63',
    '7',
    '85',
    '9',
    '10',
    '113',
    '12'
];

let somma = 0;

let maxValue = list[0];

for ( let i = 0; i < 10; i++ ) {
    somma += parseInt (list[i]);

    if ( maxValue < parseInt (list[i])){
        maxValue = parseInt (list[i]);
    }
}

console.log(somma);

// Calcola la somma e la media dei primi 10 numeri di un array.

let media = somma / 10;

console.log(media);

// Calcola la somma, la media e il valore massimo dei primi 10 numeri di un array.

console.log(maxValue);
