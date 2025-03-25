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

console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
console.log(students[5]);
console.log(students[-1]);

console.log(empty.length);
console.log(luckyNumbers.length);
console.log(students.length);


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

let sentence2 = 'Patiekalui reikes: ';
sentence2 += dictionary[0] + ', ';
sentence2 += dictionary[1] + ', ';
sentence2 += dictionary[2] + ', ';
sentence2 += dictionary[3] + ', ';
sentence2 += dictionary[4] + ', ';
sentence2 += dictionary[5] + ', ';
sentence2 += dictionary[6] + '.';
console.log(sentence2);

console.clear() 

let index = 0;
let sentence3 = 'Patiekalui reikes: ';

sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + ', ';

index += 1;
sentence3 += dictionary[index] + '.';
console.log(sentence3);

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

let j = -1;
let sentence5 = '++ Patiekalui reikes: ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + '.';
console.log(sentence5);

console.clear() 

function sumInterval(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}


console.log(" a " + sumInterval(0, 0)); 
console.log(" b " + sumInterval(0, 4)); 
console.log(" c " + sumInterval(0, 100)); 
console.log(" d " + sumInterval(574, 815));
console.log(" e " + sumInterval(-50, 50));
console.log(" f " + sumInterval(-70, 30));


function isAdult ()
{
    let age = (person[1]person[2]person[3]person[4]+mok[5])/5;
    if(vidurkis >=3.5)
    {
        console.log(mok[0] + " islaike, jo vidurkis: " + vidurkis);

    }
    else
    {
        let NaujasVidurkis = ((vidurkis*5)+10)/6;
        console.log(mok[0], "neislaike. Jo dabartinis vidurkis: " + vidurkis);
        if(NaujasVidurkis >= 3.5)
        {
            console.log(mok[0] + "islaikitu kursa jei gautu viena desimtuka. ");
        }
    }
}
    MokinioVidurkis(Mokinys1)
    MokinioVidurkis(Mokinys2)
    MokinioVidurkis(Mokinys3)










