const insertElementBooks = document.getElementById('livros')

function showBooksInScreen(bookList) {
    insertElementBooks.innerHTML = ''
    bookList.forEach(books => {
        insertElementBooks.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${books.imagem}" alt="${books.alt}" />
            <h2 class="livro__titulo">
                ${books.titulo}
            </h2>
            <p class="livro__descricao">${books.autor}</p>
            <p class="livro__preco" id="preco">R$${books.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${books.categoria}</span>
            </div>
        </div>
        `
    })
}