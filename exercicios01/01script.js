let ipMedia = document.querySelector("#ipMedia")
let btVerificar = document.querySelector("#btVerificar")

function VerificarMedia() {
    let media = Number(ipMedia.value)
    //desvio condicional simples
    if (media >= 6.0) {
        alert("Aluno aprovado");

    } else {

        alert("Aluno reprovado");
    }
}


btVerificar.onclick = function () {
    VerificarMedia();
}