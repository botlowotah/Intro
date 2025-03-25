// Kintamųjų inicijavimas
// Sukurti 3 kintamuosius su skaičiaus/teksto tipo reikšmėmis

const a = 3;
console.log(a);

let b = 8;
console.log(b);

const c = 5;
console.log(c);

let d = 'Kava';
console.log(d);

const e = 'Arbata';
console.log(e);

let f = 'Vanduo';
console.log(f);

//Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių/teksto tipo reikšmėmis

let n1 = [1,2,3,4,5];
console.log(n1);

let n2 = [11,22,33,44,55];
console.log(n2);

let n3 = [111,222,333,444,555];
console.log(n3);

let ingredientai = ['vanduo', 'druska', 'pipirai', 'darzoves', 'mesa'];
console.log(ingredientai);

let klavisai = ['W', 'A', 'S', 'D', 'Space'];
console.log(klavisai);

let akordai = ['Am', 'A', 'Dm', 'D', 'C'];
console.log(akordai);


//CIKLO (for) PANAUDOJIMAS


// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):

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

//Panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
const text = 'albertas';
const firstSymbol = text[0];


console.log(text[7]);
console.log(text[6]);
console.log(text[5]);
console.log(text[4]);
console.log(text[3]);
console.log(text[2]);
console.log(text[1]);
console.log(text[0]);


