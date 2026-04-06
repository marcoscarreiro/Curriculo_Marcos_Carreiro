const terminal = document.getElementById("digitando-terminal");

const linhas = [
  {
    texto: "Marcos Vinicius Carreiro da Silva",
    classe: "nome-destaque"
  },
  {
    texto: "Desenvolvedor Web Júnior | Full Stack em formação",
    classe: "cargo-destaque"
  },
  {
    texto: "Estudante do curso Técnico em Informática para Internet pelo Senac, com foco em desenvolvimento web, banco de dados, APIs e aplicações mobile. Em transição para a área de desenvolvimento, construindo projetos reais e fortalecendo a base técnica para atuar como desenvolvedor júnior.",
    classe: ""
  }
];

let linhaAtual = 0;
let letraAtual = 0;

function digitarLinha() {

  if (linhaAtual >= linhas.length) return;

  let linha = linhas[linhaAtual];

  if (letraAtual === 0) {
    const elemento = document.createElement("div");
    elemento.className = linha.classe + " cursor";
    terminal.appendChild(elemento);
  }

  const elementoAtual = terminal.lastChild;

  if (letraAtual < linha.texto.length) {

    elementoAtual.textContent += linha.texto.charAt(letraAtual);

    letraAtual++;

    setTimeout(digitarLinha, 35);

  } else {

    elementoAtual.classList.remove("cursor");

    linhaAtual++;
    letraAtual = 0;

    setTimeout(digitarLinha, 400);

  }
}

digitarLinha();