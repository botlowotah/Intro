/* hasmap, dictionary*/


const empty = {}
console.log(empty)

const asmuo = {
vardas: 'Jonas',
amzius: 54,
vedes: true,
}
console.log(asmuo)

console.log(`Sveiki, mano vardas ${asmuo['vardas']} man yra ${asmuo['amzius']} metai.`)

// Supaprastinta sintakese

console.log(asmuo.vardas)
console.log(asmuo.amzius)
console.log(asmuo.vedes)

const pvz = {
spalva: 'raudona',
5: 5,
'yra vedes': true,
}
console.log(pvz)
console.log(pvz['spalva'])
console.log(pvz[[5]])
console.log(pvz['yra vedes'])
console.clear()


const pc = {
cpuCores: 8,
ram: 16,
diskSpace: 512,
diskType: 'ssd',
os: 'win10',
}
console.log(pc)
pc.ram = 32
console.log(pc)
pc.os = 'win11'
console.log(pc)

const s1 = `This pc has ${pc.cpuCores} cpu cores and ${pc.ram} of ram`
console.log(s1)


const student ={
name: 'Ona',
age: 28,
isMarried: false,
phoneNumbers:[],
parents: [
    {
name: 'Petras',
age: 77,
phone: [111111]
    },
    {
    name: 'Marta',
    age: 66,
    phoneNumbers: [123456789, 987654321]
    },
],
}
console.log(student)
console.log(student.name)
console.log(student.parents[0].name)
console.log(student.parents[1].name)
console.log(student.phoneNumbers.length)
console.log(student.parents[1].phoneNumbers[1])


const studentName1 = 'Jonas';
const studentAge1 = 99;
const studentIsMarried1 = true;
const studentName2 = 'Maryte';
const studentAge2 = 88;
const studentIsMarried2 = false;

//                name, age, isMarried
const student1 = ['Jonas', 99, true];
const student2 = ['Maryte', 88, false];
const student3 = ['Petras', false, 77];
const student4 = [true, 66, 'Ona'];

const stud1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
const stud2 = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
};

console.log(stud1.name);
console.log(stud2.name);