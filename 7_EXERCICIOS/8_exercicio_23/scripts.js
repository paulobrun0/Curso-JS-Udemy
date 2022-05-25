function verificaQuantidadeDeLetras(palavra) {
  if (palavra.length > 10) {
    return "Texto muito grande";
  } else {
    return "Texto dentro do limite";
  }
}

console.log(verificaQuantidadeDeLetras("12345678901"));
console.log(verificaQuantidadeDeLetras("1234567890"));
