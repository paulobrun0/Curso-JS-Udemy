let nome = "Paulo";

for (let i = 0; i < 10; i = i + 1) {
  if (i == 3) {
    nome = "Bruno";
  }

  if (i == 5 && nome == "Bruno") {
    console.log("O nome é Bruno, pode parar");
    break;
  }

  console.log(i);
}
