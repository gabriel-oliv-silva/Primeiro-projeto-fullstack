function initUpdateSection() {
  const form = document.getElementById("IDAtualizar");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const id = parseInt(document.getElementById("cod").value);
    const nome = document.getElementById("nomeAtualizar").value.trim();
    const idade = parseInt(document.getElementById("idadeAtualizar").value);

    try {
      // validações
      if (isNaN(idade) || idade < 1 || idade > 115 || idade % 1 !== 0) {
        throw new Error("Idade inválida");
      }

      if (nome.length < 3 || nome.length > 50 || !isNaN(nome)) {
        throw new Error("Nome inválido");
      }

      const user = { id, nome, idade };

      fetch(`http://localhost:8080/User/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Erro ao salvar usuário - Erro: " + response.status
            );
          }
          return response.json();
        })
        .then((data) => {
          mostrarMensagem(`Usuário ${data.nome} atualizado com sucesso!`);
          setTimeout(() => window.location.reload(), 2000);
        })
        .catch((error) => {
          mostrarFalha("Falha ao atualizar usuário: " + error.message);
        })
        .finally(() => {
          formulario.reset();
        });
    } catch (error) {
      mostrarFalha("Ocorreu um erro: " + error.message);
    }
  });
}

initUpdateSection();
