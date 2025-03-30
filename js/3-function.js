function tuscia() {

}

const a = tuscia()

const b = tuscia()

console.log(a)
console.log(b)
console.log(tuscia())

function trys() {
return 3
}
const c = trys()
console.log(c)

function hiPerson (names) {
return `Labas, ${names}!` 
}

console.log(hiPerson('Jonas'))




//7 + 41
//6 - 15

function sum(num1, num2) {
return num1 + num2
}
const d = (7, 41)
console.log(d)

function sum2(num1,num2) {
return num1-num2}
const e = (6, 15)
console.log(e)

//100 --> 121
//200 --> 242
//73 --> 88.33

function priceWithVAT(price) {
return price * 1.21 + ' Eur'
}
const g = priceWithVAT (100)
console.log(g)


const h = priceWithVAT (200)
console.log(h)


const i = priceWithVAT (73)
console.log(i)

console.clear()

// Zodis "Jonas" yras sudarytas is 5 raidziu.

function nameLength (name) {
const size = name.length
return `Zodis  "${name}"  yra sudarytas is ${size} raidziu.`

}

const nl1 = nameLength ('Jonas');
const nl2 = nameLength ('Maryte');
const nl3 = nameLength ('Tadas');
console.log(nl3);
console.log(nl2);
console.log(nl1);

// return 'Gautas skaicius: ' + n + '.';

function numbers (number) {

return `Gautas skaicius: ${number}.`
}
const nr1 = numbers (5)
const nr2 = numbers (-13)
const nr3 = numbers (777)
console.log(nr1)
console.log(nr2)
console.log(nr3)

// 2, 2     ->  2 + 2 = 4
// 7, 5     ->  7 + 5 = 12
// -7, 15   ->  -7 + 15 = 8


function suma(a, b) {
const result = a + b
return `${a} + ${b} = ${result}`
}

console.log(suma(2, 2))
