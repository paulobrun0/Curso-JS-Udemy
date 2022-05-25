let a = 10; // escopo global

function multiplicar(x, y) {
  let a = x * y; // escopo da função

  if (a > 10) {
    let a = 0; // escopo da o if dentro da função

    a++;
    console.log(a);
  }

  console.log(a);
}

console.log(a);

multiplicar(3, 7);
