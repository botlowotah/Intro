

//uzduotis 2: sukeiskime a1 ir b1 reikšmes

/*
let a1 = 5, b1 = 3

console.log(a1, b1)
*/

//uzduotis 3: padarykite jog ekrane matytume 555. a2, b2 ir c2 turi išlikti penketais

/*
let a2 = 5
let b2 = 5
let c2 = 5

console.log(a2 + b2 + c2)

*/

let a1 = 5, b1 = 3

let c1
c1 = a1
a1 = b1
b1 = c1
console.log(a1 , b1) 

let a2 = 5
let b2 = "5"
let c2 = 5
console.log(a2 + b2 + c2 )

   /*      const mokinys1 = ['Tadas', 8, 9, 10, 4, 7];
onst mokinys2 = ['Tadas', 8, 3, 10, 5, 9];

function mokinioVidurkis (mokinys)
{
    console.log('Mokinio  vardas" ' + mokinys[0])
    let vidurkis = (mokinys[1]+mokinys[3]+mokinys[5])/5 
    if(vidurkis>=3.5)
    {
        console.log(mokinys[0] + ' islaike. jo vidurkis:'+ vidurkis);
    }
else {let vidurkisNaujas = (vidurkis*) 

}

}
mokinioVidurkis(mokinys1)
mokinioVidurkis(mokinys2) */

const a = 100;
const b = 3;

if(a > b) {
    console.log("Pomidoras")
} else {
    console.log("Bandykite kitą kartą. ")
}



const Mokinys1 = ['Antanas', 5,6,2,4,8];
const Mokinys2 = ['Petras', 2,2,7,8,5];
const Mokinys3 = ['Martynas', 4,3,3,1,1];

function MokinioVidurkis (mok)
{
    let vidurkis = (mok[1]+mok[2]+mok[3]+mok[4]+mok[5])/5;
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