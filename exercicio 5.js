let quantidade = prompt("Digite a quantidade de termos:");
quantidade = parseInt(quantidade);

let num = "1";
let soma = 0;
let serie = []; 

for (let i = 1; i <= quantidade; i++) {
    let valorAtual = Number(num);
    soma += valorAtual;
    
    serie.push(num); 
    
    num += "1"; 
}

console.log(serie.join(" + "));
console.log("A soma é: " + soma.toLocaleString('pt-BR'));