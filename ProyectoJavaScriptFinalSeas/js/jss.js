let isShow = false;
var x = 0;
let validacion1, validacion2, validacion3 = false;
//let validacionNumero = /^[0-9]{7,99}$/;

$(document).ready(()=>{ /*Fundamental siempre poner las funciones dentro de esto, y si es posible las variables para
                          evitar problemas con funciones que requieran uso de elementos del HTML que no se hayan cargado
                          o que no se hayan cargado correctamente. */
  //console.log("Pagina cargada");

  $("#showIndex").click(()=>{ //Abrir y cerrar el menú index
    if (!isShow){
      //console.log("no show");
      $("#menu-1").animate({left: '220px'}, 200); 
      isShow = true;
    } else {
      //console.log("show");
      $("#menu-1").animate({left: '0px'}, 200);
      isShow = false;
    }
    //console.log(isShow);
  });
 
//Codigo del slider

  // for next slide
  $('.btn-next').click(function(){
    x= (x<=300)?(x+100):0;
    $('figure').css('left', -x+'%');
  });


   // for prev slide
  $('.btn-prev').click(function(){
    x= (x>=100)?(x-100):400;
    $('figure').css('left', -x+'%');
  });

//Codigo del formulario
  $("#enviarForm").click(()=>{
    console.log("funciona");
    validacion1 = verificarNombApellido(document.formulario.nombApe.value);
    validacion2 = verificarEdad(document.formulario.edad.value);
    validacion3 = verificarCodigoPostal(document.formulario.codePostal.value);

    if(!validacion1)
      $("#eNombre").css("visibility", "visible");
    else
      $("#eNombre").css("visibility", "hidden");
    
    if(!validacion2)
      $("#eEdad").css("visibility", "visible");
    else
      $("#eEdad").css("visibility", "hidden");

    if(!validacion3)
      $("#eCodePostal").css("visibility", "visible");
    else
      $("#eCodePostal").css("visibility", "hidden");
      
    console.log(`valor de validacion 1: ${validacion1}`);
    console.log(`valor de validacion 2: ${validacion2}`);
    console.log(`valor de validacion 3: ${validacion3}`);

    if(validacion1 && validacion2 && validacion3){
      console.log("Todos los datos son validos, procedemos a enviarlos");
      $("#msgSuccess").css("visibility", "visible");
      document.formulario.reset();
    } else {
      $("#msgSuccess").css("visibility", "hidden");
    }
  });
});

$("#btn-cerrar").click(()=>{
  $("#eNombre").css("visibility", "hidden");
  $("#eEdad").css("visibility", "hidden");
  $("#eCodePostal").css("visibility", "hidden");
  $("#msgSuccess").css("visibility", "hidden");
  document.formulario.reset();
});

function verificarNombApellido(nombreApe){
  let expReg= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
  console.log(nombreApe.trim());
  if(nombreApe.trim() != "" && expReg.test(nombreApe.trim())){
    console.log("Nombre valido.");
    return true;
  } else
    return false;
}

function verificarEdad(edad){
  console.log(`Valor de la edad: ${edad}`);
  let expReg = /^[0-9]/;
  if(expReg.test(edad) && edad >= 0 && edad <= 120){
    console.log("Edad valida");
    return true;
  } else
    return false;
}

function verificarCodigoPostal(code){
  console.log(`Valor del codigo postal: ${code}`);
  console.log(`Tamano del valor de edad: ${code.length}`)
  let expReg = /^[0-9]/;
  if(expReg.test(code) && code.length == 5){
    console.log("Edad valida");
    return true;
  } else
    return false;
}


// para todos los radiobutton rating agregar un on change
const changeRating = document.querySelectorAll('input[name=rating]');
changeRating.forEach((radio) => {
  radio.addEventListener('change', getRating);
});

// buscar el radiobutton checked y armar el texto con el valor ( 0 - 5 )
function getRating() {
  let estrellas = document.querySelector('input[name=rating]:checked').value;
  document.getElementById("texto").innerHTML = (
    0 < estrellas ?
    estrellas + " estrella" + (1 < estrellas ? "s" : "") :
    "sin calificar"
  );

  
  // opcionalmente agregar un ajax para guardar el rating
}

var unit = document.getElementById("wrapper");

function moveMeX() {
  unit.style.marginLeft = "130px";

}

function moveMeY() {
  unit.style.marginTop = "130px";

}
