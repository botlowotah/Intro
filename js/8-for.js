/* 
FOE (loop) - ciklas
*/

for (let i = 0; i < 8; i++) {
    console.log('number:', i);
}

console.log('---------');

console.log('number:', 0);
console.log('number:', 1);
console.log('number:', 2);
console.log('number:', 3);
console.log('number:', 4);


console.log('Daugybos lentele: ')

for (let n = 1; n < 11; n++) {
    console.log('n:', n);

    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}

console.clear()


