class Apps{
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}

	abrir(){
		if((this.iniciada == false)&&(this.instalada == true)){
			alert("La aplicación se ha iniciado");
			this.iniciada = true;
		} else{
			alert("Ha ocurrido un error");
		}
	}
	cerrar(){
		if((this.iniciada == true)&&(this.instalada == true)){
			alert("La aplicación se ha cerrado");
			this.iniciada = false;
		}else{
			alert("Ha ocurrido un error");
		}
	}
	instalar(){
		if(this.instalada == false){
			alert("La aplicación se ha instalado");
			this.instalada = true;
		}else{
			alert("La app ya estaba instalada");
		}
	}
	desinstalar(){
		if(this.instalada == true){
			alert("La aplicación se ha desinstalado");
			this.instalada == false;
		}else{
			alert("Ha ocurrido un error");
		}
	}
	appInfo(){
		return `
		Descargas: <b>${this.descargas}</b></br>
		Puntuación: <b>${this.puntuacion}</b></br>
		Peso: <b>${this.peso}</b></br>
		`
	}
}

app1 = new Apps(1400,"5 Estrellas","45 MBs");
app2 = new Apps(2200,"5 Estrellas","90 MBs");
app3 = new Apps(1500,"3 Estrellas","10 MBs");
app4 = new Apps(3300,"4 Estrellas","100 MBs");


	document.write(`${app1.appInfo()}<br>
					${app2.appInfo()}<br>
					${app3.appInfo()}<br>
					${app4.appInfo()}<br>`);



/* app.instalar();
 app.abrir();
app.cerrar();
app.desinstalar();
*/ 