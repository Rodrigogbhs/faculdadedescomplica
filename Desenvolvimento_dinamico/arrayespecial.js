var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = numeros.filter((item) => item % 2 == 0);
console.log(resultado);

var numerosFiltrados = nuemros.filter(function (valor) {
    return valor > 5;
});

conseole.log(numerosFiltrados);

function buscarValores(valor) {
    return valor < 5;
}
