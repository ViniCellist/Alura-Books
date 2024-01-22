let books = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBooksFromAPI()
const insertElementBooks = document.getElementById('livros')

async function getBooksFromAPI() {
    const res = await fetch(endpointAPI)
    books = await res.json()

    console.table(books)
    showBooksInScreen(books)
}

function showBooksInScreen(bookList) {
    bookList.forEach(books => {
        insertElementBooks.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${books.imagem}" alt="${books.alt}" />
            <h2 class="livro__titulo">
                ${books.titulo}
            </h2>
            <p class="livro__descricao">${books.autor}</p>
            <p class="livro__preco" id="preco">R$${books.preco}</p>
            <div class="tags">
                <span class="tag">${books.categoria}</span>
            </div>
        </div>
        `
    })
}