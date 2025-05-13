// Seleciona os elementos do html.
const input = document.getElementById("new-item")
const addBtn = document.getElementById("add-btn")
const list = document.querySelector("ul")
const removedPopUp = document.querySelector(".removed-alert")

// Captura o c;ique no botão de adicionar item.
addBtn.onclick = (event) => {
  event.preventDefault()

  const newItem = input.value

  if (input.value === "") {
    alert("Digite o item a ser adicionado na lista.")
    return
  } 
  
  addToList(newItem)
}

// Cria e adiciona o novo item na lista.
function addToList(newItem) {
  const item = document.createElement("li")
  item.classList.add("list-item")

  const checkboxWrapper = document.createElement("div")
  checkboxWrapper.classList.add("checkbox-wrapper")

  const checkboxImg = document.createElement("div")
  checkboxImg.classList.add("checkbox-image")

  const checkboxInput = document.createElement("input")
  checkboxInput.setAttribute("type", "checkbox")

  checkboxWrapper.append(checkboxImg, checkboxInput)

  const itemName = document.createElement("p")
  itemName.textContent = newItem

  const deleteIcon = document.createElement("img")
  deleteIcon.setAttribute("src","assets/icons/delete.svg")
  deleteIcon.classList.add("delete")

  item.append(checkboxWrapper, itemName, deleteIcon)

  list.append(item)

  inputClear()
}

// Captura o clique no ícone de deletar para excluir o item da lista.
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const item = event.target.closest(".list-item")

    item.remove()

    removedMessage()

  } else {return}
})

// Mostra o aviso de item removido por 3 segundos.
function removedMessage() {
  removedPopUp.classList.remove("hide")

  setTimeout(() => {
    removedPopUp.classList.add("hide")
  }, 3000);
}

// Limpa o input.
inputClear = () => input.value = ""
