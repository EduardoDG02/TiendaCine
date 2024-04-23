Bars = document.querySelector(".bars");
Bars.onclick = function() {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};



/*JS CREACION DE PUBLICACIONES ADMIN*/

let pcmov = document.getElementById("pcmov"); /*picture Movie*/ 
let tlmov = document.getElementById("tlmov"); /*Title Movie */
let desmov = document.getElementById("desmov"); /*Description Movie*/
let prmov = document.getElementById("prmov"); /*Price Movie */
let sendinfo = document.getElementById("sendinfo"); /*Button Send*/
let divAlert = document.getElementById("divAlert"); /*Error, some field is empty */ 
let divAlert2 = document.getElementById("divAlert2"); /*movie post Succesfull */

divAlert.style.display = "none";
divAlert2.style.display = "none";

function limpiarCampos() {
  tlmov.value = "";
  desmov.value = "";
  prmov.value = "";
  pcmov.value = "";
}

function mostrarAlertaConRetraso(mensaje, tipo, delay) {
  setTimeout(function() {
      mostrarAlerta(mensaje, tipo);
  }, delay);
}

function mostrarAlerta(mensaje, tipo) {
  divAlert.innerHTML = mensaje;
  divAlert.style.display = "block";
  if (tipo === "exito") {
      divAlert.classList.remove("alert-danger");
      divAlert.classList.add("alert-success");
  } else {
      divAlert.classList.remove("alert-success");
      divAlert.classList.add("alert-danger");
  }
}


sendinfo.addEventListener("click", function(event) {
  event.preventDefault();

  let 

})