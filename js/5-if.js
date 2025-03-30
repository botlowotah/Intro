/* 
IF - palyginimo savyga

( ! ) = Zodis Ne. 

palyginimo operatoriai:
-visi: 
> (daugiau)
< (maziau)
>= (daugiau arba lygu)
<= (maziau arba lygu)
== (ar lygu)
=== (ar lygu)
!= (ne lygu)
!== (ne lygu)
-naudotini:>, <, >=, <=, ===, !==
-nenaudotini: ==, !=

if (parametrai) {logika ka daryti

}

KODO SABLONAI:
if () {}
if () {} else {}
if () {} else if {}
if () {} else if () else {}
if () {} ... else if () ...
if () {} else if ... () ... else {}

*/


function pavadinimas() {

} 

console.log('START') 

if ( 4 < 2 ) {console.log('--- taip');

} else {
    console.log('---ne');
}
console.log('END') 

console.clear()





//TEMPERATUROS SKAICIAVIMAS

const temp = 10;

if (temp >= 21) console.log('silta');
    else {console.log('salta');

}

const temp2 = 10

if (temp2 < 0) {console.log('salta');
   }   else if (temp2 < 10) {console.log('meh');
   } 
   else if (temp2 < 22) {
    console.log('silta');
   }
   else { 
    console.log('karsta');
   }

   
   console.clear()

   if(4 === '4') {
   console.log ('tenkina');
   } else {
   console.log('Ne-tenkina');
   }
console.clear()


   if (2 < 1) {
   console.log('Taip')
   } else {
   console.log('Ku cia Kurwa pjauni')
   }
    console.clear()
    