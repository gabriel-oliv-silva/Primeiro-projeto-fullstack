function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.getElementById(pageId).style.display = 'block';
}
function mostrarFalha(msg) {
  const alerta = document.getElementById("minha-falha");
  alerta.textContent = msg;
  alerta.style.display = "block";
  setTimeout(() => alerta.style.display = "none", 3000); // desaparece em 3s
}
function mostrarMensagem(msg) {
  const alerta = document.getElementById("minha-mensagem");
  alerta.textContent = msg;
  alerta.style.display = "block";
  setTimeout(() => alerta.style.display = "none", 3000); // desaparece em 3s
}

