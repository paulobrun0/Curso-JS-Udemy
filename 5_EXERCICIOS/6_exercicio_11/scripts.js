let idade = 18;
let temCNH = "Sim";

if (idade >= 18 && temCNH === "Sim") {
  console.log("Você tem permissão para dirigir");
} else if (idade >= 18 && temCNH === "Não") {
  console.log(
    "Você não tem CNH, mas ja pode dar entrada no proceso para obte-la"
  );
} else {
  console.log("Você não tem permissão para dirigir");
}
