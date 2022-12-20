function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('livro', 255.52))
console.log(criarProduto('Notebook', 2155.99))