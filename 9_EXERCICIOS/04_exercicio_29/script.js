let onibus = {
  rodas: 8,
  limitePassageiros: 40,
  portas: 2,
};

onibus.janela = 20;
delete onibus.rodas;

console.log(onibus.janela);
console.log(onibus.rodas);
console.log(onibus);
