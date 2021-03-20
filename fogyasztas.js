
let km
do
{
    km = prompt("Hány kilométert mentél?") 
    var szam_e = /^-?\d+\.?\d*$/g.test(km) // Nem tetszett, hogy beírhattam a sor elejére és a sor végére betűket is a szám mellé, és akkor is elfogadta a megadott "számot", ezért keresnem kellett egy bonyolultabb kikötési rendszert, ez már nem fogadja el, ha talál valamilyen betűt bárhol, és engedi akár a 111.34-t is és hasonlókat.
    //console.log(szam_e) 
    //console.log(km)

} while(!szam_e || km > 1000)