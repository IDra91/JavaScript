class Calculadora{
	constructor(){

		}
	sumar (num1, num2){
	return parseInt(num1) + parseInt(num2);
	}

	restar (num1, num2){
	return parseInt(num1) - parseInt(num2);

	}

	multiplicar (num1, num2){
	return parseInt(num1) * parseInt(num2);
	}

	dividir (num1, num2){
	return parseInt(num1) / parseInt(num2);
	}

	potencia(num, exp){
	return parseInt(num)**parseInt(exp);
	}
	logartimo(num){
	return Math.log(num);
	}
	seno(num){
	return Math.sin(num);
	}
	coseno(num){
	return Math.cos(num);
	}
	tangente(num){
	return Math.tan(num);
	}
	raizCuadrada(num){
	return Math.sqrt(num);
	}
	raizCubica(num){
		return Math.cbrt(num);
	}

}

const calcu = new Calculadora();
alert("¿Qué operación quieres realizar?");
operacion = prompt("1: Suma, 2: Resta, 3: Multiplicación, 4: División, 5: Potencia, 6: Logaritmo, 7: seno, 8: coseno, 9: tangente, 10: raíz Cuadrada, 11: raíz cúbica");
if(operacion == 1){
	let numero1 = prompt("Ingrese el primer número");
	let numero2 = prompt("Ingrese el segundo número");
	resultado = calcu.sumar(numero1, numero2);
	alert(`Tu resultado es ${resultado}`);
}else if(operacion == 2){
	let numero1 = prompt("Ingrese el primer número");
	let numero2 = prompt("Ingrese el segundo número");
	resultado = calcu.restar(numero1, numero2);
	alert(`Tu resultado es ${resultado}`);
}else if(operacion == 3){
	let numero1 = prompt("Ingrese el primer número");
	let numero2 = prompt("Ingrese el segundo número");
	resultado = calcu.multiplicar(numero1, numero2);
	alert(`Tu resultado es ${resultado}`);
}else if(operacion == 4){
	let numero1 = prompt("Ingrese el primer número");
	let numero2 = prompt("Ingrese el segundo número");
	resultado = calcu.dividir(numero1, numero2);
	alert(`Tu resultado es ${resultado}`);
}else if(operacion == 5){
	let numero1 = prompt("Ingrese un número");
	let numero2 = prompt("Ingrese la potencia");
	resultado = calcu.potencia(numero1, numero2);
	alert(`Tu resultado es ${resultado}`);
}else if(operacion == 6){
	let numero1 = prompt("Ingrese un número");
	resultado = calcu.logartimo(numero1);
	alert(`Tu resultado es ${resultado}`);
}else if(operacion == 7){
	let numero1 = prompt("Ingrese un número");
	resultado = calcu.seno(numero1);
	alert(`Tu resultado es ${resultado}`);
}else if(operacion == 8){
	let numero1 = prompt("Ingrese un número");
	resultado = calcu.coseno(numero1);
	alert(`Tu resultado es ${resultado}`);
}else if(operacion == 9){
	let numero1 = prompt("Ingrese un número");
	resultado = calcu.tangente(numero1);
	alert(`Tu resultado es ${resultado}`);
}else if(operacion == 10){
	let numero1 = prompt("Ingrese un número");
	resultado = calcu.raizCuadrada(numero1);
	alert(`Tu resultado es ${resultado}`);
}else if(operacion == 11){
	let numero1 = prompt("Ingrese un número");
	resultado = calcu.raizCubica(numero1);
	alert(`Tu resultado es ${resultado}`);
else {
	alert("Te equivocaste de número, MAQUINOLA");
}