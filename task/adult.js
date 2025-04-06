/* Reikalinga funkcija, kuri gauna vartotojo amziu (metais) ir atitinkamai grazina zodi:
-suauges
-vaikas 
amziaus ribos kriterijus; >=18 metu. 

*/


function isAdult (age) {
if (age>= 18) {return 'suages' } else {
return vaikas; }}

        console.log(isAdult(18), '--->', 'suauges')
        console.log(isAdult(21), '--->', 'suauges')
        console.log(isAdult(50), '--->', 'suauges')
        console.log(isAdult(70), '--->', 'suauges')
        console.log(isAdult(5), '--->', 'suauges')
        console.log(isAdult(12), '--->', 'suauges')

        console.clear()
        





        function isAdult(currentAge) {
        if (currentAge >= 18) {
        return 'suauges';
        }
        else {
        return 'vaikas';
        }
        }
        
  
        console.log(isAdult(99), '-->' , 'suauges');
        console.log(isAdult(18), '-->' , 'suauges');
        console.log(isAdult(17), '-->' , 'vaikas');
        console.log(isAdult(1), '-->' , 'vaikas');

    




