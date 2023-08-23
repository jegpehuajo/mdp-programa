//var opciones = [0,1,2];
//Opciones [piedra, papel, tijera]
var opciones = ["piedra.png", "papel.png", "tijera.png"];
let countJuego = 0;

let inicial = document.querySelector("#inicial");

//random Math
const juegoInicial = (minimo, maximo) => {
  let numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
  return numero;
}

const juegoMaquina = () => {
  countJuego = 1;
  let number =  juegoInicial(0,2);
  let init = document.querySelector("#init");
  let imagen = `<img class="img-150" src="${opciones[number]}" />`;
  
  let createDiv = document.createElement("div");
  createDiv.classList.add("row","bg-light","text-white", "p-2");

  createDiv.innerHTML = `
    <div class="col-4">${imagen}</div>
    <div class="col-4" id="user_${countJuego}"><button onclick="juegoUser(${countJuego})" class="btn btn-success">Jugar</button></div>
    <div class="col-4" id="result_${countJuego}"></div>
    `;
  init.after(createDiv);
  inicial.classList.add("d-none");
}

const juegoUser = (id) => {
  let number = juegoInicial(0,2);
  let imagen = `<img class="img-150" src="${opciones[number]}" />`;
  let divUser = document.querySelector("#user_"+id);
  divUser.innerHTML = imagen;

  inicial.classList.remove("d-none");
}