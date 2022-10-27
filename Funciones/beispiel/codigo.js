	let free = false;

	const validarCliente = (tiempo) =>{
		let edad = prompt("¿Cuál es tu edad?");
		if (edad > 18){
			if(tiempo>=2 && tiempo<7 && !free){
				alert("Podés pasar gratis por ser el primero");
				free = true;
			}else{
				alert(`Ya que son las ${tiempo}:00HS Puedes pasar, pero tienes que pagar`);
			}
		}else{
			alert("Bloqueado por ser menor de edad, maquinola");
		}
	}

	validarCliente(23);
	validarCliente(24);
	validarCliente(0.2);
	validarCliente(12);
	validarCliente(5);
	validarCliente(3);