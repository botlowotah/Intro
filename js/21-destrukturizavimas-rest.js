




const a = [4, 44, 444]

const a1 = [7, ...a, 88]

console.log('a1 = '+ a1)


// objektai

const o1 = {name: 'Jonas'}
const o2 = {age: 99}
const o3 ={isMarried: true}

const o12 = { ...o1, ...o2};
console.log(o12)

const o123= { ...o1, ...o2, ...o3}
console.log(o123)

const b = {a:1}
const b1={b:2}
const b2={b:3}

const b12 = {...b, ...b1}
console.log(b12)

const b123= {...b, ...b1,...b2}
console.log(b123)

//Math.min()



