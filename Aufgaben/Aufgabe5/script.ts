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






console.log("Die Emission von Europa ist: " + europa18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + relativeuropa + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzeuropa + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((emissioneuropa * 100) / 100) + "kg CO2");


console.log("Die Emission von Nordamerika ist: " + nordamerika18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + relativnordamerika + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + differenznordamerika + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((emissionnordamerika * 100) / 100)  +"kg CO2");


console.log("Die Emission von Südamerika ist: " + südamerika18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + relativsüdamerika + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzsüdamerika + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((emissionsüdamerika * 100) / 100) + "kg CO2");


console.log("Die Emission von Afrika ist: " + afrika18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + relativafrika + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzafrika + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((emissionafrika * 100) / 100) + "kg CO2");


console.log("Die Emission von Asien ist: " + asien18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + relativasien + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzasien + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((emissionasien * 100) / 100) + "kg CO2");


console.log("Die Emission von Australien ist: " + australien18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + relativaustralien + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + differenzaustralien + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((emissionaustralien * 100) / 100) +"kg CO2");







    