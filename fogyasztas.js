
let km
do
{
    km = prompt("Hány kilométert mentél?") 
    var szam_e = /^-?\d+\.?\d*$/g.test(km) // Nem tetszett, hogy beírhattam a sor elejére és a sor végére betűket is a szám mellé, és akkor is elfogadta a megadott "számot", ezért keresnem kellett egy bonyolultabb kikötési rendszert, ez már nem fogadja el, ha talál valamilyen betűt bárhol, és engedi akár a 111.34-t is és hasonlókat.
    //console.log(szam_e) 
    //console.log(km)

} while(!szam_e || km > 1000)

 
let tankolas = 0
while(tankolas < 1 || tankolas > 50)
{
    tankolas = prompt("Hány litert tankoltál?")
    
}

let autok = 
{
    evjarat: 2004,
    automarka: "Mazda"
};

let x = (tankolas/km).toFixed(1)
autok.fogyaszt = function()
{
    console.log(this.evjarat + "-es évjáratú " + this.automarka + " fogyasztása: " + x + " liter/km.")
}