let materias ={
	fisica:[90,6,4,"fisica"],
	matematica:[100,7,3,"matematica"],
	biologia:[95,8,2,"biologia"],
	programacion:[68,6,4,"programacion"],
	logica:[80,9,1,"logica"],
	calculo:[75,6,4,"calculo"],
	sociologia:[70,7,4,"sociologia"],
	quimica:[98,9,1,"quimica"],
	bdd:[50,8,2,"Base de datos"]
}
//promedio de asistencia, promedio de la clase y trabajos entregados 

const asistencia =()=>{
	for(materia in materias){
		let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajos = materias[materia][2];
		if(asistencias>=90){
			console.log(materias[materia][3]);
			console.log("%c   Asistencias","color:green");
		}else{
			console.log(materias[materia][3]);
			console.log("%c   Inasistencias","color:red");
		}
		if(promedio>=7){
			console.log("%c   Promedio en orden","color:green");
		}else{
			console.log("%c   Promedio desaprobado","color:red");
		}
		if(trabajos>=3){
			console.log("%c   Trabajos prácticos en orden","color:green");
		}else{
			console.log("%c   Faltan trabajos prácticos","color:red");
		}
	}
}


asistencia();