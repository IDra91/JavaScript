const sendButton = document.getElementById('sndnota');

sendButton.addEventListener("click",()=>{
    let resultado, mensaje;
    try {
      prevRes =  parseInt(document.getElementById('nota').value) ;
      if(isNaN(prevRes)){
            throw "Gracioso";
      }
      mensaje = definirMensaje(prevRes);
      resultado = verificarAprobacion(8,8,prevRes);
    } catch (error) {
        resultado = "¿Te estás haciendo el chistoso?";
        mensaje = "He descubierto que has intentado meterte en el sitio"; 
    }
    abrirModal(resultado,mensaje);
}); 
const definirMensaje = (pr) =>{
    let resultado;
    switch(pr){
        case 1: resultado = "No podes ser tan malo XD";
        break;
        case 2: resultado = "Sos pésimo chavo";
        break;
        case 3: resultado = "Bastante lamentable";
        break;
        case 4: resultado = "Empezamos mal";
        break;
        case 5: resultado = "Dos que tripas";
        break;
        case 6: resultado = "Bien";
        break;
        case 7: resultado = "Muy bien";
        break;
        case 8: resultado = "Realmente bien";
        break;
        case 9: resultado = "Excelente";
        break;
        case 10: resultado = "Wunderbar :3";
        break;
        default: resultado = null;
     
    }   return resultado;
}

const verificarAprobacion = (nota1, nota2, prevRes)=>{

    promedio = (nota1 + nota2 + prevRes)/3;
    if (promedio >= 7){
        return "<span class='green'>APROBADO MAQUINOLA</span>";
    } return "<span class='red'>DESAPROBADO MAQUINOLA</span>"
}
const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";

}

