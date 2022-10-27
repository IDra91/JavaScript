if(window.XMLHttpRequest){
    peticion = new XMLHttpRequest();

} else {
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}




// Aquí revisa que se haya entregado la información y se valida si lo encontró
    peticion.addEventListener("load",()=>{
        let respuesta;
        if(peticion.readyState == 4 && peticion.status == 200){
            respuesta = peticion.response
        } else{
            respuesta = "Lo siento, no se ha encontrado el recurso, MAQUINOLA";
        } console.log(respuesta);
    })
    peticion.open("GET","informacion.txt");
    peticion.send();

    
    /*
console.log(peticion)*/
/*
    peticion.addEventListener("readystatechange",()=>{
        console.log(peticion.readyState);
        console.log(peticion.response);
    })*/