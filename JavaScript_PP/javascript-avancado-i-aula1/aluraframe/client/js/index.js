var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];

var tbody = document.querySelector('tbody')

document.querySelector(".form").addEventListener('submit', function (event) {
    event.preventDefault();

    var campoTr = document.createElement('tr');

    campos.forEach(function (campo) {
        var campoTd = document.createElement('td');
        campoTd.textContent = campo.value;
        campoTr.appendChild(campoTd);
    });
    
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    
    campoTr.appendChild(tdVolume);

    tbody.appendChild(campoTr)
    
    campos[1].value = 1;
    campos[2].value = 0;
    campos[0].value = '';
    campos[0].focus();


});
console.log(campos);