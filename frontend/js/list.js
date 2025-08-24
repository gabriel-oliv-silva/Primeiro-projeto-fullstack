function initUpdateSectionList() {

fetch("http://localhost:8080/User")
  .then(response => response.json())
  .then(data => {     
    const lista = document.getElementById("listaUser");

    lista.innerHTML = ""; // limpa a lista antes
    data.forEach(user => {
      const li = document.createElement("li");
      if(user.idade > 1)
      li.textContent = `${user.nome} - ${user.idade} anos (Id: ${user.id})`;
      else
      li.textContent = `${user.nome} - ${user.idade} ano (Id: ${user.id})`;
      lista.appendChild(li);
    });
  })
  .catch(error => console.error("Erro ao buscar usuários:", error));
}
initUpdateSectionList();