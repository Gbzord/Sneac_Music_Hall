// Mostrar ou Esconder senha
document.querySelectorAll(".toggle-password").forEach(button => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    input.type = input.type === "password" ? "text" : "password";
    button.textContent = input.type === "password" ? "👁️" : "🙈";
  });
});

// Validação Login
const loginForm = document.getElementById("login-form");
if (loginForm) {
  const email = document.getElementById("login-email");
  const senha = document.getElementById("login-password");
  const btn = document.getElementById("login-btn");

  loginForm.addEventListener("input", () => {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    const senhaValida = senha.value.trim().length > 0;

    document.getElementById("login-email-error").textContent = emailValido ? "" : "E-mail inválido";
    document.getElementById("login-password-error").textContent = senhaValida ? "" : "Senha obrigatória";

    btn.disabled = !(emailValido && senhaValida);
  });

  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Login realizado com sucesso!");
  });
}

// Validação Cadastro
const cadastroForm = document.getElementById("cadastro-form");
if (cadastroForm) {
  const email = document.getElementById("email");
  const confirmarEmail = document.getElementById("confirmar-email");
  const senha = document.getElementById("senha");
  const confirmarSenha = document.getElementById("confirmar-senha");
  const btn = document.getElementById("cadastro-btn");

  cadastroForm.addEventListener("input", () => {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    const emailsIguais = email.value === confirmarEmail.value;
    const senhasIguais = senha.value === confirmarSenha.value;
    const senhaValida = senha.value.length >= 6;

    document.getElementById("email-erro").textContent = emailsIguais && emailValido ? "" : "E-mails inválidos ou diferentes";
    document.getElementById("senha-erro").textContent = senhasIguais && senhaValida ? "" : "Senhas diferentes ou muito curtas";

    btn.disabled = !(emailValido && emailsIguais && senhaValida && senhasIguais);
  });

  cadastroForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
  });
}
