var europa: string = "Europa";
var afrika: string = "Afrika";
var südamerika: string = "Südamerika";
var nordamerika: string = "Nordamerika";
var asien: string = "Asien";
var australien: string = "Australien";



var europa18: number = 4209.3;
var europa08: number = 4965.7;
var afrika18: number = 1235.5;
var afrika08: number = 1028;
var südamerika18: number = 1261.5;
var südamerika08: number = 1132.6;
var nordamerika18: number = 6035.6;
var nordamerika08: number = 6600.4;
var asien18: number = 16274.1;
var asien08: number = 12954.7;
var australien18: number = 2100.5;
var australien08: number = 1993;

var world : number = europa18 + afrika18 + südamerika18 + nordamerika18 + asien18 + australien18;
var relativeuropa : number = Math.round(europa18 / world * 100 * 100) / 100;
var relativafrika : number =  Math.round(afrika18 / world * 100 * 100) / 100;
var relativsüdamerika : number = Math.round(südamerika18 / world * 100 * 100) / 100;
var relativnordamerika : number = Math.round(nordamerika18 / world * 100 * 100) / 100;
var relativasien : number = Math.round(asien18 / world * 100 * 100) / 100;
var relativaustralien : number = Math.round(australien18 / world * 100 * 100) / 100;

var differenzeuropa : number = Math.round((europa18 - europa08) / europa08 * 100 * 100) / 100;
var differenzafrika : number = Math.round((afrika18 - afrika08) / afrika08 * 100 * 100) / 100;
var differenzsüdamerika : number = Math.round((südamerika18 - südamerika08) / südamerika08 * 100 * 100) / 100;
var differenznordamerika : number = Math.round((nordamerika18 - nordamerika08) / nordamerika08 * 100 * 100) / 100;
var differenzasien : number = Math.round((asien18 - asien08) / asien08 * 100 * 100) / 100;
var differenzaustralien : number = Math.round((australien18 - australien08) / australien08 * 100 * 100) / 100;

var emissioneuropa : number = europa18 - europa08;
var emissionafrika : number = afrika18 - afrika08;
var emissionsüdamerika : number = südamerika18 - südamerika08;
var emissionnordamerika : number= nordamerika18 - nordamerika08; 
var emissionasien : number = asien18 - asien08;
var emissionaustralien : number = australien18 - australien08;





window.addEventListener("load", function(){

    document.querySelector(".europe").addEventListener("click" , function() { emission(europa, europa18, europa08 )})
    document.querySelector(".northamerica").addEventListener("click" , function() { emission(nordamerika, nordamerika18, nordamerika08)})
    document.querySelector(".southamerica").addEventListener("click" , function() { emission(südamerika, südamerika18, südamerika08)})
    document.querySelector(".africa").addEventListener("click" , function() { emission(afrika, afrika18, afrika08 )})
    document.querySelector(".asia").addEventListener("click" , function() { emission(asien, asien18, asien08  )})
    document.querySelector(".northamerica").addEventListener("click" , function() { emission(nordamerika, nordamerika18, nordamerika08 )})

    function emission (continentName : string , emission18 : number, emission08 : number) {
        document.querySelector (".titleRegion").innerHTML = continentName;
        document.querySelector (".gesamtEmission18").innerHTML = emission18.toString();
        


    };
    

});