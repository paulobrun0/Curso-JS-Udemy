let pessoa = {
  nome: "Paulo",
  idade: 23,
  profissao: "AuxiliarAdm",
  hobbies: ["Video game", "Musculação", "MF"],
};

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
// console.log(pessoaTexto.nome);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);
