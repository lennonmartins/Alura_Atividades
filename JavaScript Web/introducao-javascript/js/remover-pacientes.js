var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (evento) {
    var elementoAlvo = evento.target;

    if(evento.target.tagName == "TD" ){
    var elementoPai = elementoAlvo.parentNode;
    elementoPai.classList.add("fadeOut");

    setTimeout(function () {
        elementoPai.remove();
    }, 700);
};
});


// pacientes.forEach(function (paciente) {
//     paciente.addEventListener("dblclick", function () {
//         console.log("Fui clicado 2 vezes");
//         this.remove();
//     });
// });