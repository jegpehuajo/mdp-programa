//var opciones = [0,1,2];
//Opciones [piedra, papel, tijera]
var opciones = ["piedra.png", "papel.png", "tijera.png"];
let countJuego = 0;
let userJuego;
let maquinaJuego;

let inicial = document.querySelector("#inicial");

//random Math
const juegoInicial = (minimo, maximo) => {
  let numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
  return numero;
}

const juegoMaquina = () => {
  countJuego += 1;
  document.getElementById("cantidad").innerHTML = countJuego;
  let maquinaJuego =  juegoInicial(0,2);
  let init = document.querySelector("#init");
  let imagen = `<img class="img-150" src="${opciones[maquinaJuego]}" />`;
  
  let createDiv = document.createElement("div");
  createDiv.classList.add("row","bg-light", "p-2");

  createDiv.innerHTML = `
    <div class="col-4">${imagen}</div>
    <div class="col-4" id="user_${countJuego}"><button onclick="juegoUser(${countJuego})" class="btn btn-success">Jugar</button></div>
    <div class="col-4" id="result_${countJuego}"></div>
    `;
  init.after(createDiv);
  inicial.classList.add("d-none");
}

const juegoUser = (id) => {
  userJuego = juegoInicial(0,2);
  let imagen = `<img class="img-150" src="${opciones[userJuego]}" />`;
  let divUser = document.querySelector("#user_"+id);
  divUser.innerHTML = imagen;

  let result = document.querySelector("#result_"+id);
  result.innerHTML = validateJuego(userJuego,maquinaJuego);
  inicial.classList.remove("d-none");
}

const validateJuego = (user,maquina) => {
  //0: Piedra, 1: Papel, 2: Tijera.
  if(user == maquina) {
    return "Empate";
  }else if((user== 0 && maquina== 2) || (user== 1 && maquina== 0) || (user== 2 && maquina== 1)){
    return "Gana usuario";
  }else {
    return "Gana Maquina.";
  }
}