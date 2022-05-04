// ------------------------------- mudar msg no botão "Codificar" e "Decodificar" -------------------------------------------------

var codeDecode = document.querySelectorAll('input[name="codeDecode"]')

codeDecode.forEach((radio) => {
    radio.addEventListener("change", function (e) {
        e.preventDefault()

        var btn = document.getElementById("btn")

        if (e.target.value == "decode") {
            btn.innerHTML = "Decodificar Mensagem!"
        } else {
            btn.innerHTML = "Codificar Mensagem!"
        }
    });
});

// ----------------------------------- mostrar incremento para cifra de césar -------------------------------------------------------

var select = document.querySelector("select");

    select.addEventListener("change", function (e) {
     e.preventDefault()

     var inc = document.getElementById("valInc")

     if (e.target.value == "cesar") {
         inc.style = "display: flex"
     } else {
         inc.style = "display: none"
     }
});




// ------------------------------------ "Ligando" os radio buttons -------------------------------------------------------------------

var txt = document.getElementById("txt")
var res = document.querySelector('#res')
var code = document.querySelector("#code")
var decode = document.querySelector("#decode")
var numInc = document.querySelector("#numeroInc")
var btn = document.getElementById("btn")

btn.addEventListener("click", function (e) {
    e.preventDefault()

    if (code.checked && select.value == "cesar") {
        res.value = codeCesar(txt.value, parseInt(numInc.value))
    } else if (decode.checked && select.value == "cesar") {
        res.value = decodeCesar(txt.value, parseInt(numInc.value))
    } else if (code.checked && select.value == "base64") {
        res.value = codeBase64(txt.value)
    } else if (decode.checked && select.value == "base64") {
        res.value = decodeBase64(txt.value)
    }
})

// -------------------------------------- codificar com cifra de césar -----------------------------------------------------------------

var inc = document.querySelector(".inc")

function codeCesar(txt, inc) {

    var resultado = [];
    var passinhoCesar;

    for (var i = 0; i < txt.length; i++) {
        if (txt[i].charCodeAt() >= 65 && txt[i].charCodeAt() <= 90) {
            passinhoCesar = ((txt[i].charCodeAt() - 65 + inc) % 26) + 65;
            resultado.push(String.fromCharCode(passinhoCesar));
        } else if (txt[i].charCodeAt() >= 97 && txt[i].charCodeAt() <= 122) {
            passinhoCesar = ((txt[i].charCodeAt() - 97 + inc) % 26) + 97;
            resultado.push(String.fromCharCode(passinhoCesar));
        } else {
            resultado.push(txt[i]);
        }
    }
    return resultado.join("");
}

// ------------------------------------- decodificar com cifra de césar ---------------------------------------------------------------------

function decodeCesar(txt, inc) {
    var resultado = [];
    var passinhoCesar;

    for (var i = 0; i < txt.length; i++) {
        if (txt[i].charCodeAt() >= 65 && txt.charCodeAt() <= 90) {
            passinhoCesar = ((txt[i].charCodeAt() - 90 - inc) % 26) + 90
            resultado.push(String.fromCharCode(passinhoCesar))
        } else if (txt[i].charCodeAt() >= 97 && txt[i].charCodeAt() <= 122) {
            passinhoCesar = ((txt[i].charCodeAt() - 122 - inc) % 26) + 122
            resultado.push(String.fromCharCode(passinhoCesar))
        } else {
            resultado.push(txt[i])
        }
    }
    return resultado.join("");
}

// -------------------------------------- codificar base64 -----------------------------------------------------------------------------------

function codeBase64(res){
    return btoa(res)
}

// -------------------------------------- decodificar base64 -----------------------------------------------------------------------------------

function decodeBase64(res){
    return atob(res)
}


