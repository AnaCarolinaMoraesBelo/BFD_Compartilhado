// objetivo de uma função = definir um bloco de código reutilizavel- modelarização
//function <nome> (<parametros>) { ...}
function soma(x, y) {
    var x = 8,
      y = 3;
    var soma = x + y;
    console.log(soma);
  }
  soma(); //chamar a função
  
  
  
  function sub(x, y) {
    let sub = x - y;
    return sub;  // retorna a irformação
  }
  sub (8, 3);
  // chamar a função 
  var print;
  print = soma (8, 3);
  console.log(print);
  
  
  print = sub(10, sub (9,7));
  console.log(print);
  print = sub(10, sub(print, 1));
  console.log(print);
  
  
  
  function multi (k, j){
    let multi = k * j;
    return multi;
  }
  
  console.log(multi(2,1));
  
  print = multi(2, 1);
  console.log(print);
  
  function divid(o, p){
    let divid = o / p;
  return divid;
  }
  
  console.log(divid(10,2));
  
  print = divid(10, 2);
  console.log(print);
  
  // quatro maneiras diferentes de fazer: 
  // 1- const subtrair = function (x,y) {return x-y;}
  //console.log(subtrair(3,5));
  
  //2-const dividir = (x,y) => { return x/y;} 
  // ´´=>´´ arrow function
  //console.log(dividir (3,5));
  
  //3- const multiplicar = (x,y) => {return x*y;}
  //console.log(multiplicar(3,5)); aa
  