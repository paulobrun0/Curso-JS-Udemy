const calculadora = {
  somar: function (x, y) {
    return x + y;
  },
  subtrair: function (x, y) {
    return x - y;
  },
  multiplicar: function (x, y) {
    return x * y;
  },
  dividir: function (x, y) {
    return x / y;
  },
};

console.log(calculadora.somar(9, 1)); // 10
console.log(calculadora.subtrair(1, 1)); // 0
console.log(calculadora.multiplicar(2, 3)); // 6
console.log(calculadora.dividir(10, 2)); // 5
