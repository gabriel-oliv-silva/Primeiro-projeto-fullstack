async function deletarUs(id) {
  try {
    id = Number(id); // converte para número

    if (isNaN(id) || id % 1 !== 0) {
      throw new Error("Id inválido");
    }

    const response = await fetch(`http://localhost:8080/User/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          `Usuário ${id} não encontrado! (Erro ${response.status})`
        );        
      } else {
        throw new Error(`Erro ao deletar usuário: ${response.status}`);
      }
    }

    mostrarMensagem(`Usuário ${id} deletado com sucesso!`);
    setTimeout(() => window.location.reload(), 2000);
    
  } catch (error) {
    mostrarFalha(error.message);
  }
}

function initUpdateSection() {
  const deletar = document.getElementById("IDDeletar");

  deletar.addEventListener("submit", (event) => {
    event.preventDefault();

    const id = document.getElementById("code").value;
    deletarUs(id);
  });
}

initUpdateSection();
