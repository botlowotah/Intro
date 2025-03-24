/* STRING - tekstas, simboliu grandine */

const a = "hello" 
console.log(a) 
const b = "world"
console.log(b)


/*tkstines reiksmes iniciavimas;
"TEKSTAS" 
*/ 

// vienguba kabute
const k1 = "Viengubos (') kabutes"
console.log(k1)

//dvigubos kabutes 
const k2='dvigubos(") kabutes'
console.log(k2) 



// is dveju zodziu padaryti viena bendra teksta
const name = "Mindaugas"
const surname = "Germanavicius"
const fullname = name + '  ' +  surname
console.log(fullname) 

//viengubos(')  ir   dvigubos(")kabutes

const k12 ="viengubos(') ir" + 'dvigubos(")kabutes.'
console.log(k12) 


//vienguba kabute (')
const k3= 'Vienguba (\') kabute' 
console.log(k3) 

/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/

const html= '<header>\r\n\
 \t  <img>\r\n\
   \t<nav>\r\n\
   \t    <a></a>\r\n\
    \t   <a></a>\r\n\
     \t  <a></a>\r\n\
 \t  </nav>\r\n\
</header'
console.log(html) 

console.clear() 



// Maryte yra viena is 4 legendiniu studentu
const studentname = `Maryte`
const amount = 4
const student  = ` ${studentname} yra viena/s is ${amount} legendiniu studentu.`

console.log(student) 

 const word =`pomidoras`
 
 const wordSymbolsCount = word.lenght
 console.log(word)
 console.log(wordSymbolsCount)

 const textSize = `hello world`.lenght

 const text =   'Lavasas' 
 const firstSymbol = text [0]
 console.log(firstSymbol)
console.log('paraidziui')

 console.log(text[0])
console.log(text[1])
console.log(text[2])
console.log(text[3])
console.log(text[4])
console.log(text[5])
console.log(text[6])

console.log(text[0] +   text [1])  




// Zodyje "sachmatai" pirmoji raide yra "S"

const game  = 'sachmatai'
const gameSentence = `zodyje "${game}" pirmoji raide yra "${game[0]}" `
console.log(gameSentence)






