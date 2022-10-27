//parrafo = document.getElementById("parrafo");
//parrafo = document.getElementsByTagName("p");
//parrafo = document.querySelector(".oparra");
//parrado = document.querySelectorAll(".oparra");
//document.write(parrafo);
//document.write(parrafo[0]);
//document.write(parrafo);
// const rangoDeEdad = document.querySelector(".rangoEdad");
// document.write(rangoDeEdad.getAttribute("type"));
// rangoDeEdad.setAttribute("type","password");
// rangoDeEdad.removeAttribute("type");
const titulo = document.querySelector(".titulo");
//titulo.setAttribute("contentEditable","true");
//titulo.setAttribute("dir","rtl");
//titulo.setAttribute("hidden","false");
//titulo.removeAttribute("hidden");
//titulo.setAttribute("tabindex","0");
titulo.setAttribute("title","mi mamá me mima xD");

//const input = document.querySelector(".input-normal");
const inputf = document.querySelector(".input-file");
//document.write(input);
//document.write(input.className);
//document.write(input.value); WICHTIG!!!!!
//input.type = "color";
inputf.accept = "image/png";
const input = document.querySelector(".text");
input.required = "required";
input.placeholder = "ven a darme amor";
input.minLength = "10";
const input2 = document.querySelector(".titulo2");
input2.style.backgroundColor = "#48e";
//input2.classList.add("grande")
// Let valor = titulo.classList.item(0); muestra el elemento de la lista de clases. 
// document.write(valor);
let valor = titulo.classList.toggle("text");
//document.write(valor);
// let valor = titulo.classList.replace("text","mi-mami");
const contenedor = document.querySelector(".contenedor");
//const item = document.createElement("LI");
const textoDelItem = document.createTextNode("Este es un texto de LI");
const fragmento = document.createDocumentFragment();
//item.innerHTML = textoDelItem;
//item.appendChild(textoDelItem);
/*
for(i=0;i<20;i++){
	const item = document.createElement("LI");
	item.innerHTML = "Este es un elemento de la lista"
	fragmento.appendChild(item);
}
contenedor.appendChild(fragmento);
console.log(fragmento);*/

const primerHijo = contenedor.firstElementChild;
const ultimoHijo = contenedor.lastElementChild;
const hijos = contenedor.childNodes;
const kinder = contenedor.children;
//console.log(primerHijo);
//console.log(ultimoHijo);
//console.log(hijos);
//hijos.forEach(hijo => console.log(hijo));
//console.log(kinder);
/*
for(kind of kinder){
	console.log(kind);
}*/

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Neues Titel"
h2_antiguo = document.querySelector(".h2");
//contenedor.replaceChild(h2_nuevo,h2_antiguo);
//contenedor.removeChild(h2_antiguo);
let respuesta = contenedor.hasChildNodes();
let respuesta2 = h2_antiguo.parentElement;
/*
if(respuesta){
	document.write("El elemento tiene hijos");
} else{
	document.write("El elemento no tiene hijos");
}
console.log(respuesta2);*/
//let respuesta3 = h2_antiguo.nextElementSibling;
//let respuesta4 = h2_antiguo.lastElementSibling;
//console.log(respuesta3);
//console.log(respuesta4);

const div = document.querySelector(".div-3");
console.log(div.closest(".div"));


