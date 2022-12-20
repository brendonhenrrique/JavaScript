function triangulo(largura, altura, comprimento){
    const triangulo = largura * altura * comprimento
    if(triangulo =>(largura = altura = comprimento)) {
        console.log('O triângulo é Acutângulo')
    } else if (triangulo =>(largura = altura >= comprimento)){
        console.log('O triângulo é Isóceles')
    }
     else {
        return triangulo
    }
}

console.log(triangulo(24, 24, 24))
console.log(triangulo(24, 24, 30))
