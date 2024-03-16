function validaTexto(texto) {
    var erros = [];

    if(texto.value == 0) erros.push(" Digite algum texto por favor!");

    if(/[A-Z-À-Ú-à-ú]/.test(texto.value)) erros.push(" Apenas letras minúsculas e sem acento, por favor!");

    return erros;
}

function mostraErros(erros) {
    var ul = document.querySelector(".mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
    
}