const obtenerInformacion = (materia)=>{
	materias={
		fisica: ["Sr. Arturo","Pedro","Maria","Carlos","Kimberly"],
		matematica: ["Sr. Mario","Pedro","Armando","Kristen"],
		programacion: ["Sra. Lady","Gloria","Carlos","Pedro","Sara"],
		quimica: ["Sra. Bertha","Maria","Carlos","Maria","Sara","Pedro"],
	}
	if(materias[materia] !== undefined){
		return [materias[materia],materia,materias];
	}else{
		return materias;
	}
}
const mostrarInformacion =(materia)=>{
	let informacion = obtenerInformacion(materia);


	if(informacion !== false){
		let profesor = informacion[0][0];
		let alumnos = informacion[0]
		alumnos.shift();

		document.write(`El profesor de <b>${informacion[1]}</b>: <b style='color:red'>${profesor}</b><br>`);

		document.write(`Los alumnos de <b>${informacion[1]}</b>: <b style='color:blue'>${alumnos}</b><br>`);
	}
}

const cantidadDeClases =(alumno)=>{
	let cantidadTotal = 0;
	let clasesPresentes =[];
	let informacion = obtenerInformacion();
	for(info in informacion){
		if(informacion[info].includes(alumno)){
			cantidadTotal++;
			clasesPresentes.push(" "+ info);
		}
	} return `<b style='color:red'>${alumno} </b> está en esta cantidad de clases: <b> ${cantidadTotal}</b><br>
	Y está cursando las clases: <b style='color:green'>${clasesPresentes}</b><br><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("Pedro"));