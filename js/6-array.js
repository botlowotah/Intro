/* 
ARRAY - sarasas, arejus, matrica, masyvas, list`as, rinkinys
*/ 

const empty = [];
console.log(empty);

const luckyNumbers = [7, 777, 13, 666, 8, 2];
console.log(luckyNumbers);

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);

const fistNumber = luckyNumbers [0];
console.log(fistNumber);

console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);
console.log(luckyNumbers[3]);
console.log(luckyNumbers[4]);
console.log(luckyNumbers[5]);
console.log(luckyNumbers[6]);
console.log(luckyNumbers[7]);

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
console.log(students[5]);
console.log(students[6]);
console.log(students[7]);

console.log(empty.length);
// const vardai = ['a', 'b', 'c', 'd'];

console.clear()

const numbers = [10, 2, 8, 4, 6];
const totalSum1 = numbers [0] + numbers [1] + numbers [4] + numbers [3] + numbers [2];
console.log(totalSum1);

let totalSum2 = 0;


totalSum2 = totalSum2 + numbers[0];
totalSum2 = totalSum2 + numbers[1];
totalSum2 = totalSum2 + numbers[2];
totalSum2 = totalSum2 + numbers[3];
totalSum2 = totalSum2 + numbers[4];
console.log(totalSum2);

let totalSum3 = 0;
totalSum3 += numbers[0];
totalSum3 += numbers[1];
totalSum3 += numbers[2];
totalSum3 += numbers[3];
totalSum3 += numbers[4];
console.log(totalSum3);


const dictionary = ['pomidoras', 'agurkas', 'bulve', 'kefyras', 'druska', 'svogunu laiskai', 'lasiniai'];

// patiekalui reikes a, b, c, d.

const sentence1 = 'Patiekalui reikes:  ' + dictionary[0] + ', ' + dictionary[1] + ', ' + dictionary[2] + ', ' + dictionary[3] + ', ' + dictionary[4] + ', ' + dictionary[5] + ', ' + dictionary[6] + '.';
console.log(sentence1);

console.log('---- sekantis patiekalas ----');

/*nst sentence2 = 'Pateikalui reikes: ';

sentence2 += dictionary[0] + ', ';
sentence2 += dictionary[1] + ', ';
sentence2 += dictionary[2] + ', ';
sentence2 += dictionary[3] + ', ';
sentence2 += dictionary[4] + ', ';
sentence2 += dictionary[5] + ', ';
sentence2 += dictionary[6] + ', ';
sentence2 += dictionary[7] + '.';
console.log(sentence2);

console.clear() */

let k = 0;
k = k + 1;
k += 1;
k++;
++k;

let  i =0
let sentence4 = 'patiekalui reikes ' ;
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + '. ';

console.log(sentence4);








