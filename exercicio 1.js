let num = Math.floor(Math.random() * 21); // Gerar um número aleatório entre 0 e 20
console.log(num); // Sairá algo entre 0 e 10

numUsuario = document.getElementById("numero");
numUsuario.addEventListener("change", function() {
    if (numUsuario.value == num) {
        alert("Parabéns, você acertou!");
    } else {
        alert("Tente novamente!");
    }
});