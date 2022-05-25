function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(5, 4, 8);

console.log(`O valor de mult é ${mult}`);

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    return "Você pode Dirigir";
  } else {
    return "Você não pode Dirigir";
  }
}

console.log(podeDirigir(19, true));
console.log(podeDirigir(25, true));
console.log(podeDirigir(44, 0)); // 0 é false
console.log(podeDirigir(19, 1)); // 1 é true
console.log(podeDirigir(17, false));
