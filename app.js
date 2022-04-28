let correctas = [1,3];
let opcion_elegida = [];
let cantidad_correctas = 0;

const BtnEnviar1 = document.getElementById("submit_1");
const BtnEnviar2 = document.getElementById("submit_2");

//Ver respuestas
BtnEnviar1.addEventListener("click", function () {
  alert("la respuesta es El grupo Nectar");
});

BtnEnviar2.addEventListener("click", function () {
  alert("la respuesta es Queen");
});

//Ver resultado
const BtnRespuesta = document.getElementById("BtnResultado");
BtnRespuesta.addEventListener("click", corregir); 

function respuesta(num_pregunta, seleccionada) {
  opcion_elegida[num_pregunta] = seleccionada.value;
}

const radios = document.querySelectorAll("input[type='radio']");

for (i = 0; i < radios.length; i++) {
  const radio = radios[i];
 
    radio.addEventListener("click", function (event) {

    // capturamos el atributo name del input
    const pregunta = event.target.getAttribute("name"); 
    
    //si pregunta es igual a p0, llamo a la función respuesta
    if (pregunta == "p0") { 
      respuesta(0, event.target);
    }
    if (pregunta == "p1") {
      respuesta(1, event.target);
    }
  });
}

function corregir() {
  cantidad_correctas = 0;
  for (i = 0; i < correctas.length; i++) {
    if (correctas[i] == opcion_elegida[i]) {
      cantidad_correctas++;
    }
  }
  document.getElementById("resultado").innerHTML = cantidad_correctas;
}
