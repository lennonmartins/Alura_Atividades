var botaoAdicionar = document.querySelector("#adcionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
	event.preventDefault();
	var formulario = document.querySelector("#form-adiciona");

	function obterDadosFormulario(formulario) {
		var paciente = {
			nomeInput: formulario.nome.value,
			pesoInput: formulario.peso.value,
			alturaInput: formulario.altura.value,
			gorduraInput: formulario.gordura.value, 
			imc: calcularImc(formulario.peso.value, formulario.altura.value)
		}
		return paciente;
	}

	var paciente = obterDadosFormulario(formulario);
	console.log(paciente);


	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nomeInput;
	pesoTd.textContent = pesoInput;
	console.log(pesoTd.textContent);
	alturaTd.textContent = alturaInput;
	console.log(alturaTd.textContent);
	gorduraTd.textContent = gorduraInput;
	imcTd.textContent = calcularImc(pesoInput, alturaInput);
	console.log(imcTd.textContent);

	var pacienteTr = document.createElement("tr");

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

	pacienteTr.classList.add("paciente");
	pesoTd.classList.add("info-peso");
	nomeTd.classList.add("info-nome");
	alturaTd.classList.add("info-altura");
	gorduraTd.classList.add("info-gordura");
	imcTd.classList.add("info-imc");

})