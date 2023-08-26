const produtos = [89, 147, 56, 2, 21]
let menorValor = produtos[0]
let valorFinal = 0
let valorComDesconto = 0
let desconto = false

//Descobre o menor valor
for (let valor of produtos) {
    if (valor < menorValor) {
    menorValor = valor}
}
// Soma os valores
for (let i = 0; i < produtos.length; i++) {
        valorFinal += produtos[i];
    }
// Decide se vai dar desconto
if (produtos.length >= 5) {
    desconto = true
}
//Calcula o resultado final
if (desconto) {
    valorComDesconto = valorFinal - menorValor;
    console.log(valorComDesconto)
} else {
    console.log(valorFinal)
}
