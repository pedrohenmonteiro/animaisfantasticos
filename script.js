// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll("a[href^='#'");

console.log(links);

function handleLink(event) {
  event.preventDefault();
  links.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

links.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
const todosElementos = document.querySelectorAll("body *");
console.log(todosElementos);
// ao clique mostre exatamente quais elementos estão sendo clicados
function evento(event) {
  event.target.remove();
}

todosElementos.forEach(() => {
  addEventListener("click", evento);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

const body = document.querySelector("body");

body.style.fontSize === "100%";
function handleKey(event) {
  if (event.key === "t") {
    if (body.style.fontSize !== "150%") {
      body.style.fontSize = "150%";
    } else {
      body.style.fontSize = "100%";
    }
  }
}

addEventListener("keydown", handleKey);
