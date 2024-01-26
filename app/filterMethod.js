const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks() {
    const elementBtn = document.getElementById(this.id);
    const category = elementBtn.value;
    let filteredBooks = category == 'disponivel' ? filterAvailability() : filterCategory(category);
    showBooksInScreen(filteredBooks);
    if (category == 'disponivel') {
        const totalValue = calculateTotal(filteredBooks);
        showTotalAvailableBooks(totalValue);
    };
};

function filterCategory(category) {
    return books.filter(book => book.categoria == category);
}

function filterAvailability() {
    return books.filter(book => book.quantidade > 0);
};

function showTotalAvailableBooks(totalValue) {
    elementTotalAvailableBooks.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
        </div>
    `
};