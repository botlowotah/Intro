

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


const filmas11 = ['greitis', 'veiksmo', 7.5]
const filmas12 = ['pjūklas', 'siaubo', 6]
const filmas13 = ['klyksmas', 'siaubo', 8]
const filmas14 = ['narnija', 'fantazijos', 6]
const filmas15 = ['baltija', 'istorinis', 6]

const ManoBalas = 7;
const ManoZanras = 'siaubo';
const DraugoBalas = 9;

function filmoPasiulymas (filmasA, filmasB, filmasC, balas, zanras)
{
    let ArYraFilmas = false;

    if (filmasA[2]>=balas && filmasA[1] == zanras)
    {
        console.log ("Jums tiktų: " + filmasA[0]);
        ArYraFilmas = true;
    }
    if (filmasB[2]>=balas && filmasB[1] == zanras)
    {
        console.log ("Jums tiktų: " + filmasB[0]);
        ArYraFilmas = true;
    }
    if (filmasC[2]>=balas && filmasC[1] == zanras)
    {
        console.log ("Jums tiktų: " + filmasC[0]);
        ArYraFilmas = true;
    }

    if(ArYraFilmas == false)
    {
        console.log('Jums tinkamų filmų nėra')
    }
}


filmoPasiulymas(filmas11, filmas12, filmas14, ManoBalas, ManoZanras)





const skaiciai1 = [1, 2, 3];

function addNum (sk)
{
    return (sk[0]+sk[1]+sk[2]);
}

function tellNum (sk)
{
    console.log(sk[0]);
}

//let suma = addNum(skaiciai1);
console.log(addNum(skaiciai1));

tellNum(skaiciai1);



console.clear()



