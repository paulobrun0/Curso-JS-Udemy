let pessoa = {
  nome: "Paulo",
  idade: 23,
  profissao: "Auxiliar Adm",
};

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);

console.log(pessoa);
