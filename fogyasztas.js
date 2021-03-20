
let km
do
{
    km = prompt("Hány kilométert mentél?") 
    var szam_e = /^-?\d+\.?\d*$/g.test(km) // Nem tetszett, hogy beírhattam a sor elejére és a sor végére betűket is a szám mellé, és akkor is elfogadta a megadott "számot", ezért keresnem kellett egy bonyolultabb kikötési rendszert, ez már nem fogadja el, ha talál valamilyen betűt bárhol, és engedi akár a 111.34-t is és hasonlókat.
    //console.log(szam_e) 
    //console.log(km)

} while(!szam_e || km > 1000)   // &&-sel valamiért nem akart jó lenni.

 
let tankolas = 0
while(tankolas < 1 || tankolas > 50)
{
    tankolas = prompt("Hány litert tankoltál?")
    
}

let autok = 
{
    evjarat: 2004,
    automarka: "Mazda",
    fogyaszt: function()
    {
        console.log(this.evjarat + "-es évjáratú " + this.automarka + " fogyasztása: " + x + " liter/km.")
    }
};

let x = (tankolas/km).toFixed(3)

autok.fogyaszt()

if(tankolas > 20)
{
    console.log("Nem sajnálod az üzemanyagot!")
}

if(km > 700)
{
    console.log("Nem kellene ennyit utaznod!")
}

else
{
    console.log("Csak így tovább!")
}

autok.garazs = function(utca)
{
    console.log(this.automarka + " garázsa " + utca + " utcában található.")
}

autok.garazs("Széchenyi István")

for(let i in autok)
{
    console.log(i)
    // console.log(i + " : " + autok[i]) --> Ez a verzió leírja a kulcshoz rendelt értéket is. Ezt akartam aktívként hagyni, de a metódussal ellátott kulcsoknál kíírja az egész kódot, azt meg nem találtam a legszebb megoldásnak, de az automarka, evjarat kulcsoknál jól néz ki.
}