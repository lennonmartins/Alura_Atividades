var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for (let i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var peso = paciente.querySelector(".info-peso").textContent;
	var altura = paciente.querySelector(".info-altura").textContent;

	var imc = paciente.querySelector(".info-imc");

	alturaEValida = true;
	pesoEValido = true;

	if (peso <= 0 || peso >= 1000) {
		pesoEValido = false;
		imc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido");
	}

	if (altura <= 0 || altura >= 3.00) {
		alturaEValida = false;
		imc.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido");
	}

	if (alturaEValida && pesoEValido) {
		var calculoImc = calcularImc(peso, altura);
		imc.textContent = calculoImc;
	}
}

function calcularImc(peso, altura){
	var calculoImc = 0;
	calculoImc = peso / (altura * altura);
	console.log(peso, (altura));
	return calculoImc.toFixed(2);
}
