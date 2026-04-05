/* =====================================
Texto que será digitado
===================================== */

const texto = "Desenvolvedor Web Júnior | Full Stack em formação";

/* elemento onde o texto aparece */

const alvo = document.getElementById("digitando");

/* contador */

let i = 0;

/* função que faz digitação */

function digitar() {

if (i < texto.length) {

alvo.innerHTML += texto.charAt(i);

i++;

setTimeout(digitar, 50);

}

}

/* inicia efeito */

digitar();