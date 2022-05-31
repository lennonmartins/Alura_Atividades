var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;

calculoImc = peso / (altura * altura);

var imc = paciente.querySelector(".info-imc");

alturaEValida = true;
pesoEValido = true;

if (peso <= 0 || peso >= 1000) {
	pesoEValido = false;
	imc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.00) {
	alturaEValida = false;
	imc.textContent = "Altura inválida";
}

if (alturaEValida && pesoEValido) {
	imc.textContent = calculoImc;
} else{
	imc.textContent = "Altura e/ou peso inválidos!";
}