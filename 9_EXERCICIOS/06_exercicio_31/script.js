let arr = ["Paulo", 23, "idade", "time", 123, 5];
let numeros = [1, 2, 3, 4];

function verificaArr(arg) {
  if (arg.length >= 5) {
    console.log("Muitos elementos");
  } else {
    console.log("Poucos elementos");
  }
}

verificaArr(arr);
verificaArr(numeros);
