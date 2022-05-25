function cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
}
cachorro.prototype.uivar = function () {
  console.log("Auuuuu");
};

cachorro.prototype.latir = function () {
  console.log("Au Au");
};

let husky = new cachorro("husky", 4, "cinza");

husky.uivar();
husky.latir();
