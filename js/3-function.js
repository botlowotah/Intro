function pavadinimas () { 
    // logika
}

const b = pavadinimas ();
const a = pavadinimas ();
console.log(a)
console.log(b)

function penki () {
    return 5
}
const c = penki ()
console.log(c)

function hi  () {
    return 'labas!'
}
const d = hi()
console.log (d)

// Jonas -> Labas, Jonas!

function hiPerson(name) {
    return `Labas, ${name}!`
}
// ARBA return 'Labas, ' +name + '!' 
console.log(hiPerson('Jonas'))
console.log(hiPerson('Bronius'))
console.log(hiPerson('Antanas'))
console.log(hiPerson('Tomas'))

console.log (hiPerson())

// 2+2 = 4
// 7+5 = 12

function sum(nr, nrII) {
    return nr + nrII
}

const e = sum(2, 2)
console.log(e)

const f = sum(4, 4)
console.log(f)

const g = sum(-8, +9)
console.log(g)
console.clear()


//                                 PVM SKAICIAVIMAS

// 10--> 121 Eur
// 200 --> 242 Eur
// 73 --> 88,33 Eur

function priceWithVAT(price) {                      
    
    return price * 1.21 + ' Eur'
}
const p1 = priceWithVAT (100);

console.log(p1);

const p2 = priceWithVAT (200);

console.log(p2);

const p3 = priceWithVAT (73);

console.log(p3);

console.clear()
 

// Jonas -> Zodis "Jonas" yra sudarytas is 5 raidziu
// Pertas -> Zodis "Petras" yra sudarytas is 6 raidziu
// Bronius -> Zodis "Bronius" yra sudarytas is 7 raidziu
// Tomas -> Zodis "Tomas" yra sudarytas is 5 raidziu

function nameLenght (name) {
    const size = name.length;
    return `Zodis = "${name}" yra sudarytas is ${size} raidziu.`

}

 const nl1 = nameLenght('Jonas');
 const nl2 = nameLenght('Petras');
 const nl3 = nameLenght('Bronius');
 const nl4 = nameLenght('Tomas');
 console.log(nl1);
 console.log(nl2);
 console.log(nl3);
 console.log(nl4);

 // 5-> gautas skaicius 5
 // -13 -> Gautas skaicius -13
// 777 -> gaautas skaicius 777

function gotNumber(n) {
   // return 'Gautas skaicius: ' + n + '.';
   return `Gautas skaicius: ${n}.`
} 

const gn1 = gotNumber(5);
const gn2 = gotNumber (-13);
const gn3 = gotNumber (777);
console.log(gn1)
console.log(gn2)
console.log(gn3)

console.clear() 


/* function sum(a, b) {
    const result = a + b;
    return `${a} + ${b} = ${result}`;
}

/* console.log(sum(2, 2));
console.log(sum(7, 5));
console.log(sum(-7, 15));
console.log(sum(748562514562, 148562514562)); */

//ND - perdaryti analogiskai su -, * ir / operacijomis

function sum(a, b) 
{const result = a * b;
    return `${a} * ${b} = ${result}`;
}
console.log(sum(2, 2))

function sum(c, d) 
{const result = c + d;
    return `${c} + ${d} = ${result}`;
} 
console.log(sum(2, 2))

function sum(e, f) 
{const result = e - f;
    return `${e} - ${f} = ${result}`;
}
console.log(sum(2, 2))




