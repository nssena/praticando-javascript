//Código para testar se o nome da fruta que a criança escolheu começa com a letra sorteada.
//No final, informa quantas pessoas perderam na rodada.

const letra = "l"
const frutas = ["mamão", "laranja", "limão", "abacaxi", "morango", "maçã"]

let perdedores = 0;

for (let palavra of frutas) {
    if (palavra[0] !== letra) {
        perdedores++
    }
}

console.log(`${perdedores} crianças perderam.`)