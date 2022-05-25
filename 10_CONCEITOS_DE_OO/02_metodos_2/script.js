const cachorro = {
  raca: "SRD",
  uivar: function () {
    console.log("auuuuuuuuuuuu");
  },
  rosnar: function () {
    console.log("grrrrrr");
  },
  setRaca: function (raca) {
    this.raca = raca; // mesma coisa de cachorro.raca
  },
  getRaca: function () {
    return "A raça é " + this.raca;
  },
};

console.log(cachorro.raca);

cachorro.setRaca("Pastor Alemão");

console.log(cachorro.raca);

console.log(cachorro.getRaca());
