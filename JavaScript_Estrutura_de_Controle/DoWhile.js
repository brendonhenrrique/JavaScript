function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao // somente iniciada a variável, sem valor inicial!!  SÓ NA ESTRUTURA Do/While

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log('Opção escolgida foi ' + opcao + '.')
} while (opcao != -1)

console.log('Até a próxima!')