function tratarErroELancar(erro) {
  //throw new Error('...')
  throw {
    nome: erro.nome,
    msg: erro.msg,
    date: new Date(),
  };
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("Final");
  }
}

const obj = { nome: "Renato" };
imprimirNomeGritado(obj);
