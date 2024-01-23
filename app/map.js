function applyDiscount(books){
    const discount = 0.3
    discountBooks = books.map(books => {
        return {...books, preco: books.preco - (books.preco * discount)}
    })

    return discountBooks
}