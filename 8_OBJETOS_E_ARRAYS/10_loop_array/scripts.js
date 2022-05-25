let nomes = ["Paulo", "Pedro", "José"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

let i = 0;

while (i < nomes.length) {
  console.log(nomes[i]);
  i++;
}

let cont = 0;
do {
  console.log(nomes[cont]);
  cont++;
} while (cont < nomes.length);
