const button = document.querySelector(".button");
const contenedor = document.querySelector(".contenedor-1");
const contenedor1 = document.querySelector(".contenedor-2");
const input = document.querySelector(".input-prueba");
/*
button.addEventListener("click",saludar);*/
/*
function saludar (){
    alert("hola");
}*/
/*
function saludar(){
    alert("hola");
    button.removeEventListener("click",saludar);
}*/
/* Objeto elemento
button.addEventListener("click", (pito)=>{
    console.log(pito.target);
}); */
/* EVENT FLOW
button.addEventListener("click", (evt)=>{
    alert("di click en un botón");
});
contenedor.addEventListener("click",(evt)=>{
    alert("di click en el contenedor rojo");
}, true);
contenedor1.addEventListener("click",(evt)=>{
    alert("di click en el contenedor azul");
});*/


/* EVENT Doble click
button.addEventListener("dblclick",(evt)=>{
    alert("di click en un botón");
});*/

/*
contenedor1.addEventListener("mouseover",(evt)=>{
    alert("Me moví tiburoncín U JAJA");
})*/
/*
contenedor.addEventListener("mouseout",(evt)=>{
    alert("Mira como me muevo :v");
})*/



input.addEventListener("keydown",(evnt)=>{
    console.log("La tecla fue presionada");
});
input.addEventListener("keypress",(evnt)=>{
    console.log("Un usuario presionó una tecla");
});
input.addEventListener("keyup",(evnt)=>{
    console.log("Una tecla fue soltada")
});
