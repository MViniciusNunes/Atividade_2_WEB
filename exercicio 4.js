let numero = prompt("Digite o tamanho do triangulo:");

for (let i = 1; i <= numero; i++) {
    let linha = "*";
    for (let j = 1; j < i; j++) {
        linha += "*";
    }
    console.log(linha);
}