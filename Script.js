function menu(){
var element = document.getElementById('phonemenu')
element.classList.toggle("visible");
}
function zmian1() {
    var nowyTekst1 = "Nowy katalizator do Jeep Grand Cherokee rocznik od 1999 do 2014";
    var paragraf1 = document.getElementById("productswitch");
    if (paragraf1) {
        paragraf1.textContent = nowyTekst1;
    } else {
        console.error("Paragraf o id 'productswitch' nie został znaleziony.");
    }
}
function zmian2() {
    var nowyTekst2 = "Nowy alternator do Dacia Duster 1.6 16V roczniki od 2008 do 2015";
    var paragraf2 = document.getElementById("productswitch");
    if (paragraf2) {
        paragraf2.textContent = nowyTekst2;
    } else {
        console.error("Paragraf o id 'productswitch' nie został znaleziony.");
    }
}
function zmian3() {
    var nowyTekst3 = "Używana maglownica do Fiat Seicento 1.1 roczniki od 1993 do 1999";
    var paragraf3 = document.getElementById("productswitch");
    if (paragraf3) {
        paragraf3.textContent = nowyTekst3;
    } else {
        console.error("Paragraf o id 'productswitch' nie został znaleziony.");
    }
}
function zmian4() {
    var nowyTekst4 = "Nowa maska do Volksvagen Passat polift każdy rocznik";
    var paragraf4 = document.getElementById("productswitch");
    if (paragraf4) {
        paragraf4.textContent = nowyTekst4;
    } else {
        console.error("Paragraf o id 'productswitch' nie został znaleziony.");
    }
}
function zmian5() {
    var nowyTekst5 = "Nowy wahacz do Fiat 126p każdy rocznik.";
    var paragraf5 = document.getElementById("productswitch");
    if (paragraf5) {
        paragraf5.textContent = nowyTekst5;
    } else {
        console.error("Paragraf o id 'productswitch' nie został znaleziony.");
    }
}