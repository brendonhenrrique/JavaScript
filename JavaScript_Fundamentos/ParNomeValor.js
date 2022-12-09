//Par Nome /Valor

const saudacao = 'Opa' // Contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //Contexto léxico 2
    return saudacao
}


//Objetos ~sao grupo alinhados de pares nome/valores
const cliente = {
    nome: 'Pedro',
    idade: 32,
    Peso: 90,
    endereco: {logradouro: 'Rua Muito legal',
    numero:123}
}
console.log(saudacao)
console.log(exec())
console.log(cliente)    