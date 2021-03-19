
let km
do
{
    km = prompt("Hány kilométert mentél?")
    var szam_e = /\d+/g.test(km)
    //console.log(szam_e) 
    //console.log(km)
    

} while(szam_e && km <= 1000)