// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'nuncaCambia' ;

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 35;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(vuelve) {
  // "Return" la string provista: str
  // Tu código:
    return vuelve;

}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var sumatoria = x + y 
    return sumatoria;
}

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  var quitando = x-y
    return quitando;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var mult = x*y 
    return mult;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var div = x/y 
    return div;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if(x = y){
    return true;
  }

  return false;
  }


  // Devuelve "true" si las dos cadenas tienen la misma longitud
  // De lo contrario, devuelve "falso"
  // Tu código:

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos cadenas tienen la misma longitud
  // De lo contrario, devuelve "falso"
  // Tu código:
 if (str1.length === str2.length){
    return true;{
  }
 
  return false;
  
  }



function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90){
    return true;
  }
  return false;
  }



function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
    if(num > 50){
    return true;
  }
  return false;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var res = x % y
    return res;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var par = num % 2 == 0
    return par;
}


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var impar = num % 2 == 1
    return impar;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var cua = Math.pow(num,2) 
    return cua;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  var cubo = Math.pow(num,3) 
    return cubo;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
var elvr = Math.pow(num,exponent) 
    return elvr;

}

function redondearNumero(num) {
  // Redondea "num" y devuélvelo
  
  var aca =Math.round(num)
    return aca;

}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y devuélvelo
  // Tu código:
  var aca =Math.ceil(num) 
    return aca;
}

function agregarSimboloExclamacion(nombre) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  var nombre = "hello world"
  console.log(nombre + "!");
    return r
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var x = nombre
  var y = apellido
  var completo = nombre + " " + apellido
    return completo

}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // var"Martin" -> "Hola Martin!"
   var nombre = "Martin"
  console.log('hola' + nombre + "!");
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código 
    var a = alto
    var b = ancho
    var area = a * b
      return area;
}


// No modificar nada debajo de esta línea
// --------------------------------

módulo . exportaciones  =  {
  nuevaString ,
  nuevoNum ,
  nuevoBool ,
  nuevaResta ,
  nuevaMultiplicacion ,
  nuevoModulo ,
  devolverString ,
  tienenMismaLongitud ,
  sonIguales ,
  menosQueNoventa ,
  mayorQueCincuenta ,
  SUMA ,
  resta ,
  división ,
  Multiplica ,
  obtenerResto ,
  esPar ,
  esImpar ,
  elevarAlCuadrado ,
  elevarAlCubo ,
  elevar ,
  redondearNumero ,
  redondearHaciaArriba ,
  agregarSimboloExclamacion ,
  combinarNombres ,
  obtenerSaludo ,
  obtenerAreaRectangulo ,
  } ;