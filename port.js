// dark mode
function toggleDarkMode() {
    const body = document.querySelector("body");
    body.classList.toggle("light");
  }

  const botao = document.querySelector("#toggle");
botao.addEventListener("click", toggleDarkMode);
// dark mode

// Rolagem lenta ao clicar

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Obtém o elemento de destino do link
    const target = document.querySelector(this.getAttribute('href'));

    // Usa o método scrollIntoView com o comportamento de rolagem suave
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Rolagem lenta ao clicar



// Efeito de digitação automatica
var i = 0;
var txt = 'Vinícius Cezar!'; 
var speed = 150; // Defina a velocidade de digitação em milissegundos

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("vini").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
  typeWriter();
};
//Efeito de digitação automatica






document.body.classList.add("blur");
document.body.classList.remove("blur");

const contactBtn = document.getElementById("contact");

contactBtn.addEventListener("click", function() {
  // criar o elemento div para o aviso
  const alertDiv = document.createElement("div");
  alertDiv.style.width = "500px";
  alertDiv.style.height = "200px";
  alertDiv.style.backgroundColor = document.body.classList.contains("light") ? "#fff" : "#131413";
  alertDiv.style.border = "1px solid #53b653";
  alertDiv.style.borderRadius = "10px";
  alertDiv.style.position = "fixed";
  alertDiv.style.top = "50%";
  alertDiv.style.left = "50%";
  alertDiv.style.transform = "translate(-50%, -50%)";
  alertDiv.style.zIndex = "9999";

  // criar o título e o parágrafo das informações de contato
  const title = document.createElement("h2");
  title.innerText = "Contatos";
  title.style.textAlign = "center"; // centraliza o título
  title.style.paddingTop = "2rem";
  title.style.color = "#53b653"; // adiciona a cor #53b653 ao título
  alertDiv.appendChild(title);

  const contactInfo = document.createElement("p");
  contactInfo.innerText = "Telefone: (43)99123-3515\nE-mail: viniciuscezarvp@hotmail.com";
  contactInfo.style.fontSize = "25px"
  contactInfo.style.textAlign = "center"; // centraliza o parágrafo
  contactInfo.style.color = document.body.classList.contains('light') ? "black" : "#53b653"; // define a cor do texto de acordo com o tema
  alertDiv.appendChild(contactInfo);

  // adiciona o botão "Fechar"
  const closeButton = document.createElement("button");
  closeButton.innerText = "X";
  closeButton.style.position = "absolute";
  closeButton.style.bottom = "10px";
  closeButton.style.right = "50%";
  closeButton.style.borderRadius = "20%";
  closeButton.style.backgroundColor = "#fff";
  if (document.body.classList.contains("light")) {
    closeButton.style.backgroundColor = "#fff";
    closeButton.style.border = "2px solid #000";
    closeButton.style.color = "##fff";
  } else {
    closeButton.style.backgroundColor = "#131413";
    closeButton.style.border = "2px solid #131413";
    closeButton.style.color = "#53b653";
  }
  closeButton.style.border = "2px transparent";
  closeButton.style.cursor = "pointer";
  closeButton.addEventListener("click", function() {
    // remover o aviso
    document.body.removeChild(alertDiv);
    // reativar a rolagem da página
    document.body.classList.remove("no-scroll");
    // habilitar o botão de contato novamente
    contactBtn.removeAttribute("disabled");
  });
  alertDiv.appendChild(closeButton);

  // desabilitar o botão de contato
  contactBtn.setAttribute("disabled", "disabled");

  // desabilitar a rolagem da página
  document.body.classList.add("no-scroll");

  // adicionar o aviso na página
  document.body.appendChild(alertDiv);

  // adicionar evento onclose na janela de aviso
  window.addEventListener('onclose', function() {
    contactBtn.removeAttribute("disabled");
  });
});

contactBtn.addEventListener("click", function() {
  // ...

  // adicionar a classe "blur" para adicionar o efeito de borrão
  document.body.classList.add("blur");

  // adicionar o aviso na página
  document.body.appendChild(alertDiv);

  // ...

  closeButton.addEventListener("click", function() {
    // ...
  });
});









