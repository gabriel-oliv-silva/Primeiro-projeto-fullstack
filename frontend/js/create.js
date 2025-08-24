function initUpdateSection() {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    try {
      if (
        isNaN(idade) ||
        idade < 1 ||
        idade % 1 !== 0 ||
        idade.length > 3 ||
        idade > 115
      ) {
        throw new Error("Idade inválida");
      }
      if (nome.length < 3 || nome.length > 50 || !isNaN(nome)) {
        throw new Error("Nome inválido");
      }

      const usuario = {
        nome,
        idade,
      };

      fetch("http://localhost:8080/User", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario),
      })
        .then((response) => {
          if (!response.ok) {
            mostrarFalha("Erro ao salvar usuário");
          }
          else {
            mostrarMensagem(`Usuário ${nome} salvo com sucesso!`);
            setTimeout(() => window.location.reload(), 2000);

          }

          return response.json;
        })
        .catch((error) => {
          console.error(error);
          mostrarFalha("Falha ao salvar usuário.");
        })
        .finally(() => {
          formulario.reset();
        });
    } catch (erro) {
      mostrarFalha("Ocorreu um erro: " + erro.message);
      return;
    }
  });
}

initUpdateSection();
