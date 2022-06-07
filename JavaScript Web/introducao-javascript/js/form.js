var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacientedoFormulario(form);

    var pacienteTr = montarTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(paciente.peso);

    if (erros.length > 0) {
        exibirMensagemErro(erros);
        return;

    };

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
});

function exibirMensagemErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        li.classList.add("lista-erro");
        ul.appendChild(li);

    });
    // for (let i = 0; i < erros.length; i++) {
    // var li = document.createElement("li");
    // li.textContent = erros[i];
    // li.classList.add("lista-erro");
    // ul.appendChild(li);
    // }
    // return;
}

function obtemPacientedoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculoImc(form.peso.value, form.altura.value)
    };
    return paciente;
}

function montarTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
};

function montaTd(dado, classe) {

    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
};

function validaPaciente(paciente) {
    var erros = []
    if (paciente.nome.length == 0) {
        erros.push("Nome não pode ser em branco");
    };

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido !");
    };

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválido !");
    };

    if (paciente.altura.length == 0) {
        erros.push("Altura não pode ser em branco!");
    };

    if (paciente.peso.length == 0) {
        erros.push("Peso não pode ser em branco!");
    };

    if (paciente.gordura.length == 0) {
        erros.push("Gordura não pode ser em branco!");
    };

    return erros;
}