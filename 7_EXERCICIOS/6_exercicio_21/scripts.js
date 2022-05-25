function verificaTipo(tipo) {
  if (tipo === Number) {
    console.log(`${tipo} é um Number`);
  } else if (tipo == true || tipo == false) {
    console.log(`${tipo} é um  Bolean`);
  } else {
    console.log(`${tipo} é um  String`);
  }
}

verificaTipo(1);
verificaTipo(true);
verificaTipo("Olá");

function verificaTipo2(tipo) {
  if (typeof tipo === "number") {
    console.log(`${tipo} é um Number`);
  } else if (typeof tipo === "boolean") {
    console.log(`${tipo} é um  Bolean`);
  } else {
    console.log(`${tipo} é um  String`);
  }
}

verificaTipo2(11);
verificaTipo2(false);
verificaTipo2("Mundo!");
