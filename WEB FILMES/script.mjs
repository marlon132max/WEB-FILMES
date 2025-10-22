

//TELA DE LOGIN


const email = document.getElementById("email");
const senha = document.getElementById("senha");
const entrarBtn = document.getElementById("entrarBtn");
const form = document.getElementById("loginForm");

// Inicialmente, desabilita o botão
entrarBtn.disabled = true;

// Ativa o botão somente quando os campos estiverem preenchidos
function validarCampos() {
  if (email.value.trim() !== "" && senha.value.trim() !== "") {
    entrarBtn.disabled = false;
  } else {
    entrarBtn.disabled = true;
  }
}

email.addEventListener("input", validarCampos);
senha.addEventListener("input", validarCampos);

// Quando o formulário for enviado
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita recarregar a página (agora funciona!)

  // Verifica se os campos estão preenchidos
  if (email.value.trim() !== "" && senha.value.trim() !== "") {
    alert("alma recebida com sucesso! "); // Adicione um feedback
    window.location.href = "index.html"; // Redireciona para o início
  } else {
    // Isso é um fallback caso o usuário burle o botão desabilitado
    alert("Por favor, preencha todos os campos.");
  }
});




