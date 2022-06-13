var boataoBuscar = document.querySelector("#buscar-paciente");

boataoBuscar.addEventListener("click", function () {
    console.log("Buscando paciente...");
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var erroBusca = document.querySelector("#erro-busca");
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            
            console.log("Deu certo");
            pacientes.forEach(function (paciente) {
                inserirPacienteNaTabela(paciente);
            });
            
            //Outra fomra de pegar os pacientes da api
            // for (let i = 0; i < pacientes.length; i++) {
                //     inserirPacienteNaTabela(pacientes[i]); 
                // }
            }else{
                console.log("o link ta quebrado");
                erroBusca.classList.remove("invisivel");
            }
        });

        xhr.send();
    })
    