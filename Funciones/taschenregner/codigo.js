const sumar = (num1, num2)=>{
	return parseInt(num1) + parseInt(num2)
}

const restar = (num1, num2)=>{
	return parseInt(num1) - parseInt(num2)

}

const multiplicar = (num1, num2)=>{
	return parseInt(num1) * parseInt(num2)
}

const dividir = (num1, num2)=>{
	return parseInt(num1) / parseInt(num2)
}

alert("¿Qué operación quieres realizar?");
operacion = prompt("1: Suma, 2: Resta, 3: Multiplicación, 4: División");
if(operacion == 1){
	let numero1 = prompt("Ingrese el primer número");
	let numero2 = prompt("Ingrese el segundo número");
	resultado = sumar(numero1, numero2);
	alert(`Tu resultado es ${resultado}`);
}else if(operacion == 2){
	let numero1 = prompt("Ingrese el primer número");
	let numero2 = prompt("Ingrese el segundo número");
	resultado = restar(numero1, numero2);
	alert(`Tu resultado es ${resultado}`);
}else if(operacion == 3){
	let numero1 = prompt("Ingrese el primer número");
	let numero2 = prompt("Ingrese el segundo número");
	resultado = multiplicar(numero1, numero2);
	alert(`Tu resultado es ${resultado}`);
}else if(operacion == 4){
	let numero1 = prompt("Ingrese el primer número");
	let numero2 = prompt("Ingrese el segundo número");
	resultado = dividir(numero1, numero2);
	alert(`Tu resultado es ${resultado}`);
}else {
	alert("Te equivocaste de número, MAQUINOLA");
}