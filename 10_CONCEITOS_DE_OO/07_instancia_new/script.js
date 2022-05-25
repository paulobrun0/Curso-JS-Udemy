function cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function () {
    console.log("Auuuu");
  };
}

let husky = new cachorro("husky", 4, "cinza");

console.log(husky);

husky.uivar();
