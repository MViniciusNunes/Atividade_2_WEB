let jogadaJogador = prompt("Jogador 1, escolha pedra, papel ou tesoura:");

let num = Math.floor(Math.random() * 3); // Gerar um número aleatório entre 0 e 2

let jogadaComputador;

if (num === 0) {
    jogadaComputador = "pedra";
} else if (num === 1) {
    jogadaComputador = "papel";
} else {
    jogadaComputador = "tesoura";
}

console.log("Jogada do computador: " + jogadaComputador);

if (jogadaJogador === jogadaComputador) {
    alert("Empate!");
} else if ((jogadaJogador === "pedra" && jogadaComputador === "tesoura") ||
           (jogadaJogador === "papel" && jogadaComputador === "pedra") ||
           (jogadaJogador === "tesoura" && jogadaComputador === "papel")) {
    alert("Jogador 1 venceu!");
} else {
    alert("Computador venceu!");
}