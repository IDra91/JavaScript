class celular{
	constructor(color, peso, rdp, rdc, ram){
		this.color = color;
		this.peso = peso;
		this.resolucionDePantalla = rdp;
		this.resolucionDeCamara = rdc;
		this.ram = ram; 
		this.encendido = false;
	}
	prender(){
		if (this.encendido == false){
			alert("El celular está prendido");
			this.encendido = true;
		} else{
			alert("El celular ya está apagado");
			this.encendido = false;
		}
	}

	reiniciar(){
		if(this.encendido == true){
			alert("Reiniciando el celular");
		}else{
			alert("El celular ya estaba apagado");
		}
	}
	tomarFotos(){
		alert(`Foto tomada con una resolución de: ${this.resolucionDeCamara}`);
	}
	grabarVideo(){
		alert(`Grabando video con una resolución de: ${this.resolucionDeCamara}`);
	}
	mostrarInfo(){
		return `
		Color: <b>${this.color}</b></br>
		Peso: <b>${this.peso}</b></br>
		Resolución de Pantalla: <b>${this.resolucionDePantalla}</b></br>
		Resolución de Cámara: <b>${this.resolucionDeCamara}</b></br>
		Memoria Ram: <b>${this.ram}</b></br>
		`
	}
}

class celularGamaAlta extends celular{
	constructor(color, peso, rdp, rdc, ram, rdce){
		super(color, peso, rdp, rdc, ram);
		this.resolucionDeCamaraExtra = rdce;
	}
	grabarVideoLento(){
		alert("Estás grabando en cámara lenta");
	}

	reconocimientoFacial(){
		alert("Vamos a iniciar un reconocimiento facial");
	}
	mobileInfoGA(){
		return this.mostrarInfo() + `Resolución de Cámara trasera: ${this.resolucionDeCamaraExtra}</b><br>`
	}
}

celular1 = new celular("rojo","150grs","6 pulg","full HD","6GBs");

celular2 = new celular("azul","200grs","8 pulg","full HD","2GBs");
celular3 = new celular("negro","300grs","10 pulg","4K","4GBs");
celular4 = new celular("blanco","200grs","6 pulg","full HD","6GBs");
celularGA = new celularGamaAlta("rojo","120grs","5.2 pulg","4K", "16 GBs","HD");
celularGA2 = new celularGamaAlta("negro","200grs","18 pulg","4K","8 GBs", "Ultra HD");


document.write(`${celular1.mostrarInfo()}<br>
	${celular2.mostrarInfo()}<br>
	${celular3.mostrarInfo()}<br>
	${celular4.mostrarInfo()}<br>
	${celularGA.mobileInfoGA()}<br>
	${celularGA2.mobileInfoGA()}<br>`);
celularGA.grabarVideoLento();
celularGA2.reconocimientoFacial();

// celular1.prender();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.prender();