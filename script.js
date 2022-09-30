// function adicionaItem(event){
//     event.preventDefault()

//     const mainContainer = document.getElementById("container")

//     const novoArticle = document.createElement("article")
    
//     novoArticle.innerHTML = "Olá, Isa!"

//     mainContainer.appendChild(novoArticle)
    
//     novoArticle.insertAdjacentElement('beforeend')
// }

function adicionaItem(event) {
    event.preventDefault()
    const mainContainer = document.getElementById("container")
    const novoArticle = document.createElement("article")
    novoArticle.onclick = function removeItem(event) {
        event.target.remove()
    }
    novoArticle.classList.add("item")
    novoArticle.innerHTML = "Olá, Isa!"
    mainContainer.appendChild(novoArticle)
    novoArticle.insertAdjacentElement("beforeend")
}

function removeItem(event) {
    event.target.remove()
}