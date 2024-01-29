let books = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBooksFromAPI();

async function getBooksFromAPI() {
    const res = await fetch(endpointAPI);
    books = await res.json();
    let discountBooks = applyDiscount(books);
    showBooksInScreen(discountBooks);
};

