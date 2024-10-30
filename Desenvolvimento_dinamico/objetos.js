y//forma de crior objeto

const pessoa = {
    nome: "Luiz",
    sobrenome: "Silva",
};
console.log(pessoa["sobrenome"]);

const funcionario = new Object();
funcionario.nome = "Cleiton";
funcionario.sobrenome = "Silva";

console.log(funcionario.nome);
