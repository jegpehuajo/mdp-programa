// Tabla de multiplicar x 10

let numero = prompt("Ingrese un numero");

if (numero == 0) {
  document.write("Este numero es cero y cualquier numero multiplicado por cero es cero.")
} else {
  document.write("********************");
  document.write("La tabla de multiplicar de: ",numero);
  document.write("********************");
  for (i=1;i<=10;i++) {
    document.write(numero," x ", i, " = ", numero * i);
  }
}