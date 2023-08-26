const produtos = [89, 147, 56, 66, 21]
let menorValor = produtos[0]
let valorFinal = 0
let valorComDesconto = 0
let desconto = false

for (let valor of produtos) {
    if (valor < menorValor) {
    menorValor = valor}
}

for (let i = 0; i < produtos.length; i++) {
    if (produtos.length >= 5) {
        valorFinal += produtos[i];
        valorComDesconto = valorFinal - menorValor;
        desconto = true
        } else {
        valorFinal += produtos[i];
    }
}

if (desconto) {
    console.log(valorComDesconto)
} else {
    console.log(valorFinal)
}
