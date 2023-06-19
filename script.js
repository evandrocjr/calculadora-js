// PEGANDO OS ELEMENTOS DA PAGINA -----------------------------------------------

//numeros
let um = document.querySelector("#um");
let dois = document.querySelector("#dois");
let tres = document.querySelector("#tres");
let quatro = document.querySelector("#quatro");
let cinco = document.querySelector("#cinco");
let seis = document.querySelector("#seis");
let sete = document.querySelector("#sete");
let oito = document.querySelector("#oito");
let nove = document.querySelector("#nove");
let zero = document.querySelector("#zero");

//decimal
let decimal = document.querySelector("#decimal");
//operadores
let somar = document.querySelector("#somar");
let subtrair = document.querySelector("#subtrair");
let multiplicar = document.querySelector("#multiplicar");
let dividir = document.querySelector("#dividir");

//limpar
let limpar = document.querySelector("#limpar");

//igual
let igual = document.querySelector("#igual");

//display
let resultado = document.querySelector("#resultado");

//EVENTOS -------------------------------------------------

//numeros
zero.addEventListener('click', function () {
    resultado.value += "0";
});
um.addEventListener('click', function () {
    resultado.value += "1";
});
dois.addEventListener('click', function () {
    resultado.value += "2";
});
tres.addEventListener('click', function () {
    resultado.value += "3";
});
quatro.addEventListener('click', function () {
    resultado.value += "4";
});
cinco.addEventListener('click', function () {
    resultado.value += "5";
});
seis.addEventListener('click', function () {
    resultado.value += "6";
});
sete.addEventListener('click', function () {
    resultado.value += "7";
});
oito.addEventListener('click', function () {
    resultado.value += "8";
});
nove.addEventListener('click', function () {
    resultado.value += "9";
});

//decimal 
decimal.addEventListener('click', function () {
    resultado.value += ".";
});

//operadores
somar.addEventListener('click', function () {
    resultado.value += "+";
});
subtrair.addEventListener('click', function () {
    resultado.value += "-";
});
multiplicar.addEventListener('click', function () {
    resultado.value += "*";
});
dividir.addEventListener('click', function () {
    resultado.value += "/";
});

//limpar
limpar.addEventListener('click', function () {
    resultado.value = "";
});

//igual
// função eval() recebe a string e transforma em operação, retornando o resultado
igual.addEventListener('click', function () {
    resultado.value = eval(resultado.value);
});
