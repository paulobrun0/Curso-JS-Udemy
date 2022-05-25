function CNH(idade) {
  if (idade >= 18) {
    return "Você ja pode iniciar o processo para tirar sua CNH";
  } else {
    return "Você não tem idade suficente para dar início ao processo de tirar sua CNH";
  }
}

console.log(CNH(18));
console.log(CNH(17));
