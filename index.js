var res = document.querySelector('#res')

// Mudar msg no botão "Codificar" e "Decodificar"
var codeDecode = document.querySelectorAll('input[name="codeDecode"]')
codeDecode.forEach((radio) => {
    radio.addEventListener("change", function (e) {
        e.preventDefault();

        var btn = document.getElementById("submit");

        if (e.target.value == "decode") {
            btn.innerHTML = "Decodificar Mensagem!";
        } else {
            btn.innerHTML = "Codificar Mensagem!";
        }
    });
});

// mostrar incremento para cifra de césar
var select = document.querySelector("select");

select.addEventListener("change", function (e) {
    e.preventDefault();

    var inc = document.getElementById("valInc");

    if (e.target.value == "cesar") {
        inc.style = "display: flex";
    } else {
        inc.style = "display: none";
    }
});
