var botaoAdicionar = document.querySelector("#adcionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
	event.preventDefault();
	var formulario = document.querySelector("#form-adiciona");

	var paciente = obterDadosFormulario(formulario);

	if(!validaPaciente(paciente)){
		console.log("Paciente inválido");
		return;
	};

	var pacienteTr = montarTr(paciente);
	
	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

	formulario.reset();

})

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
function montarTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function montarTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	var nomeTd = montarTd(paciente.nomeInput,"info-nome");
	var pesoTd = montarTd(paciente.pesoInput,"info-peso");
	var alturaTd = montarTd(paciente.alturaInput,"info-altura");
	var gorduraTd = montarTd(paciente.gorduraInput,"info-gordura");
	var imcTd = montarTd(paciente.imc,"info-imc");;

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	return pacienteTr;
}

function validaPaciente(paciente){

	if (validaPeso(paciente.pesoInput)) {
		return true;
	}else{
		return false;
	}

}
