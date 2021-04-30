var europe = "Europe";
var africa = "Africa";
var southamerica = "Southamerica";
var northamerica = "Northamerica";
var asia = "Asia";
var australia = "Australia";
var europe18 = 4209.3;
var europe08 = 4965.7;
var africa18 = 1235.5;
var africa08 = 1028;
var southamerica18 = 1261.5;
var southamerica08 = 1132.6;
var northamerica18 = 6035.6;
var northamerica08 = 6600.4;
var asia18 = 16274.1;
var asia08 = 12954.7;
var australia18 = 2100.5;
var australia08 = 1993;
var world = europe18 + africa18 + southamerica18 + northamerica18 + asia18 + australia18;
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", function () { emission(europe, europe18, europe08); });
    document.querySelector(".northamerica").addEventListener("click", function () { emission(northamerica, northamerica18, northamerica08); });
    document.querySelector(".southamerica").addEventListener("click", function () { emission(southamerica, southamerica18, southamerica08); });
    document.querySelector(".africa").addEventListener("click", function () { emission(africa, africa18, africa08); });
    document.querySelector(".asia").addEventListener("click", function () { emission(asia, asia18, asia08); });
    document.querySelector(".australia").addEventListener("click", function () { emission(australia, australia18, australia08); });
    function emission(continentName, emission18, emission08) {
        document.querySelector(".continent").innerHTML = continentName;
        document.querySelector(".emissions18").innerHTML = emission18.toString();
        document.querySelector(".continentName").innerHTML = continentName;
        document.querySelector(".relativeWorld").innerHTML = Math.round(emission18 / world * 100 * 100) / 100 + "%";
        document.querySelector(".growthRate").innerHTML = Math.round((emission18 - emission08) / emission08 * 100 * 100 / 100) + "%";
        document.querySelector(".growthRateAbsolute").innerHTML = (Math.round((emission18 - emission08) * 100) / 100).toString();
        document.querySelector(".chart").setAttribute("style", "height:" + (emission18 / world) * 100 + "%");
    }
    ;
});
//# sourceMappingURL=script.js.map