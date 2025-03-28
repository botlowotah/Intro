/* STRING - tekstas, simboliu grandine */

	// tekstas (string) [tekstas] :
    
  const a = 'Labas '
  console.log(a)


  let b = 'Rytas'
 console.log(b)

  b = 'Diena'
 console.log(b)

const name1 = "Jonas"
console.log(name1)

const name2 = '"Jonas"'
console.log(name2)

const name = 'Jonas'
const surname = 'Jonaitis'
const fullname = name + ' ' + surname
console.log(fullname)

// Vienguba (') ir dviguba (") kabutes

const a1 = "Vienguba (') ir" +' dviguba (") kabutes'
const a2 ='  ienguba (\') kabute'
console.log(a1+a2)
console.log(a1)
console.log(a2)

console.clear()

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

  /* Specialieji simboliai:
- \ (privercia sekanti simboli buti spausdintinu)
- \r (return, kursorius grizta i eilutes pradzia)
- \n (new line, kursorius nusileidzia viena eilute zemyn)
- \t (tab)
*/

const html = '<header>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t</nav>\r\n\
</header>';
console.log(html);

const html2 = '<header>\n\
\t<img>\n\
\t<nav>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t</nav>\n\
</header>';
console.log(html2);

const html3 = '\
<header>\r\
    <img>\r\
    <nav>\r\
        <a></a>\r\
        <a></a>\r\
        <a></a>\r\
    </nav>\r\
</header>';
console.log('-------------------');
console.log(html3);

console.clear()


// Maryte yra viena is 4 legendiniu studentu.

const studentName = 'Maryte'
const amount = 4
const student = studentName+' yra viena/s is '+ amount+ ' legendiniu studentu.'
console.log(student)

console.log('Arba su backtiku')
 
 const student2 = `${studentName} yra vina/s is ${amount} legendiniu studentu.`
console.log(student2)

 // Simboliu kiekio nustatymas tekste(reiksme.length)

 const word = 'zodis'
 const wordSymbolsCount = word.length

 console.log(word)
 console.log(wordSymbolsCount)

 //skaiciu nustatymas kaip simboliu

const age = 99;

const ageDigitsCount = ('' + age).length;
console.log(ageDigitsCount);

const ageDigitsCount2 = age.toString().length;
console.log(ageDigitsCount2);

//pirmo simbolio nustatymas

const text = 'Zodis'
const fisrstSymbol = text [0]
console.log(text[0])
console.log(text[1])
console.log(text[2])
console.log(text[3])
console.log(text[4])
console.log(text[0]+text[1]+text[2]+text[3]+text[4])


const s1 ='Sachmatai'
const firstSymbol = s1 [0]
const tekstas = `Zodyje "${s1}" pirmoji raide yra "${firstSymbol}"`
console.log(tekstas)
  






