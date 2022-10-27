const contenedor = document.querySelector(".flex-container");
let contador = 0;
document.querySelector(".send-button").value = "COMPRAR";

function crearLlave(nombre, modelo, precio){
	contador++;
	img = "<img src='llave.png'>"
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3<br>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`
	return[img,nombre,modelo,precio];
}
let documentFragment = document.createDocumentFragment();
const changeHidden = (number)=>{
	document.querySelector(".key-data").value = number;
}
for (var i = 1; i<=20; i++) {
	
	let modeloRandom = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*10+30);
	let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom);
	let div = document.createElement("DIV");
	div.addEventListener("click",()=>{changeHidden(modeloRandom)});
	div.tabIndex = i;
	div.classList.add(`item-${i}`,`flex-item`);
	div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
	documentFragment.appendChild(div);
}

	contenedor.appendChild(documentFragment)
/*
for (var i = 0; i<20; i++) {
	
	let modeloRandom = Math.random()*10000;
	let precioRandom = Math.random()*10+30;
	let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom);
	let div = document.createElement("DIV");
	div.classList.add(`item-${i}`,`flex-item`);
	div.innerHTML = llave;
	contenedor.innerHTML += llave; 
}
*/

/*crearLlave("Llave 1","modelo X","33");

contenedor.innerHTML = llave[0] + llave[1] + llave[2];*/