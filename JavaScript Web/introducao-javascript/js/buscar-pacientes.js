var boataoBuscar = document.querySelector("#buscar-paciente");

boataoBuscar.addEventListener("click", function(){
    console.log("Buscando paciente...");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

    xhr.send();

    xhr.addEventListener("load",function(){
        console.log(xhr.responseText);
    })
})