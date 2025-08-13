//Forma 1: criar um array já atribuindo os valores diretamente
var dadosAluno = ['Joao', 12345, true];
console.log(dadosAluno); //imprime todo o array = ['Joao', 12345, true]
console.log(dadosAluno[0]); //imprime somente o valor do índice pedido

//Forma 2: apenas declara o array
var curso = [];
curso[0] = 'BFD'; //adiciona o valor depois de ter declarado a variável
curso[1] = 123456;
curso[3] = false;
console.log(curso); // irá printar: [ 'BFD', 123456, <1 empty item>, false ], empty item pois não atribui nenhum valor a esse bloco do array

//Forma 3:
var notas = new Array(7.5, 8.9);
console.log(notas); //irá printar : [ 7.5, 8.9 ]

//Forma 4: colocar todos os elementos dentro dele com o mesmo tipo
var objetos = [];