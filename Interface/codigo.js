const input = document.querySelector(".input-prueba");
const contenedor = document.querySelector(".seleccionado");
/*const img = document.querySelector(".img-prueba");
img.addEventListener("error",()=>{
    console.log("Ha sucedido un error");
})*/
/*
addEventListener("load",()=>{
    console.log("Ha cargado el sitio");
})*/
/*
addEventListener("beforeunload",()=>{
    console.log("Te estás por ir del sitio");
    alert("Holiiiii :B");
})*/
/*
input.addEventListener("select",(evnt)=>{
    let start = evnt.target.selectionStart;
    let end = evnt.target.selectionEnd;
    let textoCompleto = input.value;
    contenedor.innerHTML = textoCompleto.substring(start,end);
})*/

input.addEventListener("keyup",(evnt)=>{
    let tecla = evnt.key;
    nuevoContenido = `La última tecla presionada fue: <b>${tecla}</b>`;
    contenedor.innerHTML = nuevoContenido;
})